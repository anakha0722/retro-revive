import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Trash2, Eye, Calendar, Clock } from 'lucide-react';
import { RestoredImage } from '../types';
import GlassCard from '../components/GlassCard';
import GlowingButton from '../components/GlowingButton';
import toast from 'react-hot-toast';

const SavedPage: React.FC = () => {
  const [savedImages, setSavedImages] = useState<RestoredImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<RestoredImage | null>(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('saved-restorations') || '[]');
    setSavedImages(saved);
  }, []);

  const handleDelete = (id: string) => {
    const updated = savedImages.filter(img => img.id !== id);
    setSavedImages(updated);
    localStorage.setItem('saved-restorations', JSON.stringify(updated));
    toast.success('Image deleted successfully');
  };

  const handleDownload = (image: RestoredImage) => {
    // In a real app, you'd download the actual file
    toast.success(`Downloaded ${image.filename}`);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (savedImages.length === 0) {
    return (
      <div className="pt-24 pb-12 min-h-screen">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Saved Restorations
              </span>
            </h1>
            
            <GlassCard className="p-12" glow>
              <div className="text-center">
                <div className="inline-flex p-6 rounded-full bg-gradient-to-r from-gray-500/20 to-gray-600/20 mb-6">
                  <Eye className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  No saved restorations yet
                </h3>
                <p className="text-gray-400 mb-8">
                  Start restoring your photos and save them to build your personal gallery of memories.
                </p>
                <GlowingButton variant="primary" onClick={() => window.location.href = '/restore'}>
                  Start Restoring Photos
                </GlowingButton>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-12 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Your Gallery
            </span>
          </h1>
          <p className="text-gray-300 text-lg">
            {savedImages.length} restored {savedImages.length === 1 ? 'memory' : 'memories'} saved
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {savedImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
            >
              <GlassCard className="overflow-hidden" hover glow>
                {/* Image */}
                <div 
                  className="relative aspect-video bg-gray-800 cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.restoredUrl}
                    alt={image.filename}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2 truncate">
                    {image.filename}
                  </h3>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(image.uploadDate)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{image.processingTime}s</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2">
                    <GlowingButton
                      variant="primary"
                      size="sm"
                      icon={Download}
                      onClick={() => handleDownload(image)}
                      className="flex-1"
                    >
                      Download
                    </GlowingButton>
                    <GlowingButton
                      variant="danger"
                      size="sm"
                      icon={Trash2}
                      onClick={() => handleDelete(image.id)}
                    >
                      Delete
                    </GlowingButton>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Modal */}
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="max-w-4xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <GlassCard className="p-6" glow>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-white">
                    {selectedImage.filename}
                  </h3>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
                  <img
                    src={selectedImage.restoredUrl}
                    alt={selectedImage.filename}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex justify-center space-x-4">
                  <GlowingButton
                    variant="primary"
                    icon={Download}
                    onClick={() => handleDownload(selectedImage)}
                  >
                    Download Full Resolution
                  </GlowingButton>
                  <GlowingButton
                    variant="danger"
                    icon={Trash2}
                    onClick={() => {
                      handleDelete(selectedImage.id);
                      setSelectedImage(null);
                    }}
                  >
                    Delete
                  </GlowingButton>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SavedPage;