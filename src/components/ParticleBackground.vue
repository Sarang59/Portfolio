<!-- <script setup>
    import { onMounted } from 'vue'
    import { tsParticles } from "tsparticles"
    import { loadFull } from "tsparticles"

    onMounted(async () => {
        await loadFull(tsParticles)

        tsParticles.load("tsparticles", {
            background: {
                color: "#EDE8F5"
            },
            particles: {
                number: { value: 80 },
                color: { value: "#3D52A0" },
                links: {
                    enable: true,
                    color: "#7091E6"
                },
                move: {
                    enable: true,
                    speed: 1
                },
                    size: {
                    value: 3
                }
            }
        })
    })
</script> -->

<template>
    <div id="tsparticles"></div>
</template>

<style scoped>
    #tsparticles {
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
</style>