import { Column, Entity,  PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'repairer_info' })
export class RepairerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({default:'1'}) // 1表示维修师傅
  repairer:string;

  @Column({ comment: '用户名', unique:true })
  openid: string; 

  @Column({ comment: '用户昵称' })
  nickName: string;

  @Column({ nullable: true, comment: '用户头像' })
  avatarUrl: string;
}
