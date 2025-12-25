import { Shield, Lock } from "lucide-react";

export function PrivacyNote() {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm p-8 border-l-4 border-emerald-500">
          <div className="flex items-start gap-4">
            <div className="bg-emerald-100 rounded-full p-3 flex-shrink-0">
              <Shield className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h3 className="mb-3 flex items-center gap-2">
                Your Privacy Matters
                <Lock className="w-4 h-4 text-gray-500" />
              </h3>
              <p className="text-gray-700 mb-2">
                We take your privacy seriously. Your <strong>email address</strong> and <strong>mobile number</strong> are 
                collected solely for verification purposes and to keep you updated about climate initiatives.
              </p>
              <p className="text-gray-700">
                <strong>What's public:</strong> Your name, pledge date, state, profile type, and love for planet rating appear 
                on the Public Pledge Wall to inspire others.
              </p>
              <p className="text-gray-700 mt-2">
                <strong>What's private:</strong> Your email and mobile number are never displayed publicly or shared with third parties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
