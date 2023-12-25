import BenefitsSection from '~components/organisms/BenefitsSection';
import DescriptionsSection from '~components/organisms/DescriptionsSection';
import FaqSection from '~components/organisms/FaqSection';
import HeroSection from '~components/organisms/HeroSection';
import SubscriptionSection from '~components/organisms/SubscriptionSection';
import TextSection from '~components/organisms/TextSection';

export default function Home() {
    return (
        <main className="relative z-[2] container">
            <HeroSection />
            <DescriptionsSection />
            <BenefitsSection />
            <SubscriptionSection />
            <FaqSection />
            <TextSection />
        </main>
    );
}
