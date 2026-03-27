import { motion } from "framer-motion";

const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "Responsive Design", level: 85 },
    { name: "Git & GitHub", level: 70 },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-gray-900 text-white">
            <div className="max-w-5xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 bg-clip-text text-transparent animate-text"
                >
                    My Skills
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition hover:scale-105"
                        >
                            <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                            <div className="w-full bg-gray-700 rounded-full h-4">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: index * 0.2 }}
                                    className="h-4 bg-purple-500 rounded-full"
                                />
                            </div>
                            <p className="text-right text-gray-300 mt-1">{skill.level}%</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;