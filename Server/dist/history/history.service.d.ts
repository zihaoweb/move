import { Repository } from 'typeorm';
import { HistoryEntity } from './history.entity';
export declare class HistoryService {
    private readonly HistoryModel;
    constructor(HistoryModel: Repository<HistoryEntity>);
    history(req: any): Promise<HistoryEntity[]>;
    addRepair(params: any, req: any): Promise<boolean>;
    repaired(req: any): Promise<HistoryEntity[]>;
    awaitRepair(req: any): Promise<HistoryEntity[]>;
    adminHistory(req: any): Promise<HistoryEntity[]>;
    reject(req: any): Promise<HistoryEntity[]>;
    recall(req: any): Promise<HistoryEntity[]>;
    callback(params: any): Promise<boolean>;
}
