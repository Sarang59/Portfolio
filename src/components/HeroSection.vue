<script setup>
    import { personalInfo, socialLinks } from '../data/portfolioData'
</script>

<template>
    <section id="home" class="hero container-fluid py-5 mt-5">
        <div class="container-fluid">
            <div class="row align-items-center">
                <!-- Profile Photo -->
                <div class="col-lg-6 col-md-6 text-center mb-4">
                    <img
                        :src="personalInfo.photo"
                        class="profile-img"
                    />
                </div>

                <!-- Details -->
                <div class="col-lg-6 col-md-6">
                    <h1 class="display-5 fw-bold"> {{ personalInfo.name }} </h1>
                    <h3 class="mt-3 text-muted">
                        Building Scalable Digital Experiences
                    </h3>
                    <h4 class="mb-3"> {{ personalInfo.title }} </h4>
                    <div class="project-header d-flex align-items-center mb-2">
                        <i class="bi bi-geo bi-icon"></i>
                        <h5 class="ms-2 mb-0"> {{ personalInfo.location }} </h5>
                    </div>

                    <div class="project-header d-flex align-items-center mb-2">
                        <i class="bi bi-envelope bi-icon"></i>
                        <h5 class="ms-2 mb-0"> {{ personalInfo.email }} </h5>
                    </div>
                    
                    <div class="social-links">
                        <a
                            v-for="social in socialLinks"
                            :key="social.name"
                            :href="social.url"
                            target="_blank"
                            class="social-btn"
                        >
                            <i :class="`bi ${social.icon}`"></i> 
                            {{ social.name }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .hero{
        background: #EDE8F5;
    }

    h1{
        color:#3D52A0;
        font-weight:700;
    }

    .profile-img{
        max-width:280px;
        width: 100%;
        height: auto;
        border-radius:50%;
        border:8px solid #7091E6;
        box-shadow:0 10px 30px rgba(0,0,0,0.2);
    }

    .bi-icon {
        font-size: 1.5rem;
        color: #3D52A0;
    }

    .social-btn{
        display:inline-block;
        margin:8px;
        padding:10px 18px;
        background:#7091E6;
        color:black;
        border-radius:8px;
        text-decoration:none;
        font-weight:500;
    }

    .social-btn:hover{
        background:#3D52A0;
        color:white;
    }
</style>