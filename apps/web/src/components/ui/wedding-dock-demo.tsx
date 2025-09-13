import { Home, Heart, Calendar, Camera, MapPin, Gift, MessageSquareHeart } from 'lucide-react'
import { AnimatedDock } from "@/components/ui/animated-dock"
import { useRouter } from 'next/navigation'

const WeddingDockDemo = () => {
  const router = useRouter();

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      // Always scroll to top for home
      window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
      });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate offset to account for fixed dock and some padding
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - 80; // 80px offset for better positioning
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleGalleryClick = () => {
    router.push('/gallery');
  };

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <AnimatedDock
        items={[
          {
            link: "#home",
            Icon: <Home size={22} />,
            onClick: () => scrollToSection('home')
          },
          {
            link: "#couple", 
            Icon: <Heart size={22} />,
            onClick: () => scrollToSection('couple')
          },
          {
            link: "/gallery",
            Icon: <Camera size={22} />,
            onClick: handleGalleryClick
          },
          {
            link: "#location",
            Icon: <MapPin size={22} />,
            onClick: () => scrollToSection('location')
          },
          {
            link: "#gifts",
            Icon: <Gift size={22} />,
            onClick: () => scrollToSection('gifts')
          },
          {
            link: "#wishes",
            Icon: <MessageSquareHeart size={22} />,
            onClick: () => scrollToSection('wishes')
          },
        ]}
      />
    </div>
  )
}

export { WeddingDockDemo }