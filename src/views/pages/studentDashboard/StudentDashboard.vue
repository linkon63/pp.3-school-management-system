<script setup>
import '@fortawesome/fontawesome-free/css/all.css';
import Notice from '../studentDashboard/Notice.vue';
import Calenders from './Calenders.vue';
import EventList from './EventList.vue';
import ExamList from './ExamList.vue';
import ClassRouting from './ClassRouting.vue';
</script>
<template>
    <div class="min-h-screen bg-gray-100 flex">
        <!-- Sidebar -->
        <aside class="w-72 bg-purple-700 min-h-screen text-white">
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

        <!-- Main content -->

        <main class="p-6 grid grid-cols-1 md:grid-cols-2 gap-4 w-full justify-around">
            <!-- Calendar Component -->
            <div class="col-span-2 md:col-span-1">
                <Calenders></Calenders>
            </div>

            <!-- Notice Component -->
            <div class="col-span-2 md:col-span-1">
                <Notice></Notice>
            </div>

            <!-- Exam List Component (taking full width on small screens) -->
            <div class="col-span-2 sm:col-span-1">
                <ExamList></ExamList>
            </div>
            <div class="col-span-2 sm:col-span-1">
                <EventList></EventList>
            </div>
            <div class="col-span-2 sm:col-span-1">
                <ClassRouting></ClassRouting>
            </div>
        </main>
    </div>
</template>
<style scoped>
.material-icons {
    font-size: 20px;
}
</style>
