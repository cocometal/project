import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { 
  DollarSign, 
  Users, 
  Zap, 
  Shield, 
  Repeat, 
  Crown,
  ArrowRight,
  Star
} from 'lucide-react';

const revenueStreams = [
  {
    icon: Crown,
    title: 'Subscription Model',
    percentage: 65,
    description: 'Monthly and annual recurring revenue from premium features',
    amount: '$50-200/month'
  },
  {
    icon: Zap,
    title: 'Usage-Based Pricing',
    percentage: 25,
    description: 'Pay-per-use for advanced features and API calls',
    amount: '$0.10-5.00/unit'
  },
  {
    icon: Users,
    title: 'Enterprise Licensing',
    percentage: 10,
    description: 'Custom enterprise solutions and white-label licensing',
    amount: '$10K-100K/year'
  }
];

const valueProposition = [
  {
    icon: Shield,
    title: 'Security First',
    description: 'Enterprise-grade security with end-to-end encryption'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance with 99.9% uptime guarantee'
  },
  {
    icon: Users,
    title: 'Collaborative',
    description: 'Built for teams with real-time collaboration features'
  },
  {
    icon: Star,
    title: 'AI-Powered',
    description: 'Smart automation and intelligent recommendations'
  }
];

const customerJourney = [
  { step: 'Discovery', description: 'Customer becomes aware of the problem', color: '#ff6b9d' },
  { step: 'Research', description: 'Evaluates different solutions available', color: '#ff8fab' },
  { step: 'Trial', description: 'Tests our solution with free trial', color: '#ffb3d1' },
  { step: 'Purchase', description: 'Converts to paid subscription', color: '#ffc0cb' },
  { step: 'Advocacy', description: 'Becomes promoter and refers others', color: '#ffb6c1' }
];

export function BusinessModelPage() {
  return (
    <section id="business-model" className="page-section py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold pink-gradient-text mb-6">
            Business Model
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sustainable revenue streams and value creation framework
          </p>
        </motion.div>

        {/* Revenue Streams */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Revenue Streams</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {revenueStreams.map((stream, index) => {
              const Icon = stream.icon;
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
                      <div className="text-center mb-4">
                        <div className="pink-gradient p-4 rounded-2xl w-fit mx-auto mb-4">
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{stream.title}</h3>
                        <div className="text-3xl font-bold pink-gradient-text mb-2">
                          {stream.percentage}%
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-center mb-4">{stream.description}</p>
                      
                      <div className="text-center">
                        <span className="inline-block bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-semibold">
                          {stream.amount}
                        </span>
                      </div>

                      {/* Progress bar */}
                      <div className="mt-4">
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full pink-gradient rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${stream.percentage}%` }}
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

        {/* Value Proposition */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Value Proposition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProposition.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="glass-morphism border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <CardContent className="p-6 text-center">
                      <div className="pink-gradient p-3 rounded-2xl w-fit mx-auto mb-4">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{value.title}</h3>
                      <p className="text-gray-600 text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Customer Journey */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Customer Journey</h2>
          <Card className="glass-morphism border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                {customerJourney.map((stage, index) => (
                  <div key={index} className="flex items-center gap-4 flex-1">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.2, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center text-center min-w-[120px]"
                    >
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg mb-3"
                        style={{ backgroundColor: stage.color }}
                      >
                        {index + 1}
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-1">{stage.step}</h4>
                      <p className="text-xs text-gray-600 text-center">{stage.description}</p>
                    </motion.div>
                    
                    {index < customerJourney.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="hidden md:block"
                      >
                        <ArrowRight className="h-6 w-6 text-pink-400" />
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="glass-morphism border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-gray-800">Key Business Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold pink-gradient-text mb-2">$150</div>
                  <div className="text-gray-600 font-semibold">Average Revenue Per User (ARPU)</div>
                  <div className="text-sm text-gray-500">Monthly recurring revenue</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold pink-gradient-text mb-2">3.5x</div>
                  <div className="text-gray-600 font-semibold">Customer Lifetime Value (CLV)</div>
                  <div className="text-sm text-gray-500">Compared to acquisition cost</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold pink-gradient-text mb-2">92%</div>
                  <div className="text-gray-600 font-semibold">Customer Retention Rate</div>
                  <div className="text-sm text-gray-500">Annual retention</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}