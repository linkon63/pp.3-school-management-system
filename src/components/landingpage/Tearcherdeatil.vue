<script>
export default {
    data() {
        return {
            // Sample data for teachers
            teachers: [
                {
                    name: 'Ayesha Akter',
                    profilePicture: 'https://png.pngtree.com/background/20220722/original/pngtree-professional-portrait-of-female-teachers-picture-image_1716167.jpg',
                    jobTitle: 'Mathematics Teacher',
                    email: 'ayesha.akter@example.com',
                    phoneNumber: '017-12345678',
                    subjects: ['Algebra', 'Geometry'],
                    qualifications: ['BSc in Mathematics', 'MSc in Mathematics']
                },
                {
                    name: 'Mohammad Hasan',
                    profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwDaJnS-guMSXwYUCQeKu5PH4KNucuEKE_hg&s',
                    jobTitle: 'Science Teacher',
                    email: 'mohammad.hasan@example.com',
                    phoneNumber: '017-23456789',
                    subjects: ['Physics', 'Chemistry'],
                    qualifications: ['BSc in Physics', 'MSc in Chemistry']
                },
                {
                    name: 'Rina Sultana',
                    profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4C-IdQBvvSi8ugVZdfByKN3rT35uAQBOgVg&s',
                    jobTitle: 'English Teacher',
                    email: 'rina.sultana@example.com',
                    phoneNumber: '017-34567890',
                    subjects: ['English Literature', 'Grammar'],
                    qualifications: ['BA in English', 'MA in English']
                },
                {
                    name: 'Abdul Kader',
                    profilePicture:
                        'https://static.vecteezy.com/system/resources/thumbnails/048/764/549/small/confident-middleaged-male-school-teacher-middle-eastern-descent-smiling-in-classroom-ideal-for-educational-professional-and-cultural-diversity-themes-photo.jpg',
                    jobTitle: 'History Teacher',
                    email: 'abdul.kader@example.com',
                    phoneNumber: '017-45678901',
                    subjects: ['Ancient History', 'Modern History'],
                    qualifications: ['BA in History', 'MA in History']
                },
                {
                    name: 'Fatima Begum',
                    profilePicture: 'https://www.shutterstock.com/image-photo/middleaged-teacher-pointing-something-isolated-260nw-559620475.jpg',
                    jobTitle: 'Geography Teacher',
                    email: 'fatima.begum@example.com',
                    phoneNumber: '017-56789012',
                    subjects: ['Physical Geography', 'Human Geography'],
                    qualifications: ['BSc in Geography', 'MSc in Geography']
                }
            ],
            // Responsive breakpoints for the slider
            responsiveOptions: [
                {
                    breakpoint: '1024px',
                    numVisible: 3,
                    numScroll: 1
                },
                {
                    breakpoint: '768px',
                    numVisible: 2,
                    numScroll: 1
                },
                {
                    breakpoint: '560px',
                    numVisible: 1,
                    numScroll: 1
                }
            ]
        };
    }
};
</script>

<template>
    <div class="my-10">
        <h1 class="lg:text-[2rem] md:text-[1.8rem] text-[1.4rem] text-center font-sans font-bold text-green-700 text-shadow-md m-4">Teachers Deatils</h1>

        <!-- ---------Teacher Card slider---------- -->
        <div class="p-4">
            <Carousel :value="teachers" numVisible="3" numScroll="1" :responsiveOptions="responsiveOptions" :autoplayInterval="4000">
                <template #item="slotProps">
                    <div class="card flex justify-center">
                        <div class="flex flex-col justify-center max-w-sm h-[45vh] border border-green-100 bg-white shadow-md shadow-green-200 rounded-lg overflow-hidden p-4">
                            <div class="flex items-center space-x-4">
                                <!-- Profile Picture -->
                                <img class="w-24 h-24 rounded-full object-cover" :src="slotProps.data.profilePicture" alt="Profile Picture" />
                                <div>
                                    <div class="text-green-500 font-bold text-xl">
                                        {{ slotProps.data.name }}
                                    </div>
                                    <div class="text-gray-900 font-semibold text-lg">
                                        {{ slotProps.data.jobTitle }}
                                        <span class="ml-2 text-gray-500 text-sm">→</span>
                                    </div>
                                </div>
                            </div>
                            <!-- Info -->
                            <div class="mt-4 text-gray-700">
                                <p>
                                    <strong>Email:</strong> <a :href="'mailto:' + slotProps.data.email">{{ slotProps.data.email }}</a>
                                </p>
                                <p><strong>Phone:</strong> {{ slotProps.data.phoneNumber }}</p>
                                <p><strong>Subjects:</strong> {{ slotProps.data.subjects.join(', ') }}</p>
                                <p><strong>Qualifications:</strong> {{ slotProps.data.qualifications.join(', ') }}</p>
                            </div>
                        </div>
                    </div>
                </template>
            </Carousel>
        </div>
    </div>
</template>
