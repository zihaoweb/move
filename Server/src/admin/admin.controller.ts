import { Controller, Get, Post, Body, Req, Query } from '@nestjs/common';
import { AdminService } from './admin.service';
import { LoginAdminDto } from './dto/login-admin.dto';

@Controller('admin')
export class AdminController {
  constructor(
    private readonly adminService: AdminService
  ) { }


  // app登录方法
  @Post('login')
  login(@Body() params: LoginAdminDto) {
    return this.adminService.login(params)
  }

  // 获取楼宇信息
  @Get('findbuilding')
  findAll(){
    return this.adminService.findAll()
  }
  
  // 添加楼宇信息
  @Post('addbuilding')
  addBuilding(@Body() body){
    return this.adminService.addBuilding(body)
  }

  @Post('delbuilding')
  delBuilding(@Body() body){
    return this.adminService.delBuilding(body)
  }

  // PC登录方法
  @Post('loginpc')
  loginPc(@Body() params) {
    return this.adminService.loginpc(params)
  }

  // PC注册方法
  @Post('register')
  register(@Body() params) {
    return this.adminService.register(params)
  }

  @Post('searchall')
  searchAll(@Body() body){
    return this.adminService.searchAll(body)
  }

  @Post('verify')
  verify() {
    return this.adminService.verify()
  }

  // 派单
  @Post('dispatch')
  dispatch(@Body() params) {
    return this.adminService.dispatch(params)
  }

  // 获取维修师傅列表
  @Get('selectrepairer')
  selectRepairer() {
    return this.adminService.selectRepairer()
  }

  @Get('rejectitem')
  rejectItem(@Query() query) {
    return this.adminService.rejectItem(query)
  }

}
