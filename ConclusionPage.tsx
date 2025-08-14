import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { CheckCircle, ArrowRight, Star, TrendingUp, Users, Heart } from 'lucide-react';

const keyTakeaways = [
  {
    icon: TrendingUp,
    title: 'Market Opportunity',
    description: 'Large addressable market with 18.5% annual growth rate and strong demand validation'
  },
  {
    icon: Star,
    title: 'Competitive Advantage',
    description: 'Unique AI-powered features with superior performance and competitive pricing'
  },
  {
    icon: Users,
    title: 'Strong Business Model',
    description: 'Sustainable revenue streams with 92% customer retention and healthy margins'
  },
  {
    icon: Heart,
    title: 'Implementation Ready',
    description: 'Clear roadmap with proven technology stack and experienced team'
  }
];

const nextSteps = [
  'Secure Series A funding of $2M by Q2 2024',
  'Complete MVP development and beta testing',
  'Launch marketing campaigns targeting key personas',
  'Build strategic partnerships with industry leaders',
  'Scale team and expand to international markets'
];

const callToActions = [
  {
    title: 'Investment Opportunity',
    description: 'Join us in revolutionizing the industry',
    buttonText: 'Schedule Meeting',
    primary: true
  },
  {
    title: 'Partnership Program',
    description: 'Explore strategic collaboration opportunities',
    buttonText: 'Learn More',
    primary: false
  },
  {
    title: 'Product Demo',
    description: 'See our solution in action',
    buttonText: 'Request Demo',
    primary: false
  }
];

export function ConclusionPage() {
  return (
    <section id="conclusion" className="page-section py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold pink-gradient-text mb-6">
            Conclusion
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform the industry together
          </p>
        </motion.div>

        {/* Executive Summary */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="glass-morphism border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Executive Summary</h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Our innovative solution addresses a significant market opportunity with a clear competitive advantage. 
                With a proven business model, strong financial projections, and an experienced team, we are positioned 
                to capture significant market share and deliver exceptional returns to investors while revolutionizing 
                how businesses operate in the digital age.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Key Takeaways */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Key Takeaways</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyTakeaways.map((takeaway, index) => {
              const Icon = takeaway.icon;
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
                      <div className="flex items-start gap-4">
                        <div className="pink-gradient p-3 rounded-2xl">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-2">{takeaway.title}</h3>
                          <p className="text-gray-600">{takeaway.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Next Steps</h2>
          <Card className="glass-morphism border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="space-y-4">
                {nextSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-pink-50/30 transition-colors"
                  >
                    <div className="pink-gradient p-2 rounded-full">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{step}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Call to Actions */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Get Involved</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {callToActions.map((cta, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="glass-morphism border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{cta.title}</h3>
                    <p className="text-gray-600 mb-6">{cta.description}</p>
                    <Button
                      className={`w-full ${
                        cta.primary 
                          ? 'pink-gradient text-white hover:shadow-lg' 
                          : 'border border-pink-300 hover:bg-pink-50'
                      } transition-all duration-300`}
                    >
                      {cta.buttonText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final Message */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="glass-morphism border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold pink-gradient-text mb-4">
                Thank You
              </h2>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                We're excited about the opportunity to work together and create something amazing. 
                Let's build the future, one innovation at a time.
              </p>
              <div className="flex items-center justify-center gap-2 text-gray-500">
                <span>Contact us at:</span>
                <span className="pink-gradient-text font-semibold">hello@yourcompany.com</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}