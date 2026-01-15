import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ExternalLink, FileText, Feather, Briefcase, GraduationCap, Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Youtube, BookOpen, X } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },

  transition: { duration: 0.6 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const QuoteDropper = () => {
  const quotes = [
    "Never forgot the reason for your existence.",
    "Dreams do end but for that, one has to cross the paths with heaven.",
    "Whatever be the trials and tribulations one face, each strike brings depth of the reality.",
    "No matter how hard you try, how deep you fall, how long you live, smile always, you look good that way.",
    "Stop chasing what run away from you, instead embrace the exceptional that hails for your success."
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 12000); // 12 seconds interval

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 pointer-events-none z-50 flex justify-end px-4 max-w-sm md:max-w-md">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-white/10 backdrop-blur-md border border-white/10 px-6 py-4 rounded-2xl text-sm md:text-base text-slate-100 shadow-2xl text-right italic"
        >
          {quotes[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

function App() {
  const [showGallery, setShowGallery] = useState(false);
  const [selectedPoem, setSelectedPoem] = useState(null);
  const [showArticles, setShowArticles] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Poetry Collection - 3 featured poems
  const poems = [
    {
      id: 1,
      title: "Ice and Fire",
      image: "ice-and-fire.jpg"
    },
    {
      id: 2,
      title: "Mirror of Dreams",
      image: "mirror-of-dreams.jpg"
    },
    {
      id: 3,
      title: "Melting Candle",
      image: "melting-candle.jpg"
    }
  ];

  // Article Collection - 2 featured articles
  const articles = [
    {
      id: 1,
      title: "Peace and Desire",
      image: "peace-and-desire.jpg"
    },
    {
      id: 2,
      title: "Evident Peace",
      image: "evident-peace.jpg"
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <QuoteDropper />
      {/* Ambient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/50 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/50 rounded-full blur-[100px]" />
        <div className="absolute top-[20%] right-[20%] w-[20%] h-[20%] bg-indigo-500/40 rounded-full blur-[80px]" />
      </div>

      {/* Navigation */}
      <nav>
        <div className="nav-container">
          {['About', 'Experience', 'Education', 'Portfolio', 'Network', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      {/* Hero Section */}
      <section className="hero section !flex-row !items-center !text-left !justify-between gap-12 min-h-[85vh]">
        <motion.div
          className="flex-1 z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="tag mb-4 inline-block">👋 Hi, I'm Abhishekh Kandari</span>
          <h1 className="text-5xl md:text-7xl mb-6 font-bold leading-tight">
            Words That <br /><span className="hero-gradient-text">Matter.</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mb-8 leading-relaxed">
            A Content Writer & Moderator bridging the gap between <br className="hidden md:block" />
            <strong>AI Efficiency</strong> and <strong>Human Creativity</strong>.
          </p>
          <div className="flex gap-4">
            <a href="#portfolio" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-outline">Contact Me</a>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="flex-1 relative z-10 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem]">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-[2.5rem] rotate-6 opacity-60 blur-xl animate-pulse"></div>
            <div className="absolute inset-0 bg-slate-900 rounded-[2.5rem] rotate-3 border border-white/20"></div>
            <img
              src="hero-profile.jpg"
              alt="Abhishekh Kandari"
              className="relative w-full h-full object-cover object-[center_15%] scale-110 rounded-[2.2rem] shadow-2xl border-[3px] border-white/30 transform hover:scale-[1.12] transition-transform duration-500"
            />
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-xl"
            >
              <FileText className="text-purple-400" size={24} />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-xl"
            >
              <Feather className="text-blue-400" size={24} />
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500"
        >
          <ArrowDown />
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section id="about" className="section" {...fadeInUp}>
        <h2 className="section-title">About Me</h2>
        <div className="grid-2">
          <div className="card relative overflow-hidden group hover:border-blue-500/50 transition-colors">
            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
            <h3 className="text-2xl mb-4 group-hover:text-blue-400 transition-colors">The Professional</h3>
            <p className="text-slate-400 mb-4">
              I am a detail-oriented <strong>Content Writer & Moderator</strong> based in New Delhi.
              I specialize in refining AI-generated content to ensure factual accuracy and human flow.
              My background in Science allows me to handle technical and academic topics with precision.
            </p>
            <a
              href="https://abhishekhkandari98-tech.github.io/myresume/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              <ExternalLink size={16} />
              View Portfolio
            </a>
          </div>
          <div className="card relative overflow-hidden group hover:border-purple-500/50 transition-colors">
            <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
            <h3 className="text-2xl mb-4 group-hover:text-purple-400 transition-colors">The Creative</h3>
            <p className="text-slate-400 mb-4">
              Beyond the technical, I am a poet and storyteller. I believe that even in the age of AI,
              the human touch can impede the gap between reality and illusions. i write with emotions and knowledge of experiences.
            </p>
            <a
              href="https://abhishekhkandari98-tech.github.io/myresume/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-medium"
            >
              <ExternalLink size={16} />
              View Portfolio
            </a>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section id="skills" className="section py-10" {...fadeInUp}>
        <h2 className="section-title text-center mb-10">Core Skills</h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto px-4">
          {['AI Content Editing', 'Content Development', 'Web Content Writing', 'Article Writing', 'Fact-Checking', 'Academic Writing', 'Proofreading & Copyediting', 'Storytelling', 'Prompt Engineering', 'SEO & WordPress', 'MS Office (Word, Excel, PPT)', 'Tally ERP 9', 'Strong Written Communication', 'Analytical Thinking', 'Attention to Detail', 'Time Management', 'Deadline Adherence', 'Team Collaboration', 'Feedback Adaptability', 'Python (Basic)', 'C++ (Basic)', 'Java (Basic)'].map((skill, index) => (
            <motion.div
              key={skill}
              className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-medium shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_40px_rgba(139,92,246,0.7)] hover:border-purple-400 hover:bg-purple-500/30 hover:-translate-y-1 transition-all cursor-default backdrop-blur-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Languages Section */}
      <motion.section id="languages" className="section py-6" {...fadeInUp}>
        <h2 className="section-title text-center mb-10">Languages</h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto px-4">
          {['Hindi', 'English', 'Garhwali'].map((lang, index) => (
            <motion.div
              key={lang}
              className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-medium shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_40px_rgba(139,92,246,0.7)] hover:border-purple-400 hover:bg-purple-500/30 hover:-translate-y-1 transition-all cursor-default backdrop-blur-md"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {lang}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <motion.h2 className="section-title" {...fadeInUp}>Experience</motion.h2>

        <motion.div className="grid-2" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.div variants={fadeInUp}>
            <div className="card relative overflow-hidden group hover:border-blue-500/50 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg"><Briefcase size={24} /></div>
                <span className="text-sm font-medium text-slate-500">Jan 2025 - Jan 2026</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">Junior Analyst - AI Content</h3>
              <p className="text-blue-400 font-medium mb-4">RMSI</p>
              <ul className="list-disc pl-5 text-slate-400 space-y-2">
                <li>Reviewed and amended AI-generated content for accuracy and clarity.</li>
                <li>Performed copyediting, proofreading, and correction of word flow.</li>
                <li>Improved sentence structure and contextual consistency.</li>
                <li>Maintained quality standards for AI content outputs.</li>
                <li>Prompt-based content evaluation.</li>
                <li>Fact-Checking & Hallucination Detection.</li>
                <li>Humanization of AI Content & Quality Assurance for AI Outputs.</li>
              </ul>
            </div>
            <a href="https://www.rmsi.com/" target="_blank" rel="noopener noreferrer" className="mt-12 inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors pl-4">
              Visit RMSI <ExternalLink size={14} />
            </a>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="card relative overflow-hidden group hover:border-indigo-500/50 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-lg"><GraduationCap size={24} /></div>
                <span className="text-sm font-medium text-slate-500">Aug 2022 - Dec 2023</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">Academic Content Moderator</h3>
              <p className="text-indigo-400 font-medium mb-4">Nalanda Coaching Center</p>
              <ul className="list-disc pl-5 text-slate-400 space-y-2">
                <li>Academic Content Moderation and Curriculum-Aligned Content Review (CBSE).</li>
                <li>Science Content Editing (Classes 8–10) and Physics Content Review (Classes 11–12).</li>
                <li>Ensured conceptual accuracy and curriculum alignment.</li>
                <li>Concept validation, error detection, and question & solution review.</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <motion.h2 className="section-title" {...fadeInUp}>Education</motion.h2>

        <motion.div className="grid-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
          {/* B.Sc. */}
          <motion.div className="card relative overflow-hidden group hover:border-emerald-500/50 transition-colors" variants={fadeInUp}>
            <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-lg"><BookOpen size={24} /></div>
              <span className="text-sm font-medium text-slate-500">2022</span>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">B.Sc.</h3>
            <p className="text-emerald-400 font-medium mb-1">Shri Guru Ram Rai University</p>
            <p className="text-slate-400 text-sm">70.68%</p>
          </motion.div>

          {/* Class XII */}
          <motion.div className="card relative overflow-hidden group hover:border-emerald-500/50 transition-colors" variants={fadeInUp}>
            <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-lg"><BookOpen size={24} /></div>
              <span className="text-sm font-medium text-slate-500">2019</span>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">Class XII</h3>
            <p className="text-emerald-400 font-medium mb-1">DAV Public School</p>
            <p className="text-slate-400 text-sm">86.6%</p>
          </motion.div>

          {/* Class X */}
          <motion.div className="card relative overflow-hidden group hover:border-emerald-500/50 transition-colors" variants={fadeInUp}>
            <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-lg"><BookOpen size={24} /></div>
              <span className="text-sm font-medium text-slate-500">2017</span>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">Class X</h3>
            <p className="text-emerald-400 font-medium mb-1">DAV Public School</p>
            <p className="text-slate-400 text-sm">92.15%</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section">
        <motion.h2 className="section-title" {...fadeInUp}>Selected Work</motion.h2>

        <div className="grid-3">
          {/* Item 1 */}
          <motion.div
            className="card relative overflow-hidden group cursor-pointer border-transparent hover:border-purple-500/50"
            whileHover={{ y: -5 }}
            onClick={() => setShowGallery(true)}
            {...fadeInUp}
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
            <div className="h-40 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-lg mb-6 flex items-center justify-center text-white shadow-lg shadow-purple-900/20">
              <Feather size={48} />
            </div>
            <p className="text-xs font-bold text-purple-400 tracking-wider mb-2">POETRY</p>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">Midnight Verses</h3>
            <p className="text-slate-400 mb-6">A collection of short poems exploring themes of urban isolation to find hope in the mundane, briefly describing human attachment and emotions.</p>
            <button
              className="text-sm font-bold flex items-center gap-2 text-white group-hover:gap-3 transition-all relative z-20">
              Read Collection <ExternalLink size={16} />
            </button>
          </motion.div>

          {/* Item 2 */}
          <motion.div
            className="card relative overflow-hidden group cursor-pointer border-transparent hover:border-blue-500/50"
            whileHover={{ y: -5 }}
            onClick={() => setShowArticles(true)}
            {...fadeInUp}
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
            <div className="h-40 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg mb-6 flex items-center justify-center text-white shadow-lg shadow-blue-900/20">
              <FileText size={48} />
            </div>
            <p className="text-xs font-bold text-blue-400 tracking-wider mb-2">ARTICLE</p>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">The notion of long routes.</h3>
            <p className="text-slate-400 mb-6">Writings that not only value time, efforts, data, precision, values but also emphasizes on human skills. In short, you will find my work quite efficient to read and adhere.</p>
            <button className="text-sm font-bold flex items-center gap-2 text-white group-hover:gap-3 transition-all">
              Read Article <ExternalLink size={16} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Professional Network Section */}
      <section id="network" className="section">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="section-title !mb-4">Professional Network</h2>
          <div className="inline-flex items-center gap-2 text-slate-300 text-sm font-bold mt-2 mb-4">
            <Linkedin size={16} className="text-blue-400" /> <span className="mx-1">&</span>
            <Instagram size={16} className="text-pink-400" /> <span className="mx-1">&</span>
            <Youtube size={16} className="text-red-400" />
          </div>
          <p className="text-slate-400 mt-2 max-w-2xl mx-auto">
            Connect with me professionally. View my articles, poetry, and vlogs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* LinkedIn Card */}
          <motion.a
            href="https://www.linkedin.com/in/abhishekh-kandari-86394a20a/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl w-full bg-gradient-to-br from-blue-600 via-cyan-500 to-indigo-500 p-1 shadow-2xl shadow-blue-900/20"
            whileHover={{ scale: 1.02 }}
          >
            <div className="card !border-none !shadow-none h-full w-full rounded-xl flex flex-col items-center justify-center p-8 text-center relative z-10 transition-all">
              <div className="w-32 h-32 bg-gradient-to-tr from-blue-400 via-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white mb-6 overflow-hidden border-4 border-[#0f1115] shadow-lg">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQHWNSlPSI51Xg/profile-displayphoto-shrink_200_200/B56ZNrmYn6GwAY-/0/1732677045591?e=2147483647&v=beta&t=rEZ2jI2QNLmoU26cv9F6UlZwUC9CcKy8y4Asjizm6y4"
                  alt="Abhishekh Kandari"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Abhishekh Kandari</h3>
              <p className="text-slate-400 mb-6 font-medium">Content Writer • Moderator • Speculative Poet</p>
              <span className="btn-primary bg-white text-black border-none px-8">
                Connect on LinkedIn
              </span>
            </div>
          </motion.a>

          {/* Instagram Card */}
          <motion.a
            href="https://www.instagram.com/opaquewrites/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl w-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-1 shadow-2xl shadow-purple-900/20"
            whileHover={{ scale: 1.02 }}
          >
            <div className="card !border-none !shadow-none h-full w-full rounded-xl flex flex-col items-center justify-center p-8 text-center relative z-10 transition-all">
              <div className="w-32 h-32 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-full flex items-center justify-center text-white mb-6 overflow-hidden border-4 border-[#0f1115] shadow-lg">
                <img
                  src="instagram-profile.jpg"
                  alt="@opaquewrites"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">@opaquewrites</h3>
              <p className="text-slate-400 mb-6">Poetry • Thoughts • Life</p>
              <span className="btn-primary bg-white text-black border-none">
                Follow Page
              </span>
            </div>
          </motion.a>

          {/* YouTube Card */}
          <motion.a
            href="https://www.youtube.com/@heavenload6628"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl w-full bg-gradient-to-br from-red-600 via-orange-500 to-pink-500 p-1 shadow-2xl shadow-red-900/20"
            whileHover={{ scale: 1.02 }}
          >
            <div className="card !border-none !shadow-none h-full w-full rounded-xl flex flex-col items-center justify-center p-8 text-center relative z-10 transition-all">
              <div className="w-32 h-32 bg-gradient-to-tr from-red-500 via-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-white mb-6 overflow-hidden border-4 border-[#0f1115] shadow-lg">
                <img
                  src="https://yt3.googleusercontent.com/eKD_qEhQ6nI7jtseVoU-5_Xhj5rEUKJoe0aLiugyyXxcGOj57PkqGJPiALmmE9QYnXzNFCci=s160-c-k-c0x00ffffff-no-rj"
                  alt="@heavenload6628"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">@heavenload6628</h3>
              <p className="text-slate-400 mb-6">Content creation, gaming content, vloging</p>
              <span className="btn-primary bg-white text-black border-none px-8">
                Subscribe Channel
              </span>
            </div>
          </motion.a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="card text-center relative overflow-hidden group">
          {/* Abstract bg shapes */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              I am currently available for freelance projects and full-time inquiries.
              Drop me a line if you want to collaborate!
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-6 text-left">
              <a href="mailto:abhishekhkandari9.8@gmail.com" className="relative overflow-hidden group/item flex items-center gap-4 bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/5 transition-all duration-300 hover:bg-blue-500/10 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:-translate-y-1 cursor-pointer">
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                <Mail className="text-slate-400 group-hover/item:text-blue-400 transition-colors" />
                <div>
                  <p className="text-xs text-slate-500">Email Me</p>
                  <p className="font-medium group-hover/item:text-blue-300 transition-colors">abhishekhkandari9.8@gmail.com</p>
                </div>
              </a>

              <a href="tel:+918755499668" className="relative overflow-hidden group/item flex items-center gap-4 bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/5 transition-all duration-300 hover:bg-green-500/10 hover:border-green-500/50 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:-translate-y-1 cursor-pointer">
                <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
                <Phone className="text-slate-400 group-hover/item:text-green-400 transition-colors" />
                <div>
                  <p className="text-xs text-slate-500">Call Me</p>
                  <p className="font-medium group-hover/item:text-green-300 transition-colors">+91 8755499668</p>
                </div>
              </a>

              <div className="relative overflow-hidden group/item flex items-center gap-4 bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/5 transition-all duration-300 hover:bg-red-500/10 hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:-translate-y-1 cursor-pointer">
                <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
                <MapPin className="text-slate-400 group-hover/item:text-red-400 transition-colors" />
                <div>
                  <p className="text-xs text-slate-500">Location</p>
                  <p className="font-medium group-hover/item:text-red-300 transition-colors">New Delhi, India</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <footer className="text-center mt-12 text-slate-500 text-sm">
          &copy; 2026 Abhishekh Kandari. Crafted with precision.
        </footer>
      </section>

      {/* Poetry Collection Modal */}
      {showGallery && createPortal(
        <div
          onClick={() => setShowGallery(false)}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
        >
          <div
            onClick={e => e.stopPropagation()}
            className="w-full max-w-5xl bg-slate-900/95 border border-purple-500/30 rounded-2xl p-8 relative"
          >
            <button
              onClick={() => setShowGallery(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/5 rounded-full hover:bg-red-500/80 text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="flex items-center gap-3 mb-8">
              <Feather className="text-purple-400" size={32} />
              <h2 className="text-3xl font-bold text-white">Midnight Verses Collection</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {poems.map((poem) => (
                <div
                  key={poem.id}
                  onClick={() => setSelectedPoem(poem)}
                  className="group relative cursor-pointer overflow-hidden rounded-xl border border-white/10 hover:border-purple-500/50 transition-all hover:scale-105"
                >
                  <img
                    src={poem.image}
                    alt={poem.title}
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <p className="text-white font-bold text-lg">{poem.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Full Poem View Modal */}
      {selectedPoem && createPortal(
        <div
          onClick={() => setSelectedPoem(null)}
          className="fixed inset-0 bg-black/95 z-[10000] flex items-center justify-center p-4"
        >
          <div
            onClick={e => e.stopPropagation()}
            className="relative max-w-2xl max-h-[90vh] overflow-auto"
          >
            <button
              onClick={() => setSelectedPoem(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full hover:bg-red-500/80 text-white transition-colors"
            >
              <X size={24} />
            </button>
            <img
              src={selectedPoem.image}
              alt={selectedPoem.title}
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>,
        document.body
      )}

      {/* Article Collection Modal */}
      {showArticles && createPortal(
        <div
          onClick={() => setShowArticles(false)}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
        >
          <div
            onClick={e => e.stopPropagation()}
            className="w-full max-w-4xl bg-slate-900/95 border border-blue-500/30 rounded-2xl p-8 relative"
          >
            <button
              onClick={() => setShowArticles(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/5 rounded-full hover:bg-red-500/80 text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="flex items-center gap-3 mb-8">
              <FileText className="text-blue-400" size={32} />
              <h2 className="text-3xl font-bold text-white">Article Collection</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map((article) => (
                <div
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  className="group relative cursor-pointer overflow-hidden rounded-xl border border-white/10 hover:border-blue-500/50 transition-all hover:scale-105"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <p className="text-white font-bold text-lg">{article.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Full Article View Modal */}
      {selectedArticle && createPortal(
        <div
          onClick={() => setSelectedArticle(null)}
          className="fixed inset-0 bg-black/95 z-[10000] flex items-center justify-center p-4"
        >
          <div
            onClick={e => e.stopPropagation()}
            className="relative max-w-2xl max-h-[90vh] overflow-auto"
          >
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full hover:bg-red-500/80 text-white transition-colors"
            >
              <X size={24} />
            </button>
            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>,
        document.body
      )}

    </div >
  );
}

export default App;