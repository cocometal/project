import React, { useState, useEffect } from 'react';
import { NavigationSidebar } from './components/NavigationSidebar';
import { MobileNavigation } from './components/MobileNavigation';
import { TitlePage } from './components/pages/TitlePage';
import { OutlinePage } from './components/pages/OutlinePage';
import { MarketAnalysisPage } from './components/pages/MarketAnalysisPage';
import { BusinessModelPage } from './components/pages/BusinessModelPage';
import { MarketingPage } from './components/pages/MarketingPage';
import { CompetitorsPage } from './components/pages/CompetitorsPage';
import { SpecialtyPage } from './components/pages/SpecialtyPage';
import { FinancialPage } from './components/pages/FinancialPage';
import { ConclusionPage } from './components/pages/ConclusionPage';

const sections = [
  'title',
  'outline', 
  'market',
  'business-model',
  'marketing',
  'competitors',
  'specialty',
  'financial',
  'conclusion'
];

export default function App() {
  const [activeSection, setActiveSection] = useState('title');

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Handle scroll to next section
  const scrollToNext = () => {
    const currentIndex = sections.indexOf(activeSection);
    if (currentIndex < sections.length - 1) {
      const nextSection = sections[currentIndex + 1];
      scrollToSection(nextSection);
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enable smooth scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen scroll-smooth">
      {/* Navigation Sidebar */}
      <NavigationSidebar 
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />

      {/* Mobile Navigation */}
      <MobileNavigation 
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />

      {/* Main Content */}
      <main className="relative">
        {/* Background decorative elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-0 right-0 w-96 h-96 pink-gradient rounded-full opacity-5 blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full opacity-5 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>

        {/* Page Sections */}
        <div className="relative z-10">
          <TitlePage onScrollToNext={scrollToNext} />
          <OutlinePage />
          <MarketAnalysisPage />
          <BusinessModelPage />
          <MarketingPage />
          <CompetitorsPage />
          <SpecialtyPage />
          <FinancialPage />
          <ConclusionPage />
        </div>
      </main>

      {/* Scroll indicator - Desktop only */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:block">
        <div className="glass-morphism rounded-full p-3 shadow-lg">
          <div className="w-4 h-4 border-2 border-pink-400 rounded-full relative">
            <div 
              className="absolute inset-0 pink-gradient rounded-full transition-all duration-300"
              style={{ 
                transform: `scale(${(sections.indexOf(activeSection) + 1) / sections.length})` 
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}