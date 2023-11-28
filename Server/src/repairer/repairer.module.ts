import { Module } from '@nestjs/common';
import { RepairerService } from './repairer.service';
import { RepairerController } from './repairer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoryEntity } from 'src/history/history.entity';

@Module({
  imports:[TypeOrmModule.forFeature([HistoryEntity])],
  controllers: [RepairerController],
  providers: [RepairerService]
})
export class RepairerModule {}
