import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Heart, FileText, Star, ScanQrCodeIcon, PhoneCallIcon } from 'lucide-react';

function Footer() {
    return (
        <footer className="bg-white">
            <div className="container mx-auto pt-5 ">
                {/* Logo and Description */}
                <div className="flex flex-col items-center mb-12">
                    <a here="/" className="flex items-center space-x-2 mb-4">
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-25"></div>
                            <div className="relative bg-white p-2 rounded-full">
                                <img src="./logo.svg" alt="" />
                            </div>
                        </div>
                        <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                            ResumeCraft
                        </span>
                    </a>
                    <p className="text-gray-500 text-center max-w-md">
                        Empowering careers through AI-powered resume creation. Build your future with confidence.
                    </p>
                    <div className="flex flex-col mt-5 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <a href="/dashboard" className="inline-flex justify-center items-center py-3 px-7 text-base font-medium text-center text-white rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:bg-gradient-to-bl focus:ring-4 focus:ring-purple-300 transition-all duration-300">
                            Create
                            <ScanQrCodeIcon className="ml-2 -mr-1 w-5 h-5" />
                        </a>
                        <a href="/contact" className="inline-flex justify-center items-center py-3 px-7 text-base font-medium text-center text-gray-900 rounded-full border-2 border-gray-200 hover:bg-gray-50 transition-all duration-300">
                            <PhoneCallIcon className="mr-2 -ml-1 w-5 h-5" />
                            Contact
                        </a>


                    </div>
                </div>
                <div className='bg-gray-400 pt-4 px-5' >
                    {/* Links Grid */}
                    <div className=" grid grid-cols-1 md:grid-cols-4 gap-8 px-4 mb-12">
                        <div className="space-y-4">
                            <h3 className="font-semibold text-lg text-gray-100">About</h3>
                            <p className="text-gray-100 text-sm">
                                Our AI-powered platform helps you create professional resumes that stand out. Join thousands of successful job seekers.
                            </p>
                        </div>

                        <div className="  space-y-4">
                            <h3 className="font-semibold text-lg text-gray-100">Quick Links</h3>
                            <div className="flex flex-col space-y-2">
                                <a href="#" className="text-gray-100 hover:text-purple-300 transition-colors text-sm">
                                    Resume Templates
                                </a>
                                <a href="#" className="text-gray-100 hover:text-purple-300 transition-colors text-sm">
                                    Blog
                                </a>
                                <a href="#" className="text-gray-100 hover:text-purple-300 transition-colors text-sm">
                                    Features
                                </a>
                            </div>
                        </div>

                        <div className=" space-y-4">
                            <h3 className="font-semibold text-lg text-gray-100">Support</h3>
                            <div className="flex flex-col space-y-2">
                                <Link to="/contact" className="text-gray-100 hover:text-purple-300 transition-colors text-sm">
                                    Contact Us
                                </Link>
                                <a here="#privacy" className="text-gray-100 hover:text-purple-300 transition-colors text-sm">
                                    Privacy Policy
                                </a>
                                <a  here="#" className="text-gray-100 hover:text-purple-300 transition-colors text-sm">
                                    Terms of Service
                                </a>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-semibold text-lg text-gray-100">Connect</h3>
                            <div className="flex space-x-4">
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-100 p-2 rounded-full hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 group transition-all duration-300"
                                >
                                    <Facebook className="w-5 h-5 text-gray-600 group-hover:text-white" />
                                </a>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-100 p-2 rounded-full hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 group transition-all duration-300"
                                >
                                    <Twitter className="w-5 h-5 text-gray-600 group-hover:text-white" />
                                </a>
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-100 p-2 rounded-full hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 group transition-all duration-300"
                                >
                                    <Instagram className="w-5 h-5 text-gray-600 group-hover:text-white" />
                                </a>
                            </div>
                            <p className="text-sm text-gray-100">Follow us on social media</p>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-5  border-t border-gray-200">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <div className="flex items-center space-x-2 py-5">
                                <span className="text-gray-100 text-sm">Made with</span>
                                <Heart className="w-4 h-4 text-pink-900" />
                                <span className="text-gray-100 text-sm">by ResumeCraft Team</span>
                            </div>
                            <p className="text-gray-100 text-sm">
                                © {new Date().getFullYear()} ResumeCraft. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;