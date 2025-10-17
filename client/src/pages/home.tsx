import { useState, useEffect } from "react";
import { Heart, Mail, Volume2, VolumeX, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";
import { PhotoGallery } from "@/components/photo-gallery";
import { Timeline } from "@/components/timeline";
import { ShareButton } from "@/components/share-button";
import { letterTemplates } from "@/data/letters";

export default function Home() {
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  const currentLetter = letterTemplates[currentLetterIndex];

  const nextLetter = () => {
    setCurrentLetterIndex((prev) => (prev + 1) % letterTemplates.length);
  };

  const previousLetter = () => {
    setCurrentLetterIndex((prev) => (prev - 1 + letterTemplates.length) % letterTemplates.length);
  };

  useEffect(() => {
    const audio = new Audio();
    setAudioElement(audio);
    
    const savedMusicPreference = localStorage.getItem("musicPlaying");
    if (savedMusicPreference === "true") {
      audio.src = "https://cdn.pixabay.com/download/audio/2022/03/10/audio_c8c38d5c60.mp3";
      audio.loop = true;
      audio.volume = 0.3;
      audio.play().catch(() => {
        setIsMusicPlaying(false);
      });
      setIsMusicPlaying(true);
    }
    
    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggleMusic = () => {
    if (!audioElement) return;
    
    if (isMusicPlaying) {
      audioElement.pause();
      setIsMusicPlaying(false);
      localStorage.setItem("musicPlaying", "false");
    } else {
      audioElement.src = "https://cdn.pixabay.com/download/audio/2022/03/10/audio_c8c38d5c60.mp3";
      audioElement.loop = true;
      audioElement.volume = 0.3;
      audioElement.play().catch(() => {
        setIsMusicPlaying(false);
        localStorage.setItem("musicPlaying", "false");
      });
      setIsMusicPlaying(true);
      localStorage.setItem("musicPlaying", "true");
    }
  };

  const openLetter = () => {
    setIsLetterOpen(true);
    
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#F7CAC9', '#F2C572', '#FADADD', '#FF69B4'],
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#F7CAC9', '#F2C572', '#FADADD', '#FF69B4'],
      });
    }, 250);
  };

  const closeLetter = () => {
    setIsLetterOpen(false);
  };

  const floatingHearts = [
    { size: "w-8 h-8", left: "10%", delay: "0s", duration: "8s" },
    { size: "w-6 h-6", left: "20%", delay: "1s", duration: "10s" },
    { size: "w-10 h-10", left: "75%", delay: "2s", duration: "9s" },
    { size: "w-7 h-7", left: "85%", delay: "3s", duration: "11s" },
    { size: "w-5 h-5", left: "45%", delay: "1.5s", duration: "7s" },
    { size: "w-9 h-9", left: "60%", delay: "2.5s", duration: "10s" },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-white via-[#FEFEFE] to-[#FFF5F7]">
      {/* Floating hearts background animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingHearts.map((heart, index) => (
          <div
            key={index}
            className={`absolute bottom-0 ${heart.size} text-primary/20`}
            style={{
              left: heart.left,
              animationDelay: heart.delay,
              animationDuration: heart.duration,
            }}
          >
            <Heart 
              className="w-full h-full animate-float" 
              fill="currentColor" 
            />
          </div>
        ))}
      </div>

      {/* Top right controls - Music toggle and Share button */}
      <div className="absolute top-6 right-6 z-50 flex gap-2">
        <ShareButton />
        <Button
          size="icon"
          variant="ghost"
          onClick={toggleMusic}
          data-testid="button-music-toggle"
          className="rounded-full bg-card/80 backdrop-blur-sm border border-card-border shadow-sm hover-elevate active-elevate-2"
          title={isMusicPlaying ? "Pause music" : "Play romantic music"}
        >
          {isMusicPlaying ? (
            <Volume2 className="h-5 w-5 text-primary" />
          ) : (
            <VolumeX className="h-5 w-5 text-muted-foreground" />
          )}
        </Button>
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Graceful heading */}
        <h1 
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-center mb-16 text-foreground animate-fade-in flex flex-col items-center gap-2"
          data-testid="text-heading"
        >
          <span>For Sathi Mandal,</span>
          <span className="text-primary font-semibold flex items-center gap-2">
            With All My Heart
            <Heart className="w-8 h-8 md:w-10 md:h-10 inline-block text-primary" fill="currentColor" />
          </span>
        </h1>

        {/* Envelope icon - centerpiece with hover effect */}
        <div className="mb-16">
          <button
            onClick={openLetter}
            data-testid="button-envelope"
            className="group relative transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/20 rounded-lg"
            style={{
              filter: "drop-shadow(0 4px 12px rgba(242, 197, 114, 0.15))",
            }}
          >
            {/* Soft glow effect on hover */}
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150" />
            
            {/* Envelope icon with tilt effect */}
            <div className="relative bg-card p-8 rounded-lg border-2 border-primary/20 transition-all duration-300 group-hover:rotate-3 group-hover:shadow-lg">
              <Mail 
                className="w-24 h-24 md:w-32 md:h-32 text-primary" 
                strokeWidth={1.5}
              />
            </div>
            
            {/* Invitation text */}
            <p className="mt-4 text-center font-script text-xl md:text-2xl text-muted-foreground group-hover:text-primary transition-colors duration-300">
              Click to open
            </p>
          </button>
        </div>

      </div>

      {/* Photo Gallery Section */}
      <PhotoGallery />

      {/* Timeline Section */}
      <Timeline />

      {/* Footer attribution */}
      <footer className="py-8 text-center text-sm text-muted-foreground" data-testid="text-footer">
        <p className="font-sans">Made with love by Your Name</p>
      </footer>

      {/* Love letter popup modal */}
      {isLetterOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm animate-fade-in"
          onClick={closeLetter}
          data-testid="overlay-letter"
        >
          {/* Letter panel with heart outline animation */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full bg-card rounded-lg shadow-2xl border-4 border-primary/30 animate-envelope-open overflow-hidden"
            data-testid="panel-letter"
            style={{
              boxShadow: "0 0 0 4px rgba(242, 197, 114, 0.1), 0 20px 60px rgba(0, 0, 0, 0.15)",
            }}
          >
            {/* Pulsing heart outline border effect */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-4 right-4">
                <Heart 
                  className="w-8 h-8 text-primary animate-heart-pulse" 
                  fill="currentColor"
                />
              </div>
              <div className="absolute bottom-4 left-4">
                <Heart 
                  className="w-6 h-6 text-primary animate-heart-pulse" 
                  fill="currentColor"
                  style={{ animationDelay: "0.5s" }}
                />
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={closeLetter}
              data-testid="button-close-letter"
              className="absolute top-4 left-4 z-10 rounded-full bg-background/80 p-2 hover-elevate active-elevate-2 border border-border"
              aria-label="Close letter"
            >
              <X className="h-5 w-5 text-foreground" />
            </button>

            {/* Letter navigation */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 pointer-events-none">
              <Button
                size="icon"
                variant="ghost"
                onClick={previousLetter}
                data-testid="button-letter-prev"
                className="pointer-events-auto bg-background/80 backdrop-blur-sm border border-border hover-elevate active-elevate-2"
                aria-label="Previous letter"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={nextLetter}
                data-testid="button-letter-next"
                className="pointer-events-auto bg-background/80 backdrop-blur-sm border border-border hover-elevate active-elevate-2"
                aria-label="Next letter"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Letter content */}
            <div className="p-8 md:p-12 max-h-[80vh] overflow-y-auto">
              <div className="space-y-6">
                {/* Letter template indicator */}
                <div className="flex justify-center gap-1 mb-4">
                  {letterTemplates.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentLetterIndex ? "bg-primary w-6" : "bg-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>

                {/* Letter heading */}
                <h2 className="font-cursive text-4xl md:text-5xl text-center text-primary mb-8" data-testid="text-letter-heading">
                  {currentLetter.title}
                </h2>

                {/* Love letter text in cursive handwriting style */}
                <div className="font-script text-lg md:text-xl leading-relaxed text-foreground space-y-4">
                  {currentLetter.paragraphs.map((paragraph, index) => (
                    <p key={index} data-testid={`text-letter-paragraph-${index}`}>
                      {paragraph}
                    </p>
                  ))}
                  
                  <p className="text-center mt-8 font-cursive text-2xl md:text-3xl text-primary whitespace-pre-line" data-testid="text-letter-signature">
                    {currentLetter.signature}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
