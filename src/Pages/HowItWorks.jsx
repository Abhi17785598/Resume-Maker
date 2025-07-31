// src/components/HowItWorks.jsx
import React from 'react';

const steps = [
  {
    step: 'STEP 1',
    title: 'Create Your Account',
    desc: 'Start your journey to career success by creating a free account. You’ll get instant access to professional resume templates, intelligent editing tools, and expert guidance — everything you need to create a standout resume quickly and confidently.',
    button1: 'Log In to Your Account',
    button2: 'Sign Up to Get Started',
    image: '/4.png',
  },
  {
    step: 'STEP 2',
    title: 'Choose Your Template',
    desc: 'Choose the resume template that best fits your personality, profession, and goals. Whether you prefer a modern, creative, or classic style, our professionally designed templates help you showcase your strengths and make a strong first impression — customize in minutes, no design skills needed.',
    tags: ['Professional', 'Modern', 'Creative', 'Minimal', 'Elegant', 'Classic', 'Clean', 'Majestic', 'Corporate', 'Advanced'],
    image: '/3.png',
  },
  {
    step: 'STEP 3',
    title: 'Add Your Information',
    desc: 'Add your personal and professional details to start building a resume that truly reflects you. Simply enter your contact information, work experience, education, and more — our guided editor helps you through every step of the resume-building process.',
    tags: ['Personal Info', 'Experience', 'Certificate', 'Skills', 'Education', 'Summary', 'Project'],
    image: '/2 (2).png',
  },
  {
    step: 'STEP 4',
    title: 'Download Your Resume',
    desc: 'Your resume is ready! Download it in your preferred format and start applying with confidence. Professionally formatted and tailored to your strengths, your resume is designed to make a lasting impression on recruiters.',
    buttons: ['PDF', 'Microsoft Word'],
    image: '/1.png',
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <div className="text-center mb-12">
        <span className="text-sm font-medium bg-blue-100 text-blue-600 px-3 py-1 rounded-full">HOW IT WORKS</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">Easy Steps for Build Resume</h2>
      </div>

      <div className="space-y-16">
        {steps.map((step, index) => (
          <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10`}>
            <img src={step.image} alt={step.title} className="w-full md:w-1/2 rounded-xl shadow-lg border border-gray-200" />

            <div className="md:w-1/2">
              <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm mb-2">
                <i className='bx bxs-file text-xl'></i> <span>{step.step}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{step.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{step.desc}</p>

              {step.button1 && (
                <div className="flex flex-wrap gap-3">
                  <button className="px-4 py-2 bg-white border border-blue-600 text-blue-600 font-medium rounded-md hover:bg-blue-50">{step.button1}</button>
                  <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700">{step.button2}</button>
                </div>
              )}

              {step.tags && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {step.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 border border-gray-300 text-gray-600 rounded-full text-sm hover:bg-gray-100">{tag}</span>
                  ))}
                </div>
              )}

              {step.buttons && (
                <div className="flex gap-3 mt-4">
                  {step.buttons.map((btn, i) => (
                    <button key={i} className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200">{btn}</button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
