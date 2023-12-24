import BenefitsSection from '~components/organisms/BenefitsSection';
import DescriptionsSection from '~components/organisms/DescriptionsSection';
import HeroSection from '~components/organisms/HeroSection';

export default function Home() {
    return (
        <main className="relative z-[2] container">
            <HeroSection />
            <DescriptionsSection />
            <BenefitsSection />
        </main>
    );
}
