import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HistoryEntity } from 'src/history/history.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RepairerService {
  constructor(
    @InjectRepository(HistoryEntity)
    private readonly HistoryModel: Repository<HistoryEntity>,
  ) {}
  
  // 维修师傅待维修
  async repairerAwaitRepair(payload) {
    const { openid } = payload
    const res = this.HistoryModel.createQueryBuilder('repair')
    .where('repair.beloneTo = :beloneTo', {beloneTo:openid })
    .andWhere('repair.dispatched = :dispatched', {dispatched:'1'})
    const list = await res.getMany()
    return list
  }

  // 维修师傅已维修
  async repairerRepairered(payload){
    const { openid } = payload
    const res = this.HistoryModel.createQueryBuilder('repair')
    .where('repair.beloneTo = :beloneTo', {beloneTo:openid })
    .andWhere('repair.repaired = :repaired', {repaired:'1'})
    
    const list = await res.getMany()
    return list
  }

  // 维修师傅结单
  async statement(params){
    const { uuid } = params
    const res = await this.HistoryModel.update({uuid}, {
      dispatched:'0',
      repaired:'1'
    })
    if(res.affected == 1){
      return true
    }else{
      throw new Error('结单异常，请联系管理员')
    }
  }
}
