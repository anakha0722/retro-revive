import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Sparkles, Zap, History, ArrowRight, Star, Cpu, Image } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlowingButton from '../components/GlowingButton';
import GlassCard from '../components/GlassCard';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: Cpu,
      title: 'AI Detection',
      description: 'Advanced algorithms automatically detect cracks, scratches, and damage',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Sparkles,
      title: 'Smart Restoration',
      description: 'Intelligent inpainting fills damaged areas with realistic content',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Image,
      title: 'Color Enhancement',
      description: 'Breathe life into faded photos with AI-powered recoloring',
      color: 'from-emerald-400 to-teal-500'
    }
  ];

  const stats = [
    { value: '1M+', label: 'Photos Restored' },
    { value: '50K+', label: 'Happy Users' },
    { value: '99.9%', label: 'Success Rate' },
    { value: '< 30s', label: 'Processing Time' }
  ];

  return (
    <div className="pt-24 pb-12 min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6">
        <motion.div
          className="text-center max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full px-6 py-3 mb-8 backdrop-blur-sm border border-white/20"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-medium text-gray-200">
              Featured on TechCrunch & Wired
            </span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
              Restore Memories
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              with AI Magic
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Transform your damaged, faded, or corrupted photos into stunning masterpieces. 
            Our cutting-edge AI technology detects and repairs any imperfections with incredible precision.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Link to="/restore">
              <GlowingButton variant="primary" size="lg" icon={Upload}>
                Start Restoring Now
              </GlowingButton>
            </Link>
            <Link to="/features">
              <GlowingButton variant="secondary" size="lg" icon={ArrowRight}>
                Learn How It Works
              </GlowingButton>
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <GlassCard key={index} className="p-6 text-center" glow>
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5, type: 'spring' }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            </GlassCard>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.2, duration: 0.6 }}
              >
                <GlassCard className="p-8 h-full" hover glow>
                  <div className="text-center">
                    <motion.div
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <GlassCard className="p-12 inline-block" glow>
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Restore Your Memories?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Upload your first photo and experience the magic of AI-powered restoration.
            </p>
            <Link to="/restore">
              <GlowingButton variant="primary" size="lg" icon={Sparkles}>
                Try It Free Now
              </GlowingButton>
            </Link>
          </GlassCard>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;