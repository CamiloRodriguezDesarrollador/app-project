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
            items: [
              {
                color: 'red',
                icon: 'mdi-star',
                text: 'Inicio de proyecto',
                date: '2023-10-31',
                detail: 'Se realiza la creación del proyecto y se establecen los objetivos y alcances iniciales. 🚪',
              },
              {
                color: 'green',
                icon: 'mdi-book-variant',
                text: 'Acta de constitución',
                date: '2023-11-05',
                detail: 'Se redacta y firma el acta de constitución del proyecto, estableciendo formalmente sus bases y autorizaciones. 📖',
              },
              {
                color: 'orange',
                icon: 'mdi-airballoon',
                text: 'Desarrollo primera Fase',
                date: '2023-12-31',
                detail: 'Comienza la primera fase del desarrollo del proyecto, incluyendo el diseño y la implementación inicial. 💻',
              },
            ],


        }
    }
}
</script>

<template>

    <h6 class="btn btn-primary btn-sm fw-bolder"
      @click="goRoute('controlProjects')">
      <span class="material-symbols-outlined align-middle fs-5">assignment_return</span>
      Regresar
    </h6>
    
  <div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
        <h6 class="text-center text-secondary-b">Proyecto de Analitica de datos:</h6>
        <v-timeline align="start">
          <v-timeline-item
            v-for="(item, i) in items"
            :key="i"
            :dot-color="item.color"
            :icon="item.icon"
          >
            <v-card>
              <v-card-title :class="['text-subtitle-1', `bg-${item.color}`]">
                {{ item.text }}
              </v-card-title>
              <v-card-text class="bg-white text--primary mt-2">
                <p>{{ item.detail }}</p>
                <v-btn
                  :color="item.color"
                  variant="outlined"
                  class="text-subtitle-2"
                >
                  Detalle información
                </v-btn>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>

        </div>

  </div>


</template>


<style scoped>
#content{
  display: grid;
  place-content: center;
}

</style>