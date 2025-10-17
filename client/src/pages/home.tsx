import { useState, useEffect } from "react";
import { Heart, Mail, Volume2, VolumeX, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio();
    setAudioElement(audio);
    
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
    } else {
      audioElement.src = "https://cdn.pixabay.com/download/audio/2022/03/10/audio_c8c38d5c60.mp3";
      audioElement.loop = true;
      audioElement.volume = 0.3;
      audioElement.play().catch(() => {
        setIsMusicPlaying(false);
      });
      setIsMusicPlaying(true);
    }
  };

  const openLetter = () => {
    setIsLetterOpen(true);
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

      {/* Music toggle button - top right corner */}
      <div className="absolute top-6 right-6 z-50">
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

        {/* Footer attribution */}
        <footer className="mt-auto text-center text-sm text-muted-foreground animate-fade-in" data-testid="text-footer">
          <p className="font-sans">Made with love by Your Name</p>
        </footer>
      </div>

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

            {/* Letter content */}
            <div className="p-8 md:p-12 max-h-[80vh] overflow-y-auto">
              <div className="space-y-6">
                {/* Letter heading */}
                <h2 className="font-cursive text-4xl md:text-5xl text-center text-primary mb-8">
                  My Dearest Sathi
                </h2>

                {/* Love letter text in cursive handwriting style */}
                <div className="font-script text-lg md:text-xl leading-relaxed text-foreground space-y-4">
                  <p data-testid="text-letter-paragraph-1">
                    As I write these words, my heart overflows with emotions that mere language struggles to capture. 
                    You have brought light into my life in ways I never imagined possible.
                  </p>
                  
                  <p data-testid="text-letter-paragraph-2">
                    Every moment spent with you feels like a beautiful dream from which I never want to wake. 
                    Your laughter is the melody that brightens my darkest days, and your smile is the sunshine 
                    that warms my soul.
                  </p>
                  
                  <p data-testid="text-letter-paragraph-3">
                    In you, I have found not just love, but a kindred spirit, a best friend, and a partner 
                    who understands me in ways no one else ever has. Your presence in my life has transformed 
                    ordinary moments into extraordinary memories.
                  </p>
                  
                  <p data-testid="text-letter-paragraph-4">
                    I cherish every conversation we share, every laugh we exchange, and every silent moment 
                    where words are unnecessary because our hearts speak their own language.
                  </p>
                  
                  <p data-testid="text-letter-paragraph-5">
                    Thank you for being exactly who you are—beautiful, kind, intelligent, and wonderfully unique. 
                    You inspire me to be better, to dream bigger, and to love deeper.
                  </p>
                  
                  <p className="text-center mt-8 font-cursive text-2xl md:text-3xl text-primary" data-testid="text-letter-signature">
                    Forever yours,
                    <br />
                    <span className="text-foreground">With all my heart</span>
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
