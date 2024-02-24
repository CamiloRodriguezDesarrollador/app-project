import type { ContractAdjustment} from './contractAdjustment';

export interface Contract{

    ctoId: number;  
    cliId: number;
    empId: number;
    braId: number;
    cocId: number;
    rolId: number;
    arlType: number;
    patId: number;
    ctoSalary: number;
    ctoSalaryRole : boolean;
    ctoStartDate: Date;
    ctoEndDate: Date;
    ctoPaymentMethod: string;
    ctoDescription: string;
    ctoStatus: string;
    audDate: Date;
    audUser: string;


    adjIds? : ContractAdjustment[];

    empNames:string,
    empTypeDocument:string,
    empDocument:string,
    braName:string,
    cocName:string,
    rolName:string
    patName:string
    adjName?:string

}