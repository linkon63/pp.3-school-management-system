<script>
function smoothScroll(id) {
    document.body.click();
    document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
    });
}

export default {
    data() {
        return {
            //  array of navbar items
            items: [
                { name: 'Home', path: '' },
                { name: 'Library ', path: '' },
                { name: 'About', path: '' }
            ],
            isNavbarHidden: false,
            lastScrollPosition: 0
        };
    },
    // Nav bar hid and show with Scroll
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const currentScrollPosition = window.pageYOffset;

            if (currentScrollPosition > this.lastScrollPosition) {
                // User is scrolling down, hide navbar
                this.isNavbarHidden = true;
            } else {
                // User is scrolling up, show navbar
                this.isNavbarHidden = false;
            }

            this.lastScrollPosition = currentScrollPosition;
        },
        smoothScroll(id) {
            document.body.click();
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
};
</script>

<template>
    <div :class="{ '-translate-y-full': isNavbarHidden }" class="fixed z-50 top-0 flex bg-white p-8 h-[6vh] items-center justify-between w-full transition-transform duration-300">
        <a class="flex items-center" href="#">
            <img src="\demo\images\landing\devkon.png" alt="Hero Image" class="lg:w-[20vh] p-2 w-[10vh]" />
        </a>
        <Button
            class="lg:!hidden"
            text
            severity="secondary"
            rounded
            v-styleclass="{ selector: '@next', enterFromClass: 'hidden', enterActiveClass: 'animate-scalein', leaveToClass: 'hidden', leaveActiveClass: 'animate-fadeout', hideOnOutsideClick: true }"
        >
            <i class="pi pi-bars !text-2xl"></i>
        </Button>
        <div class="items-center bg-surface-0 dark:bg-surface-900 grow justify-between hidden lg:flex absolute lg:static w-full left-0 top-full px-12 lg:px-0 z-20 rounded-border">
            <ul class="list-none p-0 m-0 flex lg:items-center select-none flex-col lg:flex-row cursor-pointer gap-1">
                <li v-for="(item, index) in items" :key="index">
                    <router-link :to="{ path: item.path }" class="px-2 py-2 text-green-600 dark:text-green-300 text-lg font-Archivo text-shadow hover:bg-green-200 hover:rounded-3xl duration-300">{{ item.name }}</router-link>
                </li>
            </ul>

            <div class="flex border-t lg:border-t-0 border-surface py-4 lg:py-0 mt-4 lg:mt-0 gap-2">
                <Button label="Login" text as="router-link" to="/auth/login" rounded></Button>
                <Button label="Register" to="/auth/login" rounded></Button>
            </div>
        </div>
    </div>
    <!-- </nav> -->
</template>
