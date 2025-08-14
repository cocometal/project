import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Users, Star, DollarSign, TrendingUp, Shield, Zap } from 'lucide-react';

const competitors = [
  {
    name: 'Competitor A',
    marketShare: 35,
    pricing: '$99-299/month',
    strengths: ['Market leader', 'Strong brand', 'Enterprise focus'],
    weaknesses: ['High pricing', 'Complex UI', 'Limited customization'],
    rating: 4.2
  },
  {
    name: 'Competitor B',
    marketShare: 25,
    pricing: '$49-199/month',
    strengths: ['User-friendly', 'Good pricing', 'Strong support'],
    weaknesses: ['Limited features', 'Scalability issues', 'Slow updates'],
    rating: 4.0
  },
  {
    name: 'Competitor C',
    marketShare: 20,
    pricing: '$79-249/month',
    strengths: ['Innovation', 'Modern design', 'API-first'],
    weaknesses: ['New player', 'Limited track record', 'Smaller team'],
    rating: 3.8
  }
];

const competitiveAdvantages = [
  {
    icon: Zap,
    title: 'Performance',
    ourScore: 95,
    competitorAvg: 75,
    description: '3x faster processing with optimized algorithms'
  },
  {
    icon: DollarSign,
    title: 'Pricing',
    ourScore: 90,
    competitorAvg: 60,
    description: '40% more affordable than market leaders'
  },
  {
    icon: Users,
    title: 'User Experience',
    ourScore: 92,
    competitorAvg: 70,
    description: 'Intuitive design with minimal learning curve'
  },
  {
    icon: Shield,
    title: 'Security',
    ourScore: 98,
    competitorAvg: 80,
    description: 'Enterprise-grade security with compliance'
  }
];

export function CompetitorsPage() {
  return (
    <section id="competitors" className="page-section py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold pink-gradient-text mb-6">
            Competitive Analysis
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the competitive landscape and our unique positioning
          </p>
        </motion.div>

        {/* Market Share Overview */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="glass-morphism border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-gray-800">Market Share Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {competitors.map((competitor, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-32 text-gray-700 font-semibold">{competitor.name}</div>
                    <div className="flex-1 h-8 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full pink-gradient rounded-full flex items-center justify-end pr-3"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${competitor.marketShare}%` }}
                        transition={{ delay: index * 0.3 + 0.5, duration: 1 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-white text-sm font-semibold">
                          {competitor.marketShare}%
                        </span>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: competitors.length * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="w-32 text-gray-700 font-semibold">Our Solution</div>
                  <div className="flex-1 h-8 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-end pr-3"
                      initial={{ width: 0 }}
                      whileInView={{ width: '20%' }}
                      transition={{ delay: competitors.length * 0.3 + 0.5, duration: 1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-white text-sm font-semibold">20% (Target)</span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Competitor Comparison */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Detailed Competitor Analysis</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {competitors.map((competitor, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="glass-morphism border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{competitor.name}</h3>
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Star className="h-5 w-5 text-yellow-500 fill-current" />
                        <span className="font-semibold">{competitor.rating}</span>
                      </div>
                      <p className="text-pink-600 font-semibold">{competitor.pricing}</p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-green-500" />
                          Strengths
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {competitor.strengths.map((strength, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                              {strength}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                          <Shield className="h-4 w-4 text-red-500" />
                          Weaknesses
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {competitor.weaknesses.map((weakness, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                              {weakness}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Competitive Advantages */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Competitive Advantages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {competitiveAdvantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-morphism border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="pink-gradient p-3 rounded-2xl">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{advantage.title}</h3>
                          <p className="text-gray-600 text-sm">{advantage.description}</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Our Solution</span>
                          <span className="font-bold text-pink-600">{advantage.ourScore}%</span>
                        </div>
                        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full pink-gradient rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${advantage.ourScore}%` }}
                            transition={{ delay: index * 0.2 + 0.5, duration: 1 }}
                            viewport={{ once: true }}
                          />
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Competitor Average</span>
                          <span className="font-bold text-gray-600">{advantage.competitorAvg}%</span>
                        </div>
                        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gray-400 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${advantage.competitorAvg}%` }}
                            transition={{ delay: index * 0.2 + 0.7, duration: 1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}