import { AdminEntity } from './admin.entity';
import { AdminPcEntity } from './adminpc.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { RepairerEntity } from "src/repairer/repairer.entity";
import { HistoryEntity } from "src/history/history.entity";
import { BuildingEntity } from 'src/options/building.entity';
export declare class AdminService {
    private readonly jwtService;
    private readonly AdminModel;
    private readonly AdminPcModel;
    private readonly RepairerModel;
    private readonly HistoryModel;
    private readonly BuildingModel;
    constructor(jwtService: JwtService, AdminModel: Repository<AdminEntity>, AdminPcModel: Repository<AdminPcEntity>, RepairerModel: Repository<RepairerEntity>, HistoryModel: Repository<HistoryEntity>, BuildingModel: Repository<BuildingEntity>);
    login(params: any): Promise<{
        token: string;
        data: any;
    }>;
    loginpc(params: any): Promise<{
        token: string;
    }>;
    register(params: any): Promise<boolean>;
    findAll(): Promise<BuildingEntity[]>;
    addBuilding(body: any): Promise<void>;
    delBuilding(body: any): Promise<boolean>;
    searchAll(body: any): Promise<{
        totalCount: number;
        list: HistoryEntity[];
        page: any;
        limit: any;
    }>;
    verify(): Promise<boolean>;
    selectRepairer(): Promise<RepairerEntity[]>;
    dispatch(params: any): Promise<boolean>;
    rejectItem(query: any): Promise<boolean>;
}
