import React, { useEffect } from 'react';
import { Button } from '../ui/button';
import { Link, useLocation } from 'react-router-dom';
import { UserButton, useUser } from '@clerk/clerk-react';
import { Cpu } from 'lucide-react';

function Header() {
    const { user, isSignedIn } = useUser();
    const location = useLocation();
    
    const scrollToHero = () => {
        const heroSection = document.getElementById('hero-section');
        if (heroSection) {
            heroSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Handle scroll when navigating to root path
    useEffect(() => {
        if (location.pathname === '/' && location.hash === '') {
            scrollToHero();
        }
    }, [location]);

    const handleLogoClick = (e) => {
        if (location.pathname === '/') {
            e.preventDefault();
            scrollToHero();
        }
    };

    return (
        <div className='container mx-auto'>
            <div className='py-4 flex items-center justify-between'>
                <Link 
                    to='/' 
                    className="flex items-center space-x-2"
                    onClick={handleLogoClick}
                >
                    <div className="relative ">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-25"></div>
                        <div className="relative ml-5 px-2 bg-gray-100 p-2 rounded-full">
                             <img src="/logo.svg" alt="image"  />
                        </div>
                    </div>
                    <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                      
                       ResumeCraft
                    </span>
                </Link>

                {isSignedIn ? (
                    <div className='flex items-center space-x-4'>
                        <Link to='/dashboard'>
                            <Button variant="outline" className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:bg-gradient-to-bl text-white focus:ring-4 focus:ring-purple-300 transition-all duration-300">
                                Dashboard
                            </Button>
                        </Link>
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-25"></div>
                            <div className="relative">
                                <UserButton />
                            </div>
                        </div>
                    </div>
                ) : (
                    <Link to='/auth/signIn'>
                        <Button className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:bg-gradient-to-bl transition-all duration-300">
                            Get Started
                        </Button>
                    </Link>
                )}
            </div>
        </div>
    );
}

export default Header;