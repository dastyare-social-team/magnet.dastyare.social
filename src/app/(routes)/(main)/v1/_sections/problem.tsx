"use client";

import RegistrationForm from "@/components/registration-form";
import SectionWrapper from "@/components/section-wrapper";

const LandingProblemSectionV1 = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col flex-1 gap-y-8">
        <div className="flex flex-col gap-y-1.5">
          <h2>
            You don't have a Content Problem
            <span className="text-primary"> — You have a System Problem</span>
          </h2>
          <p>
            You've probably tried posting more. Maybe it worked for a week, then
            fizzled. That's not a discipline problem — it's because "post more"
            was never a strategy, just an instruction. Without a system
            connecting what you say to who you're saying it to and what you want
            them to do next, more content just means more noise, faster
          </p>
          <p>
            — this guide gives you the system — not another list of content
            ideas
          </p>
        </div>

        <RegistrationForm primary_cta="Get the Guide — Now" />
      </div>

      <div className="aspect-square flex-1 bg-primary/[1%] border-2 border-primary/5">
        {/* —— IMG —— */}
      </div>
    </SectionWrapper>
  );
};

export default LandingProblemSectionV1;
