import { RepairerService } from './repairer.service';
export declare class RepairerController {
    private readonly repairerService;
    constructor(repairerService: RepairerService);
    repairerAwaitRepair(req: any): Promise<import("../history/history.entity").HistoryEntity[]>;
    repairerRepairered(req: any): Promise<import("../history/history.entity").HistoryEntity[]>;
    statement(params: any): Promise<boolean>;
}
