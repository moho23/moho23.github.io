<template>
    <div class="my-resume-main-page">
        <div v-click-out-side-bar="clickOutSideBar" :class="{ 'open-sidebar': isOpenSideBar }" class="sidebar-div">
            <Sidebar @close-sidebar="onCloseSidebar"/>
        </div>
        <div class="resume-container">
            <div class="header-container">
                <Header @change-burger-status="openSideBar"/>
            </div>
            <AboutMe/>
            <Footer/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Header from "@/components/header/Header.vue";
import AboutMe from "@/views/aboutMe/AboutMe.vue";
import Footer from "@/components/footer/Footer.vue";
import Sidebar from "@/components/sidebar/Sidebar.vue";
import {ref} from "vue";
import vClickOutside from "click-outside-vue3";

const isOpenSideBar = ref<boolean>(false)
const vClickOutSideBar = vClickOutside.directive;

function openSideBar(event: any) {
    console.log(2)
    isOpenSideBar.value = !isOpenSideBar.value
    console.log(isOpenSideBar.value)
}

function clickOutSideBar(event: any) {
    if (isOpenSideBar.value && event.target.id != "burgerMenu" && event.target.id != "burgerMenuDiv") {
        isOpenSideBar.value = false
    }
}

function onCloseSidebar() {
    isOpenSideBar.value = false
    isOpenSideBar.value = false
}
</script>

<style lang="scss" scoped>
@import "MainPage.scss";
</style>