<template>

    <div class="floating-social">
        <a href="https://www.linkedin.com/in/c59sarang/" target="_blank">
            <i class="bi bi-linkedin"></i>
        </a>
        <a href="https://github.com/Sarang59" target="_blank">
            <i class="bi bi-github"></i>
        </a>
    </div>

</template>

<style scoped>
    .floating-social {
        position: fixed;
        top: 40%;
        left: 10px;
        display: flex;
        flex-direction: column;
        z-index: 1000;
    }

    .floating-social a {
        background: #3D52A0;
        color: white;
        padding: 10px;
        margin: 5px 0;
        border-radius: 50%;
        text-align: center;
    }

    .floating-social a:hover {
        background: #7091E6;
    }
</style>