<script setup>
import { computed, ref } from 'vue';

const currentDate = ref(new Date());
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// List of Bangladesh public holidays for the current year
const holidays = computed(() => getBangladeshHolidays(currentDate.value.getFullYear()));

const currentMonthYear = computed(() => {
    return currentDate.value.toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric'
    });
});

const daysInMonth = computed(() => {
    const year = currentDate.value.getFullYear();
    const month = currentDate.value.getMonth() + 1; // Note the +1 to get the correct month
    return new Date(year, month, 0).getDate(); // Get the total days in the current month
});

const firstDayOfMonth = computed(() => {
    const year = currentDate.value.getFullYear();
    const month = currentDate.value.getMonth(); // No +1 because we need the correct month's first day
    return new Date(year, month, 1).getDay(); // Get the day index (0-6) of the first day of the month
});

const blankDays = computed(() => {
    return Array.from({ length: firstDayOfMonth.value }); // Create an array for blank days based on the first day
});

const getBangladeshHolidays = (year) => {
    const holidaysList = [];

    // Fixed-date holidays
    holidaysList.push({ date: `${year}-02-21`, name: 'Shaheed Day & International Mother Language Day' });
    holidaysList.push({ date: `${year}-03-17`, name: "Bangabandhu Sheikh Mujibur Rahman's Birthday" });
    holidaysList.push({ date: `${year}-03-26`, name: 'Independence Day' });
    holidaysList.push({ date: `${year}-04-14`, name: 'Pohela Boishakh' });
    holidaysList.push({ date: `${year}-05-01`, name: 'Labour Day' });
    holidaysList.push({ date: `${year}-08-15`, name: 'National Mourning Day' });
    holidaysList.push({ date: `${year}-12-16`, name: 'Victory Day' });
    holidaysList.push({ date: `${year}-12-25`, name: 'Christmas Day' });

    // Islamic holidays calculated based on Hijri to Gregorian conversion (fixed dates for now)
    holidaysList.push({ date: `${year}-04-10`, name: 'Eid-ul-Fitr (Estimate)' });
    holidaysList.push({ date: `${year}-06-17`, name: 'Eid-ul-Adha (Estimate)' });
    holidaysList.push({ date: `${year}-07-23`, name: 'Ashura (Estimate)' });
    holidaysList.push({ date: `${year}-09-14`, name: 'Eid-e-Milad-un-Nabi (Estimate)' });
    holidaysList.push({ date: `${year}-03-24`, name: 'Shab-e-Barat (Estimate)' });

    // Other religious holidays (fixed date for 2024 as an example)
    holidaysList.push({ date: `${year}-05-23`, name: 'Buddha Purnima' });
    holidaysList.push({ date: `${year}-10-13`, name: 'Durga Puja (Bijoya Dashami)' });

    return holidaysList;
};

const previousMonth = () => {
    const date = new Date(currentDate.value); // Copy the current date
    date.setMonth(date.getMonth() - 1); // Subtract 1 month
    currentDate.value = date; // Update the reactive reference
};

const nextMonth = () => {
    const date = new Date(currentDate.value); // Copy the current date
    date.setMonth(date.getMonth() + 1); // Add 1 month
    currentDate.value = date; // Update the reactive reference
};

const isToday = (date) => {
    const today = new Date();
    const selectedDate = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth(), date);
    return selectedDate.toDateString() === today.toDateString();
};

const isHoliday = (date) => {
    const currentMonth = currentDate.value.getMonth() + 1; // JS months are 0-based, so add 1
    const currentYear = currentDate.value.getFullYear();
    const formattedDate = `${currentYear}-${String(currentMonth).padStart(2, '0')}-${String(date).padStart(2, '0')}`;

    const holiday = holidays.value.find((holiday) => holiday.date === formattedDate);
    return holiday ? holiday.name : null;
};
</script>

<template>
    <section class="p-6 bg-white shadow-md rounded-lg">
        <h3 class="text-xl font-semibold">Calender</h3>

        <div class="bg-white shadow-md p-4 rounded-md">
            <!-- Calendar -->
            <div class="max-w-md mx-auto mt-10">
                <div class="flex items-center justify-between mb-4">
                    <button @click="previousMonth" class="px-4 py-2 bg-blue-500 text-white rounded-md">Previous</button>
                    <h2 class="text-xl font-bold">{{ currentMonthYear }}</h2>
                    <button @click="nextMonth" class="px-4 py-2 bg-blue-500 text-white rounded-md">Next</button>
                </div>

                <div class="grid grid-cols-7 gap-2 text-center text-gray-600">
                    <div v-for="day in daysOfWeek" :key="day" class="font-bold">{{ day }}</div>
                </div>

                <div class="grid grid-cols-7 gap-2 text-center mt-4">
                    <div v-for="blank in blankDays" :key="blank" class="text-transparent">-</div>
                    <div
                        v-for="date in daysInMonth"
                        :key="date"
                        class="py-2 px-4 rounded-full relative"
                        :class="{
                            'bg-blue-200': isToday(date),
                            'bg-red-500': isHoliday(date)
                        }"
                    >
                        {{ date }}
                        <span v-if="isHoliday(date)" class="absolute text-xs font-bold text-white bottom-0 right-0"> {{ isHoliday(date) }} </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
