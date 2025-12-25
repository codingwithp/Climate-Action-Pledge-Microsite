import { Button } from "./ui/button";

interface HeroSectionProps {
  onPledgeClick: () => void;
}

export function HeroSection({ onPledgeClick }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 text-white py-20 px-4 md:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="mb-6">Take the Climate Action Pledge</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-95">
          Join thousands of people committed to making a difference. 
          Every action counts in the fight against climate change.
        </p>
        <Button 
          size="lg" 
          className="bg-white text-emerald-600 hover:bg-gray-100 shadow-lg"
          onClick={onPledgeClick}
        >
          Pledge Now
        </Button>
      </div>
    </section>
  );
}
