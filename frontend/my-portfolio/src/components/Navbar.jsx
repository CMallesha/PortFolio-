
import { motion } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#footer" },
    ];

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                background: scrolled ? 'rgba(15, 23, 42, 0.8)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
                transition: 'all 0.3s ease',
                padding: scrolled ? '0.5rem 0' : '1rem 0'
            }}
        >
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <a href="#" style={{ fontSize: '1.5rem', fontWeight: 'bold', background: 'linear-gradient(to right, #a855f7, #3b82f6)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', textDecoration: 'none' }}>
                        Chikkabasalli Mallesha
                    </a>
                </motion.div>

                {/* Desktop Menu */}
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            style={{ color: '#cbd5e1', fontSize: '0.95rem', fontWeight: 500, textDecoration: 'none' }}
                            whileHover={{ color: '#a855f7', scale: 1.05 }}
                        >
                            {link.name}
                        </motion.a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
