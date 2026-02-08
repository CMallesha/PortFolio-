
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer id="footer" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', background: '#0f172a', padding: '3rem 0' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Let's Connect</h2>
                <p style={{ color: '#94a3b8', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
                    <a href="https://github.com/CMallesha" target="_blank" rel="noopener noreferrer" style={{ color: '#cbd5e1', transition: 'color 0.3s' }} className="social-link"><Github /></a>
                    <a href="https://www.linkedin.com/in/chikkabasalli-mallesha-714984280" target="_blank" rel="noopener noreferrer" style={{ color: '#cbd5e1', transition: 'color 0.3s' }} className="social-link"><Linkedin /></a>
                    <a href="mailto:mallu1734@gmail.com" style={{ color: '#cbd5e1', transition: 'color 0.3s' }} className="social-link"><Mail /></a>
                </div>

                <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} Chikkabasalli Mallesha. All rights reserved.
                </p>
            </div>

            <style>{`
                .social-link:hover {
                    color: #a78bfa !important;
                    transform: translateY(-3px);
                }
            `}</style>
        </footer>
    )
}

export default Footer
