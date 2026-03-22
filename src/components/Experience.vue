<script setup>
    import { professionalExperience } from '../data/portfolioData'
</script>

<template>
    <section id="experience" data-aos="fade-up" class="experience section glass">
        <div class="container">
            <h2 class="section-title">Professional Experience</h2>

            <div v-for="job in professionalExperience" :key="job.companyName" class="proExp glass p-4 mb-4 hover-card">
                <h5>{{ job.designation }} - {{ job.companyName }}</h5>

                <p>{{ job.location }} | {{ job.startDate }} - {{ job.endDate }}</p>

                <ul>
                    <li v-for="point in job.keyHighlights" :key="point">
                        {{ point }}
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .experience {
        background:#ADBBDA;
    }

    .proExp {
        border-radius: 15px;
    }
</style>
