import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  hover = true, 
  glow = false 
}) => {
  return (
    <motion.div
      className={`
        relative bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20
        ${hover ? 'hover:bg-white/15 hover:border-white/30' : ''}
        ${glow ? 'shadow-2xl shadow-cyan-500/10' : ''}
        transition-all duration-300 ${className}
      `}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
      
      {/* Subtle inner glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-white/5 pointer-events-none" />
      
      {/* Border gradient effect */}
      <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20 bg-clip-border opacity-0 hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

export default GlassCard;