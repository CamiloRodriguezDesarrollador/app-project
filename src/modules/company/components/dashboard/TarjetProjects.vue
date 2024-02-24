<script lang="ts">
export default {
    setup(){
        return{
        }
    }
}
</script>

<template>
    <div class="">
        <div class="card p-3">
            <h6 class="fs-6 mb-0 fw-bolder">Información general de proyectos.</h6>
            <h6 class="text-secondary-b fs-7">Variación respecto al mes anterior:
                <label class="badge text-bg-send text-light ms-2">25%</label>📒
            </h6>

            <div class="row mt-2 p-3">
                <div class="col-md-4 d-flex">
                    <span class="material-symbols-outlined badge text-bg-info text-light fs-4">pending_actions</span>
                    <div>
                        <h6 class="ms-2 mb-0 text-secondary-b">Abiertos</h6>
                        <h6 class="ms-2 mb-0 fs-7 fw-bolder">05</h6>
                    </div>
                </div>
                <div class="col-md-4 d-flex">
                    <span class="material-symbols-outlined badge text-bg-warning text-light fs-4">work_history</span>
                    <div>
                        <h6 class="ms-2 mb-0 text-secondary-b">Ejecutando</h6>
                        <h6 class="ms-2 mb-0 fs-7 fw-bolder">12</h6>
                    </div>
                </div>
                <div class="col-md-4 d-flex">
                    <span class="material-symbols-outlined badge text-bg-danger text-light fs-4">editor_choice</span>
                    <div>
                        <h6 class="ms-2 mb-0 text-secondary-b">Culminado</h6>
                        <h6 class="ms-2 mb-0 fs-7 fw-bolder">25</h6>
                    </div>
                </div>
    
    
            </div>
        </div>

        

    </div>
</template>

<style scoped>
.card{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 5px;
}
</style>