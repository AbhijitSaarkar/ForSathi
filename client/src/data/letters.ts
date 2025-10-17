export interface LetterTemplate {
  id: string;
  title: string;
  paragraphs: string[];
  signature: string;
}

export const letterTemplates: LetterTemplate[] = [
  {
    id: "heartfelt",
    title: "My Dearest Sathi",
    paragraphs: [
      "As I write these words, my heart overflows with emotions that mere language struggles to capture. You have brought light into my life in ways I never imagined possible.",
      "Every moment spent with you feels like a beautiful dream from which I never want to wake. Your laughter is the melody that brightens my darkest days, and your smile is the sunshine that warms my soul.",
      "In you, I have found not just love, but a kindred spirit, a best friend, and a partner who understands me in ways no one else ever has. Your presence in my life has transformed ordinary moments into extraordinary memories.",
      "I cherish every conversation we share, every laugh we exchange, and every silent moment where words are unnecessary because our hearts speak their own language.",
      "Thank you for being exactly who you are—beautiful, kind, intelligent, and wonderfully unique. You inspire me to be better, to dream bigger, and to love deeper.",
    ],
    signature: "Forever yours,\nWith all my heart",
  },
  {
    id: "poetic",
    title: "My Beautiful Sathi",
    paragraphs: [
      "In the garden of my life, you are the most exquisite flower that ever bloomed. Your presence colors my world in shades I never knew existed.",
      "Like the moon needs the stars, like the ocean needs the shore, my soul needs yours. You complete the poetry of my existence with every word you speak, every gesture you make.",
      "Time stands still when I'm with you, yet flies too fast. Every second is precious, every minute a treasure. You've taught me that true love isn't just a feeling—it's a beautiful reality we create together.",
      "Your love is my sanctuary, your arms my home. In this chaotic world, you are my peace, my calm, my everything. With you, I've found where I truly belong.",
      "Forever grateful for the day our paths crossed, for every moment since, and for all the tomorrows we'll share. You are my always and forever.",
    ],
    signature: "Eternally yours,\nIn love and devotion",
  },
  {
    id: "simple",
    title: "Dear Sathi",
    paragraphs: [
      "I wanted to take a moment to tell you how much you mean to me. From the first time we met, I knew there was something special about you.",
      "You make every day brighter just by being in it. Your kindness, your smile, your laugh—they all make my world a better place.",
      "I love how comfortable I feel around you, how we can talk about anything and everything. You understand me in a way no one else does.",
      "Thank you for all the little things you do that show you care. Thank you for being patient, supportive, and always there when I need you.",
      "I'm so grateful to have you in my life, and I can't wait to see what the future holds for us.",
    ],
    signature: "With love,\nAlways yours",
  },
];
