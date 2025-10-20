import HeroSlider from "@/components/home/hero_slider";
import PromotionBanner from "@/components/home/promotion_banner";
import AboutSection from "@/components/home/about_section";
import TestimonialsSection from "@/components/home/testimonials_section";
import PromoPopup from "@/components/home/promo_popup";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <PromotionBanner />
      <AboutSection />
      <TestimonialsSection />
      <PromoPopup />
    </>
  );
}
