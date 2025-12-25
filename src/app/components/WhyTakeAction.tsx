import { Heart, Globe, Sprout } from "lucide-react";

export function WhyTakeAction() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-8">Why Take Climate Action?</h2>
        
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-8 mb-8 border border-emerald-100">
          <p className="text-lg text-center text-gray-700 mb-6">
            Climate change is the defining challenge of our time, but every individual action creates ripples of change. 
            When we come together as a collective movement, those ripples become waves of transformation.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="mb-2">Individual Responsibility</h3>
              <p className="text-sm text-gray-600">
                Your choices matter. Small daily actions compound into significant environmental impact.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="mb-2">Collective Movement</h3>
              <p className="text-sm text-gray-600">
                Join a community of changemakers working together for a sustainable future.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sprout className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="mb-2">Lasting Impact</h3>
              <p className="text-sm text-gray-600">
                Create positive change for current and future generations on our planet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
