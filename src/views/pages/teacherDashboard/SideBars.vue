<script setup>
import { ref } from 'vue';

const isCollapse = ref(true);
const isDropdownOpen = ref(true);
</script>
<template>
    <aside :class="`bg-white boxShadow rounded-md transition-all duration-300 ease `">
        <div :class="`mt-5 ${isCollapse ? 'w-48' : 'w-68'} ${isCollapse ? 'px-[20px]' : 'px-[10px]'} transition-all duration-300 ease-in-out`">
            <div v-if="isCollapse" class="flex items-center justify-between gap-1">
                <img src="https://i.ibb.co/ZHYQ04D/footer-logo.png" alt="logo" class="w-[120px] cursor-pointer" />
                <div class="relative group">
                    <button class="text-sky-600 cursor-pointer pi pi-angle-double-left" style="font-size: 2rem" @click="isCollapse = false"></button>
                </div>
            </div>
            <img v-else src="https://i.ibb.co/0BZfPq6/darklogo.png" alt="logo" class="w-[50px] mx-auto cursor-pointer" @click="isCollapse = !isCollapse" />
        </div>

        <!-- general section -->
        <div :class="`mt-6 ${isCollapse ? 'px-[20px]' : 'px-[10px]'} transition-all duration-300 ease-in-out`">
            <div class="mt-3 flex flex-col gap-[5px]">
                <router-link to="/teacherdashboard" :class="`${isCollapse ? 'justify-between' : 'justify-center'} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`">
                    <div v-if="isCollapse" class="flex items-center gap-[8px]">
                        <p class="text-[1rem] font-[400] text-gray-500 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M6 19h3.692v-5.884h4.616V19H18v-9l-6-4.538L6 10zm-1 1V9.5l7-5.288L19 9.5V20h-5.692v-5.884h-2.616V20zm7-7.77" /></svg
                            >Home
                        </p>
                    </div>
                    <!-- tooltip -->
                    <div v-else class="w-full relative group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="4rem" height="4em" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M6 19h3.692v-5.884h4.616V19H18v-9l-6-4.538L6 10zm-1 1V9.5l7-5.288L19 9.5V20h-5.692v-5.884h-2.616V20zm7-7.77" />
                        </svg>
                        <div class="absolute top-0 right-[-50px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500">
                            <p class="text-[0.9rem] w-max bg-gray-600 text-white rounded px-3 py-[5px]">Home</p>
                        </div>
                    </div>
                </router-link>

                <router-link to="/calenders" :class="`${isCollapse ? 'justify-between' : 'justify-center'} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`">
                    <div v-if="isCollapse" class="flex items-center gap-[8px]">
                        <p class="text-[1rem] font-[400] text-gray-500 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.5em" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M19.5 4h-3V2.5a.5.5 0 0 0-1 0V4h-7V2.5a.5.5 0 0 0-1 0V4h-3A2.503 2.503 0 0 0 2 6.5v13A2.503 2.503 0 0 0 4.5 22h15a2.5 2.5 0 0 0 2.5-2.5v-13A2.5 2.5 0 0 0 19.5 4M21 19.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5V11h18zm0-9.5H3V6.5C3 5.672 3.67 5 4.5 5h3v1.5a.5.5 0 0 0 1 0V5h7v1.5a.5.5 0 0 0 1 0V5h3A1.5 1.5 0 0 1 21 6.5z"
                                /></svg
                            >Calendar
                        </p>
                    </div>
                    <!-- tooltip -->
                    <div v-else class="w-full relative group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="3em" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M19.5 4h-3V2.5a.5.5 0 0 0-1 0V4h-7V2.5a.5.5 0 0 0-1 0V4h-3A2.503 2.503 0 0 0 2 6.5v13A2.503 2.503 0 0 0 4.5 22h15a2.5 2.5 0 0 0 2.5-2.5v-13A2.5 2.5 0 0 0 19.5 4M21 19.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5V11h18zm0-9.5H3V6.5C3 5.672 3.67 5 4.5 5h3v1.5a.5.5 0 0 0 1 0V5h7v1.5a.5.5 0 0 0 1 0V5h3A1.5 1.5 0 0 1 21 6.5z"
                            />
                        </svg>
                        <div class="absolute top-0 right-[-65px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500">
                            <p class="text-[0.9rem] w-max bg-gray-600 text-white rounded px-3 py-[5px]">Calendar</p>
                        </div>
                    </div>
                </router-link>
                <router-link to="/classrouting" :class="`${isCollapse ? 'justify-between' : 'justify-center'} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`">
                    <div v-if="isCollapse" class="flex items-center gap-[8px]">
                        <p class="text-[1rem] font-[400] text-gray-500 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 48 48">
                                <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                                    <path d="M6 6v28h22.387v-2H8V8h27v2.12h2V6zm31 10a2 2 0 1 1-4 0a2 2 0 0 1 4 0m2 0a4 4 0 1 1-8 0a4 4 0 0 1 8 0" />
                                    <path
                                        d="M30.093 21.83a3 3 0 0 1 2.07-.83h4.082c1.464 0 2.827.498 3.877 1.49c1.01.954 1.536 2.177 1.751 3.336c.338 1.822-.012 3.813-.873 5.578V39.5a2.5 2.5 0 0 1-4.966.411l-.534-3.204l-.534 3.204A2.5 2.5 0 0 1 30 39.5v-9.407a3 3 0 0 1-1.5.402h-5.102a3 3 0 0 1 0-6h3.9zM32 33.475V39.5a.5.5 0 0 0 .993.082l1.043-6.256a1 1 0 0 1 .986-.836h.956a1 1 0 0 1 .986.836l1.043 6.256A.5.5 0 0 0 39 39.5v-8.333a1 1 0 0 1 .112-.46c.772-1.491 1.053-3.124.795-4.516c-.157-.846-.524-1.648-1.158-2.247c-.647-.611-1.505-.944-2.504-.944h-4.081c-.257 0-.505.099-.691.276l-3.084 2.942a1 1 0 0 1-.69.277h-4.301a1 1 0 0 0 0 2H28.5a1 1 0 0 0 .69-.277l1.12-1.068a1 1 0 0 1 1.69.724z"
                                    />
                                </g></svg
                            >Class
                        </p>
                    </div>
                    <!-- tooltip -->
                    <div v-else class="w-full relative group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 48 48">
                            <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                                <path d="M6 6v28h22.387v-2H8V8h27v2.12h2V6zm31 10a2 2 0 1 1-4 0a2 2 0 0 1 4 0m2 0a4 4 0 1 1-8 0a4 4 0 0 1 8 0" />
                                <path
                                    d="M30.093 21.83a3 3 0 0 1 2.07-.83h4.082c1.464 0 2.827.498 3.877 1.49c1.01.954 1.536 2.177 1.751 3.336c.338 1.822-.012 3.813-.873 5.578V39.5a2.5 2.5 0 0 1-4.966.411l-.534-3.204l-.534 3.204A2.5 2.5 0 0 1 30 39.5v-9.407a3 3 0 0 1-1.5.402h-5.102a3 3 0 0 1 0-6h3.9zM32 33.475V39.5a.5.5 0 0 0 .993.082l1.043-6.256a1 1 0 0 1 .986-.836h.956a1 1 0 0 1 .986.836l1.043 6.256A.5.5 0 0 0 39 39.5v-8.333a1 1 0 0 1 .112-.46c.772-1.491 1.053-3.124.795-4.516c-.157-.846-.524-1.648-1.158-2.247c-.647-.611-1.505-.944-2.504-.944h-4.081c-.257 0-.505.099-.691.276l-3.084 2.942a1 1 0 0 1-.69.277h-4.301a1 1 0 0 0 0 2H28.5a1 1 0 0 0 .69-.277l1.12-1.068a1 1 0 0 1 1.69.724z"
                                />
                            </g>
                        </svg>
                        <div class="absolute top-0 right-[-50px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500">
                            <p class="text-[0.9rem] w-max bg-gray-600 text-white rounded px-3 py-[5px]">Class</p>
                        </div>
                    </div>
                </router-link>
                <router-link :class="`${isCollapse ? 'justify-between' : 'justify-center'} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`">
                    <div v-if="isCollapse" class="flex items-center gap-[8px]">
                        <p class="text-[1rem] font-[400] text-gray-500 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2m0 16H5V9h14zM5 7V5h14v2zm5.56 10.46l5.94-5.93l-1.07-1.06l-4.87 4.87l-2.11-2.11l-1.06 1.06z"
                                /></svg
                            >Attendance
                        </p>
                    </div>
                    <!-- tooltip -->
                    <div v-else class="w-full relative group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2m0 16H5V9h14zM5 7V5h14v2zm5.56 10.46l5.94-5.93l-1.07-1.06l-4.87 4.87l-2.11-2.11l-1.06 1.06z" />
                        </svg>
                        <div class="absolute top-0 right-[-80px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500">
                            <p class="text-[0.9rem] w-max bg-gray-600 text-white rounded px-3 py-[5px]">Attendance</p>
                        </div>
                    </div>
                </router-link>
                <router-link to="/examlist" :class="`${isCollapse ? 'justify-between' : 'justify-center'} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`">
                    <div v-if="isCollapse" class="flex items-center gap-[8px]">
                        <p class="text-[1rem] font-[400] text-gray-500 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 48 48">
                                <g fill="currentColor">
                                    <path d="M20 15a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zm-1 10a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z" />
                                    <path fill-rule="evenodd" d="M10 27a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1zm2 1v3h3v-3z" clip-rule="evenodd" />
                                    <path d="M17.707 15.707a1 1 0 0 0-1.414-1.414L13 17.586l-1.293-1.293a1 1 0 0 0-1.414 1.414L13 20.414z" />
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 6a4 4 0 0 0-4 4v28a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4V10a4 4 0 0 0-4-4zm-2 4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2zm28 6a3 3 0 1 1 6 0v20.303l-3 4.5l-3-4.5zm3-1a1 1 0 0 0-1 1v2h2v-2a1 1 0 0 0-1-1m0 22.197l-1-1.5V20h2v15.697z"
                                        clip-rule="evenodd"
                                    />
                                </g></svg
                            >Exam List
                        </p>
                    </div>
                    <!-- tooltip -->
                    <div v-else class="w-full relative group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 48 48">
                            <g fill="currentColor">
                                <path d="M20 15a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zm-1 10a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z" />
                                <path fill-rule="evenodd" d="M10 27a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1zm2 1v3h3v-3z" clip-rule="evenodd" />
                                <path d="M17.707 15.707a1 1 0 0 0-1.414-1.414L13 17.586l-1.293-1.293a1 1 0 0 0-1.414 1.414L13 20.414z" />
                                <path
                                    fill-rule="evenodd"
                                    d="M10 6a4 4 0 0 0-4 4v28a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4V10a4 4 0 0 0-4-4zm-2 4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2zm28 6a3 3 0 1 1 6 0v20.303l-3 4.5l-3-4.5zm3-1a1 1 0 0 0-1 1v2h2v-2a1 1 0 0 0-1-1m0 22.197l-1-1.5V20h2v15.697z"
                                    clip-rule="evenodd"
                                />
                            </g>
                        </svg>
                        <div class="absolute top-0 right-[-80px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500">
                            <p class="text-[0.9rem] w-max bg-gray-600 text-white rounded px-3 py-[5px]">Exam List</p>
                        </div>
                    </div>
                </router-link>
                <router-link to="/notice" :class="`${isCollapse ? 'justify-between' : 'justify-center'} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`">
                    <div v-if="isCollapse" class="flex items-center gap-[8px]">
                        <p class="text-[1rem] font-[400] text-gray-500 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8s-8-3.589-8-8s3.589-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m1 13h-2v2h2zm-2-2h2l.5-6h-3z" /></svg
                            >Notice
                        </p>
                    </div>
                    <!-- tooltip -->
                    <div v-else class="w-full relative group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8s-8-3.589-8-8s3.589-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m1 13h-2v2h2zm-2-2h2l.5-6h-3z" />
                        </svg>
                        <div class="absolute top-0 right-[-60px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500">
                            <p class="text-[0.9rem] w-max bg-gray-600 text-white rounded px-3 py-[5px]">Notice</p>
                        </div>
                    </div>
                </router-link>
                <router-link to="/eventlist" :class="`${isCollapse ? 'justify-between' : 'justify-center'} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`">
                    <div v-if="isCollapse" class="flex items-center gap-[8px]">
                        <p class="text-[1rem] font-[400] text-gray-500 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 36 36">
                                <path fill="currentColor" d="m16.17 25.86l-5.36-5.36a1 1 0 0 1 1.41-1.41L16.17 23l8.64-8.64a1 1 0 0 1 1.41 1.41Z" class="clr-i-outline clr-i-outline-path-1" />
                                <path
                                    fill="currentColor"
                                    d="M32.25 6H29v2h3v22H4V8h3V6H3.75A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V7.81A1.78 1.78 0 0 0 32.25 6"
                                    class="clr-i-outline clr-i-outline-path-2"
                                />
                                <path fill="currentColor" d="M10 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1" class="clr-i-outline clr-i-outline-path-3" />
                                <path fill="currentColor" d="M26 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1" class="clr-i-outline clr-i-outline-path-4" />
                                <path fill="currentColor" d="M13 6h10v2H13z" class="clr-i-outline clr-i-outline-path-5" />
                                <path fill="none" d="M0 0h36v36H0z" /></svg
                            >Event List
                        </p>
                    </div>
                    <!-- tooltip -->
                    <div v-else class="w-full relative group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 36 36">
                            <path fill="currentColor" d="m16.17 25.86l-5.36-5.36a1 1 0 0 1 1.41-1.41L16.17 23l8.64-8.64a1 1 0 0 1 1.41 1.41Z" class="clr-i-outline clr-i-outline-path-1" />
                            <path fill="currentColor" d="M32.25 6H29v2h3v22H4V8h3V6H3.75A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V7.81A1.78 1.78 0 0 0 32.25 6" class="clr-i-outline clr-i-outline-path-2" />
                            <path fill="currentColor" d="M10 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1" class="clr-i-outline clr-i-outline-path-3" />
                            <path fill="currentColor" d="M26 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1" class="clr-i-outline clr-i-outline-path-4" />
                            <path fill="currentColor" d="M13 6h10v2H13z" class="clr-i-outline clr-i-outline-path-5" />
                            <path fill="none" d="M0 0h36v36H0z" />
                        </svg>
                        <div class="absolute top-0 right-[-85px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500">
                            <p class="text-[0.9rem] w-max bg-gray-600 text-white rounded px-3 py-[5px]">Event List</p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>

        <!-- profile section -->
        <div :class="`${isCollapse ? 'justify-between' : 'justify-center'} bg-gray-100 py-3 px-[20px] flex items-center mt-10`">
            <div class="flex items-center gap-[10px]">
                <img
                    src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1724478146~exp=1724481746~hmac=7de91a5b9271ecb4309974122ae6f47d71c01f7fff840c69755f781a03d9e340&w=996"
                    alt="avatar"
                    class="w-[30px] h-[30px] cursor-pointer rounded-full object-cover"
                />
                <h3 v-if="isCollapse" class="text-[0.9rem] text-gray-800 font-[500]">Jhon Deo</h3>
            </div>

            <div v-if="isCollapse" class="relative group">
                <button class="text-[1rem] text-gray-500 cursor-pointer">More</button>
                <ul class="translate-y-[20px] opacity-0 z-[-1] group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-30 absolute top-0 left-[30px] bg-white boxShadow transition-all duration-300 p-[8px] rounded-md flex flex-col gap-[3px]">
                    <li class="flex items-center gap-[7px] text-[0.9rem] text-gray-600 hover:bg-gray-50 px-[8px] py-[4px] rounded-md cursor-pointer">Profile</li>
                    <li class="flex items-center gap-[7px] text-[0.9rem] text-red-500 hover:bg-gray-50 px-[8px] py-[4px] rounded-md cursor-pointer">Logout</li>
                </ul>
            </div>
        </div>
    </aside>
</template>
