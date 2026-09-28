import './index.css';
import AnnouncementBar from './components/AnnouncementBar/AnnouncementBar';
import Hero            from './components/Hero/Hero';
import FeaturedReview  from './components/FeaturedReview/FeaturedReview';
import AsSeenIn        from './components/AsSeenIn/AsSeenIn';
import Benefits        from './components/Benefits/Benefits';
import ImpactBanner    from './components/ImpactBanner/ImpactBanner';
import Founder         from './components/Founder/Founder';
import HowItWorks      from './components/HowItWorks/HowItWorks';
import Reviews         from './components/Reviews/Reviews';
import FAQ             from './components/FAQ/FAQ';
import FinalCTA        from './components/FinalCTA/FinalCTA';

export default function App() {
  return (
    <>
      <AnnouncementBar />
      <main>
        <Hero />
        <FeaturedReview />
        <AsSeenIn />
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
