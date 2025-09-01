import { Trophy, Medal, Award } from "lucide-react";
import { SportyBackground } from "@/components/SportyBackground";
import { Button } from "@/components/ui/button";

export const LeaderBoard = () => {
  const leaderboardData = [
    { name: "Alex Rivera", points: 2847, rank: 1, avatar: "/lovable-uploads/1e0c1235-ba43-4d15-a46a-d4b7c228fd98.png" },
    { name: "Jordan Chen", points: 2691, rank: 2, avatar: "/lovable-uploads/266c539b-338c-481f-992f-0a77e1624bf6.png" },
    { name: "Casey Morgan", points: 2534, rank: 3, avatar: "/lovable-uploads/4ceeda91-5e38-41b2-aa44-9b9d5fcb4e84.png" },
    { name: "Taylor Kim", points: 2398, rank: 4, avatar: "/lovable-uploads/72999a6c-a91c-4264-9e07-2a9c2a137b7c.png" },
    { name: "Morgan Lee", points: 2156, rank: 5, avatar: "/lovable-uploads/9bc0081c-d718-49f4-9328-ec66a53f5579.png" },
  ];

  const getRankBadgeColor = (rank: number) => {
    if (rank === 1) return "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black";
    if (rank === 2) return "bg-gradient-to-r from-gray-300 to-gray-500 text-black";
    if (rank === 3) return "bg-gradient-to-r from-orange-400 to-orange-600 text-black";
    return "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-200 border border-purple-400/30";
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="w-5 h-5" />;
    if (rank === 2) return <Medal className="w-5 h-5" />;
    if (rank === 3) return <Award className="w-5 h-5" />;
    return <span className="w-5 h-5 flex items-center justify-center font-bold text-sm">{rank}</span>;
  };

  return (
    <SportyBackground>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-6">
            <p className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300 font-semibold text-lg tracking-wide uppercase">
              Champion Rankings
            </p>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200 leading-tight">
              Current <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300">Leaderboard</span>
            </h2>
            
            <p className="text-lg md:text-xl text-purple-200/80 leading-relaxed max-w-3xl mx-auto">
              See how you stack up against other champions in our community. Complete workouts, 
              hit your goals, and climb the rankings to earn your place among the elite.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="rounded-3xl border border-border/20 backdrop-blur-sm bg-black/30 p-8">
              <div className="space-y-4">
                {leaderboardData.map((user, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-4 rounded-xl border transition-colors ${
                      index < 3 ? 'border-primary/30 bg-primary/10 backdrop-blur-sm' : 'border-border/20 bg-black/20 backdrop-blur-sm hover:bg-black/30'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Rank Badge */}
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${getRankBadgeColor(user.rank)}`}>
                        {getRankIcon(user.rank)}
                      </div>
                      
                      {/* Avatar */}
                      <img 
                        src={user.avatar} 
                        alt={user.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                      />
                      
                      {/* User Info */}
                      <div>
                        <h3 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200">
                          {user.name}
                        </h3>
                        <p className="text-sm text-purple-200/70">Rank #{user.rank}</p>
                      </div>
                    </div>
                    
                    {/* Points */}
                    <div className="text-right">
                      <p className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300">
                        {user.points.toLocaleString()}
                      </p>
                      <p className="text-sm text-purple-200/70">points</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-purple-200/70 mb-4">Want to see your name here?</p>
                <Button variant="default" className="hover:scale-105 transition-transform">
                  Start Your Journey
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SportyBackground>
  );
};