import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap, Award } from 'lucide-react';

const About = () => {
    const experiences = [
        {
            role: "Junior Analyst – Content Writing (AI)",
            company: "RMSI",
            period: "Jan 2025 – Jan 2026",
            desc: "Reviewed and amended AI-generated content for accuracy and clarity. Performed copyediting, prompt-based evaluation, and hallucination detection to maintain high-quality AI outputs."
        },
        {
            role: "Academic Content Moderator",
            company: "Nalanda Coaching Center",
            period: "Aug 2022 – Dec 2023",
            desc: "Ensured conceptual accuracy and curriculum alignment for CBSE Science (Classes 8–10) and Physics (Classes 11–12) content."
        }
    ];

    const education = [
        {
            degree: "B.Sc.",
            school: "Shri Guru Ram Rai University",
            year: "2022",
            score: "70.68%"
        },
        {
            degree: "Class XII",
            school: "DAV Public School",
            year: "2019",
            score: "86.6%"
        }
    ];

    const skills = [
        "Content Writing", "AI Content Editing", "Copyediting", "SEO",
        "Prompt Engineering", "Fact-Checking", "Creative Writing", "Physics"
    ];

    return (
        <div className="pt-32 pb-20 min-h-screen">
            <div className="container mx-auto px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-3xl mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
                    <p className="text-lg text-slate-400 leading-relaxed mb-6">
                        I am a detail-oriented <span className="text-sky-400 font-medium">Content Writer & Content Moderator</span> based in New Delhi.
                        With a background in Science and a passion for language, I bridge the gap between technical accuracy and engaging storytelling.
                        My recent work involves refining AI-generated content to ensure it meets human standards of clarity and context.
                    </p>
                    <button className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-2 rounded-lg transition-all border border-slate-700">
                        <Download size={18} /> Download Resume
                    </button>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">

                    {/* Experience Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <Briefcase className="text-sky-400" size={24} />
                            <h2 className="text-2xl font-bold">Experience</h2>
                        </div>

                        <div className="space-y-8 border-l border-slate-800 pl-8 relative">
                            {experiences.map((exp, index) => (
                                <div key={index} className="relative">
                                    <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-slate-900 border-2 border-sky-400"></span>
                                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                    <p className="text-sky-400 text-sm mb-2">{exp.company} | {exp.period}</p>
                                    <p className="text-slate-400 text-sm">{exp.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Education & Skills Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        {/* Education */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-8">
                                <GraduationCap className="text-sky-400" size={24} />
                                <h2 className="text-2xl font-bold">Education</h2>
                            </div>
                            <div className="space-y-6">
                                {education.map((edu, index) => (
                                    <div key={index} className="bg-slate-800/40 p-6 rounded-xl border border-slate-800">
                                        <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                                        <p className="text-slate-400">{edu.school}</p>
                                        <div className="flex justify-between items-center mt-2 text-sm">
                                            <span className="text-slate-500">{edu.year}</span>
                                            <span className="text-sky-400 font-medium">{edu.score}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Skills */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <Award className="text-sky-400" size={24} />
                                <h2 className="text-2xl font-bold">Skills</h2>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, index) => (
                                    <span key={index} className="px-3 py-1 bg-slate-800 hover:bg-sky-500/10 hover:text-sky-300 text-slate-300 rounded-full text-sm border border-slate-700 transition-colors cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default About;
