export const FitFlowResults = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Real People. <br />
            <span className="text-primary">Real Results.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            See how fanhuddle has helped everyday people transform their bodies, boost their confidence, 
            and achieve their fitness goals. From weight loss and strength building to mental wellness 
            and lifestyle changes, our champion-led coaching approach has made real, lasting transformations 
            for people just like you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="relative overflow-hidden rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 group">
              <div className="aspect-[4/5]">
                 <img 
                   src="/lovable-uploads/72999a6c-a91c-4264-9e07-2a9c2a137b7c.png" 
                   alt={`Fitness transformation ${index + 1}`}
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                 />
               </div>
               
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
               
               <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                 <h3 className="text-xl font-bold mb-2">{index === 0 ? 'Lost 40 lbs' : index === 1 ? 'Marathon Finisher' : 'Strength Doubled'}</h3>
                 <p className="text-sm opacity-90">{index === 0 ? 'Transformed lifestyle with LeBron\'s guidance' : index === 1 ? 'Completed first marathon with Serena\'s mental coaching' : 'Built incredible core strength with Simone\'s program'}</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};