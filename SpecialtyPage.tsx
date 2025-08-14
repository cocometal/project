import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Star, Zap, Shield, Rocket, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

const specialties = [
  {
    icon: Zap,
    title: 'AI-Powered Automation',
    description: 'Advanced machine learning algorithms that adapt and optimize processes in real-time',
    uniqueness: 95
  },
  {
    icon: Shield,
    title: 'Zero-Trust Security',
    description: 'Military-grade encryption with blockchain-based authentication',
    uniqueness: 90
  },
  {
    icon: Rocket,
    title: 'Instant Deployment',
    description: 'One-click deployment with automatic scaling and load balancing',
    uniqueness: 88
  },
  {
    icon: Star,
    title: 'Predictive Analytics',
    description: 'AI-driven insights that predict market trends and user behavior',
    uniqueness: 92
  }
];

const feasibilityFactors = [
  {
    factor: 'Technical Feasibility',
    score: 85,
    status: 'High',
    details: 'Proven technology stack with experienced development team'
  },
  {
    factor: 'Market Feasibility',
    score: 90,
    status: 'High',
    details: 'Strong market demand with validated customer interviews'
  },
  {
    factor: 'Financial Feasibility',
    score: 80,
    status: 'High',
    details: 'Sustainable revenue model with multiple funding options'
  },
  {
    factor: 'Operational Feasibility',
    score: 75,
    status: 'Medium',
    details: 'Scalable operations with some infrastructure investments needed'
  }
];

const roadmap = [
  {
    phase: 'Phase 1',
    title: 'MVP Development',
    duration: '3 months',
    status: 'In Progress',
    milestones: ['Core features', 'Basic UI', 'Alpha testing']
  },
  {
    phase: 'Phase 2',
    title: 'Beta Launch',
    duration: '2 months',
    status: 'Planned',
    milestones: ['User feedback', 'Bug fixes', 'Performance optimization']
  },
  {
    phase: 'Phase 3',
    title: 'Public Launch',
    duration: '1 month',
    status: 'Planned',
    milestones: ['Marketing campaign', 'Customer onboarding', 'Support system']
  },
  {
    phase: 'Phase 4',
    title: 'Scale & Expand',
    duration: '6 months',
    status: 'Future',
    milestones: ['New features', 'Market expansion', 'Team growth']
  }
];

export function SpecialtyPage() {
  return (
    <section id="specialty" className="page-section py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold pink-gradient-text mb-6">
            Specialty & Feasibility
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unique value propositions and comprehensive feasibility analysis
          </p>
        </motion.div>

        {/* Unique Specialties */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Unique Specialties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specialties.map((specialty, index) => {
              const Icon = specialty.icon;
              return (
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
                      <div className="flex items-start gap-4 mb-4">
                        <div className="pink-gradient p-3 rounded-2xl">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-800 mb-2">{specialty.title}</h3>
                          <p className="text-gray-600 mb-4">{specialty.description}</p>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-600">Uniqueness Score</span>
                          <span className="font-bold pink-gradient-text">{specialty.uniqueness}%</span>
                        </div>
                        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full pink-gradient rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${specialty.uniqueness}%` }}
                            transition={{ delay: index * 0.3 + 0.5, duration: 1 }}
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

        {/* Feasibility Analysis */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Feasibility Analysis</h2>
          <Card className="glass-morphism border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="space-y-6">
                {feasibilityFactors.map((factor, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-1/4">
                      <h4 className="font-semibold text-gray-800">{factor.factor}</h4>
                      <p className="text-sm text-gray-600">{factor.details}</p>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Score</span>
                        <span className={`font-bold px-2 py-1 rounded-full text-xs ${
                          factor.status === 'High' ? 'bg-green-100 text-green-700' :
                          factor.status === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {factor.status} ({factor.score}%)
                        </span>
                      </div>
                      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${
                            factor.status === 'High' ? 'bg-green-500' :
                            factor.status === 'Medium' ? 'bg-yellow-500' :
                            'bg-red-500'
                          }`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${factor.score}%` }}
                          transition={{ delay: index * 0.3 + 0.5, duration: 1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Implementation Roadmap */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Implementation Roadmap</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmap.map((phase, index) => (
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
                    <div className="text-center mb-4">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 ${
                        phase.status === 'In Progress' ? 'pink-gradient' :
                        phase.status === 'Planned' ? 'bg-blue-500' :
                        'bg-gray-400'
                      }`}>
                        {phase.status === 'In Progress' ? (
                          <Clock className="h-8 w-8 text-white" />
                        ) : phase.status === 'Planned' ? (
                          <CheckCircle className="h-8 w-8 text-white" />
                        ) : (
                          <AlertTriangle className="h-8 w-8 text-white" />
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-gray-800">{phase.phase}</h3>
                      <p className="text-pink-600 font-semibold">{phase.title}</p>
                      <p className="text-gray-500 text-sm">{phase.duration}</p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800 text-sm">Key Milestones:</h4>
                      <ul className="space-y-1">
                        {phase.milestones.map((milestone, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 pink-gradient rounded-full flex-shrink-0" />
                            {milestone}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={`mt-4 px-3 py-1 rounded-full text-xs text-center font-semibold ${
                      phase.status === 'In Progress' ? 'bg-pink-100 text-pink-700' :
                      phase.status === 'Planned' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {phase.status}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}