import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { TrendingUp, Users, Globe, DollarSign } from 'lucide-react';

const marketSizeData = [
  { year: '2020', value: 850 },
  { year: '2021', value: 980 },
  { year: '2022', value: 1150 },
  { year: '2023', value: 1350 },
  { year: '2024', value: 1580 },
  { year: '2025', value: 1850 },
  { year: '2026', value: 2180 }
];

const segmentData = [
  { name: 'Enterprise', value: 45, color: '#ff6b9d' },
  { name: 'SMB', value: 30, color: '#ff8fab' },
  { name: 'Consumer', value: 25, color: '#ffb3d1' }
];

const regionData = [
  { region: 'North America', market: 420, growth: 12 },
  { region: 'Europe', market: 350, growth: 15 },
  { region: 'Asia Pacific', market: 280, growth: 25 },
  { region: 'Latin America', market: 120, growth: 18 },
  { region: 'Others', market: 80, growth: 20 }
];

const keyStats = [
  { icon: TrendingUp, label: 'Market Growth', value: '18.5%', subtitle: 'Annual CAGR' },
  { icon: DollarSign, label: 'Market Size', value: '$1.58B', subtitle: '2024 Estimate' },
  { icon: Users, label: 'Target Users', value: '25M+', subtitle: 'Addressable Market' },
  { icon: Globe, label: 'Global Reach', value: '150+', subtitle: 'Countries' }
];

export function MarketAnalysisPage() {
  return (
    <section id="market" className="page-section py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold pink-gradient-text mb-6">
            Market Analysis
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deep dive into market opportunities, trends, and growth potential
          </p>
        </motion.div>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {keyStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="glass-morphism border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="pink-gradient p-3 rounded-2xl w-fit mx-auto mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold pink-gradient-text mb-2">
                      {stat.value}
                    </h3>
                    <p className="font-semibold text-gray-800">{stat.label}</p>
                    <p className="text-sm text-gray-600">{stat.subtitle}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Market Size Growth */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass-morphism border-0 shadow-lg h-full">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">Market Size Growth</CardTitle>
                <p className="text-gray-600">Total Addressable Market (TAM) in Millions USD</p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={marketSizeData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 107, 157, 0.2)" />
                    <XAxis dataKey="year" stroke="#6b5b73" />
                    <YAxis stroke="#6b5b73" />
                    <Tooltip 
                      contentStyle={{ 
                        background: 'rgba(255, 255, 255, 0.9)', 
                        border: '1px solid rgba(255, 107, 157, 0.2)',
                        borderRadius: '12px'
                      }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="url(#gradient)" 
                      strokeWidth={3}
                      dot={{ fill: '#ff6b9d', strokeWidth: 2, r: 6 }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ff6b9d" />
                        <stop offset="50%" stopColor="#ff8fab" />
                        <stop offset="100%" stopColor="#ffb3d1" />
                      </linearGradient>
                    </defs>
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Market Segments */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass-morphism border-0 shadow-lg h-full">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">Market Segments</CardTitle>
                <p className="text-gray-600">Revenue Distribution by Customer Type</p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={segmentData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {segmentData.map((entry, index) => (
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
                <div className="flex justify-center gap-4 mt-4">
                  {segmentData.map((segment, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: segment.color }}
                      />
                      <span className="text-sm text-gray-600">{segment.name} ({segment.value}%)</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Regional Analysis */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="glass-morphism border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">Regional Market Analysis</CardTitle>
              <p className="text-gray-600">Market size and growth rates by region</p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={regionData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 107, 157, 0.2)" />
                  <XAxis dataKey="region" stroke="#6b5b73" />
                  <YAxis stroke="#6b5b73" />
                  <Tooltip 
                    contentStyle={{ 
                      background: 'rgba(255, 255, 255, 0.9)', 
                      border: '1px solid rgba(255, 107, 157, 0.2)',
                      borderRadius: '12px'
                    }} 
                  />
                  <Bar dataKey="market" fill="url(#barGradient)" radius={[8, 8, 0, 0]} />
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

        {/* Market Insights */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card className="glass-morphism border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">Key Market Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800">Growth Drivers</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 pink-gradient rounded-full mt-2 flex-shrink-0" />
                      Digital transformation acceleration
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 pink-gradient rounded-full mt-2 flex-shrink-0" />
                      Increasing demand for automation
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 pink-gradient rounded-full mt-2 flex-shrink-0" />
                      Remote work adoption
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800">Market Challenges</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                      Intense competition
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                      Regulatory compliance
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                      Technology integration complexity
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}