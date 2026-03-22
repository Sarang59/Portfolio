<script setup>
    import { certifications } from '../data/portfolioData'
</script>

<template>
    <section id="certifications" data-aos="zoom-in" class="section glass">
        <div class="container">
            <h2 class="section-title">Certifications</h2>

            <div v-for="cert in certifications" :key="cert.name" class="card-custom">

                <h5>{{ cert.name }}</h5>
                <p>{{ cert.description }}</p>

            </div>

        </div>
    </section>
</template>