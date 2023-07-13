<template>
    <div class="my-resume-header">
        <div class="my-detail">
            <div class="my-img">M</div>
            <span class="fullname">Mamahossein</span>
        </div>
        <div class="header-item-div">
            <template v-for="item in headerOptions" :key="item.id">
                <router-link class="header-link" :to="item.route">
                    {{
                        item.name
                    }}
                </router-link>
            </template>
        </div>
        <div class="menu-icon">
            <img :src="menuIcon" alt="menu">
        </div>
    </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import menuIcon from "@/assets/images/icons/burger.svg"

const headerOptions = ref<{
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
@import "Header.scss";
</style>