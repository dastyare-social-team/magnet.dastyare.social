"use client";

import RegistrationForm from "@/components/registration-form";
import SectionWrapper from "@/components/section-wrapper";

const value_props = [
  "the exact structure to go from invisible to known in your market",
  "how to turn posting into a system that leads to sales, not just likes",
  "what to fix first if your brand feels busy but stalled",
];

const LandingHeroSectionV1 = () => {
  return (
    <SectionWrapper className="pt-0 border-0">
      <div className="flex flex-col flex-1 gap-y-8">
        <div className="flex flex-col gap-y-1.5">
          <p className="text-[20px]">
            Stop Guessing — Here's How to Build a Personal Brand That Sells
          </p>
          <h2>
            A no-fluff <span className="text-primary">Guide for Founders</span>{" "}
            Who can Build the Product but don't know how to build the brand
            Around it{" "}
            <span className="text-primary">
              — What to Post, how to structure it,
            </span>{" "}
            and how to Turn Attention into Actual Demand
          </h2>
          <div className="flex flex-col gap-y-1">
            {value_props.map((value, index) => (
              <p key={index}>— {value}</p>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-y-2.5">
          <RegistrationForm primary_cta="Get the Guide — Now" />

          <div className="text-[18px] opacity-80 leading-6.5">
            instant download — no spam
          </div>
        </div>
      </div>

      <div className="aspect-square flex-1 bg-primary/[1%] border-2 border-primary/5"></div>
    </SectionWrapper>
  );
};

export default LandingHeroSectionV1;
