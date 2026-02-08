
import { motion } from "framer-motion";
import { ExternalLink, Github, Building2, Activity, BookOpen, Utensils, Cpu } from "lucide-react";

const projectsData = [
    {
        title: "Android SDK for iECGPatch",
        status: "In Progress",
        description: "Engineered a comprehensive Android SDK for the iECGPatch wearable. Facilitated seamless BLE connectivity, real-time ECG data acquisition, and signal processing. Designed clean APIs for developers to integrate vital sign monitoring into their healthcare solutions.",
        tech: ["Kotlin", "Android SDK", "BLE", "API Design", "Signal Processing"],
        link: "#",
        github: "#",
        icon: <Cpu size={48} color="#fff" />,
        gradient: "linear-gradient(135deg, #7c3aed, #a78bfa)" // Violet theme
    },
    {
        title: "Banking Application (J2EE)",
        description: "Developed a full-stack banking application simulating real-world operations. Features include user registration, secure login, balance inquiries, transaction history, and fund transfers. Built with a responsive UI and robust backend validation.",
        tech: ["Java", "J2EE", "JDBC", "Servlets", "JSP", "MySQL", "HTML/CSS/Bootstrap"],
        link: "#",
        github: "#",
        icon: <Building2 size={48} color="#fff" />,
        gradient: "linear-gradient(135deg, #1e3a8a, #3b82f6)" // Blue theme
    },
    {
        title: "Earthquake Alert System & Search Robot",
        description: "Innovative IoT system predicting earthquakes in real-time using advanced sensors for early warnings. Includes an autonomous Search Robot with navigation capabilities to assist in finding survivors in challenging environments.",
        tech: ["Embedded C", "Arduino", "IoT", "Sensors", "Firebase", "HTML/CSS/JS"],
        link: "#",
        github: "#",
        icon: <Activity size={48} color="#fff" />,
        gradient: "linear-gradient(135deg, #7f1d1d, #ef4444)" // Red theme
    },
    {
        title: "BookStore App (Spring Boot)",
        description: "A comprehensive Book Store application for managing collections seamlessly. Supports full CRUD operations, allowing users to register books, browse available titles, and manage personal collections with a dynamic user experience.",
        tech: ["Spring Boot", "Java", "Thymeleaf", "MySQL", "Hibernate", "Bootstrap"],
        link: "#",
        github: "#",
        icon: <BookOpen size={48} color="#fff" />,
        gradient: "linear-gradient(135deg, #14532d, #22c55e)" // Green theme
    },
    {
        title: "Online Food Delivery App",
        description: "A fully responsive front-end for a food delivery service. Features user authentication, menu browsing with filters, cart management, and a streamlined checkout process. Emphasizes modern UI/UX practices and component-based architecture.",
        tech: ["React JS", "HTML5", "CSS3", "React Router", "UI/UX"],
        link: "#",
        github: "#",
        icon: <Utensils size={48} color="#fff" />,
        gradient: "linear-gradient(135deg, #ea580c, #f97316)" // Orange theme
    },
    {
        title: "BodyMount Patient Monitor (BMPMS)",
        description: "Developed a native Android application for real-time patient monitoring. Integrated BLE sensors to measure blood pressure and display live vital signs with waveforms. Designed a custom XML UI and resolved critical backend bugs for accurate data rendering.",
        tech: ["Kotlin", "Android SDK", "BLE", "SQLite", "XML", "Gradle"],
        link: "#",
        github: "#",
        icon: <Activity size={48} color="#fff" />,
        gradient: "linear-gradient(135deg, #0891b2, #06b6d4)" // Cyan theme
    }
];

const Projects = () => {
    return (
        <section id="projects">
            <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }}>Featured <span className="glow-text">Projects</span></h2>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2.5rem',
                    padding: '1rem' // Add padding to container to prevent edge clipping
                }}
            >
                {projectsData.map((project, index) => (
                    <motion.div
                        key={index}
                        className="card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -10 }} // Simple lift on hover
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            padding: '0', // Reset padding for card to allow image to be full width
                            overflow: 'hidden', // Ensure image stays within border radius
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}
                    >
                        {/* Project Image Placeholder */}
                        <div style={{
                            height: '200px',
                            background: project.gradient,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'relative'
                        }}>
                            {project.status && (
                                <div style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    padding: '0.4rem 0.8rem',
                                    background: 'rgba(234, 179, 8, 0.9)', // Amber-500
                                    color: '#000',
                                    borderRadius: '20px',
                                    fontSize: '0.75rem',
                                    fontWeight: 'bold',
                                    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
                                    zIndex: 10
                                }}>
                                    {project.status}
                                </div>
                            )}

                            <div style={{
                                background: 'rgba(255,255,255,0.1)',
                                padding: '1.5rem',
                                borderRadius: '50%',
                                backdropFilter: 'blur(5px)'
                            }}>
                                {project.icon}
                            </div>
                            {/* Overlay gradient for depth */}
                            <div style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(to bottom, transparent 0%, rgba(15, 23, 42, 0.8) 100%)'
                            }}></div>
                        </div>

                        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#fff' }}>
                                {project.title}
                            </h3>
                            <p style={{ color: '#94a3b8', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: '1.6', flexGrow: 1 }}>
                                {project.description}
                            </p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                {project.tech.map((t, i) => (
                                    <span key={i} style={{
                                        fontSize: '0.75rem',
                                        color: '#cbd5e1',
                                        background: 'rgba(51, 65, 85, 0.5)',
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '15px',
                                        border: '1px solid rgba(255,255,255,0.05)'
                                    }}>
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                                <a href={project.github} className="btn-icon" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.9rem' }}>
                                    <Github size={18} /> Code
                                </a>
                                <a href={project.link} className="btn-icon" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.9rem' }}>
                                    <ExternalLink size={18} /> Live Demo
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Projects
