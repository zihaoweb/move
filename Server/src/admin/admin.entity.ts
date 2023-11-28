import { Column, Entity,  PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user_info' })
export class AdminEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({default:'0'}) // 1表示管理员 
  admin:string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ comment: '用户名', unique:true })
  openid: string; 

  @Column({ comment: '用户昵称' })
  nickName: string;

  @Column({ nullable: true, comment: '用户头像' })
  avatarUrl: string;
}
