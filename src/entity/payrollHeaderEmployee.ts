export interface PayrollHeaderEmployee{

    employees: EmployeeSalary[];
    payStartDate: Date | string;
    payDescription: string;
    payEndDate: Date | string;
    payDate: Date | string;


}

export interface EmployeeSalary{
    empId : number;
    empSalary : number;
}
