<script setup>
import SideBars from './SideBars.vue';
</script>
<template >
    <div class="flex">

        <SideBars></SideBars>
        <div class="layout-main">
            <router-view></router-view>
        </div>
    </div>
</template>
