export function SponsorsSection() {
  const sponsors = [
    { name: "BELL", logo: "BELL" },
    { name: "Sports", logo: "sports" },
    { name: "TAG Heuer", logo: "TAG" },
    { name: "Ferrari", logo: "Ferrari" }
  ];

  return (
    <section className="py-12 bg-primary">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center space-x-12 lg:space-x-20">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="text-primary-foreground font-bold text-xl lg:text-2xl">
                {sponsor.logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}