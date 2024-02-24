<script lang="ts">

import { defineAsyncComponent } from 'vue';
import { useRouter } from 'vue-router'

export default {
  components:{
    DashProjectsQ: defineAsyncComponent(() => import('@/modules/company/components/projects/DashProjectsQ.vue')),
  },

  setup(){

    const router = useRouter()

    let projects = [
      { id: 1, title: "Proyecto Analitica", status:'A', progress: 35, var:13 ,date: "17/04/2023" },
      { id: 2, title: "Proyecto de Desarrollo", status:'A', progress: 75, var:-13 ,date: "17/04/2023" },
      { id: 3, title: "Proyecto de Proveedores", status:'A', progress: 65, var:10 ,date: "01/01/2022" },
      { id: 4, title: "Proyecto de Aplicacion", status:'A', progress: 55, var:-20 ,date: "12/04/2021" },
    ]

    return{
      projects,
      //getter
      goRoute:(param:string)=>{router.push({name:param})},

      //actions
    }
  }
    
}
</script>

<template>
  <div>

    <h6 class="fw-bolder">Información de proyectos.</h6>
    <hr>
    <button class="btn btn-primary opacity-75 fw-bolder btn-sm mb-4"
      @click="goRoute('ws')">
      <span class="material-symbols-outlined align-middle fs-5">add</span>
      Crear nuevo proyecto
    </button>


    <input type="text" class="form-control form-control-sm mb-4" placeholder="Buscar..">

    <div>

      <div class="row">
        <div class="col-md-4">
            <DashProjectsQ></DashProjectsQ>
        </div>
        <div class="col-md-8 mt-3">
            <div class="row">
               <!-- Dividir en otro componente -->

               <h6 class="fw-bolder text-secondary fs-7">Información de proyectos abiertos.</h6>

              <div class="col-md-6 mb-3" v-for="proj in projects" :key="proj.id">
                <div class="card text-center">
                  <div class="card-body bg-light">
                    <div class="d-flex justify-content-between">
                      <h6 class="fw-bolder fs-7 mb-3">{{ proj.title }}</h6>
                      <h6 v-ifSe :class="proj.var <0 ? 'fw-bolder mb-3 btn text-light btn-sm btn-danger' 
                                        : 'fw-bolder mb-3 btn text-light btn-sm btn-send' "
                        >{{ proj.var }}%</h6>
                    </div>
                      <div v-if="proj.status == 'A'">
                        <h6 class="card-text text-start bg-light fs-8">
                          <label class="">Avance a la fecha <strong class="text-warning">{{ proj.progress }}%</strong></label> 
                          <div class="progress mt-1">
                            <div 
                              :class="proj.progress<60 ? 'progress-bar progress-bar-striped bg-warning' : 
                              'progress-bar progress-bar-striped bg-send'" 
                              :style="'width:'+ proj.progress +'%'">
                            </div>
                          </div>
                        </h6>
                        <p class="fs-8">Fecha de finalización:  {{ proj.date }}</p>    
                      </div>
                      <div v-else>
                        <p class="fs-8">Finalizado el:  {{ proj.date }}</p>    
                      </div>
                      <a class="btn btn-primary opacity-75 border btn-sm"
                        @click="goRoute('controlProjects')">
                        Detalle
                        <span class="material-symbols-outlined align-middle fs-5">info</span>
                      </a>
                  </div>
                </div>

                </div>

            </div>
        </div>



      </div>
    </div>
  </div>
</template>

<style scoped>

.card{
  /* border-bottom: 3px solid rgb(0, 0, 0); */
  box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 5px;
  min-height: 220px;
}

</style>