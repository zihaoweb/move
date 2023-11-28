import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from 'nestjs-config';
import { resolve } from 'path';
import { AdminModule } from './admin/admin.module';
import { HistoryModule } from './history/history.module';
import { RepairerModule } from './repairer/repairer.module';
import { OptionsModule } from './options/options.module'

@Module({
  imports: [
    ConfigModule.load(resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get('database'),
      inject: [ConfigService],
    }),
    AdminModule,
    HistoryModule,
    RepairerModule,
    OptionsModule
  ], 
  controllers: [],
  providers: [], 
})
export class AppModule {}
