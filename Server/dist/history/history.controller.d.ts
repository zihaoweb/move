import { HistoryService } from './history.service';
export declare class HistoryController {
    private readonly historyService;
    constructor(historyService: HistoryService);
    history(req: any): Promise<import("./history.entity").HistoryEntity[]>;
    awaitRepair(req: any): Promise<import("./history.entity").HistoryEntity[]>;
    repaired(req: any): Promise<import("./history.entity").HistoryEntity[]>;
    recall(req: any): Promise<import("./history.entity").HistoryEntity[]>;
    adminHistory(req: any): Promise<import("./history.entity").HistoryEntity[]>;
    reject(req: any): Promise<import("./history.entity").HistoryEntity[]>;
    addRepair(params: any, req: any): Promise<boolean>;
    callback(params: any): Promise<boolean>;
}
