import { Zap, Target, Trophy } from "lucide-react";
import { SportyBackground } from "@/components/SportyBackground";
import React from "react";

export const FitFlowPrograms = () => {
  const programs = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Movement & Fitness.",
      description: "Access professional athlete curated workout programs, fitness challenges, and training tips. Build strength, endurance, and performance with guidance from your favorite athletes.",
      features: [
        "Athlete-curated workouts",
        "Fitness challenges & goals",
        "Performance training tips"
      ],
      color: "text-primary"
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Mindset & Wellness.",
      description: "Develop mental strength and wellness habits with coaching from Olympic champions and sports experts. Build confidence and mental resilience.",
      features: [
        "Mental performance coaching",
        "Wellness habit building",
        "Mindfulness practices"
      ],
      color: "text-primary"
    },
    {
      icon: <Trophy className="w-12 h-12" />,
      title: "Lifestyle & Nutrition.",
      description: "Get lifestyle and nutrition guidance from professional athletes. Learn sustainable habits and nutrition strategies from the experts you admire.",
      features: [
        "Nutrition coaching from pros",
        "Sustainable lifestyle habits",
        "Expert meal planning"
      ],
      color: "text-primary"
    }
  ];

  return (
    <SportyBackground>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200 leading-tight">
              How It <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300">Works.</span>
            </h2>
            
            <p className="text-lg md:text-xl text-purple-200/80 leading-relaxed max-w-4xl mx-auto">
              Join an Athlete Challenge. AI Tracks Your Progress. Earn Points for Healthy Habits. Redeem for Real Rewards.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="rounded-2xl p-8 border border-border/20 hover:border-border/40 backdrop-blur-sm bg-black/20 hover:bg-black/30 transition-all duration-300 space-y-6">
              <div className={`${program.color} mb-6`}>
                {React.cloneElement(program.icon, { 
                  className: "w-12 h-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300" 
                })}
              </div>
                
                <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200">
                  {program.title}
                </h3>
                
                <p className="text-purple-200/80 leading-relaxed">
                  {program.description}
                </p>
                
                <ul className="space-y-3">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300" />
                      <span className="text-purple-200/90 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SportyBackground>
  );
};