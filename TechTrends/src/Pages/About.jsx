import AboutHero from "../components/about/AboutHero";
import Mission from "../components/about/Mission";
import MissionFeatures from "../components/about/MissionFeature";
import GlobalReach from "../components/about/GlobalReach";

export default function About() {
  return (
    <div className="flex justify-center py-5 px-4 md:px-40 bg-background-dark">
      <div className="max-w-[960px] w-full space-y-24 ">

        <AboutHero />

        <Mission />

        <MissionFeatures />

        <GlobalReach />

      </div>
    </div>
  );
}
