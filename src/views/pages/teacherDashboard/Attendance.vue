<script setup>
const classInfo = {
    name: 'Class 1',
    date: '2024/10/22'
};
const students = [
    { name: 'Fahim', rollNo: 1, attendance: '', comment: '' },
    { name: 'Rahim', rollNo: 146, attendance: '', comment: '' },
    { name: 'Anik', rollNo: 44, attendance: '', comment: '' },
    { name: 'Suhan', rollNo: 11, attendance: '', comment: '' }
];

function submitAttendance() {
    console.log('Submitted Attendance Data:', this.students);
    alert(JSON.stringify(this.students, null, 2));
}
</script>

<template>
    <div class="container mx-auto p-6 text-xl">
        <div class="mb-4">
            <h2 class="text-2xl font-semibold">Class: {{ classInfo.name }}, Date: {{ classInfo.date }}</h2>
        </div>
        <div class="overflow-x-auto">
            <table class="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr class="bg-gray-200 text-gray-600 uppercase ">
                        <th class="py-3 px-6 text-left">Sr. No.</th>
                        <th class="py-3 px-6 text-left">Student Name</th>
                        <th class="py-3 px-6 text-left">Attendance</th>
                        <th class="py-3 px-6 text-left">Comment</th>
                    </tr>
                </thead>
                <tbody class="text-gray-600 ">
                    <tr v-for="(student, index) in students" :key="index" class="border-b border-gray-300 hover:bg-gray-100">
                        <td class="py-3 px-6 text-left">{{ index + 1 }}</td>
                        <td class="py-3 px-6 text-left">{{ student.name }} ({{ student.rollNo }})</td>
                        <td class="py-3 px-6">
                            <div class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                                <label class="flex items-center">
                                    <input type="radio" :name="'attendance-' + index" value="Present" v-model="student.attendance" class="mr-2" />
                                    Present
                                </label>
                                <label class="flex items-center">
                                    <input type="radio" :name="'attendance-' + index" value="Absent" v-model="student.attendance" class="mr-2" />
                                    Absent
                                </label>
                                <label class="flex items-center">
                                    <input type="radio" :name="'attendance-' + index" value="Late" v-model="student.attendance" class="mr-2" />
                                    Late
                                </label>
                                <label class="flex items-center">
                                    <input type="radio" :name="'attendance-' + index" value="Half Day" v-model="student.attendance" class="mr-2" />
                                    Half Day
                                </label>
                            </div>
                        </td>
                        <td class="py-3 px-6">
                            <input v-model="student.comment" type="text" class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter comment" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <button class="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" @click="submitAttendance">Submit Attendance</button>
    </div>
</template>

<style scoped>

</style>
