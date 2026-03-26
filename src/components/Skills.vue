<script setup>
    import { skills } from '../data/portfolioData'

    // const skillLevels = {
    //     "Vue.js": 93,
    //     "React.js": 85,
    //     "Java": 92,
    //     "Python": 90,
    //     "Appian": 83,
    //     ".NET": 88,
    //     "C#": 80,
    //     "Kotlin": 88,
    //     "PL/SQL": 79,
    //     "Oracle SQL": 75,
    //     "GenAI": 75,
    //     "C++": 78,
    //     "R": 76,
    //     "HTML": 80,
    //     "CSS": 80,
    //     "Bootstrap": 85,
    //     "Agile": 77,
    //     "Kanban": 87,
    //     "Github": 82,
    //     "Jira": 84,
    //     "Tortoise SVN": 81,
    //     "MS Office": 80
    // }

    const getIcon = (skill) => {
        const icons = {
            "Vue.js": "bi-code-slash",
            "React.js": "bi-filetype-js",
            "Java": "bi-cup-hot",
            "Python": "bi-filetype-py",
            "Kotlin": "bi-phone",
            "Appian": "bi-diagram-3",
            "C#": "bi-cpu",
            ".NET": "bi-gear",
            "PL/SQL": "bi-filetype-sql",
            "Oracle SQL": "bi-database",
            "GenAI": "bi-openai",
            "C++": "bi-filetype-cs",
            "CSS": "bi-filetype-css",
            "R": "bi-bar-chart",
            "HTML": "bi-filetype-html",
            "Bootstrap": "bi-bootstrap",
            "Kanban": "bi-kanban",
            "GitHub": "bi-github",
            "Jira": "bi-clipboard2-check",
            "Tortoise SVN": "bi-floppy",
            "MS Office": "bi-microsoft",
            "Basic AWS": "bi-amazon",
            "Basic Kubernetes": "bi-cloud"
        }
        return icons[skill] || "bi-stars"
    }
</script>

<template>
    <section id="skills" class="section glass" style="background:#ADBBDA">
        <div class="container">
            <h2 class="section-title text-center mb-2">Skills</h2>
            <div class="row">
                <div v-for="(categorySkills, category) in skills" :key="category" class="mb-3">
                    <h4 class="fw-bold mb-4 ">{{ category }}</h4>
                    <div class="row">
                        <div
                            v-for="skill in categorySkills"
                            :key="skill"
                            class="col-lg-3 col-md-4 col-6 mb-4"
                            data-aos="fade-right"
                        >
                            <div class="skill-card glass hover-card text-center p-3">

                                <i :class="`bi ${getIcon(skill)} fs-2 mb-2`"></i>

                                <p class="mb-0 fw-semibold">{{ skill }}</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .skills {
        background:#ADBBDA;
    }

    .skill-card {
        background:#8697C4;
        padding:20px;
        border-radius:10px;
        font-weight:600;
    }
</style>