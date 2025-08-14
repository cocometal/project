import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { 
  Home, 
  List, 
  TrendingUp, 
  Building, 
  Target, 
  Users, 
  Star, 
  DollarSign, 
  CheckCircle 
} from 'lucide-react';

const navigationItems = [
  { id: 'title', label: 'Title', icon: Home },
  { id: 'outline', label: 'Outline', icon: List },
  { id: 'market', label: 'Market Analysis', icon: TrendingUp },
  { id: 'business-model', label: 'Business Model', icon: Building },
  { id: 'marketing', label: 'Marketing & TA', icon: Target },
  { id: 'competitors', label: 'Competitors', icon: Users },
  { id: 'specialty', label: 'Specialty & Feasibility', icon: Star },
  { id: 'financial', label: 'Financial Forecast', icon: DollarSign },
  { id: 'conclusion', label: 'Conclusion', icon: CheckCircle },
];

interface NavigationSidebarProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

export function NavigationSidebar({ activeSection, onSectionClick }: NavigationSidebarProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY < 100 || scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed left-6 top-1/2 -translate-y-1/2 z-50 transition-opacity duration-300 hidden md:block ${
        isVisible ? 'opacity-100' : 'opacity-30 hover:opacity-100'
      }`}
    >
      <div className="glass-morphism rounded-2xl p-4 shadow-2xl">
        <nav className="space-y-2">
          {navigationItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <motion.div
                key={item.id}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  onClick={() => onSectionClick(item.id)}
                  className={`w-full justify-start gap-3 text-left transition-all duration-300 ${
                    isActive 
                      ? 'pink-gradient text-white shadow-lg' 
                      : 'hover:bg-pink-100/50 text-gray-700'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-sm">{item.label}</span>
                </Button>
              </motion.div>
            );
          })}
        </nav>
        
        {/* Progress indicator */}
        <div className="mt-4 pt-4 border-t border-pink-200/30">
          <div className="w-full h-2 bg-pink-100/30 rounded-full overflow-hidden">
            <motion.div
              className="h-full pink-gradient rounded-full"
              initial={{ width: 0 }}
              animate={{ 
                width: `${((navigationItems.findIndex(item => item.id === activeSection) + 1) / navigationItems.length) * 100}%` 
              }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <p className="text-xs text-center mt-2 text-gray-600">
            {navigationItems.findIndex(item => item.id === activeSection) + 1} / {navigationItems.length}
          </p>
        </div>
      </div>
    </motion.div>
  );
}