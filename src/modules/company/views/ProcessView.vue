<script lang="ts">

import { useRouter } from 'vue-router'
import { defineAsyncComponent, reactive } from 'vue';

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
  <div class="" >
    <h6 clasS="fw-bolder">Procesos vista</h6>  
    
    <v-card
      class="py-8 px-8 text-center mx-auto ma-4 "
      elevation="6"
      max-width="400"
      width="100%"
    >

    <h6 class="fw-bolder fs-7 mb-4">Adicionar Cliente</h6>
    <h6 class="fs-7 text-start">Confirma el codigo del cliente con la finalidad de visualziar los procesos</h6>

    <v-sheet color="surface">
      <v-otp-input
        variant="solo"
      ></v-otp-input>
    </v-sheet>

    <v-btn
      class="my-4"
      color="purple"
      height="40"
      text="Verificar"
      variant="flat"
      width="70%"
    ></v-btn>



    </v-card>

  </div>
</template>


<style scoped>


</style>