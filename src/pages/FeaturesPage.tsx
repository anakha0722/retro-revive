import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Sparkles, 
  Image, 
  Zap, 
  Target, 
  Palette, 
  Download, 
  Clock,
  Shield,
  Layers,
  Eye,
  Settings
} from 'lucide-react';
import GlassCard from '../components/GlassCard';

const FeaturesPage: React.FC = () => {
  const mainFeatures = [
    {
      icon: Target,
      title: 'Intelligent Damage Detection',
      description: 'Our advanced AI scans every pixel to identify cracks, tears, stains, and other imperfections with surgical precision.',
      details: [
        'Automatic crack detection',
        'Scratch and tear identification',
        'Stain and discoloration mapping',
        'Edge damage recognition'
      ],
      color: 'from-red-400 to-pink-500'
    },
    {
      icon: Sparkles,
      title: 'Neural Network Inpainting',
      description: 'State-of-the-art generative AI fills damaged areas by understanding context and generating realistic content.',
      details: [
        'Content-aware fill',
        'Texture synthesis',
        'Pattern reconstruction',
        'Seamless blending'
      ],
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Palette,
      title: 'AI-Powered Recoloring',
      description: 'Bring faded memories back to life with intelligent color restoration that maintains historical accuracy.',
      details: [
        'Automatic colorization',
        'Contrast enhancement',
        'Saturation optimization',
        'Tone mapping'
      ],
      color: 'from-purple-400 to-indigo-500'
    }
  ];

  const technicalFeatures = [
    {
      icon: Cpu,
      title: 'Advanced Processing',
      description: 'Multi-stage AI pipeline with real-time processing'
    },
    {
      icon: Clock,
      title: 'Lightning Fast',
      description: 'Results in under 30 seconds for most images'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your photos are processed securely and deleted after 24h'
    },
    {
      icon: Layers,
      title: 'Batch Processing',
      description: 'Process multiple photos simultaneously'
    },
    {
      icon: Eye,
      title: 'Quality Control',
      description: 'AI-powered quality assessment and optimization'
    },
    {
      icon: Settings,
      title: 'Fine-tuning',
      description: 'Customize restoration parameters for perfect results'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Upload',
      description: 'Drag and drop your damaged photo or select from your device',
      icon: Download
    },
    {
      step: '02',
      title: 'Analyze',
      description: 'AI scans and identifies all types of damage and imperfections',
      icon: Eye
    },
    {
      step: '03',
      title: 'Restore',
      description: 'Advanced algorithms repair, fill, and enhance your image',
      icon: Zap
    },
    {
      step: '04',
      title: 'Download',
      description: 'Get your beautifully restored photo in high resolution',
      icon: Download
    }
  ];

  return (
    <div className="pt-24 pb-12 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Cutting-Edge
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Technology
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Discover the advanced AI algorithms and neural networks that power 
            Retro Revive's incredible photo restoration capabilities.
          </p>
        </motion.div>

        {/* Main Features */}
        <motion.div
          className="grid lg:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {mainFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
              >
                <GlassCard className="p-8 h-full" hover glow>
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full" />
                        <span className="text-gray-400 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>

        {/* How It Works */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-gray-300 text-lg">
              Our streamlined process makes photo restoration effortless
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
                >
                  <GlassCard className="p-6 text-center h-full" hover>
                    <div className="relative mb-6">
                      <div className="text-6xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
                        {step.step}
                      </div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Icon className="w-8 h-8 text-white/60" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </GlassCard>

                  {/* Connection line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transform -translate-y-1/2 z-10" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Technical Features */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Technical Excellence
            </h2>
            <p className="text-gray-300 text-lg">
              Built with the latest advancements in AI and machine learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                >
                  <GlassCard className="p-6" hover>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default FeaturesPage;