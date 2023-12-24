import BenefitsSection from '~components/organisms/BenefitsSection';
import DescriptionsSection from '~components/organisms/DescriptionsSection';
import HeroSection from '~components/organisms/HeroSection';
import SubscriptionSection from '~components/organisms/SubscriptionSection';

export default function Home() {
    return (
        <main className="relative z-[2] container">
            <HeroSection />
            <DescriptionsSection />
            <BenefitsSection />
            <SubscriptionSection />
        </main>
    );
}
