import { Module, } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminEntity } from './admin.entity';
import { AdminPcEntity } from './adminpc.entity';
import { RepairerEntity } from 'src/repairer/repairer.entity'
import { JwtModule } from '@nestjs/jwt';
import { expiresIn, secret } from 'src/config/jwt';
import { HistoryEntity } from 'src/history/history.entity';
import { BuildingEntity } from '../options/building.entity'

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([AdminEntity, RepairerEntity, HistoryEntity, AdminPcEntity, BuildingEntity]),
    JwtModule.register({
      secret,
      signOptions: { expiresIn },
    }),
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule { }
