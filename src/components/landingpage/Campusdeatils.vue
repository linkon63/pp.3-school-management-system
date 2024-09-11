<script setup>
import { ref } from 'vue';

const horizontalEvents = ref(['1904', '2024']);
</script>

<template>
    <div id="highlights" class="py-6 px-6 lg:px-20 mx-4 my-1 lg:mx-5">
        <div class="grid grid-cols-12 gap-4 mt-20 pb-2 md:pb-20">
            <div class="flex justify-center col-span-12 lg:col-span-6 bg-purple-100 p-0 order-1 lg:order-none" style="border-radius: 8px">
                <img
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiDJrSvTrcnWWITvfTpRwWRmD4bfCmoWxuMNOaftSNQK6XUOE_EmLtvqo6pd_bguHwzRrDkPsXJS5OTCsxtculLHA3MYXMtBE1pF6H1Npoour07Rer69Yk9sVUdTx5d1RL0VoDVYd0mAv8/s1600/AGHS.jpg"
                    class="w-full rounded-lg shadow-lg shadow-black animate-float hover:animate-none duration-300"
                    alt="mockup mobile"
                />
            </div>

            <div class="col-span-12 lg:col-span-6 my-auto flex flex-col lg:items-end text-center lg:text-right gap-4">
                <div>
                    <div class="leading-none text-green-600 text-shadow lg:text-3xl text-xl font-Archivo">Welcome to Armanitola Government High School</div>
                    <span class="text-green-900 dark:text-slate-100 lg:text-xl leading-normal ml-0 md:ml-2" style="max-width: 650px"
                        >Armanitola Government High School, nestled in Old Dhaka, is a historic school founded in 1904. Its campus boasts charming old-world architecture, with spacious classrooms, a large playground, and a well-stocked library. The
                        green surroundings and well-kept facilities create a welcoming environment for students, blending tradition with modern educational needs.</span
                    >
                </div>
            </div>
            <div class="col-span-full">
                <div class="card">
                    <Timeline :value="horizontalEvents" layout="horizontal" align="alternate">
                        <template #opposite> &nbsp; </template>

                        <template #content="slotProps">
                            {{ slotProps.item }}
                        </template>
                    </Timeline>
                </div>
            </div>
        </div>
    </div>
</template>
