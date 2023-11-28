import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity({name:'building'})
export class BuildingEntity{
  @PrimaryGeneratedColumn()
  id:number

  @Column()
  name:string

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createAt:Date
  
}