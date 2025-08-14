import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { 
  Target, 
  Users, 
  Megaphone, 
  TrendingUp, 
  Heart,
  Brain,
  Zap,
  Globe
} from 'lucide-react';

const targetSegments = [
  { name: 'Tech Professionals', value: 40, color: '#ff6b9d', icon: Brain },
  { name: 'Small Business Owners', value: 35, color: '#ff8fab', icon: Users },
  { name: 'Creative Agencies', value: 25, color: '#ffb3d1', icon: Heart }
];

const marketingChannels = [
  { channel: 'Content Marketing', roi: 450, cost: 15000 },
  { channel: 'Social Media', roi: 380, cost: 12000 },
  { channel: 'SEO/SEM', roi: 520, cost: 20000 },
  { channel: 'Email Marketing', roi: 420, cost: 8000 },
  { channel: 'Influencer Marketing', roi: 280, cost: 18000 },
  { channel: 'Paid Advertising', roi: 320, cost: 25000 }
];

const customerPersonas = [
  {
    name: 'Sarah Chen',
    role: 'Tech Lead',
    age: '28-35',
    goals: ['Streamline workflows', 'Improve team productivity', 'Stay updated with tech trends'],
    challenges: ['Limited budget', 'Complex integration', 'Time constraints'],
    channels: ['LinkedIn', 'GitHub', 'Tech blogs']
  },
  {
    name: 'Mike Rodriguez',
    role: 'Small Business Owner',
    age: '35-45',
    goals: ['Grow business', 'Reduce operational costs', 'Improve customer satisfaction'],
    challenges: ['Limited resources', 'Learning curve', 'ROI concerns'],
    channels: ['Facebook', 'Google', 'Industry forums']
  },
  {
    name: 'Emma Thompson',
    role: 'Creative Director',
    age: '25-40',
    goals: ['Creative excellence', 'Client satisfaction', 'Team collaboration'],
    challenges: ['Tight deadlines', 'Budget constraints', 'Tool complexity'],
    channels: ['Instagram', 'Behance', 'Design communities']
  }
];

export function MarketingPage() {
  return (
    <section id="marketing" className="page-section py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold pink-gradient-text mb-6">
            Marketing & Target Audience
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic customer targeting and multi-channel marketing approach
          </p>
        </motion.div>

        {/* Target Audience Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass-morphism border-0 shadow-lg h-full">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800 flex items-center gap-2">
                  <Target className="h-6 w-6 text-pink-500" />
                  Target Audience Segments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={targetSegments}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {targetSegments.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        background: 'rgba(255, 255, 255, 0.9)', 
                        border: '1px solid rgba(255, 107, 157, 0.2)',
                        borderRadius: '12px'
                      }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="space-y-3 mt-4">
                  {targetSegments.map((segment, index) => {
                    const Icon = segment.icon;
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <div 
                          className="w-4 h-4 rounded-full" 
                          style={{ backgroundColor: segment.color }}
                        />
                        <Icon className="h-5 w-5 text-gray-600" />
                        <span className="text-gray-700">{segment.name} ({segment.value}%)</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass-morphism border-0 shadow-lg h-full">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800 flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-pink-500" />
                  Marketing Channel ROI
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={marketingChannels} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 107, 157, 0.2)" />
                    <XAxis 
                      dataKey="channel" 
                      stroke="#6b5b73" 
                      angle={-45}
                      textAnchor="end"
                      height={80}
                      fontSize={12}
                    />
                    <YAxis stroke="#6b5b73" />
                    <Tooltip 
                      contentStyle={{ 
                        background: 'rgba(255, 255, 255, 0.9)', 
                        border: '1px solid rgba(255, 107, 157, 0.2)',
                        borderRadius: '12px'
                      }} 
                    />
                    <Bar dataKey="roi" fill="url(#barGradient)" radius={[4, 4, 0, 0]} />
                    <defs>
                      <linearGradient id="barGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#ff6b9d" />
                        <stop offset="100%" stopColor="#ffb3d1" />
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Customer Personas */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Customer Personas</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {customerPersonas.map((persona, index) => (
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
                      <div className="w-20 h-20 pink-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">{persona.name}</h3>
                      <p className="text-pink-600 font-semibold">{persona.role}</p>
                      <p className="text-gray-500">{persona.age}</p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                          <Target className="h-4 w-4 text-pink-500" />
                          Goals
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {persona.goals.map((goal, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 pink-gradient rounded-full mt-2 flex-shrink-0" />
                              {goal}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                          <Zap className="h-4 w-4 text-orange-500" />
                          Challenges
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {persona.challenges.map((challenge, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                          <Globe className="h-4 w-4 text-blue-500" />
                          Channels
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {persona.channels.map((channel, idx) => (
                            <span 
                              key={idx}
                              className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs"
                            >
                              {channel}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Marketing Strategy */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="glass-morphism border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-gray-800 flex items-center justify-center gap-2">
                <Megaphone className="h-6 w-6 text-pink-500" />
                Marketing Strategy Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="pink-gradient p-4 rounded-2xl w-fit mx-auto mb-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">Targeted Approach</h3>
                  <p className="text-gray-600 text-sm">Persona-based messaging and channel optimization</p>
                </div>
                <div className="text-center">
                  <div className="pink-gradient p-4 rounded-2xl w-fit mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">Data-Driven</h3>
                  <p className="text-gray-600 text-sm">Continuous optimization based on performance metrics</p>
                </div>
                <div className="text-center">
                  <div className="pink-gradient p-4 rounded-2xl w-fit mx-auto mb-4">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">Multi-Channel</h3>
                  <p className="text-gray-600 text-sm">Integrated approach across digital and traditional media</p>
                </div>
                <div className="text-center">
                  <div className="pink-gradient p-4 rounded-2xl w-fit mx-auto mb-4">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">Brand Building</h3>
                  <p className="text-gray-600 text-sm">Long-term brand awareness and customer loyalty</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}