import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from '../ui/card';
import { 
  TrendingUp, 
  Building, 
  Target, 
  Users, 
  Star, 
  DollarSign, 
  CheckCircle,
  Clock
} from 'lucide-react';

const outlineItems = [
  {
    icon: TrendingUp,
    title: 'Market Analysis',
    description: 'Comprehensive market research, size assessment, and growth potential evaluation',
    duration: '15 min read'
  },
  {
    icon: Building,
    title: 'Business Model',
    description: 'Revenue streams, value proposition, and operational framework design',
    duration: '12 min read'
  },
  {
    icon: Target,
    title: 'Marketing & Target Audience',
    description: 'Customer segmentation, marketing strategies, and audience engagement tactics',
    duration: '10 min read'
  },
  {
    icon: Users,
    title: 'Competitive Analysis',
    description: 'Competitor landscape, SWOT analysis, and differentiation strategies',
    duration: '8 min read'
  },
  {
    icon: Star,
    title: 'Specialty & Feasibility',
    description: 'Unique selling propositions, technical feasibility, and implementation roadmap',
    duration: '10 min read'
  },
  {
    icon: DollarSign,
    title: 'Financial Forecast',
    description: 'Revenue projections, cost analysis, and funding requirements',
    duration: '15 min read'
  },
  {
    icon: CheckCircle,
    title: 'Conclusion',
    description: 'Executive summary, key takeaways, and next steps forward',
    duration: '5 min read'
  }
];

export function OutlinePage() {
  return (
    <section id="outline" className="page-section py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold pink-gradient-text mb-6">
            Business Plan Outline
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive roadmap to success, structured for clarity and impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outlineItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="glass-morphism border-0 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="pink-gradient p-3 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        {item.duration}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-gray-800 group-hover:pink-gradient-text transition-all duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-2">
                      <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full pink-gradient rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          transition={{ delay: index * 0.2 + 0.5, duration: 1 }}
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

        {/* Summary stats */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-morphism rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Complete Business Strategy
            </h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold pink-gradient-text">7</div>
                <div className="text-sm text-gray-600">Key Sections</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold pink-gradient-text">75+</div>
                <div className="text-sm text-gray-600">Minutes Content</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold pink-gradient-text">100%</div>
                <div className="text-sm text-gray-600">Data-Driven</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}