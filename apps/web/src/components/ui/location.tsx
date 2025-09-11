'use client';

import { motion } from 'framer-motion';
import { Clock, MapPin, CalendarCheck, ExternalLink } from 'lucide-react';
import { locationConfig } from '@/config/config';

const formatEventDate = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return date.toLocaleDateString('id-ID', options);
};

export default function Location() {
  return (
    <section id="location" className="min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-4 py-12 sm:py-16 lg:py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4" style={{ color: '#452912' }}>
            Lokasi Acara
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Kami dengan senang hati mengundang Anda untuk bergabung dalam momen bahagia kami
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full h-[250px] sm:h-[300px] lg:h-[400px] rounded-2xl overflow-hidden shadow-lg border-4 sm:border-8 border-white"
          >
            <iframe
              src={locationConfig.maps_embed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6" style={{ color: '#452912' }}>
                {locationConfig.location}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500 mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-gray-700 flex-1 leading-relaxed">
                    {locationConfig.address}
                  </p>
                </div>

                <div className="flex items-center space-x-3 sm:space-x-4">
                  <CalendarCheck className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-gray-700">
                    {formatEventDate(locationConfig.date)}
                  </p>
                </div>

                <div className="flex items-center space-x-3 sm:space-x-4">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-gray-700">{locationConfig.time}</p>
                </div>

                <div className="pt-4">
                  <motion.a
                    href={locationConfig.maps_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 sm:py-4 rounded-lg border-2 transition-all duration-200 font-semibold text-base min-h-[48px] touch-manipulation"
                    style={{ 
                      borderColor: '#452912',
                      color: '#452912',
                      backgroundColor: 'rgba(255, 255, 255, 0.8)'
                    }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Buka di Google Maps</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}