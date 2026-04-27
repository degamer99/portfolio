/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import CaseStudies from './components/sections/CaseStudies';
import Skills from './components/sections/Skills';
import ResumeSnapshot from './components/sections/ResumeSnapshot';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Contact/Hero Section */}
        <HeroSection />

        {/* Projects Section */}
        <CaseStudies />

        {/* Skills Section */}
        <Skills />

        {/* Resume/Experience Section */}
        <ResumeSnapshot />
      </main>

      <Footer />
    </div>
  );
}
