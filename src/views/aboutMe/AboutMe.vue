<template>
    <div class="about-me-cmp">
        <div class="about-me-content">
            <div class="my-detail">
                <div class="image-div">
                    <img class="me" :src="rango" alt="rango">
                </div>
                <div class="detail">
                    <h4 class="job-title">Software Engineer</h4>
                    <h1 class="name">Mohammadhossein Hosseinpour</h1>
                    <h5 class="description">Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis,
                        risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi.
                        Quisque imperdiet lacinia urna, a placerat sapien pretium eu.</h5>
                    <div class="btn-gp">
                        <button class="my-btn primary">Download CV</button>
                        <button class="my-btn simple">Contact</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import rango from "@/assets/images/rango.jpg"

const reff = ref()
</script>

<style lang="scss" scoped>
@import "AboutMe.scss";
</style>