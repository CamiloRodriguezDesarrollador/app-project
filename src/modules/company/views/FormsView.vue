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
  <div>
    <h6 clasS="fw-bolder">Encuestas vista</h6>      


  </div>
</template>


<style scoped>



</style>