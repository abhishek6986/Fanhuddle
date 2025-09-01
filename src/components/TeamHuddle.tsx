import { SportyBackground } from "@/components/SportyBackground";

const teamMembers = [
  {
    name: "Emmitt Smith",
    title: "NFL Legend",
    description: "Inspirational Pep-talks about mental strength, grit, and resilience.",
    photo: "/lovable-uploads/c29c5e7d-82a2-422e-b118-656f0646b332.png"
  },
  {
    name: "Chelsea Gray",
    title: "WNBA Las Vegas Aces",
    description: "Strength Training, goal-setting framework, and building a strong support team.",
    photo: "/lovable-uploads/82e54247-7eea-4de8-8d07-18c8a60c4952.png"
  },
  {
    name: "James Connor",
    title: "Arizona Cardinals Running Back",
    description: "Daily meditation, HIIT workouts, and building a daily gratitude practice.",
    photo: "/lovable-uploads/72fd75e4-06fa-4373-9ded-eee93fa93b80.png"
  },
  {
    name: "David Meltzer",
    title: "Entrepreneur, Speaker",
    description: "Performance Mindset programs such as Five Daily Principles and Leading with Vulnerability.",
    photo: "/lovable-uploads/a79492f6-0ac7-4bcb-9696-3204f84ee50c.png"
  }
];

export const TeamHuddle = () => {
  return (
    <SportyBackground>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200 mb-6">
              Join Our Huddle
            </h2>
            <p className="text-xl text-purple-200/80 max-w-4xl mx-auto">
              Check out some of the experts and athletes to motivate you to move forward, along with the topics they cover on Fan Huddle.
            </p>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-colors duration-300">
                  <img 
                    src={member.photo} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200">{member.name}</h3>
                <p className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300">{member.title}</p>
                <p className="text-purple-200/70 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </SportyBackground>
  );
};