import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 py-12 border-t border-slate-900 text-slate-400">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold text-white mb-2">Abhishekh Kandari</h3>
                        <p className="text-sm">Content Writer & Moderator</p>
                    </div>

                    <div className="flex gap-6">
                        <a href="#" className="hover:text-sky-400 transition-colors"><Mail size={20} /></a>
                        <a href="#" className="hover:text-sky-400 transition-colors"><Linkedin size={20} /></a>
                        <a href="#" className="hover:text-sky-400 transition-colors"><Twitter size={20} /></a>
                        {/* Adding Github just in case, or we can replace with something else relevant */}
                    </div>
                </div>

                <div className="mt-8 text-center text-xs text-slate-600">
                    &copy; {new Date().getFullYear()} Abhishekh Kandari. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
