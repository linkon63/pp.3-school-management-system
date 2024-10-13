<script setup>
import AppTopbar from '@/layout/AppTopbar.vue';
import { useLayout } from '@/layout/composables/layout';
import '@fortawesome/fontawesome-free/css/all.css';
import Notice from '../studentDashboard/Notice.vue';
import Calenders from './Calenders.vue';
import ClassRouting from './ClassRouting.vue';
import EventList from './EventList.vue';
import ExamList from './ExamList.vue';
import SideBar from './SideBar.vue';

</script>
<template>
    <div class="min-h-screen bg-gray-100 flex">
        <!-- Sidebar -->
        <side-bar class="w-72 bg-purple-700 min-h-screen text-white"> </side-bar>
        <!-- Main content -->
        <!-- <button class="layout-menu-button layout-topbar-action" @click="onMenuToggle">
            <i class="pi pi-bars"></i>
        </button> -->
        <main class="p-6 grid grid-cols-1 md:grid-cols-2 gap-4 w-full justify-around">
            <div class="col-span-2 sm:col-span-2">
                <ClassRouting></ClassRouting>
            </div>
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
        </main>
    </div>
</template>
<style scoped>
.material-icons {
    font-size: 20px;
}
</style>
