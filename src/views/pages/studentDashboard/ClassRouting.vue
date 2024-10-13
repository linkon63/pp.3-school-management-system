<script setup>
import { ref } from 'vue';

const classSchedule = ref([
    {
        day: 'Sunday',
        classes: [
            { time: '10:00 AM - 10:45 AM', class: 'গণিত' },
            { time: '10:45 AM - 11:30 AM', class: '	আনন্দ পাঠ(বাংলা দ্রুত পঠন)' },
            { time: '11:30 AM - 12:15 PM', class: 'বিজ্ঞান' },
            { time: '12:15 PM - 1:00 PM', class: 'বাংলাদেশ ও বিশ্বপরিচয়' },
            { time: '1:45 PM - 2:30 PM', class: 'তথ্য ও যোগাযোগ প্রযুক্তি ' },
            { time: '2:30 PM - 3:15 PM', class: 'ইসলাম ও নৈতিক শিক্ষা' },
            { time: '3:15 PM - 4:00 PM', class: 'চারু ও কারুকলা' }
        ]
    },
    {
        day: 'Monday',
        classes: [
            { time: '10:00 AM - 10:45 AM', class: 'গণিত' },
            { time: '10:45 AM - 11:30 AM', class: 'বিজ্ঞান' },
            { time: '11:30 AM - 12:15 PM', class: 'কৃষি শিক্ষা ' },
            { time: '12:15 PM - 1:00 PM', class: 'English for Today' },
            { time: '1:45 PM - 2:30 PM', class: 'বাংলা ব্যকরণ ও নির্মিতি' },
            { time: '2:30 PM - 3:15 PM', class: 'কর্ম ও জীবনমুকী শিক্ষা ' },
            { time: '3:15 PM - 4:00 PM', class: 'শারীরিক শিক্ষা ও স্বাস্থ্য ' }
        ]
    },
    {
        day: 'Tuesday',
        classes: [
            { time: '10:00 AM - 10:45 AM', class: 'গণিত' },
            { time: '10:45 AM - 11:30 AM', class: 'English Grammer and Composition' },
            { time: '11:30 AM - 12:15 PM', class: '	বাংলাদেশ ও বিশ্বপরিচয়' },
            { time: '12:15 PM - 1:00 PM', class: 'তথ্য ও যোগাযোগ প্রযুক্তি' },
            { time: '1:45 PM - 2:30 PM', class: 'বাংলা ব্যকরণ ও নির্মিতি' },
            { time: '2:30 PM - 3:15 PM', class: 'গার্হস্থ্য বিজ্ঞান ' },
            { time: '3:15 PM - 4:00 PM', class: 'কৃষি শিক্ষা ' }
        ]
    },
    {
        day: 'Wednesday',
        classes: [
            { time: '10:00 AM - 10:45 AM', class: 'গণিত' },
            { time: '10:45 AM - 11:30 AM', class: 'বিজ্ঞান' },
            { time: '11:30 AM - 12:15 PM', class: 'কৃষি শিক্ষা ' },
            { time: '12:15 PM - 1:00 PM', class: 'English for Today' },
            { time: '1:45 PM - 2:30 PM', class: 'বাংলা ব্যকরণ ও নির্মিতি' },
            { time: '2:30 PM - 3:15 PM', class: 'কর্ম ও জীবনমুকী শিক্ষা ' },
            { time: '3:15 PM - 4:00 PM', class: 'শারীরিক শিক্ষা ও স্বাস্থ্য ' }
        ]
    },
    {
        day: 'Thursday',
        classes: [
            { time: '10:00 AM - 10:45 AM', class: 'গণিত' },
            { time: '10:45 AM - 11:30 AM', class: 'বিজ্ঞান' },
            { time: '11:30 AM - 12:15 PM', class: 'কৃষি শিক্ষা ' },
            { time: '12:15 PM - 1:00 PM', class: 'English for Today' },
            { time: '1:45 PM - 2:30 PM', class: 'বাংলা ব্যকরণ ও নির্মিতি' },
            { time: '2:30 PM - 3:15 PM', class: 'কর্ম ও জীবনমুকী শিক্ষা ' },
            { time: '3:15 PM - 4:00 PM', class: 'শারীরিক শিক্ষা ও স্বাস্থ্য ' }
        ]
    }
    // Friday and Saturday are holidays (No classes)
]);
</script>

<template>
    <div class="p-6 bg-white shadow-md rounded-lg">
        <h2 class="text-2xl font-bold mb-6">Class Schedule</h2>
        <div class="grid grid-rows-1 lg:grid-rows-5 gap-2">
            <div v-for="(day, index) in classSchedule" :key="index" class="bg-gray-100 p-2 rounded-md shadow">
                <h3 class="font-bold text-lg mb-2">{{ day.day }}</h3>

                <div class="grid grid-cols-7">
                    <div v-for="(classTime, classIndex) in day.classes" :key="classIndex" class="bg-white p-2 rounded-md shadow mb-2 grid-cols-1 justify-between items-center">
                        <p class="text-gray-600 font-semibold text-lg">{{ classTime.class }}</p>
                        <h4 class="text-sm">{{ classTime.time }}</h4>
                    </div>
                </div>
                <!-- Tiffin Break for each day -->
                <div class="mt-4 bg-yellow-200 p-2 rounded-md shadow">
                    <h4 class="font-semibold text-sm flex justify-center">Tiffin Break</h4>
                    <p class="text-gray-600 text-xs flex justify-center">1:00 PM - 1:45 PM</p>
                </div>
            </div>
        </div>
    </div>
</template>
