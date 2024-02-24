import { defineStore  } from 'pinia'
import apiPpal from '@/api/ppalApi'
import type { Table } from '@/entity/table';
import type { Branch } from '@/entity/branch';

export const useBranchStore = defineStore('branch',  {

  state:() =>({
    currentBranch: {} as Branch,

  }),

  actions: {

    async getBranchTable(dataSet:Table):Promise<void>{
     
        try{
            // const { data } = await apiPpal.post<Branch[]>('/app-payroll/branch/dataTable',null,{params:{
            //     numberElementPage:this.numberElementPage    
            // }})    
    
        }catch(e){
        
        }

    },
    
  
    }
})

