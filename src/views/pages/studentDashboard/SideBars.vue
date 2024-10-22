<script setup>
import { ref } from 'vue';

const showSidebar = ref(true);

const toggleSidebar = () => {
    showSidebar.value = !showSidebar.value;
    return showSidebar, toggleSidebar;
};
</script>
<template>
    <div class="sm:flex relative min-h-screen">
        <!-- Sidebar -->
        <aside :class="[' bg-purple-700 text-white w-36 md:w-64  ', showSidebar ? 'hidden' : 'block', 'md:block']">
            <!-- Logo & Title -->
            <div class="flex items-center justify-center py-4">
                <img src="https://via.placeholder.com/40" alt="Logo" class="w-10 h-10 rounded-full mr-2" />
                <div>
                    <h1 class="text-xl shadow-sm text-white font-bold">DevKon SCHOOL</h1>
                    <p class="text-sm">Management System</p>
                </div>
            </div>

            <!-- Sidebar Menu -->
            <nav class="mt-6">
                <ul>
                    <li class="px-4 py-2 hover:bg-purple-600">
                        <router-link to="/studentdashboard" class="flex items-center space-x-4 text-lg">
                            <i class="fas fa-th"></i>
                            <span>Dashboard</span>
                        </router-link>
                    </li>
                    <li class="px-4 py-2 hover:bg-purple-600">
                        <router-link to="/classrouting" class="flex items-center space-x-4 text-lg">
                            <i class="fas fa-chalkboard-teacher"></i>
                            <span>Class</span>
                        </router-link>
                    </li>
                    <li class="px-4 py-2 hover:bg-purple-600">
                        <router-link to="/calenders" class="flex items-center space-x-4 text-lg">
                            <i class="pi pi-calendar"></i>
                            <span>Calender</span>
                        </router-link>
                    </li>
                    <li class="px-4 py-2 hover:bg-purple-600">
                        <router-link to="/examlist" class="flex items-center space-x-4 text-lg">
                            <i class="fas fa-file-alt"></i>
                            <span>Exam List</span>
                        </router-link>
                    </li>
                    <li class="px-4 py-2 hover:bg-purple-600">
                        <router-link to="/notice" class="flex items-center space-x-4 text-lg">
                            <i class="pi pi-exclamation-circle"></i>
                            <span>Notice</span>
                        </router-link>
                    </li>
                    <li class="px-4 py-2 hover:bg-purple-600">
                        <router-link to="/eventlist" class="flex items-center space-x-4 text-lg">
                            <i class="fas fa-check-square"></i>
                            <span>Event List</span>
                        </router-link>
                    </li>
                </ul>
            </nav>
        </aside>

        <!-- Main Content -->
        <div class="px-2 absolute">
            <i @click="toggleSidebar" class="md:hidden mb-4 text-gray-900 p-2 rounded pi pi-align-left" style="font-size: 1.5rem"></i>
        </div>
    </div>
</template>
