<script lang="ts">
import { useRouter } from 'vue-router'
import { reactive } from 'vue';
import { defineAsyncComponent } from 'vue';

export default {
  components:{
    CanvasProject: defineAsyncComponent(() => import('@/modules/company/components/projects/CanvasProject.vue')),
    TableProject: defineAsyncComponent(() => import('@/modules/company/components/projects/TableProject.vue')),
    DashProjectsAcitivites: defineAsyncComponent(() => import('@/modules/company/components/projects/DashProjectsAcitivites.vue')),
  },

  
  setup(){
      const router = useRouter()

      
      const currentProject = reactive([
        {name:"Documental", value:50, color:"primary"},
        {name:"Tiempo", value:75, color:"success"},
        {name:"Desarrollo", value:30, color:"warning"},
        {name:"Qa", value:0, color:"danger"},
      ])
      
      return{
        currentProject,
        goRoute:(param:string)=>{
          router.push({name:param}
          )},

      }
    }
}
</script>



<template>
  <div>
    <h6 class="btn btn-primary btn-sm fw-bolder"
        @click="goRoute('projects')">
        <span class="material-symbols-outlined align-middle fs-5">assignment_return</span>
        Regresar
    </h6>
    <h6 class="btn btn-warning btn-sm fw-bolder ms-2"
        @click="goRoute('lineTime')">
        Ver Hitos 👌
    </h6>
    <hr>
      <div class="row">
        <div class="col-md-5">
          <div class="mt-3 row">
            <div v-for="proj in currentProject" 
                 :key="proj.name" class="col-md-6">
                 <div class="d-flex">
                   <v-progress-circular
                     :rotate="360"
                     :size="75"
                     :width="15"
                     :model-value="proj.value"
                     :class="`text-${proj.color} m-2`"
                   >{{proj.value}}%</v-progress-circular>
                   <div class="mt-4">
                    <h6 class="fs-7 mb-0">{{proj.name}}</h6>
                    <h6 class="fs-8 text-primary">Detalle</h6>
                   </div>

                 </div>

            </div>
         

          </div>
         
        </div>
        <div class="col-md-7">
          <DashProjectsAcitivites></DashProjectsAcitivites>
        </div>
      </div>

    <hr>
    <div class="mt-4">
      <TableProject></TableProject>

    </div>


  </div>
</template>

<style scoped>

.progress{
  max-width: 150px;
  width: 100%;
}

</style>