import { defineStore  } from 'pinia'

export const useSideStore = defineStore('side',  {

  state:() =>({
    status: true as any,
  }),

  actions: {

    async changeStatus(sta:boolean):Promise<any>{
        if(sta != undefined || sta != null) return this.status = sta;
        return this.status = !this.status;
    },
        
    }
})

