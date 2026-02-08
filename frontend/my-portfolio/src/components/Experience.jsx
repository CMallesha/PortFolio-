
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experienceData = [
    {
        role: "Software Developer",
        company: "iOrbit Digital Technologies Pvt. Ltd. | Pune, Onsite",
        period: "Jun 2022 - Present",
        description: "Spearheaded Android application development using Java, Kotlin, and Android Studio, implementing new features and resolving critical bugs. Collaborated effectively within a team environment using Git/GitHub to deliver stable, user-friendly mobile applications."
    },
    {
        role: "Java Full Stack Trainee",
        company: "Pentagon Space | Bengaluru, Onsite",
        period: "Jul 2024 - Jun 2025",
        description: "Underwent intensive training in J2EE, SQL, and Spring Boot, gaining comprehensive hands-on experience in full-stack Java development. Successfully built and deployed project modules, demonstrating strong proficiency in backend architecture and database management."
    },
    {
        role: "Student Intern",
        company: "Bharat Heavy Electricals Limited (BHEL) | Bengaluru, Onsite",
        period: "Oct 2023 - Nov 2023",
        description: "Conducted research on emerging EV charging technologies and implemented efficiency innovations. Gained practical insights into infrastructure challenges and opportunities in the sustainable energy sector."
    },
    {
        role: "Intern",
        company: "Electronics Test and Development Centre (ETDC) | Bengaluru, Onsite",
        period: "Dec 2022 - Jan 2023",
        description: "Executed comprehensive software testing, detecting and reporting defects with detailed bug reports to ensure effective developer communication. Verified test cases against strict customer requirements to guarantee product quality."
    }
];

const Experience = () => {
    return (
        <section id="experience">
            <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }}>Work <span className="glow-text">Experience</span></h2>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                {experienceData.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        style={{
                            borderLeft: '2px solid rgba(139, 92, 246, 0.3)',
                            paddingLeft: '2rem',
                            paddingBottom: '3rem',
                            position: 'relative'
                        }}
                    >
                        <div style={{
                            position: 'absolute',
                            left: '-9px',
                            top: '0',
                            width: '16px',
                            height: '16px',
                            borderRadius: '50%',
                            background: '#8b5cf6',
                            boxShadow: '0 0 10px rgba(139, 92, 246, 0.6)'
                        }} />

                        <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem' }}>{exp.role}</h3>
                        <h4 style={{ fontSize: '1.1rem', color: '#a78bfa', marginBottom: '0.5rem' }}>{exp.company}</h4>
                        <span style={{ display: 'inline-block', fontSize: '0.9rem', color: '#94a3b8', marginBottom: '1rem', fontStyle: 'italic' }}>
                            {exp.period}
                        </span>
                        <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>{exp.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Experience
