<template>
    <div class="my-resume-sidebar">
        <span class="spacer"></span>
        <template v-for="item in sidebarOptions" :key="item.id">
            <router-link class="header-link" :to="item.route">
                {{
                    item.name
                }}
            </router-link>
        </template>
    
    </div>
</template>

<script lang="ts" setup>

import {ref} from "vue";

const sidebarOptions = ref<{
    id: number,
    route: string,
    name: string,
}[]>([
    {
        id: 1,
        name: "About Me",
        route: "#about-me"
    },
    {
        id: 2,
        name: "Resume/CV",
        route: "#resume"
    },
    {
        id: 3,
        name: "Portfolio",
        route: "#portfolio"
    },
    {
        id: 4,
        name: "Blog",
        route: "#blog"
    },
    {
        id: 5,
        name: "Contact",
        route: "#contact"
    },
])
</script>

<style lang="scss" scoped>
@import "Sidebar.scss";
</style>