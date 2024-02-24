<script lang="ts">

import { defineAsyncComponent , onMounted} from 'vue';
import { useSide } from '@/modules/company/helpers/useSide'

export default {
    components:{
        HeaderSection: defineAsyncComponent(() => import('@/components/HeaderSection.vue')),
        SideBarSection: defineAsyncComponent(() => import('@/components/SideBarSection.vue')),
    },
    
    setup(){
        const { status, changeStatus } = useSide()

        onMounted(() => {
            let val = localStorage.getItem("status") === "true";
            changeStatus(val)      
        })

        return{
            status
            
        }
    }
}
</script>

<template>    
    <div id="menus">
        <SideBarSection id="sideBar"></SideBarSection>
        <HeaderSection id="header"></HeaderSection>
        <div id="content" :style="status ? 'margin-left:270px' : 'margin-left:110px'">
            <router-view id="apps"></router-view>
        </div>
    </div>

</template>

<style scoped>



#sideBar {
    position: fixed;
    top: 0; 
    left: 0; 
    z-index: 2; 
    transition: all 0.5s;
    width: auto;
}

#content{
    margin-right: 50px;
    margin-top: 30px;
    margin-bottom: 100px;
    transition: all 0.5s;
}

#header{
    z-index: 1;
    background-color: white;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
}

@media screen and (max-width: 500px) { 
    #content{    
        margin-left:110px !important;
        margin-right:30px !important;
        transition: all 0.5s;

    }
} 


</style>