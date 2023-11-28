import { Column, Entity,  PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user_pc_info' })
export class AdminPcEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({default:'1'}) // 1表示管理员 
  admin:string;

  @Column({ comment: '用户名', unique:true })
  uname: string; 

  @Column({ comment: '密码' })
  pwd: string;
}
