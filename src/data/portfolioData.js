import profileImage from '../assets/Profile_Image.jpeg'
import myResume from '../assets/Sarang_Chandwadkar_Resume.pdf'

export const personalInfo = {
    name: "Sarang Chandwadkar",
    title: "Software & Low-Code Developer",
    location: "Melbourne, Australia",
    email: "c59sarang@gmail.com",
    phone: "+61 468336084",
    photo: profileImage
}

export const socialLinks = [
    {
        name: "LinkedIn",
        icon: "bi-linkedin",
        url: "https://www.linkedin.com/in/c59sarang/"
    },
    {
        name: "GitHub",
        icon: "bi-github",
        url: "https://github.com/Sarang59"
    },
    {
        name: "Resume",
        icon: "bi-file-earmark-person",
        url: myResume
    }
]

export const skills = {
    "Languages": ["Python", "C++", "Java", "R", "Kotlin"],

    "Low Code / No Code": ["Appian"],

    "Frameworks": [".NET"],

    "AI & ML": ["GenAI"],

    "Web & Database": [
        "HTML",
        "CSS",
        "Bootstrap",
        "PL/SQL",
        "Oracle SQL",
        "React.js",
        "Vue.js"
    ],

    "Tools": [
        "Agile",
        "GitHub",
        "Jira",
        "Tortoise SVN",
        "MS Office"
    ]
}

export const projects = [
    {
        title: "Dynamic Query for Billing reports",
        description: "Designed and delivered a C#/.NET application at Persistent Systems for a leading banking client to dynamically generate SQL-based billing reports, automate CSV/XLSX report delivery with audit logging, and independently manage end-to-end requirements, development, client communication, and production deployment",
        tech: ["C#", ".NET", "Oracle SQL", "DevExpress"],
        link: ""
    },
    {
        title: "PwC LSF",
        description: "Developed enterprise application for banking client. Worked on filtering out the data by using different conditions as per business requirement. Managed live production data in a fast-changing environment, enabling simultaneous feature development and real-time client data delivery, ensuring uninterrupted service despite weekly requirement changes.",
        tech: ["C#", ".NET", "Oracle SQL"],
        link: ""
    },
    {
        title: "Eat Smart Hub (Vue.js)",
        description: "Developed a Vue.js and Firebase-based nutrition awareness platform at Monash University, implementing end-to-end features including authentication, appointment booking, calendar scheduling, map integration, email services, cloud functions, and Gemini API integration.",
        tech: ["Vue.js", "Node.js", "Firebase Authentication", "Firebase database", "Firebase Cloud Functions", "Firebase Storage", "Mailgun", "Chart.js", "jsPDF", "Mapbox API", "FulCalendar API", "Gemini API"],
        link: "https://eatsmarthub.pages.dev/",
        github_link: "https://github.com/Sarang59/Eat-Smart-Hub"
    },
    {
        title: "Monash Hub",
        description: "Developed core modules of a Kotlin-based student community application at Monash University, including authentication, job listings, and analytics dashboards, while collaborating in a team of four and earning academic recognition for UI/UX excellence along with tutoring offer.",
        tech: ["Kotlin", "Firebase"],
        link: "https://drive.google.com/file/d/1jeWaSJwKg3UvorkvOWorbDSQsmjIiz5C/view",
        github_link: "https://github.com/Sarang59/Monash-Hub"
    },
    {
        title: "Loan Origination System",
        description: "Designed and developed an end-to-end Loan Origination System using the Appian platform to automate loan application intake, eligibility assessment, multi-level approvals, document management, and administrative insights dashboards.",
        tech: ["Appian"],
        link: ""
    },
    {
        title: "Invoice Management System",
        description: "Designed and developed a role-based Invoice Processing Application using Appian Process Modeler, implementing vendor submissions, multi-level approval workflows, record types, dashboards, AI-based document extraction, and full audit tracking to streamline invoice operations.",
        tech: ["Appian"],
        link: ""
    },
    {
        title: "Eat Smart Hub (Appian)",
        description: "Developed a multi-module wellness application, initially using Vue.js and later re-engineered in Appian. The solution included dashboards, educational content, appointment booking, downloadable resources, and administrative reporting with data visualizations.",
        tech: ["Appian"],
        link: ""
    },
    {
        title: "EcoSnap Application",
        description: "Coordinated Agile sprints to optimize application features, resulting in a substantial reduction in development time while maintaining quality, ultimately leading to the launch of the Ecosnap application within a three-month timeline.",
        tech: ["Agile", "React.js", "Node.js", "AWS", "AI"],
        link: ""
    }
]

export const education =  [
    {
        degree: "Bachelors of Engineering",
        specialisation: "Computer Science",
        location: "Nashik, Maharashtra, India",
        university: "Pune University",
        startDate: "08/2017",
        endDate: "06/2021"
    },
    {
        degree: "Masters",
        specialisation: "Information Technology",
        location: "Melbourne, Australia",
        university: "Monash University",
        startDate: "02/2024",
        endDate: "12/2025"
    }
]

export const certifications = [
    {
        name: "Professional Certificate of Appian Associate Developer 101 - Appian Platform",
        description: "Focused on low-code application development, process modeling, interface design, and Appian best practices"
    },
    {
        name: "Professional Certificate in Generative AI Applications - London School of International Business",
        description: "Focused on prompt engineering, large language models, and real-world AI application development"
    }
]

export const achievements = [
    "Recognized with two Bravo Awards for excellence and collaboration at Persistent Systems",
    "Received the Student Choice Award in the Climate Action category for the Ecosnap Application project"
]

export const professionalExperience = [
    {
        companyName: "Monash University",
        location: "Melbourne Australia",
        designation: "Teaching Assistant",
        startDate: "02/2026",
        endDate: "Current",
        keyHighlights: [
            "Supporting postgraduate teaching",
            "Helping students understand system architecture and mobile computing fundamentals"
        ]
    },
    {
        companyName: "Innovator Pty. Ltd.",
        location: "Melbourne Australia",
        designation: "Contractor",
        startDate: "11/2024",
        endDate: "01/2025",
        keyHighlights: [
            "Contributed to full-stack development, enhancing performance, scalability, and maintainability.",
            "Collaborated with the founder and team to deliver feature enhancements and client updates, improving stability and customer satisfaction."
        ]
    },
    {
        companyName: "Persistent Systems Pvt. Ltd.",
        location: "Pune, Maharashtra, India",
        designation: "Senior Software Engineer",
        startDate: "05/2021",
        endDate: "01/2024",
        keyHighlights: [
            "Received client appreciation and consecutive annual bonuses for managing multiple projects and improving delivery timelines.",
            "Built and maintained a scalable billing report application for 40+ clients, improving reporting efficiency.",
            "Managed live production data in a dynamic environment, ensuring uninterrupted service despite weekly changes.",
            "Worked directly with a leading bank client to translate business needs into technical solutions, improving satisfaction and adoption",
            "Led onboarding and technical training for 10+ team members, reducing ramp-up time and boosting productivity"
        ]
    }
]



