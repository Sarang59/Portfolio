<script setup>
    import { education } from '../data/portfolioData'
</script>

<template>
    <section id="education" data-aos="fade-left" class="education section glass bg-light-custom">
        <div class="container">

            <h2 class="section-title">Education</h2>

            <div v-for="edu in education" :key="edu.degree" class="card-custom">
                <h5>{{ edu.degree }} - {{ edu.specialisation }}</h5>
                <p>{{ edu.university }}</p>
                <p>{{ edu.location }}</p>
                <p>{{ edu.startDate }} - {{ edu.endDate }}</p>
            </div>

        </div>
    </section>
</template>

<style scoped>
    .education {
        background: #EDE8F5;
    }
</style>
