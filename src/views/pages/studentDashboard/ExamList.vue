<script setup></script>
<template>
    <section class="p-4 md:p-8 bg-white shadow-md rounded-lg">
        <div class="flex justify-between items-center mb-4">
            <h3 class="text-2xl font-semibold">Exam List</h3>
        </div>

        <div class="bg-white p-4 rounded-lg shadow-md flex items-start">
            <!-- Icon Container -->
            <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9.75 9.75L9 5.25m0 0L6 6m0 0L3.75 8.25M12 12.75L12.75 17.25m0 0L15 16.5m0 0l2.25-2.25M8.25 8.25a.75.75 0 01.75-.75h6a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-6a.75.75 0 01-.75-.75v-.75zm.75 8.25h6a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-6a.75.75 0 01-.75-.75v-.75a.75.75 0 01.75-.75z"
                    />
                </svg>
            </div>

            <!-- Exam Information -->
            <div>
                <h4 class="font-semibold text-lg">First Exam</h4>
                <div class="text-sm text-gray-500">
                    <span class="text-blue-500">First Term</span> |
                    <span class="text-blue-500">Class 1</span>
                </div>
                <div class="text-purple-600 font-medium mt-2">2024/08/17 | 2025/03/27</div>
            </div>
        </div>
    </section>
</template>
