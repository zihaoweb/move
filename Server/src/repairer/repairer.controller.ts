import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { RepairerService } from './repairer.service';
import { CreateRepairerDto } from './dto/create-repairer.dto';

@Controller('repairer')
export class RepairerController {
  constructor(private readonly repairerService: RepairerService) { }

  // 维修师傅待维修页面
  @Get('repairerawaitrepair')
  repairerAwaitRepair(@Req() req) {
    return this.repairerService.repairerAwaitRepair(req.payload)
  }

  // 维修师傅已维修页面
  @Get('repairerrepairered')
  repairerRepairered(@Req() req) {
    return this.repairerService.repairerRepairered(req.payload)
  }

  // 维修师傅结单功能
  @Post('statement')
  statement(@Body() params) {
    return this.repairerService.statement(params)
  }
}
