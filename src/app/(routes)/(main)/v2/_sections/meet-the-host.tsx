"use client";

import RegistrationForm from "@/components/registration-form";
import SectionWrapper from "@/components/section-wrapper";

const LandingMeetTheHostSectionV2 = () => {
  return (
    <SectionWrapper>
      <div className="max-w-xl pt-5 flex flex-col gap-y-2.5">
        <h3>
          Taught by Someone
          <span className="text-primary">&nbsp;— Who's LIVED</span>&nbsp;this
          Problem
        </h3>
        <p>
          i'm a self-taught technical founder. i can build almost anything — and
          for a long time, almost nobody knew it. This workshop is the system I
          built to fix that for myself, taught the way I wish someone had taught
          it to me
        </p>

        <div className="pt-5">
          <RegistrationForm primary_cta="Save My Seat — Now" />
        </div>
      </div>

      <div className="aspect-square flex-1 bg-primary/[1%] border-2 border-primary/5"></div>
    </SectionWrapper>
  );
};

export default LandingMeetTheHostSectionV2;
