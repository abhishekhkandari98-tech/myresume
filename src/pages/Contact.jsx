import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-32 pb-20 min-h-screen">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
                    <p className="text-lg text-slate-400">
                        Interested in collaborating or have a question? Feel free to reach out.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 bg-slate-900/50 p-8 rounded-2xl border border-slate-800">

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-sky-500/10 rounded-lg text-sky-400">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="font-medium text-white">Email</h3>
                                <a href="mailto:abhishekhkandari9.8@gmail.com" className="text-slate-400 hover:text-sky-400 transition-colors">
                                    abhishekhkandari9.8@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-sky-500/10 rounded-lg text-sky-400">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="font-medium text-white">Phone</h3>
                                <p className="text-slate-400">+91 8755499668</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-sky-500/10 rounded-lg text-sky-400">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="font-medium text-white">Location</h3>
                                <p className="text-slate-400">New Delhi, India</p>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                            <input
                                type="text"
                                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-400 transition-colors"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                            <input
                                type="email"
                                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-400 transition-colors"
                                placeholder="your.email@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                            <textarea
                                rows="4"
                                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-400 transition-colors"
                                placeholder="How can I help you?"
                            ></textarea>
                        </div>

                        <button className="w-full bg-sky-500 hover:bg-sky-600 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
                            Send Message <Send size={18} />
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Contact;
