import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { DollarSign, TrendingUp, PiggyBank, CreditCard } from 'lucide-react';

const revenueData = [
  { year: 'Year 1', revenue: 250, expenses: 180, profit: 70 },
  { year: 'Year 2', revenue: 580, expenses: 380, profit: 200 },
  { year: 'Year 3', revenue: 1200, expenses: 720, profit: 480 },
  { year: 'Year 4', revenue: 2100, expenses: 1150, profit: 950 },
  { year: 'Year 5', revenue: 3400, expenses: 1700, profit: 1700 }
];

const expenseBreakdown = [
  { category: 'Personnel', amount: 45, color: '#ff6b9d' },
  { category: 'Technology', amount: 25, color: '#ff8fab' },
  { category: 'Marketing', amount: 20, color: '#ffb3d1' },
  { category: 'Operations', amount: 10, color: '#ffc0cb' }
];

const fundingRounds = [
  { round: 'Seed', amount: 500, valuation: 3000, investors: 'Angel Investors' },
  { round: 'Series A', amount: 2000, valuation: 12000, investors: 'VC Firm A' },
  { round: 'Series B', amount: 8000, valuation: 35000, investors: 'VC Firm B, Strategic' }
];

const keyMetrics = [
  { metric: 'Break-even Point', value: '18 months', icon: TrendingUp },
  { metric: 'Customer Acquisition Cost', value: '$150', icon: DollarSign },
  { metric: 'Monthly Recurring Revenue', value: '$125K', icon: CreditCard },
  { metric: 'Gross Margin', value: '75%', icon: PiggyBank }
];

export function FinancialPage() {
  return (
    <section id="financial" className="page-section py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold pink-gradient-text mb-6">
            Financial Forecast
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive financial projections and funding strategy
          </p>
        </motion.div>

        {/* Key Financial Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {keyMetrics.map((metric, index) => {
            const Icon = metric.icon;
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
                    <h3 className="text-2xl font-bold pink-gradient-text mb-2">
                      {metric.value}
                    </h3>
                    <p className="text-gray-600 text-sm">{metric.metric}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Revenue and Profit Projection */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass-morphism border-0 shadow-lg h-full">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">5-Year Financial Projection</CardTitle>
                <p className="text-gray-600">Revenue, Expenses, and Profit (in thousands USD)</p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart data={revenueData}>
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
                      dataKey="revenue" 
                      stroke="#ff6b9d" 
                      strokeWidth={3}
                      dot={{ fill: '#ff6b9d', strokeWidth: 2, r: 6 }}
                      name="Revenue"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="expenses" 
                      stroke="#ff8fab" 
                      strokeWidth={3}
                      dot={{ fill: '#ff8fab', strokeWidth: 2, r: 6 }}
                      name="Expenses"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="profit" 
                      stroke="#ffb3d1" 
                      strokeWidth={3}
                      dot={{ fill: '#ffb3d1', strokeWidth: 2, r: 6 }}
                      name="Profit"
                    />
                  </LineChart>
                </ResponsiveContainer>
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
                <CardTitle className="text-xl text-gray-800">Expense Breakdown</CardTitle>
                <p className="text-gray-600">Operating expenses distribution (%)</p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <PieChart>
                    <Pie
                      data={expenseBreakdown}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={130}
                      paddingAngle={5}
                      dataKey="amount"
                    >
                      {expenseBreakdown.map((entry, index) => (
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
                <div className="grid grid-cols-2 gap-3 mt-4">
                  {expenseBreakdown.map((expense, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: expense.color }}
                      />
                      <span className="text-sm text-gray-600">{expense.category} ({expense.amount}%)</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Funding Strategy */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Funding Strategy</h2>
          <Card className="glass-morphism border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-pink-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-800">Funding Round</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-800">Amount ($K)</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-800">Valuation ($K)</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-800">Investors</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fundingRounds.map((round, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="border-b border-pink-100 hover:bg-pink-50/30 transition-colors"
                      >
                        <td className="py-4 px-4">
                          <span className="font-semibold text-gray-800">{round.round}</span>
                        </td>
                        <td className="py-4 px-4">
                          <span className="text-pink-600 font-bold">${round.amount.toLocaleString()}</span>
                        </td>
                        <td className="py-4 px-4">
                          <span className="text-gray-700">${round.valuation.toLocaleString()}</span>
                        </td>
                        <td className="py-4 px-4">
                          <span className="text-gray-600">{round.investors}</span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Financial Assumptions */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="glass-morphism border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-gray-800">Key Financial Assumptions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="font-semibold text-gray-800 mb-2">Customer Growth Rate</h4>
                  <div className="text-3xl font-bold pink-gradient-text mb-2">15%</div>
                  <div className="text-sm text-gray-600">Monthly compound growth</div>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-800 mb-2">Churn Rate</h4>
                  <div className="text-3xl font-bold pink-gradient-text mb-2">5%</div>
                  <div className="text-sm text-gray-600">Monthly customer churn</div>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-800 mb-2">Gross Margin</h4>
                  <div className="text-3xl font-bold pink-gradient-text mb-2">75%</div>
                  <div className="text-sm text-gray-600">Average across all products</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}