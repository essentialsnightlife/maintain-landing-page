import {Navbar} from "@/components/landing/navbar";
import {CTA} from "@/components/landing/cta";
import {FAQ} from "@/components/landing/faq";
import {Features} from "@/components/landing/features";
import {Footer} from "@/components/landing/footer";
import {Hero} from "@/components/landing/hero";
import {HowItWorks} from "@/components/landing/how-it-works";
import {SocialProof} from "@/components/landing/social-proof";
import {Testimonials} from "@/components/landing/testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
        <Navbar />
        <main>
            <Hero />
            <SocialProof />
            <Features />
            <HowItWorks />
            <Testimonials />
            <CTA />
            <FAQ />
        </main>
        <Footer />
    </div>
  );
}
