<script setup>
import { ref } from 'vue';

const classSchedule = ref([
    { time: '10:00 AM - 10:45 AM', class: 'Class 1' },
    { time: '10:45 AM - 11:30 AM', class: 'Class 2' },
    { time: '11:30 AM - 12:15 PM', class: 'Class 3' },
    { time: '12:15 PM - 1:00 PM', class: 'Class 4' },
    { time: '1:45 PM - 2:30 PM', class: 'Class 5' },
    { time: '2:30 PM - 3:15 PM', class: 'Class 6' },
    { time: '3:15 PM - 4:00 PM', class: 'Class 7' }
]);
</script>

<template>
    <div class="p-6 bg-white shadow-md rounded-lg">
        <h2 class="text-2xl font-bold mb-6">Class Schedule</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="(classTime, index) in classSchedule" :key="index" class="bg-gray-100 p-4 rounded-md shadow">
                <h3 class="font-bold text-lg">{{ classTime.time }}</h3>
                <p class="text-gray-600">{{ classTime.class }}</p>
            </div>
        </div>

        <div class="mt-8 bg-yellow-200 p-4 rounded-md shadow">
            <h3 class="font-bold text-lg">Tiffin Break</h3>
            <p class="text-gray-600">1:00 PM - 1:45 PM</p>
        </div>
    </div>
</template>
