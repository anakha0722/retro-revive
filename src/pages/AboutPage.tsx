import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Github, 
  Twitter, 
  Linkedin, 
  Heart,
  Sparkles,
  Cpu,
  Users,
  Award,
  Globe
} from 'lucide-react';
import GlassCard from '../components/GlassCard';
import GlowingButton from '../components/GlowingButton';
import toast from 'react-hot-toast';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Alex Chen',
      role: 'AI Research Lead',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alex',
      description: 'PhD in Computer Vision, 8+ years in AI/ML'
    },
    {
      name: 'Sarah Kim',
      role: 'Product Designer',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah',
      description: 'Former Apple designer, UI/UX specialist'
    },
    {
      name: 'Marcus Johnson',
      role: 'Full-Stack Engineer',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=marcus',
      description: 'Cloud architecture and scalable systems expert'
    }
  ];

  const achievements = [
    {
      icon: Users,
      title: '1M+',
      subtitle: 'Happy Users',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Award,
      title: '#1',
      subtitle: 'AI Restoration Tool',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Globe,
      title: '150+',
      subtitle: 'Countries Served',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Sparkles,
      title: '99.9%',
      subtitle: 'Success Rate',
      color: 'from-purple-400 to-pink-500'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! We\'ll get back to you soon.');
  };

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
              About
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Retro Revive
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            We're on a mission to preserve and restore precious memories using the latest 
            advances in artificial intelligence and computer vision technology.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <GlassCard className="p-12" glow>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex p-6 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 mb-8">
                <Heart className="w-12 h-12 text-pink-400" />
              </div>
              
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Every photograph tells a story, captures a moment, and preserves a memory. 
                Unfortunately, time can damage these precious keepsakes - causing cracks, fading, 
                stains, and other imperfections that diminish their beauty and clarity.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Retro Revive harnesses the power of artificial intelligence to bring these 
                memories back to life. Our advanced neural networks can detect damage patterns, 
                intelligently reconstruct missing areas, and enhance colors with remarkable precision - 
                all while preserving the authentic character of your original photographs.
              </p>
            </div>
          </GlassCard>
        </motion.section>

        {/* Achievements */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by Millions
            </h2>
            <p className="text-gray-300 text-lg">
              Join the global community preserving memories with AI
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                >
                  <GlassCard className="p-8 text-center" hover glow>
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${achievement.color} mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">
                      {achievement.title}
                    </div>
                    <div className="text-gray-400 font-medium">
                      {achievement.subtitle}
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-300 text-lg">
              Passionate experts in AI, design, and engineering
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.2, duration: 0.6 }}
              >
                <GlassCard className="p-8 text-center" hover>
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-20 h-20 rounded-full mx-auto mb-6 ring-4 ring-cyan-400/20"
                  />
                  <h3 className="text-xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <div className="text-cyan-400 font-medium mb-4">
                    {member.role}
                  </div>
                  <p className="text-gray-400 text-sm">
                    {member.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Get In Touch
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Have questions, feedback, or need support? We'd love to hear from you!
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <p className="text-gray-400">hello@retrorevive.ai</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {[
                    { icon: Twitter, href: '#' },
                    { icon: Github, href: '#' },
                    { icon: Linkedin, href: '#' }
                  ].map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon className="w-6 h-6 text-gray-300" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <GlassCard className="p-8" glow>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-black/30 backdrop-blur-sm rounded-xl border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-black/30 backdrop-blur-sm rounded-xl border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-black/30 backdrop-blur-sm rounded-xl border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-black/30 backdrop-blur-sm rounded-xl border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                    placeholder="Tell us more about your question or feedback..."
                  />
                </div>

                <GlowingButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  icon={Mail}
                  className="w-full"
                >
                  Send Message
                </GlowingButton>
              </form>
            </GlassCard>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutPage;