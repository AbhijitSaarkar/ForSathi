import { Heart } from "lucide-react";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

const events: TimelineEvent[] = [
  {
    date: "First Meeting",
    title: "The Day We Met",
    description: "The moment our eyes first met, I knew my life would never be the same.",
  },
  {
    date: "First Date",
    title: "Our First Date",
    description: "Technically Momo date but valoi chilo",
  },
  {
    date: "Special Moment",
    title: "A Beautiful Memory",
    description: "When you smiled and the whole world seemed to light up around us.",
  },
  {
    date: "Today",
    title: "Every Day Since",
    description: "Each moment with you continues to be a blessing I cherish deeply.",
  },
];

export function Timeline() {
  return (
    <section className="py-16 px-4 bg-accent/30" data-testid="section-timeline">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-12 text-foreground">
          Our Journey Together
        </h2>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30" />

          <div className="space-y-12">
            {events.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-start ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                data-testid={`timeline-event-${index}`}
              >
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <div className="ml-16 md:ml-0">
                    <div className="inline-block bg-primary/20 px-4 py-1 rounded-full mb-3">
                      <span className="font-script text-sm text-primary font-semibold" data-testid={`text-timeline-date-${index}`}>
                        {event.date}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2" data-testid={`text-timeline-title-${index}`}>
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed" data-testid={`text-timeline-description-${index}`}>
                      {event.description}
                    </p>
                  </div>
                </div>

                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-card border-4 border-primary rounded-full flex items-center justify-center shadow-md">
                  <Heart className="w-4 h-4 text-primary" fill="currentColor" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
