export interface PayrollDetail{

    padId: number;  
    payId : number;
    patId : number;
    ctoId : number;
    empId : number;
    padSubTotal : number;
    padTotal : number;
    payStartDate : Date | string;
    payEndDate : Date | string;
    padStatus: string;
    audDate: Date;
    audUser: string;


    padQuantity? : number;
    rolName? : string;
    braName? : string;
    cocName? : string;
    empNames? : string;
    adjName? : string;

    empTypeDocument? : string;
    empDocument? : string;
    
    pagoTrabajador? : number;
    subsidioTransporte? : number;
    pension? : number;
    salud? : number;
    parafiscales? : number;
    cesantias? : number;
    interesesCesantias? : number;
    arl? : number;
    prima? : number;
    vacaciones? : number;
    bono? : number;


}
