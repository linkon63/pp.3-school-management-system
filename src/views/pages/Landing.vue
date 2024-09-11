<script setup>
import Activis from '@/components/landingpage/Activis.vue';
import Campusdeatils from '@/components/landingpage/Campusdeatils.vue';
import Services from '@/components/landingpage/Campusfacilities.vue';
import Contactus from '@/components/landingpage/Contactus.vue';
import Footer from '@/components/landingpage/Footer.vue';
import Herosection from '@/components/landingpage/Herosection.vue';
import Navbar from '@/components/landingpage/Navbar.vue';
import Newssection from '@/components/landingpage/Newssection.vue';
import Photogellary from '@/components/landingpage/Photogellary.vue';
import Tearcherdeatil from '@/components/landingpage/Tearcherdeatil.vue';

function smoothScroll(id) {
    document.body.click();
    document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
    });
}
</script>

<template>
    <div class="bg-surface-0 dark:bg-surface-900">
        <div id="home" class="landing-wrapper overflow-hidden">
            <!-- Navbar -->
            <Navbar />
            <!-- Hero section -->
            <Herosection />
            <!-- Cumpus Deatils -->
            <Campusdeatils />
            <!-- News Section -->
            <Newssection />

            <!-- Activits -->
            <Activis />

            <!-- Service section -->
            <Services />

            <!-- Photo section -->
            <Photogellary />
            <!-- teachers deatils -->
            <Tearcherdeatil />
            <!-- Conttact Us Form -->
            <Contactus />
            <!-- footer  -->
            <Footer />
        </div>
    </div>
</template>
