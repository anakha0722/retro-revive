import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Home, Zap, Upload, History, Info, LogOut, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Navigation: React.FC = () => {
  const location = useLocation();
  const { user, logout } = useAuth();
  
  const navItems = [
    { path: '/home', icon: Home, label: 'Home' },
    { path: '/features', icon: Zap, label: 'Features' },
    { path: '/restore', icon: Upload, label: 'Restore' },
    { path: '/saved', icon: History, label: 'Saved' },
    { path: '/about', icon: Info, label: 'About' },
  ];

  if (!user) return null;

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/home" className="flex items-center space-x-3 group">
            <div className="relative">
              <Sparkles className="w-8 h-8 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 w-8 h-8 bg-cyan-400/20 rounded-full blur-md group-hover:scale-150 transition-transform duration-300" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Retro Revive
            </h1>
          </Link>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link key={item.path} to={item.path}>
                  <motion.div
                    className={`relative flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{item.label}</span>
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                        layoutId="activeIndicator"
                      />
                    )}
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-3 bg-white/10 rounded-lg px-3 py-2 backdrop-blur-sm">
              <img 
                src={user.avatar} 
                alt={user.name}
                className="w-6 h-6 rounded-full"
              />
              <span className="text-gray-200 text-sm font-medium">{user.name}</span>
            </div>
            
            <motion.button
              onClick={logout}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-400 hover:text-red-300 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;