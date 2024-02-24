<script lang="ts">

import { ref, onMounted, reactive } from 'vue';
import Chart from 'chart.js/auto';


import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
ChartJS.defaults.font.size = 10;

export default {
    
    setup(){

        let myChart: any = null;
        const chartRef:any = ref<HTMLCanvasElement | null>(null);

        onMounted(async() => {

            await fetchData();
            if(chartRef.value == null) return;
            const ctx = chartRef.value.getContext('2d');
            
            myChart = new Chart(ctx,{
                type: 'bar',
                data: chartData,
                options: chartOptions,
                
            })
            chartData.loaded = true
            chartRef.value = myChart;
        })   

      const chartData = reactive({
            labels: ["Enero", "Febrero", "Marzo", "Abril"] as String[],
            datasets: [
                {
                    label: 'Planeadas 💻',
                    data: [7,4,6,4] as Number[],
                    backgroundColor: ['#6FD226'],
                    borderWidth: 2,
                    borderRadius: 5,
                    borderSkipped: false,
                },
                {
                    label: 'Ejecutados 📊',
                    data: [6,4,6,4] as Number[],
                    backgroundColor: ['#8C57FF'],
                    borderWidth: 2,
                    borderRadius: 5,
                    borderSkipped: false,
                },
            ],
            
            loaded: false,
        })

        const chartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
            display: true,
            labels: {
                labels: []
                }
            },
        }        

        const fetchData = async () => {
            // chartData.labels.push("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio");
            // chartData.datasets[0].data.push(1,4,6,2,4,6);
        }

        return{
            chartRef,
        }
    }
}
</script>

<template>
    <div class="">
        <div class="card p-3">
            <h6 class="fs-6 mb-0 fw-bolder">Cantxidad actividades. 📈</h6>
            <div class="rounded-3 border p-2" id="content-card">
                <div>
                    <canvas ref="chartRef" id="bar-content"></canvas>
                </div>
            </div>

            
        </div>

        

    </div>
</template>

<style scoped>
.card{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 5px;
}
#bar-content{
    height: 140px;

}

#icon-coup{
    font-size: 3.9rem;
}


</style>