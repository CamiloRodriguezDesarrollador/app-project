<script lang="ts">
export default {
    setup(){
        return{
        }
    }
}
</script>

<template>
    <div>
        <form class="row ps-4 pe-4">

            <div class="col-md-3">
                <h6 class="fw-bolder text-secondary-b fs-8">Carpetas necesarias.</h6>
                <input type="number" class="form-control form-control-sm" id="inputEmail4">
            </div>
            <div class="col-md-3">
                <h6 class="fw-bolder text-secondary-b fs-8">Cantidad de carpetas.</h6>
                <input type="text" class="form-control form-control-sm" id="inputEmail4">
            </div>

            <div class="col-md-4">
                <h6 class="fw-bolder text-secondary-b fs-8">Cantidad de carpetas.</h6>
                <select class="form-select form-select-sm">
                    <option selected>Escoger</option>
                </select>
            </div>


        </form>
    </div>
</template>

<style scoped>
</style>