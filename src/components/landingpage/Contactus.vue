<template>
    <div class="min-h-screen flex items-center justify-center bg-white p-4">
        <div class="bg-white shadow-lg rounded-lg w-full max-w-6xl flex flex-col md:flex-row">
            <!-- Left Image Section (Hidden on small screens) -->
            <div class="w-full md:w-1/2 hidden md:block">
                <img src="https://www.genuitysystems.com/images/email.png" alt="Contact Image" class="object-cover h-full w-full rounded-l-lg" />
            </div>

            <!-- Form Section -->
            <div class="w-full md:w-1/2 p-6 sm:p-10 bg-green-200 lg:rounded-r-lg rounded-lg">
                <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">SEND US A MASSAGE</h2>

                <!-- Name (First and Last) -->
                <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4">
                    <div class="w-full md:w-1/2">
                        <label class="block text-gray-700 text-sm font-bold mb-1" for="first-name"> First Name<span class="text-red-500">*</span> </label>
                        <input id="first-name" type="text" class="w-full px-4 py-2 border border-gray-300 shadow-inner shadow-black rounded-md focus:outline-none focus:ring focus:ring-green-500 focus:border-green-500" />
                    </div>
                    <div class="w-full md:w-1/2">
                        <label class="block text-gray-700 text-sm font-bold mb-1" for="last-name"> Last Name<span class="text-red-500">*</span> </label>
                        <input id="last-name" type="text" class="w-full px-4 py-2 border border-gray-300 shadow-inner shadow-black rounded-md focus:outline-none focus:ring focus:ring-green-500 focus:border-green-500" />
                    </div>
                </div>

                <!-- Email -->
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-1" for="email"> Email<span class="text-red-500">*</span> </label>
                    <input id="email" type="email" class="w-full px-4 py-2 border border-gray-300 shadow-inner shadow-black rounded-md focus:outline-none focus:ring focus:ring-green-500 focus:border-green-500" />
                </div>

                <!-- Message -->
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-1" for="message"> Type your message here<span class="text-red-500">*</span> </label>
                    <textarea id="message" rows="4" class="w-full px-4 py-2 border min-h-[15vh] max-h-[15vh] border-gray-300 shadow-inner shadow-black rounded-md focus:outline-none focus:ring focus:ring-green-500 focus:border-green-500"></textarea>
                </div>

                <!-- Submit Button -->
                <div class="flex justify-center md:justify-start">
                    <button class="bg-green-500 text-white font-bold py-2 px-6 rounded-md hover:bg-green-600 shadow-md shadow-black focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 duration-300">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>
