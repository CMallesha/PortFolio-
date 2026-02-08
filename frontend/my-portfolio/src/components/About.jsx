
import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about">
            <motion.div
                className="card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
                    <div>
                        <h2 className="glow-text" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>About Me</h2>
                        <p style={{ fontSize: '1.1rem', color: '#cbd5e1', lineHeight: '1.8' }}>
                            Hello! I'm Chikkabasalli Mallesha a Java, React, Kotlin and Android developer who turns ideas into clean, fast, and impactful digital experiences. 
                            I love building things that feel smooth, work smart, and look good—and I’m always leveling up with every new challenge.
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default About
