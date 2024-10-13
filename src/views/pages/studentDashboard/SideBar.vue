<script setup>
import { ref } from 'vue';

const showSidebar = ref(false);

const toggleSidebar = () => {
    showSidebar.value = !showSidebar.value;
    return showSidebar, toggleSidebar;
};
</script>
<template>
    <div class="flex">
        <!-- Sidebar -->
        <aside :class="['bg-purple-700 text-white w-12 md:w-64 min-h-screen', showSidebar ? 'block' : 'hidden', 'lg:block']">
            <!-- Logo & Title -->
            <div class="flex items-center justify-center py-4">
                <img src="https://via.placeholder.com/40" alt="Logo" class="w-10 h-10 rounded-full mr-2" />
                <div>
                    <h1 class="text-lg font-bold">DevKon SCHOOL</h1>
                    <p class="text-sm">Management System</p>
                </div>
            </div>

            <!-- Sidebar Menu -->
            <nav class="mt-6">
                <ul>
                    <li class="px-4 py-2 hover:bg-purple-600">
                        <a href="#" class="flex items-center space-x-4">
                            <i class="fas fa-th"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li class="px-4 py-2 hover:bg-purple-600">
                        <a href="#" class="flex items-center space-x-4">
                            <i class="fas fa-chalkboard-teacher"></i>
                            <span>Class</span>
                        </a>
                    </li>
                    <li class="px-4 py-2 hover:bg-purple-600">
                        <a href="#" class="flex items-center space-x-4">
                            <i class="fas fa-user"></i>
                            <span>Users</span>
                            <i class="ml-auto fas fa-chevron-right"></i>
                        </a>
                    </li>
                    <li class="px-4 py-2 hover:bg-purple-600">
                        <a href="#" class="flex items-center space-x-4">
                            <i class="fas fa-file-alt"></i>
                            <span>Student Evaluation</span>
                            <i class="ml-auto fas fa-chevron-right"></i>
                        </a>
                    </li>
                    <li class="px-4 py-2 hover:bg-purple-600">
                        <a href="#" class="flex items-center space-x-4">
                            <i class="fas fa-book"></i>
                            <span>Homework</span>
                        </a>
                    </li>
                    <li class="px-4 py-2 hover:bg-purple-600">
                        <a href="#" class="flex items-center space-x-4">
                            <i class="fas fa-check-square"></i>
                            <span>Attendance</span>
                            <i class="ml-auto fas fa-chevron-right"></i>
                        </a>
                    </li>
                    <li class="px-4 py-2 hover:bg-purple-600">
                        <a href="#" class="flex items-center space-x-4">
                            <i class="fas fa-file"></i>
                            <span>Documents</span>
                        </a>
                    </li>
                    <li class="px-4 py-2 hover:bg-purple-600">
                        <a href="#" class="flex items-center space-x-4">
                            <i class="fas fa-walking"></i>
                            <span>Leave</span>
                        </a>
                    </li>
                    <li class="px-4 py-2 hover:bg-purple-600">
                        <a href="#" class="flex items-center space-x-4">
                            <i class="fas fa-wallet"></i>
                            <span>Payment</span>
                            <i class="ml-auto fas fa-chevron-right"></i>
                        </a>
                    </li>
                    <li class="px-4 py-2 hover:bg-purple-600">
                        <a href="#" class="flex items-center space-x-4">
                            <i class="fas fa-book-reader"></i>
                            <span>Library</span>
                        </a>
                    </li>
                    <li class="px-4 py-2 hover:bg-purple-600">
                        <a href="#" class="flex items-center space-x-4">
                            <i class="fas fa-bed"></i>
                            <span>Hostel</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>

        <!-- Main Content -->
        <div class="flex-1 p-6">
            <button @click="toggleSidebar" class="md:hidden mb-4 bg-red-600 text-white p-2 rounded">Toggle Sidebar</button>
        </div>
    </div>
</template>
