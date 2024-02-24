<script lang="ts">

import { useRouter } from 'vue-router'
import { reactive } from 'vue';
import { defineAsyncComponent } from 'vue';


export default {
  components:{
    FormInformation: defineAsyncComponent(() => import('@/modules/company/components/parameters/FormInformation.vue')),
    FormResource: defineAsyncComponent(() => import('@/modules/company/components/parameters/FormResource.vue')),
    FormFolder: defineAsyncComponent(() => import('@/modules/company/components/parameters/FormFolder.vue')),
  },
  data() {
    
    const router = useRouter()

    let currentStep = reactive({value: 1})
    
    let steps = reactive ([
      { id: 1, title: "Información", details: "Basica", status:true },
      { id: 2, title: "Recursos", details: "Valores", status:false },
      { id: 3, title: "Carpetas", details: "Documentación", status:false },
    ]);

    return {
      steps,
      currentStep,
      goRoute:(param:string)=>{router.push({name:param})},

      nextPage:()=>{
        if(currentStep.value < steps.length){
          currentStep.value += 1;
          steps[currentStep.value - 1].status = true;
        }
      },
      prevPage:()=>{
        if(currentStep.value > 1){
          currentStep.value -= 1;
          steps[currentStep.value].status = false;
        }
      }

    };
  },
};
</script>

<template>
  <div id="content">

    
    <div class="d-flex justify-content-between">
      <h6 class="mb-3 fs-7">Creación de nuevo parametro.</h6>
      
      <button class="btn btn-primary btn-sm mb-2"
        @click="goRoute('parameters')">
        <span class="material-symbols-outlined align-middle fs-5">assignment_return</span>
        Regresar
      </button>

    </div>
  

    <div class="card">

      <div class="card-title ps-4 mt-4">
        <div class="d-flex flex-nowrap overflow-auto row" id="contant-ppal">
          <div v-for="( step , index) in steps" :key="step.id" class="col-md-3 content-step" id="content-section">
              
              <div class="d-flex">
                <div class="d-flex">
                  <span v-if="step.status" class="material-symbols-outlined text-warning fs-4 me-1 mt-1">check_circle</span>
                  <span v-else class="material-symbols-outlined text-secondary-b fs-4 me-1 mt-1 me-1 mt-1">trip_origin</span>
                  <h4 class="fw-bolder">{{step.id}}</h4>
                </div>
                <div class="ms-2"> 
                  <h6 id="tittle-form" :class="step.status ? 'fw-bolder' : ''">{{step.title}}</h6>
                  <p class="text-secondary-b fs-8" id="subtitle">{{step.details}}</p>
                </div>

                <div class="col-md-5 border-top mt-3 ms-2" id="content-line"
                  v-if="index != steps.length-1">
                  <div :id="steps[step.id]?.status ? 'line' : 'line-inactive'"></div>
                </div>
              
              </div>
          </div>
        </div>
      </div>

      <hr>
      <div class="card-body mb-4" id="content-body">
        <FormInformation v-if="currentStep.value == 1" ></FormInformation>
        <FormResource v-if="currentStep.value == 2"></FormResource>
        <FormFolder v-if="currentStep.value == 3"></FormFolder>
      </div>


      <div class="card-footer bg-light">
        <div class="d-flex justify-content-between">
          <h6 :class="currentStep.value != 1 ? 'btn btn-primary btn-sm fw-bolder' : 'btn btn-sm text-secondary-b fw-bolder disabled'"
            @click="prevPage()">
            Anterior
          </h6>
          <h6 class="btn btn-send text-light btn-sm fw-bolder" 
            v-if="currentStep.value === steps.length"
            @click="nextPage()">
            Enviar
            <span class="material-symbols-outlined align-middle fs-7">save</span>
          </h6>
          <h6 class="btn btn-warning btn-sm fw-bolder" 
            v-else  
            @click="nextPage()">
            Siguiente
          </h6>
        </div>
      </div>
      
    </div>
   
  </div>
</template>


<style scoped>



#tittle-form{
  text-wrap: nowrap;
}

#subtitle{
  margin-top: -11px;
}
#line{
  border: 1.5px solid #fa8100;
  box-shadow: 0px 0px 5px 0px #fa8100;
}

.card-title{
  height: 25px;
}

#content-body{
  min-height: 190px;
}

#contant-ppal::-webkit-scrollbar {
  height: 5px;
}

#contant-ppal::-webkit-scrollbar-track {
  background: #f1f1f1;
}

#contant-ppal::-webkit-scrollbar-thumb {
  background: #ffedbe;
}


</style>