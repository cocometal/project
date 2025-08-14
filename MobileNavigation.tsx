import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  CheckCircle,
  Menu,
  X
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

interface MobileNavigationProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

export function MobileNavigation({ activeSection, onSectionClick }: MobileNavigationProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSectionClick = (sectionId: string) => {
    onSectionClick(sectionId);
    setIsExpanded(false); // Close the menu after selection
  };

  const currentSectionIndex = navigationItems.findIndex(item => item.id === activeSection);
  const currentSection = navigationItems[currentSectionIndex];
  const CurrentIcon = currentSection?.icon || Home;

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsExpanded(false)}
          />
        )}
      </AnimatePresence>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        {/* Expanded Menu */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="glass-morphism rounded-t-3xl shadow-2xl mb-20"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-800">Navigate to Section</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleExpanded}
                    className="p-2"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                
                <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto">
                  {navigationItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;
                    
                    return (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Button
                          variant={isActive ? "default" : "ghost"}
                          onClick={() => handleSectionClick(item.id)}
                          className={`w-full justify-start gap-3 p-4 h-auto text-left ${
                            isActive 
                              ? 'pink-gradient text-white shadow-lg' 
                              : 'hover:bg-pink-100/50 text-gray-700'
                          }`}
                        >
                          <Icon className="h-5 w-5 flex-shrink-0" />
                          <div className="flex flex-col items-start min-w-0">
                            <span className="text-sm font-medium truncate w-full">{item.label}</span>
                            {isActive && (
                              <span className="text-xs opacity-75">Current</span>
                            )}
                          </div>
                        </Button>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Progress indicator */}
                <div className="mt-6 pt-4 border-t border-pink-200/30">
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                    <span>Progress</span>
                    <span>{currentSectionIndex + 1} / {navigationItems.length}</span>
                  </div>
                  <div className="w-full h-2 bg-pink-100/30 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full pink-gradient rounded-full"
                      initial={{ width: 0 }}
                      animate={{ 
                        width: `${((currentSectionIndex + 1) / navigationItems.length) * 100}%` 
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Bar */}
        <motion.div
          className="glass-morphism shadow-2xl"
          layout
        >
          <div className="flex items-center justify-between p-4">
            {/* Current Section Info */}
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="pink-gradient p-2 rounded-xl">
                <CurrentIcon className="h-5 w-5 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-gray-800 text-sm truncate">
                  {currentSection?.label || 'Loading...'}
                </p>
                <p className="text-xs text-gray-500">
                  {currentSectionIndex + 1} of {navigationItems.length}
                </p>
              </div>
            </div>

            {/* Progress Ring */}
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8">
                <svg className="w-8 h-8 transform -rotate-90" viewBox="0 0 32 32">
                  <circle
                    cx="16"
                    cy="16"
                    r="12"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="transparent"
                    className="text-pink-200"
                  />
                  <motion.circle
                    cx="16"
                    cy="16"
                    r="12"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    fill="transparent"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ 
                      pathLength: (currentSectionIndex + 1) / navigationItems.length 
                    }}
                    transition={{ duration: 0.5 }}
                    style={{
                      strokeDasharray: 2 * Math.PI * 12,
                      strokeDashoffset: 2 * Math.PI * 12 * (1 - (currentSectionIndex + 1) / navigationItems.length)
                    }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ff6b9d" />
                      <stop offset="100%" stopColor="#ffb3d1" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-700">
                    {currentSectionIndex + 1}
                  </span>
                </div>
              </div>

              {/* Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleExpanded}
                className="p-2 hover:bg-pink-100/50"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}