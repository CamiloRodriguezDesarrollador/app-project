<script lang="ts">

import { reactive } from 'vue';

export default {

    setup(){

        let isChargue = reactive({value:false});

        let contentTask = reactive({
            'Seguimiento': [
                { title: "Revisión presupuesto del cliente.", date: "2023-06-31" },
                { title: "Revisión reunión proveedor.", date: "2023-08-31" },
                { title: "Revisión reunión proveedor.", date: "2023-08-31" },
            ],
            'En Proceso': [
                { title: "Revisión Plan de trabajo.", date: "2022-12-31" },
                { title: "Revisión notificaciones.", date: "2021-12-31" },
            ],
            'Finalizada': [
                { title: "Revisión Juridica.", date: "2023-10-31" },
                { title: "Revisión Polizas.", date: "2023-11-31" },
            ],
            'Otros': [
            ]
        })

        const changeProject = ()=>{
            isChargue.value = true;
            setTimeout(()=>{
                isChargue.value = false;
            }, 1000)
        }
    
        return{
            changeProject,
            isChargue,
            contentTask,
        }
    }
}
</script>

<template>
    <div>
        <h6 class="fw-bolder">Canvas.</h6>   
        
        <div class="col-md-4 mb-4">
            <select class="form-select form-select-sm"
                @change="changeProject()">
                <option value="" selected>Seleccione el proyecto</option>
                <option value="">Proyecto analitica de datos.</option>
                <option value="">Proyecto desarollo.</option>
            </select>
        </div>
        
        <div>
            <div class="row" v-if="!isChargue.value">
                <div class="col-md-3"
                    v-for="(task, category) in contentTask" :key="task[0]?.date">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <h6 class="card-title fw-bolder fs-7">{{ category }}</h6>
                                <span class="material-symbols-outlined align-middle fs-5">add_circle</span>
                            </div>
                        </div>
                        <div class="content-card-less mb-3" v-for="ta in task" :key="ta?.date">
                            <div class="card-less row pt-1">
                                <div class="col-md-1">
                                    <span class="material-symbols-outlined align-middle fs-5">edit</span>
                                </div>
                                <div class="col-md-10" >
                                    <h6 class="fs-8 mb-0">{{ ta?.title}}</h6>
                                    <h6 class="badge bg-primary fs-7">{{ ta?.date }}</h6>
                                    <h6 class="badge bg-success ms-2">
                                        <span class="material-symbols-outlined align-middle fs-8">group_add</span>
                                    </h6>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div v-else>
                <div id="content-charg" class="mt-4 ms-1">
                    <button class="btn btn-warning" type="button" disabled>
                        <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
                        <span role="status" class="ms-2 fw-bolder fs-7">Cargando...</span>
                    </button>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.card{
    box-shadow: 0px 0px 3px 0px rgba(150, 146, 146, 0.75);
    max-height: 500px;
}
.content-card-less{
    display: grid;
    place-items: center;
    cursor: pointer;
}
.card-less{
    border:1px solid rgb(208, 205, 205);
    border-radius: 10px;
    overflow: auto;
    max-width: 180px;
    width: 100%;
    background-color: #e5fbfc;
    box-shadow: 0px 0px 3px 0px rgba(150, 146, 146, 0.75);

}


</style>