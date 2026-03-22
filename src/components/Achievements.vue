<script setup>
    import { achievements } from '../data/portfolioData'
</script>

<template>
    <section id="achievements" data-aos="fade-up" class="achievements section glass bg-light-custom">
        <div class="container">
            <h2 class="section-title">Achievements</h2>
            <ul>
                <li class="custom-achievement" v-for="ach in achievements" :key="ach">
                    {{ ach }}
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
    .achievements {
        background:#ADBBDA;
    }

    .custom-achievement{
        font-size: 1.2rem;
    }
</style>
