<script lang="ts">

import { useRouter } from 'vue-router'
import { defineAsyncComponent } from 'vue'

export default {
    components:{
      // CanvasProject: defineAsyncComponent(() => import('@/modules/company/components/projects/CanvasProject.vue')),
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
  <div class="col-md-6">

    <h6 clasS="fw-bolder">Presupuestos vista</h6>      

      

  </div>

</template>


<style scoped>


</style>