import { motion } from "framer-motion";

const projects = [
    {
        title: "News Website",
        description: "Responsive news site with API integration.",
        tech: "HTML, CSS, JS, API",
        demo: "#",
        github: "#",
    },
    {
        title: "Notes App",
        description: "Notebook app with local storage.",
        tech: "HTML, CSS, JS",
        demo: "#",
        github: "#",
    },
    {
        title: "Ecommerce Website",
        description: "Ecommerce UI with React components.",
        tech: "HTML, CSS, JS, React",
        demo: "#",
        github: "#",
    },
    {
        title: "Portfolio Website",
        description: "My personal portfolio built with React & Tailwind.",
        tech: "React, Tailwind",
        
        demo: "portfolio-if577p1je-shh449s-projects.vercel.app",
        github: "#",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-gray-800 text-white">
            <div className="max-w-6xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 bg-clip-text text-transparent animate-text"
                >
                    My Projects
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition hover:scale-105"
                        >
                            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-300 mb-2">{project.description}</p>
                            <p className="text-gray-400 mb-4"><strong>Tech:</strong> {project.tech}</p>
                            <div className="flex gap-4">
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    className="bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 rounded-lg shadow-md transition"
                                >
                                    Live Demo
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md transition"
                                >
                                    GitHub
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
