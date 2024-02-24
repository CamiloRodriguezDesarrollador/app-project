<script lang="ts">

import { useRouter } from 'vue-router'
import { defineAsyncComponent } from 'vue'

export default {
    components:{
      CanvasProject: defineAsyncComponent(() => import('@/modules/company/components/projects/CanvasProject.vue')),
},
    setup(){

        const router = useRouter()



        return{
            goRoute:(param:string)=>{router.push({name:param})},

        }
    }
}
</script>

<template>
  <div>

    <CanvasProject></CanvasProject>

  </div>
</template>


<style scoped>

.pagination a{
  font-size: 12px;
}

.table-responsive{
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.table tbody tr td{
  max-width: 150px;
  overflow-x: auto;
  white-space: nowrap;
}
.table tbody tr{
  font-size: 14px;
}

.table tbody tr td::-webkit-scrollbar , #table thead tr th::-webkit-scrollbar{
  width: 5px;
  height: 5px;
}
.table tbody tr td::-webkit-scrollbar-thumb , #table thead tr th::-webkit-scrollbar-thumb{
  background-color: rgb(229, 229, 231);
  border-radius: 15px;
}


</style>