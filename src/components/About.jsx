import { motion } from "framer-motion";

const About = () => {
    const education = [
        { degree: "BS Software Engineering", school: "GCU Faisalabad (Sahiwal Campus)" },
        { degree: "FSc Pre-Engineering", school: "Aspire College" },
    ];

    const skills = ["HTML5", "CSS3", "JavaScript", "ReactJS", "Responsive Design", "Git & GitHub"];

    return (
        <section id="about" className="py-20 bg-gray-900 text-white">
            <div className="max-w-5xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 bg-clip-text text-transparent animate-text"
                >
                    About Me
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-gray-300 text-center mb-16 max-w-2xl mx-auto"
                >
                    I am a BS Software Engineering student passionate about Frontend Development. I have built projects like News Website, Notes App, and Ecommerce Website. I’m seeking internship or junior developer roles to gain real-world experience.
                </motion.p>

                <div className="grid md:grid-cols-2 gap-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
                    >
                        <h3 className="text-2xl font-semibold mb-4">Education</h3>
                        {education.map((edu, idx) => (
                            <p key={idx} className="text-gray-300 mb-2">{edu.degree} – {edu.school}</p>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
                    >
                        <h3 className="text-2xl font-semibold mb-4">Skills</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {skills.map((skill, idx) => (
                                <span key={idx} className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-200 hover:bg-purple-500 hover:text-white transition">{skill}</span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;