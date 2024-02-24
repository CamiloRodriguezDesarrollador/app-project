export interface Adjustment{

    adjId: number;  
    cliId: number;
    adjType: number;
    adjName: string;
    adjOperation: string;
    adjCalculate: boolean;
    adjValue: number;
    adjStatus: string;
    audDate: Date;
    audUser: string;
}