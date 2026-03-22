<script setup>
    import { ref, onMounted } from 'vue'

    const activeSection = ref("home")
    const isMenuOpen = ref(false)
    
    const navItems = [
        { name: "Home", id: "home" },
        { name: "Skills", id: "skills" },
        { name: "Projects", id: "projects" },
        { name: "Experience", id: "experience" },
        { name: "Education", id: "education" },
        { name: "Certifications", id: "certifications" },
        { name: "Achievements", id: "achievements" },
        { name: "Contact", id: "contact" }
    ]

    const scrollToSection = (id) => {
        const section = document.getElementById(id)

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        }

        activeSection.value = id
        isMenuOpen.value = false
    }

    onMounted(() => {
        const sections = navItems.map(item => document.getElementById(item.id))
        window.addEventListener("scroll", () => {
            let current = "home"
            sections.forEach((section, index) => {
                if (!section) return

                const sectionTop = section.offsetTop - 120
                if (window.scrollY >= sectionTop) {
                    current = navItems[index].id
                }

            })
            activeSection.value = current
        })
    })
</script>

<template>
    <nav class="navbar fixed-top navbar-dark shadow" style="background:#3D52A0">
        <div class="container">
            <a class="navbar-brand fw-bold">Sarang Dinesh Chandwadkar</a>

            <!-- Desktop Menu -->
            <ul class="navbar-nav ms-auto desktop-menu">
                <li v-for="item in navItems" :key="item.id" class="nav-item">
                    <a
                        class="nav-link"
                        :class="{ active: activeSection === item.id }"
                        @click="scrollToSection(item.id)"
                    >
                        {{ item.name }}
                    </a>
                </li>
            </ul>

            <!-- Mobile Toggle -->
            <button
                class="navbar-toggler mobile-toggle"
                type="button"
                @click="isMenuOpen = !isMenuOpen"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
    </nav>

    <!-- Dropdown menu (separate from navbar) -->
    <div
        class="mobile-menu"
        :class="{ show: isMenuOpen }"
    >
        <ul class="nav flex-column text-center">
            <li v-for="item in navItems" :key="item.id">
                <a
                    class="nav-link"
                    :class="{ active: activeSection === item.id }"
                    @click="scrollToSection(item.id)"
                >
                    {{ item.name }}
                </a>
            </li>
        </ul>
    </div>
</template>

<style scoped>
    .nav-link {
        cursor: pointer;
    }

    .nav-link.active {
        border-bottom: 2px solid white;
    }

    /* DESKTOP NAV */
    .desktop-menu {
        display: flex;
        flex-direction: row;
        gap: 15px;
    }

    /* MOBILE TOGGLE */
    .mobile-toggle {
        display: none;
    }

    /* Mobile dropdown */
    .mobile-menu {
        position: fixed;
        top: 70px;
        left: 0px;
        width: 100%;

        background: #3D52A0;

        transform: translateY(-120%);
        transition: transform 0.3s ease;

        z-index: 999;
    }

    .mobile-menu.show {
        transform: translateY(0);
    }

    .mobile-menu a {
        color: white;
        padding: 15px;
        display: block;
    }

    .mobile-menu a:hover {
        background: #7091E6;
    }

    /* Hide dropdown on desktop */
    @media (max-width: 991px) {
        .desktop-menu {
            display: none;
        }

        .mobile-toggle {
            display: block;
        }
    }
</style>

