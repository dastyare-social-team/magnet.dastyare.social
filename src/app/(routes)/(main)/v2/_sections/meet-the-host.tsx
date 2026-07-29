"use client";

import RegistrationForm from "@/components/registration-form";
import SectionWrapper from "@/components/section-wrapper";

const LandingMeetTheHostSectionV2 = () => {
  return (
    <SectionWrapper>
      <div className="max-w-xl pt-5 flex flex-col gap-y-2.5">
        <h3>
          Written by
          <span className="text-primary">&nbsp;Someone Who had to </span>
          &nbsp;Figure this Out the Hard Way
        </h3>
        <p>
          I'm a self-taught Founder. Building the product was never the hard
          part — getting anyone to notice it was. This guide is the system I
          built to fix that, written the way I wish someone had explained it to
          me the first time
        </p>

        <div className="pt-5">
          <RegistrationForm primary_cta="Get Your Guide — Now" />
        </div>
      </div>

      <div className="aspect-square flex-1 bg-primary/[1%] border-2 border-primary/5"></div>
    </SectionWrapper>
  );
};

export default LandingMeetTheHostSectionV2;
