'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';

// Define photo interface
interface WeddingPhoto {
    src: string;
    ratio: number;
    index: number;
}

// Generate wedding photos dynamically from 001.jpg to 082.jpg
const generateWeddingPhotos = (): WeddingPhoto[][] => {
    const photos: WeddingPhoto[] = [];
    const ratios = [3/4, 4/3, 16/9]; // Portrait, landscape, wide
    
    // Generate all photos from 001 to 082
    for (let i = 1; i <= 82; i++) {
        const paddedNumber = i.toString().padStart(3, '0');
        const randomRatio = ratios[Math.floor(Math.random() * ratios.length)];
        photos.push({ 
            src: `/${paddedNumber}.jpg`, 
            ratio: randomRatio,
            index: i
        });
    }
    
    // Distribute photos into 3 columns for masonry layout
    const columns: WeddingPhoto[][] = [[], [], []];
    photos.forEach((photo, index) => {
        columns[index % 3].push(photo);
    });
    
    return columns;
};

const weddingPhotos = generateWeddingPhotos();

export function ImageGallery() {
    return (
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center py-16 px-4">
            {/* Header */}
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4" style={{ color: '#452912' }}>
                    Our Gallery
                </h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                    Momen-momen indah perjalanan cinta kami
                </p>
            </div>

            {/* Gallery Grid */}
            <div className="mx-auto grid w-full max-w-6xl gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {weddingPhotos.map((column, colIndex) => (
                    <div key={colIndex} className="grid gap-4 sm:gap-6">
                        {column.map((photo, index) => (
                            <AnimatedImage
                                key={`${colIndex}-${index}`}
                                alt={`Wedding Photo ${colIndex}-${index}`}
                                src={photo.src}
                                ratio={photo.ratio}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

interface AnimatedImageProps {
    alt: string;
    src: string;
    className?: string;
    placeholder?: string;
    ratio: number;
}

function AnimatedImage({ alt, src, ratio, placeholder }: AnimatedImageProps) {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    const [isLoading, setIsLoading] = React.useState(true);

    const [imgSrc, setImgSrc] = React.useState(src);

    const handleError = () => {
        if (placeholder) {
            setImgSrc(placeholder);
        }
    };

    return (
        <AspectRatio
            ref={ref}
            ratio={ratio}
            className="bg-accent relative size-full rounded-lg border"
        >
            <img
                alt={alt}
                src={imgSrc}
                className={cn(
                    'size-full rounded-lg object-cover opacity-0 transition-all duration-1000 ease-in-out',
                    {
                        'opacity-100': isInView && !isLoading,
                    },
                )}
                onLoad={() => setIsLoading(false)}
                loading="lazy"
                onError={handleError}
            />
        </AspectRatio>
    );
}