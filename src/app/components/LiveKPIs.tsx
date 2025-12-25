import { useEffect, useState } from "react";
import { Users, Target, Briefcase, GraduationCap, BookOpen } from "lucide-react";

interface KPIData {
  targetPledges: number;
  achievedPledges: number;
  students: number;
  professionals: number;
  workshops: number;
}

interface LiveKPIsProps {
  data: KPIData;
}

function Counter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration]);

  return <span>{count.toLocaleString()}</span>;
}

export function LiveKPIs({ data }: LiveKPIsProps) {
  const kpis = [
    { 
      label: "Target Pledges", 
      value: data.targetPledges, 
      icon: Target,
      color: "text-blue-600"
    },
    { 
      label: "Pledges Achieved", 
      value: data.achievedPledges, 
      icon: Users,
      color: "text-emerald-600"
    },
    { 
      label: "Students", 
      value: data.students, 
      icon: GraduationCap,
      color: "text-purple-600"
    },
    { 
      label: "Working Professionals", 
      value: data.professionals, 
      icon: Briefcase,
      color: "text-orange-600"
    },
    { 
      label: "Workshops Conducted", 
      value: data.workshops, 
      icon: BookOpen,
      color: "text-pink-600"
    },
  ];

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-8">Live Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {kpis.map((kpi) => (
            <div 
              key={kpi.label} 
              className="bg-white rounded-lg p-6 shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <kpi.icon className={`w-8 h-8 mx-auto mb-3 ${kpi.color}`} />
              <div className="text-3xl mb-2">
                <Counter target={kpi.value} />
              </div>
              <div className="text-sm text-gray-600">{kpi.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
