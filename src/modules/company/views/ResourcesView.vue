<script lang="ts">

import { defineAsyncComponent, reactive } from 'vue';

export default {
  components:{

  },

  setup(){

    let rating = 3

    let resources:any =  reactive([
      { 
          name: 'Camilo R', 
          date: '2024-01-01', 
          quantityProjects: 5, 
          starts: 4, 
          progress: 25, 
          photo: '👦' 
        },
        { 
          name: 'Sofia G', 
          date: '2023-12-15', 
          quantityProjects: 3, 
          starts: 3, 
          progress: 50, 
          photo: '👩‍🦰' 
        },
        { 
          name: 'Carlos T', 
          date: '2024-02-10', 
          quantityProjects: 8, 
          starts: 5, 
          progress: 75, 
          photo: '👨'
        }
      ])


    return{
      rating,
      resources,
      addResource:()=>{
        resources.push({
          name: 'Laura T', 
          date: '2021-01-01', 
          quantityProjects: 5, 
          starts: 1, 
          progress: 41, 
          photo: '🧓'
        })
      },
      //getter

      //actions
    }
  }
    
}
</script>

<template>
  <div>
    <h6 class="mb-4 fs-7 mt-4 fw-bolder">Información de recursos.</h6>
    <hr>

    <div class="container">
      <button class="btn btn-primary btn-sm"
        @click="addResource()"
      >Agregar Recurso</button>

      <div class="row mt-5">
        <div class="col-lg-3 col-md-6 mb-4" v-for="(resource, index) in resources" :key="index">
          <div class="card">
            <div class="bg-secondary">
              <h1 class="text-center mt-2">{{resource.photo}}</h1>
            </div>
            <div class="card-body">
              <h6 class="card-title fs-6 fw-bolder">{{ resource.name }}</h6>
              <p class="card-text mb-0 fs-8">Fecha de Inicio: <strong> {{ resource.date }} </strong></p>
              <p class="card-text mb-0 fs-8">Cantidad de Proyectos: <strong> {{ resource.quantityProjects }}</strong></p>
              <p class="card-text mb-0 fs-8">Estrellas Recibidas: <strong>
                <span v-for="star in resource.starts" :key="star" >
                  <span class="material-symbols-outlined align-middle fs-5 text-warning">star</span>
                </span>
              </strong>
              </p>
              <div class="control-graph">
                <v-progress-circular
                  :rotate="360"
                  :size="75"
                  :width="15"
                  :model-value="resource.progress"
                  class="text-send mt-4"
                >
                  {{ resource.progress }}%
                </v-progress-circular>
                <h6 class="fw-bolder text-center fs-8 text-secondary-b">Avance</h6>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>



  </div>
</template>

<style scoped>

.card-body{
  min-height: 250px;
}
.control-graph{
  display: grid;
  place-content: center;
}

</style>