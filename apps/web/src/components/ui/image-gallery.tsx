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

// Mulberry32 seeded PRNG for deterministic random generation
class SeededRandom {
    private state: number;
    
    constructor(seed: number) {
        this.state = seed;
    }
    
    // Mulberry32 algorithm for fast, high-quality random numbers
    next(): number {
        this.state |= 0;
        this.state = (this.state + 0x6D2B79F5) | 0;
        let t = Math.imul(this.state ^ (this.state >>> 15), 1 | this.state);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    }
    
    // Generate random integer between 0 and max (exclusive)
    nextInt(max: number): number {
        return Math.floor(this.next() * max);
    }
}

// Generate wedding photos with deterministic aspect ratios
const generateWeddingPhotos = (): WeddingPhoto[][] => {
    const photos: WeddingPhoto[] = [];
    const ratios = [3/4, 4/3, 16/9]; // Portrait, landscape, wide
    const seededRandom = new SeededRandom(12345); // Fixed seed for consistent results
    
    // Generate all photos from 001 to 082 with deterministic ratios
    for (let i = 1; i <= 82; i++) {
        const paddedNumber = i.toString().padStart(3, '0');
        const randomRatio = ratios[seededRandom.nextInt(ratios.length)];
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

// Memoize wedding photos at module level to prevent regeneration
// This ensures consistent layout between renders and during hydration
const weddingPhotos = generateWeddingPhotos();

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
    const [hasError, setHasError] = React.useState(false);

    const handleError = () => {
        if (placeholder) {
            setImgSrc(placeholder);
        } else {
            setHasError(true);
        }
    };

    if (hasError) return null;

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