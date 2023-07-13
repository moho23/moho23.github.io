<template>
    <RouterView/>
    <div class="bg-square"></div>
    <div id="preloader" class="preloader">
        <div class="preloader-animation">
            <div class="preloader-spinner"/>
        </div>
    </div>
</template>

<script setup lang="ts">
window.onload = () => {
    setTimeout(() => {
        document.getElementById("preloader").style.display = "none"
    }, 2000)
}
</script>

<style lang="scss">
@import "@/assets/fontDocument.css";
@import "style.scss";
</style>
