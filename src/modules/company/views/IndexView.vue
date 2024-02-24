<script lang="ts">

import { defineAsyncComponent } from 'vue';

export default {
  components:{
    TarjeProjects: defineAsyncComponent(() => import('@/modules/company/components/dashboard/TarjetProjects.vue')),
    TarjetResults: defineAsyncComponent(() => import('@/modules/company/components/dashboard/TarjetResults.vue')),
    DashTimeLine: defineAsyncComponent(() => import('@/modules/company/components/dashboard/DashTimeLine.vue')),
    DashTimeCost: defineAsyncComponent(() => import('@/modules/company/components/dashboard/DashTimeCost.vue')),
    DashPersonal: defineAsyncComponent(() => import('@/modules/company/components/dashboard/DashPersonal.vue')),
    DashQa: defineAsyncComponent(() => import('@/modules/company/components/dashboard/DashQa.vue')),
    DashDev: defineAsyncComponent(() => import('@/modules/company/components/dashboard/DashDev.vue')),
    DashProject: defineAsyncComponent(() => import('@/modules/company/components/dashboard/DashProject.vue')),
  },

  setup(){

    return{
      //getter

      //actions
    }
  }
    
}
</script>

<template>
  <div class="row">
    <div class="col-md-4 mb-3">
      <TarjetResults></TarjetResults>
    </div>
    <div class="col-md-8 mb-3">
      <TarjeProjects></TarjeProjects>
    </div>
    <div class="col-md-12">
      <div class="row">
        <div class="col-md-6 mb-3">
          <DashTimeLine></DashTimeLine>
        </div>
        <div class="col-md-6 mb-3">
          <DashTimeCost></DashTimeCost>
          <DashPersonal class="mt-3"></DashPersonal>
        </div>
      </div>
    </div>
    <div class="col-md-12">
      <div class="row" >
        <div class="col-md-4 mb-3">
          <DashQa></DashQa>
        </div>
        <div class="col-md-4 mb-3">
          <DashDev></DashDev>
        </div>
        <div class="col-md-4 mb-3">
          <DashProject></DashProject>
        </div>
      </div>
    </div>
    



  </div>
</template>

<style scoped>


</style>
