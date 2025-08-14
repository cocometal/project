import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { ArrowDown, Sparkles } from 'lucide-react';

interface TitlePageProps {
  onScrollToNext: () => void;
}

export function TitlePage({ onScrollToNext }: TitlePageProps) {
  return (
    <section id="title" className="page-section flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 pink-gradient rounded-full opacity-20 blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full opacity-10 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Main title with sparkle effect */}
          <div className="relative">
            <motion.div
              className="absolute -top-4 -right-4"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Sparkles className="h-8 w-8 text-pink-400" />
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-bold pink-gradient-text text-shadow-sm mb-4">
              Business Plan
            </h1>
            <motion.div
              className="absolute -bottom-2 -left-4"
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <Sparkles className="h-6 w-6 text-purple-400" />
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-4"
          >
            <h2 className="text-2xl md:text-4xl text-gray-700 mb-2">
              Innovative Solutions for Tomorrow
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A comprehensive business strategy designed to disrupt the market 
              and create sustainable value for all stakeholders.
            </p>
          </motion.div>

          {/* Company info card */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="glass-morphism rounded-3xl p-8 max-w-md mx-auto shadow-2xl"
          >
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-800">Company Name</h3>
              <p className="text-gray-600">Founded in 2024</p>
              <p className="text-sm text-gray-500">
                Prepared by: [Your Name]<br />
                Date: {new Date().toLocaleDateString()}
              </p>
            </div>
          </motion.div>

          {/* Call to action */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="pt-8"
          >
            <Button
              onClick={onScrollToNext}
              size="lg"
              className="pink-gradient text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Explore the Plan
              <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-pink-400 rounded-full animate-float"
          style={{ animationDelay: '0s' }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-float"
          style={{ animationDelay: '2s' }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-pink-500 rounded-full animate-float"
          style={{ animationDelay: '4s' }}
        />
      </div>
    </section>
  );
}