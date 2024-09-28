<script setup>
import '@fortawesome/fontawesome-free/css/all.css';
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-800 to-purple-900">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl p-4">
            <!-- Admin Card -->
            <RouterLink to="adminlogin" class="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <div class="text-4xl text-purple-600 mb-4">
                    <i class="fas fa-user-shield"></i>
                    <!-- Admin Icon -->
                </div>
                <h2 class="text-xl font-semibold mb-2">Admin</h2>
                <p class="text-gray-600 text-center">Login as an administrator to access the dashboard to manage app data.</p>
            </RouterLink>

            <!-- Student Card -->
            <RouterLink to="studentlogin" class="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <div class="text-4xl text-purple-600 mb-4">
                    <i class="fas fa-user-graduate"></i>
                    <!-- Student Icon -->
                </div>
                <h2 class="text-xl font-semibold mb-2">Student</h2>
                <p class="text-gray-600 text-center">Login as a student to explore course materials and assignments.</p>
            </RouterLink>

            <!-- Teacher Card -->
            <RouterLink to="teacherlogin" class="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <div class="text-4xl text-purple-600 mb-4">
                    <i class="fas fa-chalkboard-teacher"></i>
                    <!-- Teacher Icon -->
                </div>
                <h2 class="text-xl font-semibold mb-2">Teacher</h2>
                <p class="text-gray-600 text-center">Login as a teacher to create courses, assignments, and track student progress.</p>
            </RouterLink>
        </div>
    </div>
</template>
