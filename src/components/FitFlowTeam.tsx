export const FitFlowTeam = () => {
  const coaches = [
    {
      name: "Serena Williams",
      role: "Tennis Performance & Mental Coach",
      description: "23-time Grand Slam champion Serena brings unmatched expertise in competitive mindset and athletic excellence. Her coaching focuses on building mental resilience and peak performance under pressure.",
      image: "/lovable-uploads/72999a6c-a91c-4264-9e07-2a9c2a137b7c.png"
    },
    {
      name: "LeBron James",
      role: "Strength & Conditioning Expert",
      description: "NBA legend LeBron shares his secrets to longevity and peak physical condition. His training methodology combines strength building with injury prevention and recovery optimization.",
      image: "/lovable-uploads/72999a6c-a91c-4264-9e07-2a9c2a137b7c.png"
    },
    {
      name: "Simone Biles",
      role: "Gymnastics & Flexibility Specialist",
      description: "Olympic gold medalist Simone teaches body awareness, flexibility, and core strength. Her approach emphasizes proper form, progressive training, and building confidence through movement.",
      image: "/lovable-uploads/72999a6c-a91c-4264-9e07-2a9c2a137b7c.png"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-lg tracking-wide uppercase mb-4">
            Meet
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">
            Your Champions.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coaches.map((coach, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={coach.image} 
                  alt={coach.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-8 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {coach.name}
                  </h3>
                  <p className="text-primary font-semibold">
                    {coach.role}
                  </p>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {coach.description}
                </p>
                
                 <div className="pt-4">
                   <span className="text-sm font-semibold text-primary">
                     fanhuddle Coach
                   </span>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};