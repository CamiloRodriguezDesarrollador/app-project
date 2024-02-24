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
            <h6 class="fs-6 mb-0 fw-bolder">Seguimiento por profesional. 👨‍⚕️👩‍⚕️</h6>
            <div class="mt-4 fs-7 d-flex">
                <label class="badge fs-7 pt-2" id="icon-person" style="background-color: #FFEAB8;">👨</label>
                <div class="ms-2">
                    <h6 class="fw-bolder text-secondary-b mb-0 fs-7">Pedro Perez Gonzalez</h6>
                    <p class="fw-bolder mb-0 fs-8">Proyectos : 7</p>
                    <div class="d-flex">
                        <p class="fw-bolder fs-8 me-3 ">Tiempo : 
                            <label class="badge bg-success text-light">25%</label>
                        </p>
                        <p class="fw-bolder fs-8 me-3">Recursos : 
                            <label class="badge bg-danger text-light">-15%</label>
                        </p>
                        <p class="fw-bolder fs-8 ">Reclamos : 
                            <label class="badge bg-warning text-light">0</label>
                        </p>
                    </div>
                </div>
            </div> 

            <div class="fs-7 d-flex">
                <label class="badge fs-7 pt-2" id="icon-person" style="background-color: #D0F0B8;">👩</label>
                <div class="ms-2">
                    <h6 class="fw-bolder text-secondary-b mb-0 fs-7">Teresa Maldonado Lopez</h6>
                    <p class="fw-bolder mb-0 fs-8">Proyectos : 2</p>
                    <div class="d-flex">
                        <p class="fw-bolder fs-8 me-3 ">Tiempo : 
                            <label class="badge bg-success text-light">15%</label>
                        </p>
                        <p class="fw-bolder fs-8 me-3">Recursos : 
                            <label class="badge bg-danger text-light">-5%</label>
                        </p>
                        <p class="fw-bolder fs-8 ">Reclamos : 
                            <label class="badge bg-warning text-light">1</label>
                        </p>
                    </div>
                </div>
            </div>
            
            <div>
                <h6 class="text-center text-secondary-b">
                    <span class="material-symbols-outlined ">expand_more</span>
                </h6>
            </div>
            
        </div>

        

    </div>
</template>

<style scoped>
.card{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 5px;
}

#icon-person{
    border-radius: 50%;
    height: 30px;
}




</style>