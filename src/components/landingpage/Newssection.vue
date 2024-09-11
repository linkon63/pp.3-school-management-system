<script>
export default {
    data() {
        return {
            // array of Notice items
            notice: [
                { name: 'Eid e-Milad-un Nabi', publishdate: '16/09/2024', file: 'demo' },
                { name: 'Madhu Pornima', publishdate: '16/09/2024', file: 'demo' },
                { name: 'Madhu Pornima', publishdate: '16/09/2024', file: 'demo' },
                { name: 'Eid e-Milad-un Nabi', publishdate: '16/09/2024', file: 'demo' },
                { name: 'Madhu Pornima', publishdate: '16/09/2024', file: 'demo' },
                { name: 'Madhu Pornima', publishdate: '16/09/2024', file: 'demo' },
                { name: 'Eid e-Milad-un Nabi', publishdate: '16/09/2024', file: 'demo' },
                { name: 'Madhu Pornima', publishdate: '16/09/2024', file: 'demo' },
                { name: 'Madhu Pornima', publishdate: '16/09/2024', file: 'demo' },
                { name: 'Eid e-Milad-un Nabi', publishdate: '16/09/2024', file: 'demo' },
                { name: 'Madhu Pornima', publishdate: '16/09/2024', file: 'demo' },
                { name: 'Madhu Pornima', publishdate: '16/09/2024', file: 'demo' },
                { name: 'Eid e-Milad-un Nabi', publishdate: '16/09/2024', file: 'demo' },
                { name: 'Madhu Pornima', publishdate: '16/09/2024', file: 'demo' },
                { name: 'Madhu Pornima', publishdate: '16/09/2024', file: 'demo' },
                { name: 'Eid e-Milad-un Nabi', publishdate: '16/09/2024', file: 'demo' },
                { name: 'Madhu Pornima', publishdate: '16/09/2024', file: 'demo' },
                { name: 'Madhu Pornima', publishdate: '16/09/2024', file: 'demo' }
            ],
            // array of Notice items
            upcommingevent: [
                { name: 'Eid e-Milad-un Nabi', publishdate: '16/09/2024' },
                { name: 'Madhu Pornima', publishdate: '16/09/2024' },
                { name: 'Madhu Pornima', publishdate: '16/09/2024' },
                { name: 'Eid e-Milad-un Nabi', publishdate: '16/09/2024' },
                { name: 'Madhu Pornima', publishdate: '16/09/2024' },
                { name: 'Madhu Pornima', publishdate: '16/09/2024' },
                { name: 'Eid e-Milad-un Nabi', publishdate: '16/09/2024' },
                { name: 'Madhu Pornima', publishdate: '16/09/2024' },
                { name: 'Madhu Pornima', publishdate: '16/09/2024' },
                { name: 'Eid e-Milad-un Nabi', publishdate: '16/09/2024' },
                { name: 'Madhu Pornima', publishdate: '16/09/2024' },
                { name: 'Madhu Pornima', publishdate: '16/09/2024' },
                { name: 'Eid e-Milad-un Nabi', publishdate: '16/09/2024' },
                { name: 'Madhu Pornima', publishdate: '16/09/2024' },
                { name: 'Madhu Pornima', publishdate: '16/09/2024' },
                { name: 'Eid e-Milad-un Nabi', publishdate: '16/09/2024' },
                { name: 'Madhu Pornima', publishdate: '16/09/2024' },
                { name: 'Madhu Pornima', publishdate: '16/09/2024', file: 'demo' }
            ],
            // array of news items
            news: [
                { name: 'Semister Result Publised 20 septembar', publishdate: '7/9/2024' },
                { name: ' Our School rank in the Zilla Publised ', publishdate: '7/9/2024' }
            ]
        };
    }
};
</script>

<template>
    <div class="flex flex-col items-center justify-center p-5 my-1">
        <h1 class="text-[2.5rem] font-sans font-bold text-green-700 text-shadow-md m-4">Latest News</h1>

        <!-- notice section -->
        <div class="flex justify-center items-center lg:flex-row sm:flex-row flex-col p-1 w-full">
            <div class="flex flex-col items-start w-full h-[50vh] lg:h-[50vh] sm:h-[30vh] border border-slate-300 m-4 shadow-lg rounded-lg cursor-pointer">
                <div class="flex justify-center w-full items-center rounded-t-lg p-2 text-red-800 hover:text-slate-600 bg-green-200 duration-300">
                    <i class="pi pi-book" style="font-size: 2rem"></i>
                    <ol class="lg:text-[2.5rem] text-[1.5rem] font-bold text-shadow-md mx-4">
                        Notice Board
                    </ol>
                </div>
                <!-- notice list -->
                <div class="w-full h-full overflow-y-auto">
                    <ol class="list-none p-0 m-0">
                        <li v-for="(item, index) in notice" :key="index" class="border w-full p-1 font-semibold flex justify-between">
                            <span>
                                <h1 class="text-red-600">Notice For: {{ item.name }}</h1>
                                <h1>Publish Date: {{ item.publishdate }}</h1>
                            </span>
                            <button class="mx-5">
                                <i class="pi pi-file-pdf text-red-600 text-shadow" style="font-size: 2rem"></i>
                            </button>
                        </li>
                    </ol>
                </div>
            </div>
            <!-- upcomming event -->
            <div class="flex flex-col items-start w-full h-[50vh] lg:h-[50vh] sm:h-[30vh] border border-slate-300 m-4 shadow-lg rounded-lg cursor-pointer">
                <div class="flex justify-center w-full items-center rounded-t-lg p-2 text-green-700 hover:text-slate-600 bg-green-200 duration-300">
                    <i class="pi pi-calendar-plus" style="font-size: 2.5rem"></i>
                    <ol class="lg:text-[2.5rem] text-[1.5rem] font-bold text-shadow-md mx-4">
                        Upcoming Event
                    </ol>
                </div>
                <!-- Event list -->
                <div class="w-full h-full overflow-y-auto">
                    <ol class="list-none p-0 m-0">
                        <li v-for="(item, index) in upcommingevent" :key="index" class="border w-full p-1 font-semibold flex justify-between">
                            <span>
                                <h1 class="text-green-600">Notice For: {{ item.name }}</h1>
                                <h1>Publish Date: {{ item.publishdate }}</h1>
                            </span>
                        </li>
                    </ol>
                </div>
            </div>
            <div class="flex flex-col items-start w-full h-[50vh] lg:h-[50vh] sm:h-[30vh] border border-slate-300 m-4 shadow-lg rounded-lg cursor-pointer">
                <div class="flex justify-center w-full items-center rounded-t-lg p-2 text-cyan-600 hover:text-slate-600 bg-green-200 duration-300">
                    <i class="pi pi-calendar" style="font-size: 2.5rem"></i>
                    <ol class="lg:text-[2.5rem] text-[1.5rem] font-bold text-shadow-md mx-4">
                        News & Event
                    </ol>
                </div>
                <div class="w-full h-full overflow-y-auto">
                    <ol class="list-none p-0 m-0">
                        <li v-for="(item, index) in news" :key="index" class="border w-full p-1 font-semibold flex justify-between">
                            <span>
                                <h1 class="text-cyan-600">{{ item.name }}</h1>
                                <h1>Publish Date: {{ item.publishdate }}</h1>
                            </span>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</template>
