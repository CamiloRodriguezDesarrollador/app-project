export interface PayrollDetailAdjustment{

    pdaId: number;  
    cliId: number;
    padId: number;  
    adjId: number;  
    padValue: number;  
    padQuantity: number;  
    padDescription: string;  
    pdaStatus: string;
    audDate: Date;
    audUser: string;
}