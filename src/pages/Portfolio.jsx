import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, FileText, Feather } from 'lucide-react';

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [selectedItem, setSelectedItem] = useState(null);

    const categories = [
        { id: 'all', label: 'All Work' },
        { id: 'article', label: 'Articles' },
        { id: 'poetry', label: 'Poetry' },
        { id: 'other', label: 'Other Work' }
    ];

    // Dummy data - User will need to fill this or I need to ask for it
    const works = [
        {
            id: 1,
            title: "The Future of AI Content",
            category: "article",
            excerpt: "Exploring how AI is reshaping the landscape of digital content creation and the human role in it.",
            content: "Full content of the article would go here... exploring the nuances of Large Language Models and their impact on SEO, creativity, and authentication.",
            date: "Jan 2026",
            tags: ["AI", "Tech", "Writing"]
        },
        {
            id: 2,
            title: "Midnight Verses",
            category: "poetry",
            excerpt: "A collection of short poems exploring themes of urban isolation and hope.",
            content: "Verse 1: \nThe city sleeps in monochrome,\nBut dreams differ in color...\n\n(Click to read more)",
            date: "Dec 2025",
            tags: ["Creative", "Poetry"]
        },
        {
            id: 3,
            title: "Educational Curriculum Review",
            category: "other",
            excerpt: "Case study on improving science curriculum accuracy for Grade 10 students.",
            content: "Detailed breakdown of the review process, common errors found in physics textbooks, and the rectification methodology used.",
            date: "Nov 2023",
            tags: ["Education", "Case Study"]
        },
        {
            id: 4,
            title: "Digital Minimalism",
            category: "article",
            excerpt: "Why less is more in the age of information overload.",
            content: "An analytical piece on the benefits of reducing digital noise...",
            date: "Oct 2025",
            tags: ["Lifestyle", "Opinion"]
        }
    ];

    const filteredWorks = activeTab === 'all'
        ? works
        : works.filter(work => work.category === activeTab);

    return (
        <div className="pt-32 pb-20 min-h-screen">
            <div className="container mx-auto px-6">

                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">My Portfolio</h1>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={`px-6 py-2 rounded-full transition-all ${activeTab === cat.id
                                    ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25'
                                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredWorks.map((work) => (
                            <motion.div
                                key={work.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => setSelectedItem(work)}
                                className="bg-slate-800/40 border border-slate-700 hover:border-sky-400/50 rounded-xl p-6 cursor-pointer group transition-colors"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`p-2 rounded-lg ${work.category === 'poetry' ? 'bg-purple-500/10 text-purple-400' : 'bg-sky-500/10 text-sky-400'}`}>
                                        {work.category === 'poetry' ? <Feather size={20} /> : <FileText size={20} />}
                                    </div>
                                    <span className="text-xs text-slate-500">{work.date}</span>
                                </div>

                                <h3 className="text-xl font-bold mb-2 group-hover:text-sky-400 transition-colors">{work.title}</h3>
                                <p className="text-slate-400 text-sm line-clamp-3 mb-4">{work.excerpt}</p>

                                <div className="flex gap-2 mt-auto">
                                    {work.tags.map(tag => (
                                        <span key={tag} className="text-xs px-2 py-1 bg-slate-900 rounded text-slate-500">#{tag}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Modal */}
                <AnimatePresence>
                    {selectedItem && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedItem(null)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        >
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 50, opacity: 0 }}
                                onClick={e => e.stopPropagation()}
                                className="bg-slate-900 border border-slate-700 w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-2xl p-8 relative shadow-2xl"
                            >
                                <button
                                    onClick={() => setSelectedItem(null)}
                                    className="absolute top-4 right-4 p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors"
                                >
                                    <X size={20} />
                                </button>

                                <div className="flex items-center gap-3 mb-6">
                                    <div className={`p-2 rounded-lg ${selectedItem.category === 'poetry' ? 'bg-purple-500/10 text-purple-400' : 'bg-sky-500/10 text-sky-400'}`}>
                                        {selectedItem.category === 'poetry' ? <Feather size={24} /> : <FileText size={24} />}
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold">{selectedItem.title}</h2>
                                        <span className="text-slate-500 text-sm">{selectedItem.date}</span>
                                    </div>
                                </div>

                                <div className="prose prose-invert prose-slate max-w-none">
                                    <p className="whitespace-pre-line text-slate-300 leading-loose">
                                        {selectedItem.content}
                                    </p>
                                </div>

                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </div>
    );
};

export default Portfolio;
