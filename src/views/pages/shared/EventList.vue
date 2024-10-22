<script setup>
import { ref } from 'vue';

const events = ref([
    {
        id: 1,
        title: 'Anual Function',
        description: 'In Our School Anual Function Can Be...',
        date: '2024/08/24',
        iconBg: 'bg-green-400'
    },
    {
        id: 2,
        title: 'Sport Day',
        description: 'This Is Sport Day Event',
        date: '2024/08/05',
        iconBg: 'bg-teal-400'
    },
    {
        id: 3,
        title: 'Navratri Celebration',
        description: 'This Is Navratri Celebration Event',
        date: '2024/08/05',
        iconBg: 'bg-orange-300'
    },
    {
        id: 4,
        title: 'Dance Competition',
        description: 'This Event For Dance Notification',
        date: '2024/08/05',
        iconBg: 'bg-orange-500'
    }
]);
</script>
<template>
    <div class="p-6 bg-white shadow-md rounded-lg">
        <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-bold">Event List</h2>
            <button class="text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M15 8a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path fill-rule="evenodd" d="M5 8a5 5 0 1110 0 5 5 0 01-10 0zM2 12a2 2 0 012-2h12a2 2 0 012 2v2H2v-2z" clip-rule="evenodd" />
                </svg>
            </button>
        </div>

        <div class="space-y-4">
            <div v-for="event in events" :key="event.id" class="flex justify-between items-center bg-gray-50 p-4 rounded-md">
                <div class="flex items-center">
                    <span :class="event.iconBg" class="flex items-center justify-center h-12 w-12 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
                        </svg>
                    </span>
                    <div class="ml-4">
                        <h3 class="font-bold text-gray-800">{{ event.title }}</h3>
                        <p class="text-sm text-gray-600">{{ event.description }}</p>
                    </div>
                </div>
                <span class="bg-purple-100 text-purple-700 py-1 px-3 rounded-lg">{{ event.date }}</span>
            </div>
        </div>
    </div>
</template>
