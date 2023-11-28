import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataFormat } from 'src/utils/date';
import { Brackets, Repository } from 'typeorm';
import { CreateHistoryDto } from './dto/create-history.dto';
import { HistoryEntity } from './history.entity';

@Injectable()
export class HistoryService {
  constructor(
    @InjectRepository(HistoryEntity)
    private readonly HistoryModel: Repository<HistoryEntity>,
  ) {}

  async history(req) {
    const { openid } = req.payload;
    const res = this.HistoryModel.createQueryBuilder('repair')
      .where('repair.openid = :openid', { openid })
      .andWhere(
        new Brackets((qb) => {
          qb.where('repair.dispatch = :dispatch', { dispatch: '1' }).orWhere(
            'repair.reject = :reject',
            { reject: '1' },
          );
        }),
      )
      .orderBy('repair.dispatch','DESC')
    const list = await res.getMany();
    return list
  }

  async addRepair(params, req) {
    const { openid } = req.payload;
    params.openid = openid;
    console.log('@@')
    await this.HistoryModel.save(params);
    return true
  }

  async repaired(req){
    const { openid } = req.payload;
    const res = this.HistoryModel.createQueryBuilder('repair')
      .where('repair.openid = :openid', { openid })
      .andWhere('repair.repaired = :repaired', {repaired:'1'})
    const list = await res.getMany();
    return list
  }

  async awaitRepair(req){
    const { openid } = req.payload;
    const res = this.HistoryModel.createQueryBuilder('repair')
      .where('repair.openid = :openid', { openid })
      .andWhere('repair.dispatched = :dispatched', {dispatched:'1'})
    const list = await res.getMany();
    return list
  }

  async adminHistory(req){
    const { openid } = req.payload;
    const res = this.HistoryModel.createQueryBuilder('repair')
      .where('repair.openid = :openid', { openid })
      .andWhere("repair.dispatch = :dispatch", {dispatch: '1'})
    const list = await res.getMany();
    return list
  }

  async reject(req){
    const { openid } = req.payload;
    const res = this.HistoryModel.createQueryBuilder('repair')
      .where('repair.openid = :openid', { openid })
      .andWhere("repair.reject = :reject", {reject: '1'})
    const list = await res.getMany();
    return list
  }

  async recall(req){
    const { openid } = req.payload;
    const res = this.HistoryModel.createQueryBuilder('repair')
      .where('repair.openid = :openid', { openid })
      .andWhere('repair.recall = :recall', {recall:'1'})
    const list = await res.getMany();
    return list
  }

  async callback(params){
    const res = await this.HistoryModel.update(params, {
      recall: '1',
      dispatch: '0',
    });
    if (res.affected == 1) {
      return true;
    } else {
      throw new Error('更新失败');
    }
  }
}
