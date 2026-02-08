
import { motion } from "framer-motion";

const skillsData = [
  "Java", "Core java", "Advance java", "JDBC", "Springboot", "Kotlin", "JavaScript", "React.js",
  "HTML5", "CSS3", "Git", "MySQL", "Android (Java/Kotlin)"
];

const Skills = () => {
  return (
    <section id="skills">
      <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }}>Technical <span className="glow-text">Skills</span></h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', maxWidth: '800px', margin: '0 auto' }}>
        {skillsData.map((skill, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(139, 92, 246, 0.2)' }}
            style={{
              padding: '0.8rem 1.5rem',
              backgroundColor: 'rgba(30, 41, 59, 1)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '50px',
              fontSize: '1rem',
              fontWeight: '500',
              color: '#e2e8f0',
              cursor: 'default'
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  )
}

export default Skills
