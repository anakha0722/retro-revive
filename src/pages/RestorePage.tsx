import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { 
  Upload, 
  Download, 
  Save, 
  RotateCcw, 
  Zap, 
  CheckCircle,
  X,
  Image as ImageIcon,
  Sparkles
} from 'lucide-react';
import GlowingButton from '../components/GlowingButton';
import GlassCard from '../components/GlassCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { RestoredImage } from '../types';
import toast from 'react-hot-toast';

const RestorePage: React.FC = () => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [originalImage, setOriginalImage] = useState<string>('');
  const [restoredImage, setRestoredImage] = useState<string>('');
  const [processing, setProcessing] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [processingStep, setProcessingStep] = useState('');

  // Simulate AI processing steps
  const simulateProcessing = async () => {
    setProcessing(true);
    const steps = [
      'Analyzing image structure...',
      'Detecting damage patterns...',
      'Applying neural network models...',
      'Reconstructing damaged areas...',
      'Enhancing colors and contrast...',
      'Finalizing restoration...'
    ];

    for (let i = 0; i < steps.length; i++) {
      setProcessingStep(steps[i]);
      await new Promise(resolve => setTimeout(resolve, 1500));
    }

    // Generate a mock restored image (in reality, this would be from your AI service)
    const mockRestoredUrl = `https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=800`;
    setRestoredImage(mockRestoredUrl);
    setProcessing(false);
    toast.success('Image restored successfully!');
  };

  const handleFileUpload = (file: File) => {
    if (file.type.startsWith('image/')) {
      setUploadedFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setOriginalImage(result);
        setRestoredImage('');
      };
      reader.readAsDataURL(file);
    } else {
      toast.error('Please upload an image file');
    }
  };

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  }, []);

  const handleRestore = () => {
    if (originalImage) {
      simulateProcessing();
    }
  };

  const handleDownload = () => {
    if (restoredImage) {
      // In a real app, you'd download the actual restored file
      toast.success('Image downloaded successfully!');
    }
  };

  const handleSave = () => {
    if (restoredImage) {
      // In a real app, you'd save to user's account
      const savedImage: RestoredImage = {
        id: Math.random().toString(36).substr(2, 9),
        originalUrl: originalImage,
        restoredUrl: restoredImage,
        filename: uploadedFile?.name || 'restored-image.jpg',
        uploadDate: new Date().toISOString(),
        userId: 'current-user',
        processingTime: 12
      };
      
      const saved = JSON.parse(localStorage.getItem('saved-restorations') || '[]');
      saved.push(savedImage);
      localStorage.setItem('saved-restorations', JSON.stringify(saved));
      
      toast.success('Image saved to your gallery!');
    }
  };

  const resetAll = () => {
    setUploadedFile(null);
    setOriginalImage('');
    setRestoredImage('');
    setProcessing(false);
    setSliderPosition(50);
    setProcessingStep('');
  };

  return (
    <div className="pt-24 pb-12 min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AI Photo Restoration
            </span>
          </h1>
          <p className="text-gray-300 text-lg">
            Upload your damaged photo and watch AI magic restore it to perfection
          </p>
        </motion.div>

        {!originalImage ? (
          /* Upload Section */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <GlassCard className="p-12" glow>
              <div
                className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
                  dragActive 
                    ? 'border-cyan-400 bg-cyan-400/10' 
                    : 'border-gray-600 hover:border-gray-500'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <motion.div
                  className="mb-6"
                  animate={dragActive ? { scale: 1.1 } : { scale: 1 }}
                >
                  <div className="inline-flex p-6 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 mb-4">
                    <Upload className="w-12 h-12 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Drop your photo here
                  </h3>
                  <p className="text-gray-400 mb-6">
                    or click to browse from your device
                  </p>
                </motion.div>

                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => e.target.files && handleFileUpload(e.target.files[0])}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />

                <div className="space-y-3 text-sm text-gray-500">
                  <p>Supported formats: JPG, PNG, WEBP, TIFF</p>
                  <p>Maximum size: 50MB</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ) : (
          /* Processing and Results Section */
          <div className="space-y-8">
            {/* Controls */}
            <motion.div
              className="flex justify-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {!processing && !restoredImage && (
                <GlowingButton
                  variant="primary"
                  size="lg"
                  icon={Zap}
                  onClick={handleRestore}
                >
                  Restore Photo
                </GlowingButton>
              )}
              
              {restoredImage && (
                <>
                  <GlowingButton
                    variant="success"
                    icon={Download}
                    onClick={handleDownload}
                  >
                    Download
                  </GlowingButton>
                  <GlowingButton
                    variant="secondary"
                    icon={Save}
                    onClick={handleSave}
                  >
                    Save to Gallery
                  </GlowingButton>
                </>
              )}
              
              <GlowingButton
                variant="danger"
                icon={RotateCcw}
                onClick={resetAll}
              >
                Start Over
              </GlowingButton>
            </motion.div>

            {/* Image Display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <GlassCard className="p-8" glow>
                {processing ? (
                  <div className="text-center py-20">
                    <LoadingSpinner size="lg" text={processingStep} />
                    <div className="mt-8">
                      <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                        <motion.div
                          className="h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                          initial={{ width: '0%' }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 9, ease: 'easeInOut' }}
                        />
                      </div>
                      <p className="text-gray-400">
                        This usually takes 15-30 seconds...
                      </p>
                    </div>
                  </div>
                ) : restoredImage ? (
                  /* Before/After Slider */
                  <div className="relative">
                    <h3 className="text-2xl font-bold text-center mb-6 text-white">
                      Drag to compare Before & After
                    </h3>
                    
                    <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden">
                      <div className="relative aspect-video bg-gray-800">
                        {/* Before Image */}
                        <img
                          src={originalImage}
                          alt="Original"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        
                        {/* After Image */}
                        <div
                          className="absolute inset-0 overflow-hidden"
                          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                        >
                          <img
                            src={restoredImage}
                            alt="Restored"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        {/* Slider Handle */}
                        <div
                          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-lg z-10"
                          style={{ left: `${sliderPosition}%` }}
                          onMouseDown={(e) => {
                            const rect = e.currentTarget.parentElement!.getBoundingClientRect();
                            const handleMouseMove = (e: MouseEvent) => {
                              const x = e.clientX - rect.left;
                              const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
                              setSliderPosition(percentage);
                            };
                            const handleMouseUp = () => {
                              document.removeEventListener('mousemove', handleMouseMove);
                              document.removeEventListener('mouseup', handleMouseUp);
                            };
                            document.addEventListener('mousemove', handleMouseMove);
                            document.addEventListener('mouseup', handleMouseUp);
                          }}
                        >
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                            <div className="flex space-x-1">
                              <div className="w-1 h-4 bg-gray-400 rounded"></div>
                              <div className="w-1 h-4 bg-gray-400 rounded"></div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Labels */}
                        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
                          <span className="text-white text-sm font-medium">Before</span>
                        </div>
                        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
                          <span className="text-white text-sm font-medium">After</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-center mt-6">
                      <div className="flex items-center space-x-2 bg-green-500/20 rounded-lg px-4 py-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-green-400 font-medium">Restoration Complete!</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Original Image Display */
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-6 text-white">
                      Original Photo
                    </h3>
                    <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden">
                      <img
                        src={originalImage}
                        alt="Original"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <p className="text-gray-400 mt-4">
                      Ready for AI restoration - click "Restore Photo" to begin
                    </p>
                  </div>
                )}
              </GlassCard>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestorePage;