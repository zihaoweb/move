import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm';
import { BuildingEntity } from './building.entity'

@Module({
  imports: [TypeOrmModule.forFeature([BuildingEntity])],
  controllers: [],
  providers: []
})

export class OptionsModule { }
