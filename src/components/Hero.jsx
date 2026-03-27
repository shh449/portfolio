import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 via-indigo-900 to-black text-white px-6"
        >
            <div className="text-center max-w-3xl">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-text"
                >
                    Hi, I'm Shahzar
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-2xl md:text-3xl text-gray-300 mb-6"
                >
                    Frontend Developer | React Enthusiast
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-gray-400 mb-8"
                >
                    Motivated BS Software Engineering student with experience in HTML, CSS, JavaScript, and React. Looking for internships to gain real-world experience.
                </motion.p>

                <motion.a
                    href="#projects"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="inline-block bg-purple-500 hover:bg-purple-400 text-white px-8 py-4 rounded-lg font-semibold shadow-lg transition transform hover:scale-105"
                >
                    View My Projects
                </motion.a>
            </div>
        </section>
    );
};

export default Hero;