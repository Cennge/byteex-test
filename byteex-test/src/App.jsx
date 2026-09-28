import './index.css';

import AnnouncementBar from './components/AnnouncementBar/AnnouncementBar';
import Hero            from './components/Hero/Hero';
import Benefits        from './components/Benefits/Benefits';
import ImpactBanner    from './components/ImpactBanner/ImpactBanner';
import Founder         from './components/Founder/Founder';
import HowItWorks      from './components/HowItWorks/HowItWorks';
import Reviews         from './components/Reviews/Reviews';
import FAQ             from './components/FAQ/FAQ';
import FinalCTA        from './components/FinalCTA/FinalCTA';

/**
 * App — Byteex product landing page
 * Sections (per Figma):
 *  1. AnnouncementBar  — ticker strip
 *  2. Hero             — main fold
 *  3. Benefits         — top product advantages
 *  4. ImpactBanner     — green impact stats
 *  5. Founder          — brand story
 *  6. HowItWorks       — 3-step process
 *  7. Reviews          — customer testimonials
 *  8. FAQ              — accordion Q&A
 *  9. FinalCTA         — closing call-to-action
 */
export default function App() {
  return (
    <>
      <AnnouncementBar />

      <main>
        <Hero />
        <Benefits />
        <ImpactBanner />
        <Founder />
        <HowItWorks />
        <Reviews />
        <FAQ />
        <FinalCTA />
      </main>
    </>
  );
}
