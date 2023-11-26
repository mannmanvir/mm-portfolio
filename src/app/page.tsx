import AboutSection from "@/src/components/AboutSection";
import HeroSection from "@/src/components/HeroSection";
import ProjectsSection from "@/src/components/ProjectsSection";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  );
}
