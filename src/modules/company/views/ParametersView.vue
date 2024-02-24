<script lang="ts">

import { useRouter } from 'vue-router'
import { reactive , defineAsyncComponent} from 'vue'

export default {
    components:{
        DashParameter: defineAsyncComponent(() => import('@/modules/company/components/parameters/DashParameters.vue')),
    },
    setup(){

        const router = useRouter()

        const projects = reactive([
          {status:"A", type:"Ambiental", name:"Proyecto tipo 1 - Ambiental", resources:"Estimado entre $25.000", description:"Es un proyecto tipado ....",},
          {status:"I", type:"Juridico", name:"Proyecto tipo 2 - Juridico", resources:"Estimado entre $5.000", description:"Es un proyecto establecer....",},
          {status:"A", type:"Interno", name:"Proyecto tipo 3 - IT", resources:"Estimado entre $10.000", description:"Es un establecer....",},
        ])


        return{
            projects,
            goRoute:(param:string)=>{router.push({name:param})},

        }
    }
}
</script>

<template>
  <div>

    <h6 class="mb-4 fs-7 mt-4 fw-bolder">Información de parametros.</h6>
    <hr>

    <button class="btn btn-primary opacity-75 fw-bolder btn-sm"
      @click="goRoute('createParameter')">
      <span class="material-symbols-outlined align-middle fs-5">add</span>
      Crear nuevo parametro
    </button>
  
  
    <h6 class="mb-4 fs-7 mt-4 text-center">Parametros creados actualmente.</h6>

    <!-- Dividir en componente -->
    <div class=" ps-4 pe-4">
  
      <div class="table-responsive">
  
        <table class="table" >
          <thead>
            <tr class="text-center">
              <th scope="col">#</th>
              <th scope="col">Estado</th>
              <th scope="col">Acciones</th>
              <th scope="col">Tipo</th>
              <th scope="col">Nombre</th>
              <th scope="col">Recursos</th>
              <th scope="col">Descripcion</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(data, index) in projects" :key="data.name">
              <th scope="row">{{ index }}</th>
              <td 
                v-if="data.status =='A'">
                <h6 class="badge rounded-pill text-bg-send text-light">Activo</h6>
              </td>
              <td 
                v-if="data.status =='I'">
                <h6 class="badge rounded-pill text-bg-danger text-light">Inactivo</h6>
              </td>
              <td>
                <span class="material-symbols-outlined align-middle text-warning fs-5">edit</span>
                <span class="material-symbols-outlined align-middle text-danger fs-5">delete</span>
                <span class="material-symbols-outlined align-middle text-secondary fs-5">folder</span>
                
              </td>
              <td>{{ data.type }}</td>
              <td>{{ data.name }}</td>
              <td>{{ data.resources }}</td>
              <td>{{ data.description }}</td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <nav >
        <ul class="pagination justify-content-center mt-3">
          <li class="page-item"><a class="page-link">1</a></li>
          <li class="page-item"><a class="page-link">2</a></li>
          <li class="page-item"><a class="page-link">3</a></li>
        </ul>
      </nav>
  
    </div>

    <h6 class="mb-4 fs-7">Proyectos por parametros.</h6>

    <div class="col-md-12 ps-4 pe-4">
      <DashParameter></DashParameter>
    </div>

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