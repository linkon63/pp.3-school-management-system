<script>
export default {
    data() {
        return {
            items: [
                {
                    name: 'Library',
                    imgSrc: './landimg/Libary.jpg' // Path from the public folder
                },
                {
                    name: 'Computer Lab',
                    imgSrc: './landimg/computerlab.jpg' // Path from the public folder
                },
                {
                    name: 'Science Lab',
                    imgSrc: './landimg/sciencelaboratories.jpg' // Path from the public folder
                },
                {
                    name: 'Music & Art Room',
                    imgSrc: './landimg/musicroom.jpg' // Path from the public folder
                },
                {
                    name: 'Auditorium',
                    imgSrc: './landimg/aditorium.jpg' // Path from the public folder
                },
                {
                    name: 'Conference Room',
                    imgSrc: './landimg/conferenceroom.jpg' // Path from the public folder
                },
                {
                    name: 'Transportation ',
                    imgSrc: './landimg/transport.png' // Path from the public folder
                },
                {
                    name: 'Playground',
                    imgSrc: './landimg/playground.jpg' // Path from the public folder
                }
            ]
        };
    }
};
</script>

<template>
    <h1 class="lg:text-[2rem] md:text-[1.8rem] text-[1.4rem] text-center font-sans font-bold text-green-700 text-shadow-md m-4">Campus Facilities</h1>
    <ul class="flex flex-wrap justify-center m-2 gap-4 text-[1.4rem] hover:text-red-600">
        <li v-for="(item, index) in items" :key="index" class="max-w-sm rounded overflow-hidden shadow-md shadow-gray-500 relative hover:shadow-black duration-300">
            <img class="lg:w-[30vh] lg:h-[20vh] sm:h-[12vh] w-[20vh] h-[15vh] object-cover hover:border duration-300" :src="item.imgSrc" :alt="item.name" />

            <div class="absolute inset-0 bg-gray-300 opacity-60 rotate-45 lg:w-[50vh] w-[40vh]"></div>
            <div class="absolute inset-0 flex justify-end p-2">
                <h2 class="font-Archivo w-full text-end font-bold text-shadow text-black lg:text-[1.2rem] xl:text-[1rem] sm:text-[1.1rem] text-[0.8rem] hover:text-green-900 duration-300 bg-transparent">{{ item.name }}</h2>
            </div>
        </li>
    </ul>
</template>
