import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload } from "react-icons/fa";

const Contact = () => {
    const contactInfo = [
        { icon: <FaEnvelope />, text: "shazerali27@gmail.com" },
        { icon: <FaPhone />, text: "03181657803" },
        { icon: <FaMapMarkerAlt />, text: "Iqbal Nagar" },
    ];

    return (
        <section id="contact" className="py-20 bg-gray-900 text-white">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 bg-clip-text text-transparent animate-text"
                >
                    Contact Me
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-gray-300 mb-12 max-w-2xl mx-auto"
                >
                    Open to internships and junior developer roles. Reach me via email, phone, or download my CV.
                </motion.p>

                <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
                    {contactInfo.map((info, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="flex items-center gap-4 bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition hover:scale-105"
                        >
                            <div className="text-purple-500 text-2xl">{info.icon}</div>
                            <p className="text-gray-200 font-medium">{info.text}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.a
                    href="/cv2.docx"
                    download
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-400 text-white px-8 py-4 rounded-lg font-semibold shadow-lg transition transform hover:scale-105"
                >
                    <FaDownload />
                    Download CV
                </motion.a>
            </div>
        </section>
    );
};

export default Contact;