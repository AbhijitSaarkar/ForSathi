import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import sunset from "@assets/generated_images/Romantic_sunset_couple_silhouette_ab4e893d.png";
import heartLock from "@assets/generated_images/Heart_lock_with_roses_136925ef.png";
import coffee from "@assets/generated_images/Romantic_coffee_date_scene_cb7dbe15.png";

const photos = [
  {
    src: sunset,
    caption: "Our beautiful moments together",
    alt: "Romantic sunset",
  },
  {
    src: heartLock,
    caption: "Forever locked in love",
    alt: "Heart lock with roses",
  },
  {
    src: coffee,
    caption: "Sweet morning memories",
    alt: "Coffee date",
  },
];

export function PhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const previousPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section className="py-16 px-4" data-testid="section-gallery">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-12 text-foreground">
          Our Precious Memories
        </h2>

        <div className="relative">
          <Card className="overflow-hidden border-2 border-primary/20 shadow-lg">
            <div className="relative aspect-[4/3] bg-muted">
              <img
                src={photos[currentIndex].src}
                alt={photos[currentIndex].alt}
                className="w-full h-full object-cover transition-opacity duration-500"
                data-testid={`img-gallery-${currentIndex}`}
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="text-white font-script text-xl md:text-2xl text-center" data-testid="text-gallery-caption">
                  {photos[currentIndex].caption}
                </p>
              </div>
            </div>
          </Card>

          <Button
            size="icon"
            variant="ghost"
            onClick={previousPhoto}
            data-testid="button-gallery-prev"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm border border-card-border shadow-md hover-elevate active-elevate-2"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            size="icon"
            variant="ghost"
            onClick={nextPhoto}
            data-testid="button-gallery-next"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm border border-card-border shadow-md hover-elevate active-elevate-2"
            aria-label="Next photo"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="flex justify-center gap-2 mt-6">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                data-testid={`button-gallery-dot-${index}`}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to photo ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
