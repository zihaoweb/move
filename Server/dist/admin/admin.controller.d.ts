import { AdminService } from './admin.service';
import { LoginAdminDto } from './dto/login-admin.dto';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    login(params: LoginAdminDto): Promise<{
        token: string;
        data: any;
    }>;
    findAll(): Promise<import("../options/building.entity").BuildingEntity[]>;
    addBuilding(body: any): Promise<void>;
    delBuilding(body: any): Promise<boolean>;
    loginPc(params: any): Promise<{
        token: string;
    }>;
    register(params: any): Promise<boolean>;
    searchAll(body: any): Promise<{
        totalCount: number;
        list: import("../history/history.entity").HistoryEntity[];
        page: any;
        limit: any;
    }>;
    verify(): Promise<boolean>;
    dispatch(params: any): Promise<boolean>;
    selectRepairer(): Promise<import("../repairer/repairer.entity").RepairerEntity[]>;
    rejectItem(query: any): Promise<boolean>;
}
