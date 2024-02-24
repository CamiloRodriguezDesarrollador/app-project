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
                type: 'doughnut',
                data: chartData,
                options: chartOptions,
            })
            chartData.loaded = true
            chartRef.value = myChart;
        })   

      const chartData = reactive({
            labels: ["QA"] as String[],
            datasets: [
                {
                    label: 'Presupuesto  💻',
                    data: [6,4] as Number[],
                    borderColor: ['#1FB4FF'],
                    backgroundColor: ['#a8e2ff88','white'],
                    borderWidth: 2,
                }
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
            <h6 class="fs-6 mb-0 fw-bolder">Avance en QA. 👓</h6>
            <h6 class="text-secondary-b fs-7">Informacion: 
                <label class="badge bg-info">60%</label>
            </h6>
            <div class="rounded-3 p-2" id="content-card">
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
    height: 150px;
    
}

#icon-coup{
    font-size: 3.9rem;
    box-shadow: #ffa8a888 0px 2px 5px;
    box-shadow: #a8e2ff88 0px 2px 5px;
}


</style>