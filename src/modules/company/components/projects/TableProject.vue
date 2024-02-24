<script lang="ts">
import { useRouter } from 'vue-router'
import { reactive } from 'vue'

export default {
  components:{
  },

  
  setup(){
      const router = useRouter()
      
      const projects = reactive([
          {status:"A", company:"Activos", name:"Realizar la reunión con x persona.", dates:"2023-01 al 2023-02", description:"Es un proyecto tipado ....",},
          {status:"I", company:"Proveedor", name:"Revisar con juridica la prefactibilidad de ...", dates:"2023-01 al 2023-03", description:"Es un proyecto establecer....",},
          {status:"A", company:"Activos", name:"Firmar Acta de constitucion", dates:"2023-01 al 2023-02", description:"Es un establecer....",},
        ])

        const phases = reactive([
            {"title":"Fase 1 - Analisis de prefactibilidad", "description":"Es un proyecto tipado ....",},
            {"title":"Fase 2 - Estudio de mercado", "description":"Es un proyecto establecer....",},
            {"title":"Fase 3 - Estudio de factibilidad", "description":"Es un establecer....",},
        ])

        const addProject = ()=>{
            projects.push(
                {status:"A", company:"Activos", name:"Firmar Acta de Cierro", dates:"2023-07 al 2023-02", description:"Es un establecer....",}
            )
        }

        const deleteProject = (index:number)=>{
            projects.splice(index,1)
        }
        
      
      return{
        projects,
        phases,
        addProject,
        deleteProject,
        goRoute:(param:string)=>{router.push({name:param})},

      }
    }
}
</script>



<template>
  <div>
    <div class="row">
    <div class="col-md-12">
        <div class="d-flex flex-wrap" id="content-icons">
            <button class="btn btn-primary btn-sm mb-3" @click="addProject">Agregar Elemento</button>
            <div class="dropdown" >
                <button class="btn  btn-warning btn-sm fw-bolder dropdown-toggle ms-4" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    Acciones
                </button>
                <ul class="dropdown-menu p-3" aria-labelledby="dropdownMenuButton">
                    <li>
                    <div class="d-flex mb-3">
                        <span class="material-symbols-outlined align-middle fs-4 ms-2">search</span>
                        <input class="form-control form-control-sm" placeholder="Buscar..">
                    </div>
                    </li>
                    <li>
                    <div class="d-flex text-secondary-b mb-3">
                        <span class="material-symbols-outlined align-middle fs-4 ms-2">filter_alt</span>
                        <select class="form-select form-select-sm">
                        <option value="">Filtrar</option>
                        </select>
                    </div>
                    </li>
                    <li>
                    <div class="d-flex text-primary mb-3">
                        <span class="material-symbols-outlined align-middle fs-4 ms-3">sort_by_alpha</span>
                        <label class="fs-7">Ordenar</label>
                    </div>
                    </li>
                    <li>
                    <div class="d-flex text-warning mb-3">
                        <span class="material-symbols-outlined align-middle fs-4 ms-3">account_circle</span>
                        <label class="fs-7">Persona</label>
                    </div>
                    </li>
                    <li>
                    <div class="d-flex text-send mb-3">
                        <span class="material-symbols-outlined align-middle fs-4 ms-3">settings</span>
                        <label class="fs-7">Opciones</label>
                    </div>
                    </li>
                </ul>
                </div>

        </div>
    </div>
</div>


    <div class="mt-4">
        
        <div v-for="(ph,index) in phases" :key="ph.title" class="mt-5">
            <div class="accordion " id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                    <h2 class="accordion-header ">
                        <button class="accordion-button bg-primary opacity-75" data-bs-toggle="collapse" 
                            :data-bs-target="'#panelsStayOpen-collapseOne'+index" aria-expanded="true" 
                            :aria-controls="'panelsStayOpen-collapseOne'+index">
                            <span class="material-symbols-outlined align-middle text-secondary-b fs-4">drag_indicator</span>
                            {{ ph.title}}
                        </button>
                    </h2>
                    <div :id="'panelsStayOpen-collapseOne'+index" class="accordion-collapse collapse show">
                    <div class="accordion-body">

                        <div class="table-responsive">
    
                            <table class="table" >
                                <thead>
                                <tr class="text-center fs-8">
                                    <th scope="col">#</th>
                                    <th scope="col">Actividad</th>
                                    <th scope="col">Responsable</th>
                                    <th scope="col">Recurso</th>
                                    <th scope="col">Estado</th>
                                    <th scope="col">Fechas</th>
                                    <th scope="col">Antecesora</th>
                                    <th scope="col">Predecesora</th>
                                </tr>
                                </thead>
                                <tbody class="text-center">
                                <tr v-for="(data, index) in projects" :key="data.name"
                                    class="fs-8">
                                    <th scope="row">
                                        <input type="checkbox" 
                                        @click="deleteProject(index)">    
                                    </th>
                                    <td>{{ data.name }}</td>
                                    <td>{{ data.company }}</td>
                                    <td>
                                        <span class="material-symbols-outlined align-middle text-warning fs-5">face</span>
                                        <span class="material-symbols-outlined align-middle text-danger fs-5">face_2</span>
                                        <span v-if="data.status =='A'" class="material-symbols-outlined align-middle text-secondary-b fs-5">face_3</span>
                                    </td>
                                    <td 
                                        v-if="data.status =='A'">
                                        <h6 class="badge rounded-pill text-bg-send text-light">Activo</h6>
                                    </td>
                                    <td 
                                        v-if="data.status =='I'">
                                        <h6 class="badge rounded-pill text-bg-danger text-light">Inactivo</h6>
                                    </td>
                                    
                                    <td>{{ data.dates }}</td>
                                    <td>{{ index+1 }}</td>
                                    <td>{{ index }}</td>
                                </tr>
                                </tbody>
                            </table>
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
.accordion-button{
    font-size: 15px;
}
#content-icons{
    cursor: pointer;
}
.dropdown button{
    width: 150px;
}


</style>