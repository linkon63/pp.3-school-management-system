<template>
    <div
        id="hero"
        class="flex flex-col lg:flex-row pt-6 px-6 lg:px-20 mt-14 overflow-hidden cursor-pointer"
        style="background: linear-gradient(0deg, rgba(17, 160, 30, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(circle at 50% 50%, #11a01e 0%, #ffffff 100%); clip-path: ellipse(80% 100% at 50% 0%)"
    >
        <div class="mx-6 md:mx-10 mt-0 md:mt-2">
            <h1 class="text-6xl font-bold font-Archivo text-white text-shadow-md leading-tight">
                Welcome to <span class="font-bold font-Nerko text-[5rem] text-green-600 text-shadow-lg">DEV<span class="text-slate-200">KON</span></span>
            </h1>
            <p class="text-gray-800 text-2xl font-normal text-shadow-md">We’re pushing the boundaries of tech with innovative solutions and expert knowledge. Join us in shaping the future of development!</p>
            <Button label="Get Started" as="router-link" to="/" rounded class="!text-xl mt-8 !px-4"></Button>
        </div>
        <div class="flex justify-center md:justify-end">
            <img src="\demo\images\landing\heroimg.png" alt="Hero Image" class="w-[150vh] animate-float" />
        </div>
    </div>
</template>
