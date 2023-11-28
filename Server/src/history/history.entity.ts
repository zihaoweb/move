import { Entity, Column, PrimaryGeneratedColumn, Generated } from 'typeorm';
import {v4 as uuidv4} from 'uuid'

@Entity({ name: 'repair_history' })
export class HistoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @Generated('uuid')
  uuid: string = uuidv4();

  // 报修人的openid
  @Column()
  openid: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  // 待派单
  @Column({ default: '1' })
  dispatch: string;

  // 待维修
  @Column({ default: '0' })
  dispatched: string;

  // 已撤回 0未撤回 1已撤回
  @Column({ default: '0' })
  recall: string;

  // 已维修
  @Column({ default: '0' })
  repaired: string;

  // 已驳回 0表示未驳回，1表示已驳回
  @Column({ default: '0' })
  reject: string;

  // 驳回原因,100字以内
  @Column({ default: '' })
  rejectreason: string;

  // 报修人姓名
  @Column()
  name: string;

  // 报修人手机号
  @Column()
  phoneNum: string;

  // 报修区域
  @Column()
  reported: string;

  // 报修详细描述,100字以内
  @Column()
  desc: string;

  // 报修类型
  @Column()
  type: string;

  // 附加信息
  @Column()
  msg: string;

  // 属于哪一个报修师傅
  @Column({ default: '0' })
  beloneTo: string;
}
