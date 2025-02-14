import React, { useState, useRef } from 'react';
import { Send, MessageSquare, Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Header from '@/components/custom/Header';
import contact_logo from '../../public/contact_logo.svg';


export default function ContactPage() {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const SERVICE_KEY = import.meta.env.VITE_SERVICE_KEY;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
    const TEMPLATE_KEY = import.meta.env.VITE_TEMPLATE_KEY;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);

        try {
            if (!formRef.current) return;

            await emailjs.sendForm(
                SERVICE_KEY,
                TEMPLATE_KEY,
                formRef.current,
                PUBLIC_KEY
            );

            setSuccess(true);
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (err) {
            setError('Failed to send message. Please try again later.');
            console.error('EmailJS Error:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className=''>
            <Header />
            <div className="container mx-auto px-4 py-16">

                <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <div className="grid md:grid-cols-2">
                        {/* Contact Information */}
                        <div className="bg-gradient-to-br from-purple-700 to-pink-600 p-8 text-white">
                            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                            <p className="mb-12 text-purple-100">
                                Have questions about our AI Resume Builder? We're here to help! Send us a message and we'll respond as soon as possible.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <Mail className="w-6 h-6 text-purple-200" />
                                    <span>contact.resumecraft2@gmail.com</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <Phone className="w-6 h-6 text-purple-200" />
                                    <span>+91-9540xxxx51</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <MapPin className="w-6 h-6 text-purple-200" />
                                    <span>Your Home</span>
                                </div>
                            </div>

                            <div className="mt-12">
                                <img
                                    src={contact_logo}
                                    alt="Contact Support"
                                    className="rounded-lg opacity-75 hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="p-8">
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                                        placeholder="Your name"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                                        placeholder="your@email.com"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                                        placeholder="How can we help?"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                                        placeholder="Your message here..."
                                        required
                                    ></textarea>
                                </div>

                                {error && (
                                    <div className="text-red-500 text-sm">{error}</div>
                                )}

                                {success && (
                                    <div className="text-green-500 text-sm">Message sent successfully!</div>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:bg-gradient-to-bl text-white rounded-lg flex items-center justify-center space-x-2 focus:ring-4 focus:ring-purple-300 transition-all duration-300 disabled:opacity-70"
                                >
                                    {loading ? (
                                        <span>Sending...</span>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </button>
                            </form>

                            <div className="mt-8 text-center text-gray-600">
                                <p className="flex items-center justify-center gap-2">
                                    <MessageSquare className="w-5 h-5" />
                                    <span>We typically respond within 24 hours</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}