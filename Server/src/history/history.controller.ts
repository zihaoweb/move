import { Controller, Get, Post, Body, Req, Res } from '@nestjs/common';
import { HistoryService } from './history.service';
import { CreateHistoryDto } from './dto/create-history.dto';

@Controller('user')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  // 待派单和已驳回
  @Get('history')
  history(@Req() req){
    return this.historyService.history(req)
  }

  // 待维修
  @Get('awaitrepair')
  awaitRepair(@Req() req){
    return this.historyService.awaitRepair(req)
  }

  // 已维修
  @Get('repaired')
  repaired(@Req() req){
    return this.historyService.repaired(req)
  }

  // 已撤回
  @Get('recall')
  recall(@Req() req){
    return this.historyService.recall(req)
  }

  // 管理员待派单
  @Get('adminhistory')
  adminHistory(@Req() req){
    return this.historyService.adminHistory(req)
  }

  // 已驳回
  @Get('reject')
  reject(@Req() req){
    return this.historyService.reject(req)
  }

  // 添加报修记录
  @Post('add')
  addRepair(@Body() params, @Req() req){
    return this.historyService.addRepair(params, req)
  }

  // 撤回此单
  @Post('callback')
  callback(@Body() params){
    return this.historyService.callback(params)
  }



 

}
