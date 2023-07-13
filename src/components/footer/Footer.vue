<template>
    <div class="my-resume-footer">
        <div class="links-div">
            <a class="footer-link" target="_blank" :href="`https://github.com/moho23`">Github</a>
            <a class="footer-link" target="_blank" :href="`https://www.linkedin.com/in/mamahossein/`">LinkedIn</a>
            <a class="footer-link" target="_blank" href="mailto:78mohammadhossein@gmail.com">Email</a>
        </div>
        <div class="copy-write">
            <p>© {{ new Date().getFullYear() }} All rights reserved by mamahossein</p>
        </div>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import "Footer.scss";
</style>