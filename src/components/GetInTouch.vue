<script setup>
    const email = "c59sarang@email.com"

    const sendEmail = () => {
        window.location.href = `mailto:${email}`
    }
</script>

<template>
    <section id="contact" class="contact-section">
        <div class="container text-center">
            <h2 class="section-title">Let's Build Something Together</h2>

            <h5 class="section-subtitle">
                Interested in collaborating, discussing opportunities, or building scalable digital solutions?
                Let's connect.
            </h5>

            <div class="contact-buttons">
                <a
                    href="mailto:c59sarang@email.com"
                    class="btn btn-contact"
                >
                    <i class="bi bi-envelope-fill"></i>
                        Email Me
                </a>

                <a
                    href="https://www.linkedin.com/in/c59sarang/"
                    target="_blank"
                    class="btn btn-contact"
                >

                    <i class="bi bi-linkedin"></i>
                        Connect on LinkedIn
                </a>
            </div>

            <h5 class="availability">
                Open to full-time Software Engineering and Digital Transformation roles in Australia. <br />
                Currently holding a Temporary Graduate Visa (subclass 485) valid until December 2028.
            </h5>
        </div>

    </section>

</template>

<style scoped>

.contact-section{
    padding:100px 0;
    background:#EDE8F5;
    color:white;
}

.section-title{
    font-size:2.5rem;
    font-weight:700;
    margin-bottom:15px;
}

.section-subtitle{
    font-size:1.1rem;
    max-width:600px;
    margin:auto;
    margin-bottom:30px;
    color:#7091E6;
}

.contact-buttons{
    display:flex;
    justify-content:center;
    gap:20px;
    flex-wrap:wrap;
}

.btn-contact{
    background:#7091E6;
    color:black;
    padding:12px 25px;
    border-radius:10px;
    font-weight:600;
    transition:0.3s;
}

.btn-contact:hover{
    transform:translateY(-3px);
    background:#ADBBDA;
    color: black;
}

.availability{
    margin-top:30px;
    margin-bottom:35px;
    font-size:1rem;
    color:#7091E6;
    font-weight:500;
}

</style>