import React, { useState, useEffect } from 'react';
import Header from '@/components/custom/Header';
import { AtomIcon, Edit, Share2, MessagesSquare, Bot, HelpCircle, Sparkles, Code2, Cpu, Braces, Terminal, FileCode2 } from 'lucide-react';
import Footer from '@/components/custom/Footer';

function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const processingSteps = [
    "Analyzing input data...",
    "Processing experience...",
    "Optimizing content...",
    "Generating resume..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % processingSteps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      <div className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-gray-100 z-50">
        <Header />
      </div>

      <section className="pt-20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 relative">
          <div className="inline-flex items-center py-1 px-3 mb-7 text-sm rounded-full bg-gradient-to-r from-gray-900 to-pink-600 text-white">
            <Sparkles
              className="w-4 h-4 mr-2 bg-gradient-to-r from-purple-600 to-pink-600  bg-clip-text"
            />
            <span>Powered by Advanced AI Technology</span>
          </div>

          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
            Craft Your Future with
            <div className="relative inline-block ml-3">
              <span className="relative z-10 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">AI-Powered</span>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur-lg opacity-20"></div>
            </div>
            <br />Resumes
          </h1>

          <p className="mb-8 text-lg font-normal text-gray-600 lg:text-xl max-w-3xl mx-auto">
            Experience the next generation of resume building. Our AI understands your unique story and transforms it into a compelling professional narrative.
          </p>

          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="/dashboard" className="inline-flex justify-center items-center py-3 px-7 text-base font-medium text-center text-white rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:bg-gradient-to-bl focus:ring-4 focus:ring-purple-300 transition-all duration-300">
              Start Creating
              <Cpu className="ml-2 -mr-1 w-5 h-5" />
            </a>
            <a href="#" className="inline-flex justify-center items-center py-3 px-7 text-base font-medium text-center text-gray-900 rounded-full border-2 border-gray-200 hover:bg-gray-50 transition-all duration-300">
              <Bot className="mr-2 -ml-1 w-5 h-5" />
              Watch Demo
            </a>
          </div>

          {/* AI Processing Animation */}
          <div className="relative mx-auto max-w-4xl mt-16">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-3xl"></div>
            <div className="relative bg-white rounded-2xl shadow-xl p-2 border border-gray-100">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-gray-900 to-pink-600 px-4 py-1 rounded-full border border-gray-200">
                <div className="flex items-center space-x-2 ">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium  text-gray-100">AI Processing</span>
                </div>
              </div>
              <div className="rounded-xl bg-gray-50 p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Terminal Window */}
                  <div className="col-span-2 bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-400">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="space-y-2">
                      {processingSteps.map((step, index) => (
                        <div
                          key={index}
                          className={`flex items-center space-x-2 transition-opacity duration-500 ${index === currentStep ? 'opacity-100' : 'opacity-40'
                            }`}
                        >
                          <Terminal className="w-4 h-4" />
                          <span>{step}</span>
                          {index === currentStep && (
                            <span className="animate-pulse">▋</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Processing Cards */}
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                      <div className="flex items-center space-x-3">
                        <Braces className="w-6 h-6 text-purple-600" />
                        <div className="h-2 bg-gray-300 rounded-full w-full animate-pulse"></div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                      <div className="flex items-center space-x-3">
                        <FileCode2 className="w-6 h-6 text-pink-600" />
                        <div className="h-2 bg-gray-300 rounded-full w-full animate-pulse delay-150"></div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                      <div className="flex items-center space-x-3">
                        <Code2 className="w-6 h-6 text-indigo-600" />
                        <div className="h-2 bg-gray-300 rounded-full w-full animate-pulse delay-300"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        <div className="relative px-4 mx-auto max-w-screen-xl text-center lg:px-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How Our AI Works</h2>
          <p className="text-gray-600 mb-12">Transform your experience into a powerful professional story</p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: <AtomIcon className="h-8 w-8 text-purple-600" />,
                title: "Smart Input Analysis",
                description: "Our AI processes your experience using advanced natural language understanding"
              },
              {
                icon: <Edit className="h-8 w-8 text-pink-600" />,
                title: "Content Enhancement",
                description: "Automatically enhances your content while preserving your authentic voice"
              },
              {
                icon: <Share2 className="h-8 w-8 text-indigo-600" />,
                title: "Intelligent Export",
                description: "Generate ATS-optimized formats with perfect formatting every time for easy sharing"
              }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white px-7 py-6 rounded-lg leading-none flex items-center space-x-6">
                  <div className="flex-shrink-0">{item.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="px-4 mx-auto max-w-screen-xl lg:px-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {[
              {
                question: "How accurate is the AI content generation?",
                answer: "Our AI achieves over 95% accuracy in content generation, trained on millions of successful resumes across industries."
              },
              {
                question: "Can I edit the AI-generated content?",
                answer: "Yes, you have full control to edit, refine, or rewrite any AI-generated text to match your preferences and style perfectly."
              },
              {
                question: "What formats can I export my resume in?",
                answer: "Export in PDF, DOCX, and TXT formats, all optimized for ATS compatibility."
              },
              {
                question: "Is my data secure?",
                answer: "We use enterprise-grade encryption and security measures to protect your information."
              }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <HelpCircle className="w-5 h-5 mr-2 text-purple-600" />
                    {item.question}
                  </h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-gray-900">
        <Footer />
      </div>
    </div>
  );
}

export default Home;