<script lang="ts">

import { VCalendar } from 'vuetify/labs/VCalendar'

import { useDate } from 'vuetify'
import { onMounted } from 'vue'


export default {
  components:{
    VCalendar,
  },
  
  
  setup(){
    let value: unknown[] = [new Date()];
    
    return {
      value,

      eventitos:[
        {
          title: "Cierre Analitica",
          start: new Date('2024-02-19T08:00:00.000Z'),
          end: new Date('2024-02-19T08:30:00.000Z'),
          color: "green",
          allDay: true
        },
        {
          title: "Cierre Desarrollo",
          start: new Date('2024-02-01T08:00:00.000Z'),
          end: new Date('2024-02-01T08:30:00.000Z'),
          color: "blue",
          allDay: true
        }
      ],
    }

  }
    
}
</script>

<template >
  <div id="content-calendar">

    <h6 class="mb-4 fs-7 mt-4 fw-bolder">Calendario con actividades.</h6>
    <hr>


      <v-calendar 
        ref="calendar"
        v-model="value"
        color="dark"
        type="month"
        :events="eventitos"
      ></v-calendar>

  </div>
</template>

<style scoped>


</style>