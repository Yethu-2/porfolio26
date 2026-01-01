
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Let's <span className="text-gradient">Talk</span></h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
            <div className="glass p-8 rounded-3xl border border-gray-800 flex items-center gap-6">
                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400">
                    <i className="fas fa-envelope text-2xl"></i>
                </div>
                <div>
                    <h4 className="text-gray-500 text-sm uppercase tracking-wider mb-1">Email Me</h4>
                    <p className="text-xl font-bold text-white">{PERSONAL_INFO.email}</p>
                </div>
            </div>
            
            <div className="glass p-8 rounded-3xl border border-gray-800 flex items-center gap-6">
                <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400">
                    <i className="fas fa-location-dot text-2xl"></i>
                </div>
                <div>
                    <h4 className="text-gray-500 text-sm uppercase tracking-wider mb-1">Office Location</h4>
                    <p className="text-xl font-bold text-white">{PERSONAL_INFO.location}</p>
                </div>
            </div>

            <div className="glass p-8 rounded-3xl border border-gray-800 flex items-center gap-6">
                <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-400">
                    <i className="fab fa-linkedin-in text-2xl"></i>
                </div>
                <div>
                    <h4 className="text-gray-500 text-sm uppercase tracking-wider mb-1">LinkedIn</h4>
                    <p className="text-xl font-bold text-white">IT Student @ RMIT</p>
                </div>
            </div>
        </div>

        <form className="glass p-10 rounded-3xl border border-gray-800 space-y-6 shadow-2xl">
            <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm text-gray-500 ml-1">Your Name</label>
                    <input type="text" className="w-full bg-slate-900 border border-gray-700 rounded-xl px-4 py-3 focus:border-blue-500 transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm text-gray-500 ml-1">Email Address</label>
                    <input type="email" className="w-full bg-slate-900 border border-gray-700 rounded-xl px-4 py-3 focus:border-blue-500 transition-colors" placeholder="john@example.com" />
                </div>
            </div>
            <div className="space-y-2">
                <label className="text-sm text-gray-500 ml-1">Subject</label>
                <input type="text" className="w-full bg-slate-900 border border-gray-700 rounded-xl px-4 py-3 focus:border-blue-500 transition-colors" placeholder="Opportunity" />
            </div>
            <div className="space-y-2">
                <label className="text-sm text-gray-500 ml-1">Message</label>
                <textarea rows={5} className="w-full bg-slate-900 border border-gray-700 rounded-xl px-4 py-3 focus:border-blue-500 transition-colors resize-none" placeholder="How can I help you?"></textarea>
            </div>
            <button type="button" className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 hover:scale-[1.02] transition-transform">
                Send Message
            </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
