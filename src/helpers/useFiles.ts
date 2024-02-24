import type { PayrollDetail } from '@/entity/payrollDetail';
import ExcelJS from 'exceljs';

const useFile = () => {


    const parseToJson = (dataSet: any) => {
        const columns = Object.keys(dataSet[0]).map((key) => ({
            header: key,
            key: key,
        }));
    
        const content = dataSet.map((dat: any) => {
            const newData: any = {};
            columns.forEach((col) => {
                newData[col.key] = dat[col.key];
            });
            return newData;
        });
    
        return [
            {
                name: "information",
                columns: columns,
                rows: content,
            },
        ];
    };
    

    const downloadFileDocument = async (data:any) => {
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('information');
        
        const dataParse = parseToJson(data);
        const columns = dataParse[0].columns;
        const rows = dataParse[0].rows;

        worksheet.columns = columns;

        rows.forEach((row:any) => {
            worksheet.addRow(row);
        });

        const buffer = await workbook.xlsx.writeBuffer();
        const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'information.xlsx';
        a.click();
        window.URL.revokeObjectURL(url);
    };

    
    const readFilePayroll = (): Promise<PayrollDetail[]> => {
        return new Promise((resolve, reject) => {
          const input = document.getElementById('filePayrollDetail') as HTMLInputElement;
          let myPay: PayrollDetail[] = [] as PayrollDetail[];
      
          if (input.files && input.files.length > 0) {
            const file = input.files[0];
            const reader = new FileReader();
      
            reader.onload = async (e) => {
              try {
                const data = e.target?.result as ArrayBuffer;
                myPay = await processExcel(data);
                resolve(myPay);
              } catch (error) {
                reject(error);
              }
            };
      
            reader.readAsArrayBuffer(file);
          } else {
            reject(new Error("No se seleccionó ningún archivo."));
          }
        });
      };
      

    const processExcel = async(data: ArrayBuffer):Promise<PayrollDetail[]> => {
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.load(data);
      
        const worksheet = workbook.getWorksheet(1);
        const resultArray: PayrollDetail[] = [];
      
        worksheet?.eachRow((row, rowNumber) => {
          if (rowNumber > 1) { 
            const empTypeDocument = row.getCell(1).value;
            const empDocument = row.getCell(2).value;
            const padSubTotal = row.getCell(3).value;
            const payStartDate = row.getCell(4).value;
            const payEndDate = row.getCell(5).value;
      
            const rowData:PayrollDetail = {
              empTypeDocument : String(empTypeDocument),
              empDocument :String(empDocument) ,
              padSubTotal : Number(padSubTotal),
              payStartDate : String(payStartDate),
              payEndDate : String(payEndDate),
            } as PayrollDetail;
      
            resultArray.push(rowData);
          }
        });

        return resultArray;
      }

    return {
        downloadFileDocument,
        processExcel,
        readFilePayroll,
    };
};

export default useFile;
