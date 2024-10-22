<script setup>
import Calenders from '../shared/Calenders.vue';
import ClassRouting from '../shared/ClassRouting.vue';
import EventList from '../shared/EventList.vue';
import ExamList from '../shared/ExamList.vue';
import Notice from '../shared/Notice.vue';
</script>
<template>
    <div class="min-h-screen bg-gray-100 flex">
        <!-- Main content -->

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
