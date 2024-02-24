<script lang="ts">
import { useRouter } from 'vue-router'
import { useSide } from '@/modules/company/helpers/useSide'

export default {
    setup(){

        const router = useRouter()
        const { status , changeStatus } = useSide()


        return{
            status,
            goRoute:(param:string)=>{router.push({name:param})},
            openSideBar: ()=>{
                let sideBar = document.getElementById("containerSide")
                sideBar?.classList.toggle("extend")
                sideBar?.classList.toggle("compress")
                status.value = !status.value;
                changeStatus(status.value)
                localStorage.setItem("status",  status.value )
            },
        }
    }
}
</script>

<template>
  <div class="contentSide extend">

    <div id="containerSide" :class="status ?'extend' :'compress'" >

        <div class="" >
            <span class="material-symbols-outlined text-primary fs-4 mt-3 fw-bolder"
                @click="openSideBar()"
                id="open-side"
            >{{ status ? 'compress' : 'menu'}}</span>
            <div class="mb-4 mt-2" id="content-header">
                <h6 class="fw-bolder text-primary fs-5">APPs</h6>
            </div>
        </div>


        <div class="ps-4">
            <div class="d-flex align-items-center" id="icon-element"
                @click="goRoute('index')">
                <span class="material-symbols-outlined fs-5" id="icon-side">cottage</span>
                <h5 class="fs-7 mt-2 ms-2 " >Dashboard</h5>
                <h5 class="mt-2 ms-3 badge bg-danger fs-7 text-light fw-bolder">6</h5>
            </div>
            <div class="d-flex align-items-center" id="icon-element"
                @click="goRoute('parameters')">
                <span class="material-symbols-outlined fs-5" id="icon-side">content_copy</span>
                <h5 class="fs-7 mt-2 ms-2" @click="goRoute('parameters')">Parametros</h5>
            </div>
        </div>

        <div class="ps-1 mt-1">
            <div class="d-flex align-items-center text-secondary">
                <h5 class="fs-8 mt-3 ms-3">Servicios y seguimiento.</h5>
            </div>
        </div>

        <div class="ps-4">
            <div class="d-flex align-items-center  mt-2" id="icon-element"
                @click="goRoute('projects')">
                <span class="material-symbols-outlined fs-5" id="icon-side">add_circle</span>
                <h5 class="fs-7 mt-2 ms-2">Proyectos</h5>
            </div>
            <div class="d-flex align-items-center" id="icon-element"
                @click="goRoute('calendar')">
                <span class="material-symbols-outlined fs-5" id="icon-side">calendar_month</span>
                <h5 class="fs-7 mt-2 ms-2">Calendario</h5>
            </div>
            <div class="d-flex align-items-center" id="icon-element"
                @click="goRoute('canvas')">
                <span class="material-symbols-outlined fs-5" id="icon-side">view_in_ar</span>
                <h5 class="fs-7 mt-2 ms-2">Canvas</h5>
            </div>
            <div class="d-flex align-items-center" id="icon-element"
                @click="goRoute('resources')">
                <span class="material-symbols-outlined fs-5" id="icon-side">group</span>
                <h5 class="fs-7 mt-2 ms-2">Recursos</h5>
            </div>
            <div class="d-flex align-items-center" id="icon-element"
                @click="goRoute('cost')">
                <span class="material-symbols-outlined fs-5" id="icon-side">point_of_sale</span>
                <h5 class="fs-7 mt-2 ms-2">Presupuestos</h5>
            </div>
            <div class="d-flex align-items-center" id="icon-element"
                @click="goRoute('notifications')">
                <span class="material-symbols-outlined fs-5" id="icon-side">notifications_active</span>
                <h5 class="fs-7 mt-2 ms-2">Notificaciones</h5>
            </div>
            <div class="d-flex align-items-center" id="icon-element"
                @click="goRoute('report')">
                <span class="material-symbols-outlined fs-5" id="icon-side">report</span>
                <h5 class="fs-7 mt-2 ms-2">Avisos</h5>
            </div>
            <div class="d-flex align-items-center" id="icon-element"
                @click="goRoute('forms')">
                <span class="material-symbols-outlined fs-5" id="icon-side">send</span>
                <h5 class="fs-7 mt-2 ms-2">Encuestas</h5>
            </div>
            <div class="d-flex align-items-center" id="icon-element"
                @click="goRoute('process')">
                <span class="material-symbols-outlined fs-5" id="icon-side">memory</span>
                <h5 class="fs-7 mt-2 ms-2">Procesos</h5>
            </div>
        </div>
    </div>


    

</div>

</template>

<style lang="scss" scoped>

#open-side,#icon-element{
    cursor: pointer;
}
#icon-element:hover{
    color: blue;
}

#containerSide{
    background-color: #F4F5FA;
    box-shadow: 8px 1px 5px -4px rgba(0,0,0,0.3);
}
    
.extend{
    width: 220px;
    height: 100vh;
    transition: all 0.5s;
}
.extend #content-header h6{
    margin-left: 80px;
    margin-bottom: -15px;
    transition: all 0.5s;

}
.extend #open-side{
    padding-left: 95px;
    transition: all 0.5s;
}


.compress{
    width: 75px;
    height: 100vh;
    transition: all 0.5s;
}
.compress h5{
    display: none;
    transition: all 0.5s;

}
.compress #open-side{
    padding-left: 25px;
    transition: all 0.5s;
}

.compress #content-header h6{
    margin-left: 15px;
    margin-bottom: 5px;
    transition: all 0.5s;

}

.compress #icon-side{
    margin-bottom: 9px;
    margin-left: 12px;
    transition: all 0.5s;

}





</style>


