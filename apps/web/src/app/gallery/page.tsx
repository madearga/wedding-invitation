import { ImageGallery } from '@/components/ui/image-gallery';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wedding Gallery - Arga & Agni',
  description: 'Momen-momen indah perjalanan cinta Arga & Agni dalam foto-foto wedding yang memukau.',
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
      {/* Header with Back Button */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali
            </Link>
            
            <h1 className="text-2xl sm:text-3xl font-bold" style={{ color: '#452912' }}>
              Wedding Gallery
            </h1>
            
            <div className="w-20"></div> {/* Spacer for center alignment */}
          </div>
        </div>
      </div>

      {/* Gallery Content */}
      <ImageGallery />
    </div>
  );
}