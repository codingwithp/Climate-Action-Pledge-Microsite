import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";

export interface PledgeFormData {
  name: string;
  email: string;
  mobile: string;
  state: string;
  profileType: string;
  commitments: string[];
}

interface PledgeFormProps {
  onSubmit: (data: PledgeFormData) => void;
}

const COMMITMENT_THEMES = [
  "Reduce plastic usage",
  "Use public transportation",
  "Conserve water",
  "Save energy at home",
  "Plant trees",
  "Choose renewable energy",
  "Reduce food waste",
  "Support sustainable products",
  "Educate others about climate",
  "Participate in clean-up drives"
];

const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Delhi", "Puducherry", "Jammu and Kashmir", "Ladakh"
];

export function PledgeForm({ onSubmit }: PledgeFormProps) {
  const [formData, setFormData] = useState<PledgeFormData>({
    name: "",
    email: "",
    mobile: "",
    state: "",
    profileType: "",
    commitments: []
  });

  const handleCommitmentToggle = (commitment: string) => {
    setFormData(prev => ({
      ...prev,
      commitments: prev.commitments.includes(commitment)
        ? prev.commitments.filter(c => c !== commitment)
        : [...prev.commitments, commitment]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.mobile || 
        !formData.state || !formData.profileType || formData.commitments.length === 0) {
      alert("Please fill all fields and select at least one commitment");
      return;
    }

    onSubmit(formData);
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      mobile: "",
      state: "",
      profileType: "",
      commitments: []
    });
  };

  return (
    <section id="pledge-form" className="py-16 px-4 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-center mb-2">Make Your Pledge</h2>
        <p className="text-center text-gray-600 mb-8">
          Commit to climate action and inspire others to join the movement
        </p>
        
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
          <div className="space-y-6">
            {/* Name */}
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your.email@example.com"
                required
              />
            </div>

            {/* Mobile */}
            <div>
              <Label htmlFor="mobile">Mobile Number *</Label>
              <Input
                id="mobile"
                type="tel"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                placeholder="+91 XXXXXXXXXX"
                required
              />
            </div>

            {/* State */}
            <div>
              <Label htmlFor="state">State *</Label>
              <Select value={formData.state} onValueChange={(value) => setFormData({ ...formData, state: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your state" />
                </SelectTrigger>
                <SelectContent>
                  {INDIAN_STATES.map(state => (
                    <SelectItem key={state} value={state}>{state}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Profile Type */}
            <div>
              <Label htmlFor="profile">Profile Type *</Label>
              <Select value={formData.profileType} onValueChange={(value) => setFormData({ ...formData, profileType: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your profile" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Student">Student</SelectItem>
                  <SelectItem value="Working Professional">Working Professional</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Commitment Themes */}
            <div>
              <Label className="mb-3 block">Select Your Commitments * (Choose at least one)</Label>
              <div className="grid md:grid-cols-2 gap-3">
                {COMMITMENT_THEMES.map(commitment => (
                  <div key={commitment} className="flex items-center space-x-2">
                    <Checkbox
                      id={commitment}
                      checked={formData.commitments.includes(commitment)}
                      onCheckedChange={() => handleCommitmentToggle(commitment)}
                    />
                    <label
                      htmlFor={commitment}
                      className="text-sm cursor-pointer leading-tight"
                    >
                      {commitment}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
              Submit Pledge & Get Certificate
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
