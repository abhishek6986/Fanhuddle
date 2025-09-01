export function FeaturedMedia() {
  const mediaLogos = [
    { name: 'New York Times', width: 'w-32' },
    { name: 'Forbes', width: 'w-20' },
    { name: 'USA Today', width: 'w-28' },
    { name: 'Entrepreneur', width: 'w-24' },
    { name: 'BBC', width: 'w-16' },
    { name: 'Inc.', width: 'w-12' },
    { name: 'CNN', width: 'w-16' },
  ];

  return (
    <section className="py-12 lg:py-16 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Featured on
          </p>
        </div>
        
        {/* Logo Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex items-center justify-center space-x-8 lg:space-x-12 animate-scroll">
            {mediaLogos.map((logo, index) => (
              <div key={`${logo.name}-${index}`} className={`flex-shrink-0 ${logo.width}`}>
                <div className="h-8 bg-muted-foreground/20 rounded flex items-center justify-center">
                  <span className="text-muted-foreground font-medium text-xs">
                    {logo.name}
                  </span>
                </div>
              </div>
            ))}
            {/* Duplicate for seamless scroll */}
            {mediaLogos.map((logo, index) => (
              <div key={`${logo.name}-dup-${index}`} className={`flex-shrink-0 ${logo.width}`}>
                <div className="h-8 bg-muted-foreground/20 rounded flex items-center justify-center">
                  <span className="text-muted-foreground font-medium text-xs">
                    {logo.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}