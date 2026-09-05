import WindowLayout from "@/components/window-layout";
import LandingHeroSectionV2 from "./_sections/hero";
import LandingProblemSectionV2 from "./_sections/problem";
import LandingThreeDreamOutcomeBlocksSectionV2 from "./_sections/three-dream-outcome-blocks";
import LandingSocialProofBlockNum2SectionV2 from "./_sections/social-proof-block-num2";
import LandingWhyThisGuideIsDifferentSectionV2 from "./_sections/why-this-guide-different";
import LandingHowItWorksSectionV2 from "./_sections/how-it-works";
import LandingMeetTheHostSectionV2 from "./_sections/meet-the-host";
import LandingFAQSectionV2 from "./_sections/faq";
import LandingFinalCTASectionV2 from "./_sections/final-cta";
import LandingSocialProofBlockNum1SectionV1 from "../v1/_sections/social-proof-block-num1";

const Page = () => {
  return (
    <WindowLayout>
      <LandingHeroSectionV2 webhookUrl={process.env.WEBHOOK_URL} />

      <LandingSocialProofBlockNum2SectionV2 />

      <LandingProblemSectionV2 webhookUrl={process.env.WEBHOOK_URL} />

      <LandingThreeDreamOutcomeBlocksSectionV2 webhookUrl={process.env.WEBHOOK_URL} />

      <LandingSocialProofBlockNum1SectionV1 webhookUrl={process.env.WEBHOOK_URL} />

      <LandingWhyThisGuideIsDifferentSectionV2 webhookUrl={process.env.WEBHOOK_URL} />

      <LandingHowItWorksSectionV2 webhookUrl={process.env.WEBHOOK_URL} />

      <LandingMeetTheHostSectionV2 webhookUrl={process.env.WEBHOOK_URL} />

      <LandingFAQSectionV2 />

      <LandingFinalCTASectionV2 webhookUrl={process.env.WEBHOOK_URL} />
    </WindowLayout>
  );
};

export default Page;
