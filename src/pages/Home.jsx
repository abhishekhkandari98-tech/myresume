import { motion } from 'framer-motion';
import { ArrowRight, PenTool, BookOpen, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/20 rounded-full blur-[100px] -z-10" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] -z-10" />

                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-sky-400 font-medium mb-4 tracking-wider">PORTFOLIO</h2>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Words That <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
                                Resonate.
                            </span>
                        </h1>
                        <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
                            I craft compelling narratives, edit AI-generated content with precision, and bring clarity to complex ideas.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link to="/portfolio" className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-full font-medium transition-all flex items-center gap-2 group">
                                View Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/contact" className="border border-slate-700 hover:border-sky-400 hover:text-sky-400 text-slate-300 px-8 py-3 rounded-full font-medium transition-all">
                                Contact Me
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden md:block"
                    >
                        {/* Abstract Visual Representation of Writing */}
                        <div className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-2xl border border-slate-700 shadow-2xl relative z-10">
                            <div className="flex gap-4 mb-6">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                            </div>
                            <div className="space-y-4">
                                <div className="h-4 bg-slate-700 rounded w-3/4 animate-pulse" />
                                <div className="h-4 bg-slate-700 rounded w-full animate-pulse delay-75" />
                                <div className="h-4 bg-slate-700 rounded w-5/6 animate-pulse delay-150" />
                                <div className="h-4 bg-slate-700 rounded w-4/5 animate-pulse delay-200" />
                            </div>
                            <div className="absolute -right-8 -bottom-8 bg-slate-900 p-4 rounded-xl border border-slate-800 shadow-xl">
                                <PenTool className="text-sky-400" size={32} />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Quick Services/Features */}
            <section className="py-20 bg-slate-900/50">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: <PenTool />, title: "Content Writing", desc: "Engaging articles, blogs, and web content tailored to your audience." },
                            { icon: <BookOpen />, title: "Content Moderation", desc: "Ensuring accuracy and quality in academic and AI-generated text." },
                            { icon: <Quote />, title: "Poetry & Prose", desc: "Creative expression through rhythmic and meaningful verse." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="p-8 rounded-2xl bg-slate-800/30 hover:bg-slate-800/50 border border-slate-800 hover:border-slate-700 transition-all cursor-default"
                            >
                                <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center text-sky-400 mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-slate-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
