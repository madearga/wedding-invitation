'use client';

import { useState, useEffect, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import { 
  CheckCircle, 
  XCircle, 
  HelpCircle, 
  Clock, 
  User, 
  MessageCircle,
  Send,
  Calendar,
  RefreshCw
} from 'lucide-react';
import { formatTimeAgo, isRecent } from '@/lib/formatDate';
import { SimpleCache, CACHE_KEYS } from '@/lib/cache';

interface Wish {
  id: string;
  name: string;
  message: string;
  attendance: 'attending' | 'not-attending' | 'maybe';
  timestamp: string;
}

export default function Wishes() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [newWish, setNewWish] = useState('');
  const [guestName, setGuestName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [attendance, setAttendance] = useState<'attending' | 'not-attending' | 'maybe' | ''>('');
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  const attendanceOptions = [
    { value: 'attending', label: 'Ya, saya akan hadir' },
    { value: 'not-attending', label: 'Tidak, saya tidak bisa hadir' },
    { value: 'maybe', label: 'Mungkin, saya akan konfirmasi nanti' }
  ];

  // Fetch wishes from API with pagination and caching
  const fetchWishes = async (page: number = 1, reset: boolean = true, useCache: boolean = true) => {
    try {
      if (reset) {
        setIsLoading(true);
        setCurrentPage(1);
      } else {
        setIsLoadingMore(true);
      }
      setError(null);
      
      // Check cache first for the specific page
      const cacheKey = CACHE_KEYS.WISHES_PAGE(page);
      let result = null;
      
      if (useCache && SimpleCache.isSupported()) {
        result = SimpleCache.get(cacheKey);
        if (result) {
          console.log(`Cache hit for wishes page ${page}`);
        }
      }
      
      // Fetch from API if no cache or cache disabled
      if (!result) {
        const response = await fetch(`/api/wishes?page=${page}&limit=10`);
        result = await response.json();
        
        // Cache the result for 2 minutes
        if (result.success && SimpleCache.isSupported()) {
          SimpleCache.set(cacheKey, result, 2 * 60 * 1000);
        }
      }

      if (result.success) {
        const newWishes = result.data || [];
        
        if (reset) {
          setWishes(newWishes);
        } else {
          // Append new wishes to existing ones
          setWishes(prev => [...prev, ...newWishes]);
        }
        
        setHasMore(result.pagination?.hasMore || false);
        setTotalCount(result.pagination?.total || 0);
        setCurrentPage(page);
      } else {
        throw new Error(result.error || 'Failed to fetch wishes');
      }
    } catch (err) {
      setError('Gagal memuat harapan. Silakan refresh halaman.');
      console.error('Failed to fetch wishes:', err);
    } finally {
      setIsLoading(false);
      setIsLoadingMore(false);
    }
  };

  // Load more wishes
  const loadMoreWishes = async () => {
    if (!hasMore || isLoadingMore) return;
    await fetchWishes(currentPage + 1, false);
  };

  // Load wishes when component mounts
  useEffect(() => {
    fetchWishes();
  }, []);

  const handleSubmitWish = async (e: FormEvent) => {
    e.preventDefault();
    if (!newWish.trim() || !guestName.trim() || !attendance) return;

    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch('/api/wishes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: guestName.trim(),
          message: newWish.trim(),
          attendance: attendance,
        }),
      });

      const result = await response.json();

      if (result.success) {
        // Add new wish to the beginning of the list and update total count
        setWishes(prev => [result.data, ...prev]);
        setTotalCount(prev => prev + 1);
        
        // Clear cache since we have new data
        if (SimpleCache.isSupported()) {
          SimpleCache.clear();
        }
        
        // Clear form
        setNewWish('');
        setGuestName('');
        setAttendance('');
        
        // Show confetti celebration
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 4000);
      } else {
        throw new Error(result.error || 'Failed to submit wish');
      }
    } catch (err) {
      setError('Gagal mengirim harapan. Silakan coba lagi.');
      console.error('Failed to submit wish:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getAttendanceIcon = (status: string) => {
    switch (status) {
      case 'attending':
        return <CheckCircle className="w-4 h-4 text-emerald-500" />;
      case 'not-attending':
        return <XCircle className="w-4 h-4 text-rose-500" />;
      case 'maybe':
        return <HelpCircle className="w-4 h-4 text-amber-500" />;
      default:
        return null;
    }
  };

  const getAttendanceColor = (status: string) => {
    switch (status) {
      case 'attending':
        return 'from-emerald-400 to-green-400';
      case 'not-attending':
        return 'from-rose-400 to-pink-400';
      case 'maybe':
        return 'from-amber-400 to-yellow-400';
      default:
        return 'from-gray-400 to-gray-500';
    }
  };

  return (
    <section id="wishes" className="min-h-screen relative overflow-hidden py-8 sm:py-12 lg:py-16">
      {showConfetti && (
        <Confetti
          recycle={false}
          numberOfPieces={300}
          gravity={0.3}
          className="fixed inset-0 z-50"
        />
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4" style={{ color: '#452912' }}>
            Kirim Harapan
          </h2>
          <div className="text-base sm:text-lg max-w-2xl mx-auto px-2">
            <p className="italic leading-relaxed text-gray-700">
              "Sebagai tanda kasih dan doa yang tulus,<br/>
              Dalam perjalanan cinta kami yang baru dimulai,<br/>
              Setiap kata yang Anda tulis akan menjadi berkat,<br/>
              Menyemarakkan hari bahagia kami selamanya."
            </p>
          </div>
          
          {/* Error Display */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-3 bg-red-100 border border-red-300 rounded-lg text-red-700 text-sm max-w-md mx-auto"
            >
              {error}
              <button
                onClick={() => fetchWishes(1, true, false)}
                className="ml-2 underline hover:no-underline"
              >
                Coba lagi
              </button>
            </motion.div>
          )}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Wishes Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
              <form onSubmit={handleSubmitWish} className="space-y-6 pb-20 sm:pb-24">
                {/* Name Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-2 mb-3">
                    <User className="w-4 h-4" style={{ color: '#452912' }} />
                    <span className="text-sm font-medium" style={{ color: '#452912' }}>
                      Nama Anda
                    </span>
                  </div>
                  <input
                    type="text"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="Masukkan nama Anda..."
                    className="w-full px-4 py-3 sm:py-4 rounded-xl bg-white/50 border border-rose-100 focus:border-rose-300 focus:ring focus:ring-rose-200 focus:ring-opacity-50 transition-all duration-200 text-gray-700 placeholder-gray-400 text-base"
                    required
                    disabled={isSubmitting}
                  />
                </motion.div>

                {/* Attendance Status */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-2 mb-3">
                    <Calendar className="w-4 h-4" style={{ color: '#452912' }} />
                    <span className="text-sm font-medium" style={{ color: '#452912' }}>
                      Status Kehadiran
                    </span>
                  </div>
                  <select
                    value={attendance}
                    onChange={(e) => setAttendance(e.target.value as any)}
                    className="w-full px-4 py-3 sm:py-4 rounded-xl bg-white/50 border border-rose-100 focus:border-rose-300 focus:ring focus:ring-rose-200 focus:ring-opacity-50 transition-all duration-200 text-gray-700 text-base"
                    required
                    disabled={isSubmitting}
                  >
                    <option value="">Pilih status kehadiran...</option>
                    {attendanceOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </motion.div>

                {/* Message Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-2 mb-3">
                    <MessageCircle className="w-4 h-4" style={{ color: '#452912' }} />
                    <span className="text-sm font-medium" style={{ color: '#452912' }}>
                      Harapan Anda
                    </span>
                  </div>
                  <textarea
                    value={newWish}
                    onChange={(e) => setNewWish(e.target.value)}
                    placeholder="Kirimkan harapan dan doa untuk kedua mempelai..."
                    className="w-full h-28 sm:h-32 p-4 rounded-xl bg-white/50 border border-rose-100 focus:border-rose-300 focus:ring focus:ring-rose-200 focus:ring-opacity-50 resize-none transition-all duration-200 text-gray-700 placeholder-gray-400 text-base"
                    required
                    disabled={isSubmitting}
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || !newWish.trim() || !guestName.trim() || !attendance}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 sm:py-4 rounded-xl font-semibold text-base transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px] touch-manipulation"
                  style={{ 
                    backgroundColor: '#452912',
                    color: 'white'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      <span>Mengirim...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Kirim Harapan</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Wishes Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
              {/* Header with refresh button */}
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <h3 className="text-base sm:text-lg font-semibold" style={{ color: '#452912' }}>
                  Harapan dari Tamu ({totalCount})
                </h3>
                <button
                  onClick={() => fetchWishes(1, true, false)}
                  disabled={isLoading}
                  className="p-2 sm:p-2.5 hover:bg-gray-100 rounded-full transition-colors min-h-[44px] min-w-[44px] touch-manipulation"
                  title="Refresh harapan"
                >
                  <RefreshCw className={`w-4 h-4 sm:w-5 sm:h-5 ${isLoading ? 'animate-spin' : ''}`} style={{ color: '#452912' }} />
                </button>
              </div>

              <div className="space-y-4 h-full overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-rose-300 scrollbar-track-transparent">
                {isLoading ? (
                  // Loading skeletons
                  <div className="space-y-3 sm:space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 animate-pulse">
                        <div className="flex items-start space-x-3 mb-3">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-300 flex-shrink-0"></div>
                          <div className="flex-1 min-w-0">
                            <div className="h-3 sm:h-4 bg-gray-300 rounded w-24 mb-2"></div>
                            <div className="h-2 sm:h-3 bg-gray-200 rounded w-16"></div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-2 sm:h-3 bg-gray-200 rounded"></div>
                          <div className="h-2 sm:h-3 bg-gray-200 rounded w-3/4"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : wishes.length === 0 ? (
                  // Empty state
                  <div className="text-center py-12 text-gray-500">
                    <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p className="text-lg mb-2">Belum ada harapan</p>
                    <p className="text-sm">Jadilah yang pertama mengirim harapan!</p>
                  </div>
                ) : (
                  // Wishes list
                  <AnimatePresence>
                    {wishes.map((wish) => (
                    <motion.div
                      key={wish.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-white/20 relative"
                    >
                      {/* Recent Badge */}
                      {isRecent(wish.timestamp) && (
                        <div className="absolute -top-2 -right-2">
                          <div className="bg-rose-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                            Baru
                          </div>
                        </div>
                      )}

                      <div className="flex items-start space-x-3 mb-3">
                        {/* Avatar */}
                        <div className="flex-shrink-0">
                          <div 
                            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r ${getAttendanceColor(wish.attendance)} flex items-center justify-center text-white text-xs sm:text-sm font-medium`}
                          >
                            {wish.name[0].toUpperCase()}
                          </div>
                        </div>

                        {/* Name, Time, and Attendance */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="font-medium text-gray-800 text-sm sm:text-base truncate">
                              {wish.name}
                            </h4>
                            <div className="flex-shrink-0">
                              {getAttendanceIcon(wish.attendance)}
                            </div>
                          </div>
                          <div className="flex items-center space-x-1 text-gray-500 text-xs">
                            <Clock className="w-3 h-3 flex-shrink-0" />
                            <time className="truncate">
                              {formatTimeAgo(wish.timestamp)}
                            </time>
                          </div>
                        </div>
                      </div>

                      {/* Message */}
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        {wish.message}
                      </p>
                    </motion.div>
                  ))}
                  </AnimatePresence>
                )}
                
                {/* Load More Button */}
                {hasMore && !isLoading && (
                  <div className="pt-4 text-center">
                    <motion.button
                      onClick={loadMoreWishes}
                      disabled={isLoadingMore}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-3 text-sm sm:text-base font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] touch-manipulation"
                      style={{ color: '#452912' }}
                    >
                      {isLoadingMore ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent inline-block mr-2"></div>
                          Memuat...
                        </>
                      ) : (
                        <>
                          Muat Lebih Banyak
                          <span className="ml-1 text-xs opacity-75">
                            ({wishes.length}/{totalCount})
                          </span>
                        </>
                      )}
                    </motion.button>
                  </div>
                )}
                
                {/* End of list indicator */}
                {!hasMore && wishes.length > 0 && !isLoading && (
                  <div className="pt-6 text-center text-gray-400 text-sm">
                    Semua harapan telah ditampilkan 💕
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}