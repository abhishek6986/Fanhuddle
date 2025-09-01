import { FitFlowHeader } from '@/components/FitFlowHeader';
import { FitFlowHero } from '@/components/FitFlowHero';
import { FitFlowAbout } from '@/components/FitFlowAbout';
import { FitFlowPrograms } from '@/components/FitFlowPrograms';
import { ChallengeIntro } from '@/components/ChallengeIntro';
import { FanChallengeBanner } from '@/components/FanChallengeBanner';
import { TeamHuddle } from '@/components/TeamHuddle';
import { LeaderBoard } from '@/components/LeaderBoard';
import { FutureApp } from '@/components/FutureApp';

import { Contact } from '@/components/Contact';
import { FitFlowFooter } from '@/components/FitFlowFooter';
import { GlowingEffectDemo } from '@/components/ui/glowing-effect-demo';

const Index = () => {
  return (
    <div className="min-h-screen">
      <FitFlowHeader />
      <main>
        <FitFlowHero />
        <FitFlowAbout />
        <FanChallengeBanner />
        <FitFlowPrograms />
        <FutureApp />
        <TeamHuddle />
        <Contact />
      </main>
      <FitFlowFooter />
    </div>
  );
};

export default Index;
