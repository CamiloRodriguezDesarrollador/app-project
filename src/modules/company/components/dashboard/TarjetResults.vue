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
            <h6 class="fs-6 mb-0 fw-bolder">Resultados obtenidos. 🎋</h6>
            <h6 class="text-secondary-b fs-7">Informacion del mes:</h6>

            <div class="row"> 
                <div class="col-md-7">
                    <div class="d-flex justify-content-between">
                        <h6 class="text-secondary-b fs-7 fw-bolder mt-2 mb-0">🕔 Tiempo </h6>
                        <h6 class="text-secondary-b fs-7 fw-bolder mt-2 mb-0">
                            <label class="badge text-bg-send text-light">25%</label>
                        </h6>
                    </div>
                    <div class="d-flex justify-content-between">
                        <h6 class="text-secondary-b fs-7 fw-bolder mb-0">💵 Recursos </h6>
                        <h6 class="text-secondary-b fs-7 fw-bolder mb-0">
                            <label class="badge text-bg-danger text-light">-25%</label>
                        </h6>
                    </div>
                    <div class="d-flex justify-content-between">
                        <h6 class="text-secondary-b fs-7 fw-bolder">📣 Reclamos </h6>
                        <h6 class="text-secondary-b fs-7 fw-bolder">
                            <label class="badge text-bg-warning text-light">1</label>
                        </h6>
                    </div>
                </div>
                <div class="col-lg-5">
                    <h1 class="ms-2" id="icon-coup">🏆</h1>
                </div>
            </div>


            

            
        </div>

        

    </div>
</template>

<style scoped>
.card{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 5px;
}
#icon-coup{
    font-size: 3.9rem;
}


</style>