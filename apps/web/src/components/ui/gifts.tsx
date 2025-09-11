"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Copy, CheckCircle, ExternalLink } from 'lucide-react';
import { giftConfig } from '@/config/config';

const Gifts = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
    setIsClient(true);
  }, []);

  const copyToClipboard = (text: string, bank: string) => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedAccount(bank);
      setTimeout(() => setCopiedAccount(null), 2000);
    }
  };

  return (
    <>
      <section id="gifts" className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-pink-50 -z-10" />
        
        <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h1 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#452912' }}>
              Digital Gift
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-base sm:text-lg">
              {giftConfig.charityMessage}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={hasAnimated ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center mb-12"
          >
            <div className="space-y-4 max-w-2xl mx-auto">
              <p className="text-sm text-gray-500 italic">
                Semoga cinta kalian berlangsung selamanya dan menjadi ladang amal bagi keduanya
              </p>
            </div>
          </motion.div>

          <div className="max-w-2xl mx-auto grid gap-6">
            {/* Payment Link Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="relative group max-w-md mx-auto w-full text-center"
            >
              <h3 className="text-md font-semibold mb-2" style={{ color: '#452912' }}>
                Kirim Hadiah Digital
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Klik untuk mengirim hadiah melalui pembayaran online
              </p>
              <motion.a
                href={giftConfig.paymentLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 sm:py-4 rounded-lg font-semibold text-base min-h-[48px] touch-manipulation transition-all duration-200"
                style={{ 
                  backgroundColor: '#452912',
                  color: 'white'
                }}
              >
                <ExternalLink className="w-4 h-4" />
                <span>Melalui Tombol Ini</span>
              </motion.a>
            </motion.div>

            {/* Bank Accounts */}
            {giftConfig.banks.map((account, index) => (
              <motion.div
                key={account.accountNumber}
                initial={{ opacity: 0, y: 20 }}
                animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 * index + 0.9 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-rose-100/50 to-pink-100/50 rounded-2xl transform transition-transform group-hover:scale-105 duration-300" />
                <div className="relative backdrop-blur-sm bg-white/80 p-6 rounded-2xl border border-rose-100/50 shadow-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold mb-2" style={{ color: '#452912' }}>
                        {account.bank}
                      </h3>
                      <p className="text-gray-600 mb-1">
                        a/n {account.accountName}
                      </p>
                      <p className="text-xl font-mono font-bold text-gray-800">
                        {account.accountNumber}
                      </p>
                    </div>
                    <motion.button
                      onClick={() => copyToClipboard(account.accountNumber, account.bank)}
                      disabled={!isClient}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors min-h-[44px] touch-manipulation"
                      style={{ color: '#452912' }}
                    >
                      {isClient && copiedAccount === account.bank ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                      <span>
                        {isClient && copiedAccount === account.bank ? 'Copied!' : 'Copy'}
                      </span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gifts;