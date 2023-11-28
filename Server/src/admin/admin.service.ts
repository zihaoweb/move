import { ClassSerializerInterceptor, HttpException, HttpStatus, Injectable } from '@nestjs/common';
// import { HttpService } from '@nestjs/axios';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminEntity } from './admin.entity';
import { AdminPcEntity } from './adminpc.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { RepairerEntity } from "src/repairer/repairer.entity"
import { HistoryEntity } from "src/history/history.entity"
import { BuildingEntity } from 'src/options/building.entity'
import { hashSync, compareSync } from 'bcryptjs';
import axios from 'axios'

@Injectable()
export class AdminService {

  constructor(
    // private HttpServer: HttpServer,
    private readonly jwtService: JwtService,
    @InjectRepository(AdminEntity)
    private readonly AdminModel: Repository<AdminEntity>,
    @InjectRepository(AdminPcEntity)
    private readonly AdminPcModel: Repository<AdminPcEntity>,
    @InjectRepository(RepairerEntity)
    private readonly RepairerModel: Repository<RepairerEntity>,
    @InjectRepository(HistoryEntity)
    private readonly HistoryModel: Repository<HistoryEntity>,
    @InjectRepository(BuildingEntity)
    private readonly BuildingModel: Repository<BuildingEntity>
  ) { }

  async login(params) {
    let url =
      `https://api.weixin.qq.com/sns/jscode2session?appid=wx6302ea276b6886d1&secret=28ef44e2d9c0f2c5d71b5898145a967d&js_code=${params.code}&grant_type=authorization_code`;
    const {data} = await axios.get(url);
    const u = await this.AdminModel.findOne({
      where: { openid: data.openid }
    })
    const info = {
      openid: data.openid, nickName: params.nickName,
      avatarUrl: params.avatarUrl
    };
    if (!u) {
      await this.AdminModel.save(info)
      await this.RepairerModel.save(info)
      return {
        token: this.jwtService.sign({
          openid: data.openid,
          nickName: params.nickName,
        }),
        data,
      }
    } else {
      const { nickName, openid, admin } = u;
      data['admin'] = admin
      return {
        token: this.jwtService.sign({
          openid,
          nickName,
        }),
        data,
      };
    }
  }

  async loginpc(params) {
    const { uname, pwd } = params
    const u = await this.AdminPcModel.findOne({
      where: { uname }
    })
    if (!u) {
      throw new HttpException('该用户不存在！',
        HttpStatus.BAD_REQUEST);
    }
    const bool = compareSync(pwd, u.pwd)
    if (bool) {
      const { uname, pwd } = u;
      return {
        token: this.jwtService.sign({
          uname,
          pwd
        })
      }
    } else {
      throw new HttpException({
        message: '账号或密码错误'
      }, HttpStatus.BAD_REQUEST)
    }
  }

  async register(params) {
    console.log(params)
    const { uname, pwd } = params
    const u = await this.AdminPcModel.findOne({
      where: { uname }
    })
    if (u) {
      throw new HttpException({ message: '用户已经存在' }, HttpStatus.BAD_REQUEST);
    }
    params.pwd = hashSync(pwd);
    await this.AdminPcModel.save(params)
    return true
  }
  // 查询所有楼宇
  async findAll() {
    const list = await this.BuildingModel.find()
    return list
  }
  // 添加楼宇
  async addBuilding(body) {
    const { name } = body
    const live = await this.BuildingModel.findOne({
      where: { name }
    })
    if (!live) {
      await this.BuildingModel.save(body)
    }
  }
  // 删除楼宇
  async delBuilding(body) {
    const { id } = body
    const live = await this.BuildingModel.findOne({
      where: { id }
    })
    const res = await this.BuildingModel.delete(live)
    if (res.affected == 1) {
      return true
    } else {
      throw new Error('异常')
    }
  }
  // 查询所有维修记录并分页
  async searchAll(body) {
    const { page, limit } = body
    const allCount = await this.HistoryModel.count() //总条数
    const alllist = await this.HistoryModel.find({
      skip: (page - 1) * limit,
      take: limit
    })
    return {
      totalCount: allCount,
      list: alllist,
      page,
      limit
    }
  }

  async verify() {
    return true
  }

  async selectRepairer() {
    const repairerList = await this.RepairerModel.find()
    return repairerList
  }

  async dispatch(params) {
    const { uuid, openid } = params
    const res = await this.HistoryModel.update({ uuid }, {
      beloneTo: openid,
      dispatched: '1',
      dispatch: '0'
    })
    if (res.affected == 1) {
      return true;
    } else {
      throw new Error('更新失败');
    }
  }

  async rejectItem(query) {
    const { uuid, reason } = query
    const res = await this.HistoryModel.update({ uuid }, {
      reject: '1',
      dispatch: '0',
      rejectreason: reason
    })
    if (res.affected == 1) {
      return true;
    } else {
      throw new Error('更新失败');
    }
  }
}
