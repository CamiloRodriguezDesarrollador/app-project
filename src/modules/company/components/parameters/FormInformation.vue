<script>
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
                <h6 class="fw-bolder text-secondary-b fs-8">Nombre del tipo de proyecto.</h6>
                <input type="text" class="form-control form-control-sm" id="inputEmail4">
            </div>
            <div class="col-md-3">
                <h6 class="fw-bolder text-secondary-b fs-8">Tipo de proyecto.</h6>
                <input type="text" class="form-control form-control-sm" id="inputEmail4">
            </div>

            <div class="col-md-12 mt-3">
                <h6 class="fw-bolder text-secondary-b fs-8">Detalle del proyecto.</h6>
                <textarea type="text" class="form-control form-control-sm">
                </textarea>
            </div>

        </form>
    </div>
</template>

<style scoped>
</style>