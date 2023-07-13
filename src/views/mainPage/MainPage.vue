<template>
    <div class="my-resume-main-page">
        <div class="resume-container">
            <Header/>
            <AboutMe/>
            <Footer/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Header from "@/components/header/Header.vue";
import AboutMe from "@/views/aboutMe/AboutMe.vue";
import Footer from "@/components/footer/Footer.vue";</script>

<style lang="scss" scoped>
@import "MainPage.scss";
</style>