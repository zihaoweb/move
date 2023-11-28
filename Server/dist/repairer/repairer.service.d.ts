import { HistoryEntity } from 'src/history/history.entity';
import { Repository } from 'typeorm';
export declare class RepairerService {
    private readonly HistoryModel;
    constructor(HistoryModel: Repository<HistoryEntity>);
    repairerAwaitRepair(payload: any): Promise<HistoryEntity[]>;
    repairerRepairered(payload: any): Promise<HistoryEntity[]>;
    statement(params: any): Promise<boolean>;
}
