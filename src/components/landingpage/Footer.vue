<!-- <template>
    <div class="py-6 px-6 mx-0 mt-20 lg:mx-20">
        <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12 md:col-span-2">
                <a @click="smoothScroll('#home')" class="flex flex-wrap items-center justify-center md:justify-start md:mb-0 mb-4 cursor-pointer">
                    <img src="\demo\images\landing\devkon.png" alt="Hero Image" class="lg:w-[25vh] w-[10vh]" />
                </a>
            </div>

            <div class="col-span-12 md:col-span-10">
                <div class="grid grid-cols-12 gap-8 text-center md:text-left">
                    <div class="col-span-12 md:col-span-3">
                        <h4 class="font-medium text-2xl leading-normal mb-4 text-surface-900 dark:text-surface-0">Company</h4>
                        <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">About Us</a>
                        <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">News</a>
                        <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">Investor Relations</a>
                        <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">Careers</a>
                        <a class="leading-normal text-xl block cursor-pointer text-surface-700 dark:text-surface-100">Media Kit</a>
                    </div>

                    <div class="col-span-12 md:col-span-3">
                        <h4 class="font-medium text-2xl leading-normal mb-4 text-surface-900 dark:text-surface-0">Contact & Address</h4>
                        <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">Get Started</a>
                        <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">Learn</a>
                        <a class="leading-normal text-xl block cursor-pointer text-surface-700 dark:text-surface-100">Case Studies</a>
                    </div>

                    <div class="col-span-12 md:col-span-3">
                        <h4 class="font-medium text-2xl leading-normal mb-4 text-surface-900 dark:text-surface-0">Community</h4>
                        <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">Discord</a>
                        <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">Events<img src="/demo/images/landing/new-badge.svg" class="ml-2" /></a>
                        <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">FAQ</a>
                        <a class="leading-normal text-xl block cursor-pointer text-surface-700 dark:text-surface-100">Blog</a>
                    </div>

                    <div class="col-span-12 md:col-span-3">
                        <h4 class="font-medium text-2xl leading-normal mb-4 text-surface-900 dark:text-surface-0">Legal</h4>
                        <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">Brand Policy</a>
                        <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">Privacy Policy</a>
                        <a class="leading-normal text-xl block cursor-pointer text-surface-700 dark:text-surface-100">Terms of Service</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template> -->
<template>
    <footer class="bg-green-900 text-white py-8 px-4">
        <div class="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
            <!-- Column 1: -->
            <div>
                <h2 class="text-lg font-bold mb-4 text-white">ABOUT US</h2>
                <ul class="space-y-2">
                    <li>
                        <a href="#" class="hover:text-green-400 flex flex-col justify-start items-start text-[2rem] font-Archivo">
                            <img src="\demo\images\landing\devkon.png" alt="" class="w-[20vh] my-2" />
                            DevKon</a
                        >
                    </li>
                </ul>
            </div>
            <!-- Column 4: Schools -->
            <div>
                <h2 class="text-lg font-bold mb-4 text-white">Contact & Address</h2>
                <ul class="space-y-2">
                    <li><a href="#" class="hover:text-green-400">Phone: +880 1752-352354</a></li>
                    <li><a href="#" class="hover:text-green-400">Email: devkon@gmail.com</a></li>
                    <li><a href="#" class="hover:text-green-400">Address: Dhaka,Bangladesh</a></li>
                </ul>
            </div>
            <!-- Column 3: Quick Links -->
            <div>
                <h2 class="text-lg font-bold mb-4 text-white">QUICK LINKS</h2>
                <ul class="space-y-2">
                    <li><a href="#" class="hover:text-green-400">Moodle</a></li>
                    <li><a href="#" class="hover:text-green-400">Library</a></li>
                    <li><a href="#" class="hover:text-green-400">Email</a></li>
                    <li><a href="#" class="hover:text-green-400">Feedback</a></li>
                </ul>
            </div>

            <!-- Column 4: Contact Info -->
            <div class="col-span-full sm:col-span-1 mt-8 sm:mt-0">
                <!-- Social Media Links -->
                <div class="flex space-x-3 mt-4">
                    <a href="#" class="bg-green-600 hover:bg-green-700 p-2 rounded-full"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="bg-green-600 hover:bg-green-700 p-2 rounded-full"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="bg-green-600 hover:bg-green-700 p-2 rounded-full"><i class="fab fa-instagram"></i></a>
                    <a href="#" class="bg-green-600 hover:bg-green-700 p-2 rounded-full"><i class="fab fa-youtube"></i></a>
                    <a href="#" class="bg-green-600 hover:bg-green-700 p-2 rounded-full"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    </footer>
</template>
