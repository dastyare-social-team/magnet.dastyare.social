"use client";

import RegistrationForm from "@/components/registration-form";
import SectionWrapper from "@/components/section-wrapper";

const value_props = [
  "instant download",
  "a system, not a content list",
  "written for founders, not marketers",
];

const LandingFinalCTASectionV2 = () => {
  return (
    <SectionWrapper>
      <div className="max-w-xl pt-5 flex flex-col gap-y-2.5">
        <h3>
          Your Product is Ready
          <span className="text-primary">&nbsp;— Your Brand ISN'T</span>
          &nbsp;
          <br />
          Fix that with this Guide
        </h3>
        <p>
          Get the exact system for turning what you build into something people
          actually notice — and buy
        </p>

        <div className="flex flex-col gap-y-1">
          {value_props.map((value, index) => (
            <p key={index}>— {value}</p>
          ))}
        </div>

        <div className="pt-5">
          <RegistrationForm primary_cta="Get Your Guide — Now" />
        </div>
      </div>

      <div className="aspect-square flex-1 bg-primary/[1%] border-2 border-primary/5"></div>
    </SectionWrapper>
  );
};

export default LandingFinalCTASectionV2;
