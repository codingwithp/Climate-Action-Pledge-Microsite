import { useState, useRef } from "react";
import { HeroSection } from "./components/HeroSection";
import { LiveKPIs } from "./components/LiveKPIs";
import { WhyTakeAction } from "./components/WhyTakeAction";
import { PledgeForm, PledgeFormData } from "./components/PledgeForm";
import { CertificateGenerator, CertificateData } from "./components/CertificateGenerator";
import { PublicPledgeWall, PublicPledge } from "./components/PublicPledgeWall";
import { PrivacyNote } from "./components/PrivacyNote";

// Mock initial data
const INITIAL_PLEDGES: PublicPledge[] = [
  {
    pledgeId: "CP001234",
    name: "Priya Sharma",
    date: "2024-12-20",
    state: "Maharashtra",
    profile: "Student",
    heartRating: 5
  },
  {
    pledgeId: "CP001235",
    name: "Rajesh Kumar",
    date: "2024-12-21",
    state: "Karnataka",
    profile: "Working Professional",
    heartRating: 4
  },
  {
    pledgeId: "CP001236",
    name: "Ananya Reddy",
    date: "2024-12-22",
    state: "Telangana",
    profile: "Student",
    heartRating: 5
  },
  {
    pledgeId: "CP001237",
    name: "Vikram Singh",
    date: "2024-12-23",
    state: "Delhi",
    profile: "Working Professional",
    heartRating: 5
  },
  {
    pledgeId: "CP001238",
    name: "Meera Patel",
    date: "2024-12-24",
    state: "Gujarat",
    profile: "Other",
    heartRating: 4
  }
];

function App() {
  const [pledges, setPledges] = useState<PublicPledge[]>(INITIAL_PLEDGES);
  const [certificate, setCertificate] = useState<CertificateData | null>(null);
  const pledgeFormRef = useRef<HTMLDivElement>(null);

  const scrollToPledgeForm = () => {
    pledgeFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handlePledgeSubmit = (formData: PledgeFormData) => {
    // Generate pledge ID
    const pledgeNumber = 1239 + pledges.length;
    const pledgeId = `CP${pledgeNumber.toString().padStart(6, "0")}`;
    
    // Generate random heart rating (3-5 hearts)
    const heartRating = Math.floor(Math.random() * 3) + 3;
    
    // Get current date
    const today = new Date().toISOString().split("T")[0];
    
    // Create public pledge
    const newPledge: PublicPledge = {
      pledgeId,
      name: formData.name,
      date: today,
      state: formData.state,
      profile: formData.profileType,
      heartRating
    };
    
    // Add to pledges list
    setPledges(prev => [newPledge, ...prev]);
    
    // Generate certificate
    const newCertificate: CertificateData = {
      name: formData.name,
      pledgeId,
      date: today,
      heartRating
    };
    
    setCertificate(newCertificate);
    
    // Scroll to certificate
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }, 100);
  };

  const handleCloseCertificate = () => {
    setCertificate(null);
  };

  // Calculate KPIs
  const kpiData = {
    targetPledges: 10000,
    achievedPledges: pledges.length,
    students: pledges.filter(p => p.profile === "Student").length,
    professionals: pledges.filter(p => p.profile === "Working Professional").length,
    workshops: 42
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection onPledgeClick={scrollToPledgeForm} />
      <LiveKPIs data={kpiData} />
      <WhyTakeAction />
      <div ref={pledgeFormRef}>
        <PledgeForm onSubmit={handlePledgeSubmit} />
      </div>
      {certificate && (
        <CertificateGenerator 
          certificate={certificate} 
          onClose={handleCloseCertificate} 
        />
      )}
      <PublicPledgeWall pledges={pledges} />
      <PrivacyNote />
      
      {/* Footer */}
      <footer className="bg-emerald-800 text-white py-8 px-4 text-center">
        <p className="mb-2">Climate Action Pledge Microsite</p>
        <p className="text-sm text-emerald-200">
          Together, we can make a difference for our planet 🌍
        </p>
      </footer>
    </div>
  );
}

export default App;
