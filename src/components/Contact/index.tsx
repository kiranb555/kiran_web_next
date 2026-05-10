"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PaperAirplaneIcon, UserIcon, EnvelopeIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all fields');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch('/api/sendMail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const inputClass = "w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-400 dark:focus:border-indigo-600 outline-none transition-all duration-200";
  const labelClass = "text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2 mb-2";

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 tracking-widest uppercase mb-3 block">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Let&apos;s{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            Have a project in mind or just want to chat? I&apos;d love to hear from you.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl shadow-gray-200/50 dark:shadow-black/30 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className={labelClass}>
                  <UserIcon className="w-4 h-4 text-indigo-500" /> Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="Your name"
                  disabled={status === 'sending'}
                />
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>
                  <EnvelopeIcon className="w-4 h-4 text-indigo-500" /> Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="your.email@example.com"
                  disabled={status === 'sending'}
                />
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  <ChatBubbleLeftIcon className="w-4 h-4 text-indigo-500" /> Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={inputClass + ' resize-none'}
                  placeholder="Your message..."
                  disabled={status === 'sending'}
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 ${
                  status === 'sending' ? 'opacity-60 cursor-not-allowed' : ''
                }`}
              >
                {status === 'sending' ? (
                  'Sending...'
                ) : (
                  <>
                    <PaperAirplaneIcon className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </motion.button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-emerald-600 dark:text-emerald-400 text-sm font-medium"
                >
                  Message sent! I&apos;ll get back to you soon.
                </motion.p>
              )}

              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-red-500 dark:text-red-400 text-sm font-medium"
                >
                  {errorMessage}
                </motion.p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
