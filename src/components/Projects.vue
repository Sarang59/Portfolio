<script setup>
    import { projects } from '../data/portfolioData'
</script>

<template>
    <section id="projects" data-aos="fade-up" class="projects section glass bg-light-custom">
        <div class="container">
            <h2 class="section-title text-center mb-5">Projects</h2>
            <div class="row">
                <div
                    v-for="project in projects"
                    :key="project.title"
                    class="col-lg-6 col-md-6 mb-4"
                    data-aos="fade-up"
                >
                    <div class="project-card glass hover-card p-4 h-100">
                        <div class="project-header d-flex align-items-center justify-content-between mb-2">
                            <div class="d-flex align-items-center">
                                <i class="bi bi-folder2"></i>
                                <h4 class="fw-bold ms-2 mb-0">{{ project.title }}</h4>
                            </div>

                            <a
                                v-if="project.github_link"
                                :href="project.github_link"
                                target="_blank"
                                class="github-icon"
                            >
                                <i class="bi bi-github"></i>
                            </a>
                        </div>
                        <h6 class="text-dark mb-3">{{ project.description }}</h6>
                        <div class="mb-2">
                            <span
                                v-for="tech in project.tech"
                                :key="tech"
                                class="badge me-2 mb-2"
                                style="background:#7091E6; color:black"
                            >
                                {{ tech }}
                            </span>
                        </div>
                        <a
                            v-if="project.link"
                            :href="project.link"
                            target="_blank"
                            class="btn btn-dark mt-2"
                        >
                            <i class="bi bi-box-arrow-up-right"></i> View Project
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .projects {
        background:#EDE8F5;
    }

    .project-card {
        border:none;
        background:#8697C4;
        height: 350px;
        border-radius: 15px;
    }

    .badge {
        background:#7091E6;
        color:black;
        font-size:0.9rem;
        padding:6px 10px;
    }

    .bi-folder2{
        font-size: 2rem;
        color: #3D52A0;
    }

    .github-icon{
        font-size:2rem;
        color:black;
        transition:0.3s;
    }

    .github-icon:hover{
        color:#3D52A0;
        transform:scale(1.15);
    }
</style>