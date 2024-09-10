<script setup>
import Galleria from 'primevue/galleria';
import { ref } from 'vue';

const imgdata = ref([
    {
        image: './PhotoGalary/bookday.jpg'
    },
    {
        image: './PhotoGalary/cultarprogram.jpg'
    },
    {
        image: './PhotoGalary/21-February-5.jpg'
    },
    {
        image: './PhotoGalary/16-december.jpg'
    }
]);

// Map imgdata to create a new array that only includes image source and name
const images = imgdata.value.map((item) => ({
    imageSrc: item.image,
    name: item.name
}));
</script>

<template>
    <div class="my-10">
        <h1 class="lg:text-[2rem] md:text-[1.8rem] text-[1.4rem] text-center font-sans font-bold text-green-700 text-shadow-md m-4">Photo Gallery</h1>
        <Galleria :value="images" :numVisible="5" :circular="true" :autoPlay="true" :transitionInterval="4000">
            <template #item="slotProps">
                <img :src="slotProps.item.imageSrc" :alt="slotProps.item.name" class="lg:w-[90vh] lg:h-[50vh] w-[40vh] h-[24vh] rounded-md" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.imageSrc" :alt="slotProps.item.name" class="lg:w-[20vh] lg:h-[20vh] w-[10vh] h-[10vh]" />
            </template>
        </Galleria>
    </div>
</template>
