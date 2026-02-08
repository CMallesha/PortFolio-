
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import porpoliopic from "../assets/porpoliopic.png";

const Hero = () => {
    return (
        <section
            style={{
                minHeight: '100vh', /* Changed to minHeight for better mobile support */
                display: 'flex',
                /* Removed single column layout */
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '80px', /* Increased navbar height buffer */
                position: 'relative',
                overflow: 'hidden'
            }}
            className="hero-container"
        >
            {/* Background Gradients */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                left: '-10%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, rgba(0,0,0,0) 70%)',
                borderRadius: '50%',
                filter: 'blur(50px)',
                zIndex: -1
            }} />
            <div style={{
                position: 'absolute',
                bottom: '-20%',
                right: '-10%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(0,0,0,0) 70%)',
                borderRadius: '50%',
                filter: 'blur(60px)',
                zIndex: -1
            }} />

            <div
                className="hero-content"
                style={{
                    display: 'flex',
                    flexDirection: 'column-reverse', /* Stack on mobile, update via media query for larger screens */
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    maxWidth: '1200px',
                    gap: '3rem'
                }}
            >
                <motion.div
                    initial={{ opacity: 0, x: -30 }} /* Slide from left */
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        flex: 1,
                        textAlign: 'center', /* Center text on mobile */
                        zIndex: 1
                    }}
                    className="hero-text"
                >
                    <span style={{
                        display: 'inline-block',
                        padding: '0.5rem 1rem',
                        borderRadius: '50px',
                        background: 'rgba(139, 92, 246, 0.1)',
                        color: '#a78bfa',
                        fontSize: '0.9rem',
                        marginBottom: '1rem',
                        border: '1px solid rgba(139, 92, 246, 0.2)'
                    }}>
                        Available for Work
                    </span>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '1rem', lineHeight: 1.1 }}>
                        Building Digital <br />
                        <span className="glow-text">Experiences</span>
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: '600px', margin: '0 auto 2rem' }}>
                        Software Developer who turns ideas into clean, fast, and impactful digital experiences.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }} className="hero-buttons">
                        <motion.a
                            href="#projects"
                            className="btn btn-primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{ textDecoration: 'none', display: 'inline-block' }}
                        >
                            View Projects
                        </motion.a>
                        <motion.a
                            href="#footer"
                            className="btn btn-outline"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{ textDecoration: 'none', display: 'inline-block' }}
                        >
                            Contact Me
                        </motion.a>
                    </div>

                    <div style={{ marginTop: '3rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', color: '#94a3b8' }} className="hero-socials">
                        <motion.a href="https://github.com/CMallesha" target="_blank" rel="noopener noreferrer" whileHover={{ color: '#fff', y: -3 }}><Github size={24} /></motion.a>
                        <motion.a href="https://www.linkedin.com/in/chikkabasalli-mallesha-714984280" target="_blank" rel="noopener noreferrer" whileHover={{ color: '#fff', y: -3 }}><Linkedin size={24} /></motion.a>
                        <motion.a href="mailto:mallu1734@gmail.com" whileHover={{ color: '#fff', y: -3 }}><Mail size={24} /></motion.a>
                    </div>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }} /* Slide from right */
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                    <div style={{
                        position: 'relative',
                        width: '300px',
                        height: '300px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(59, 130, 246, 0.2))',
                        padding: '10px',
                        boxShadow: '0 0 40px rgba(139, 92, 246, 0.3)'
                    }} className="hero-image-wrapper">
                        {/* Optional Glow behind image */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
                            filter: 'blur(20px)',
                            zIndex: -1
                        }}></div>

                        <img
                            src={porpoliopic}
                            alt="Profile"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '50%',
                                border: '4px solid rgba(255, 255, 255, 0.1)'
                            }}
                        />
                    </div>
                </motion.div>
            </div>

            {/* Inline Media Query via Styled JSX if needed, but better to use CSS file classes. 
                I will add classes and update index.css for desktop layout to be row. 
            */}
        </section>
    )
}

export default Hero
