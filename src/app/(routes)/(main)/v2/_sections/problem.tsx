"use client";

import RegistrationForm from "@/components/registration-form";
import SectionWrapper from "@/components/section-wrapper";

const LandingProblemSectionV2 = ({
  webhookUrl,
}: {
  webhookUrl?: string;
}) => {
  return (
    <SectionWrapper className="justify-center">
      <div className="flex flex-col flex-1 items-center gap-y-8">
        <div className="flex flex-col items-center text-center gap-y-1.5">
          <h2 className="max-w-xl">
            You don't have a Content Problem
            <span className="text-primary"> — You have a System Problem</span>
          </h2>
          <p className="max-w-2xl">
            You've probably tried posting more. Maybe it worked for a week, then
            fizzled. That's not a discipline problem — it's because "post more"
            was never a strategy, just an instruction. Without a system
            connecting what you say to who you're saying it to and what you want
            them to do next, more content just means more noise, faster
          </p>

          <p className="max-w-2xl">
            — this guide gives you the system — not another list of content
            ideas
          </p>
        </div>

        <RegistrationForm
          primary_cta="Get Your Guide — Now"
          webhookUrl={webhookUrl}
        />
      </div>
    </SectionWrapper>
  );
};

export default LandingProblemSectionV2;
