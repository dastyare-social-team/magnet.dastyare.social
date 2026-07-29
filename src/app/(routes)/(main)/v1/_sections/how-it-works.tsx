"use client";

import RegistrationForm from "@/components/registration-form";
import SectionWrapper from "@/components/section-wrapper";
import { FootprintsIcon } from "lucide-react";

const LandingHowItWorksSectionV1 = () => {
  return (
    <SectionWrapper className="justify-center items-center">
      <div className="flex flex-col gap-y-8 items-center">
        <div className="flex flex-col max-w-xl gap-y-2.5 items-center">
          <h2 className="text-center">
            What's{" "}
            <span className="text-primary bg-primary/5">Actually INSIDE</span>
          </h2>
        </div>

        <RegistrationForm primary_cta="Get the Guide — Now" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-5 mt-5">
          {/* —— COL #1 —— */}
          <div className="flex flex-col col-span-1 h-min gap-y-3 rounded-3xl border border-primary/5 bg-primary/[1%] px-5 py-4.5">
            <FootprintsIcon className="text-primary" />{" "}
            <h5 className="leading-tight text-secondary">
              <span className="text-primary bg-primary/5">Step 1 —</span>{" "}
              Positioning
            </h5>
            <span className="leading-8 text-secondary/80 text-[22px]">
              Get clear on what you do and why it matters, in language people
              actually remember
            </span>
          </div>

          {/* —— COL #2 —— */}
          <div className="flex flex-col col-span-1 h-min gap-y-3 rounded-3xl border border-primary/5 bg-primary/[1%] px-5 py-4.5">
            <FootprintsIcon className="text-primary" />{" "}
            <h5 className="leading-tight text-secondary">
              <span className="text-primary bg-primary/5">Step 2 —</span>{" "}
              Content Structure
            </h5>
            <span className="leading-8 text-secondary/80 text-[22px]">
              The system for turning one idea into a week of content that builds
              on itself
            </span>
          </div>

          {/* —— COL #3 —— */}
          <div className="flex flex-col col-span-1 h-min gap-y-3 rounded-3xl border border-primary/5 bg-primary/[1%] px-5 py-4.5">
            <FootprintsIcon className="text-primary" />{" "}
            <h5 className="leading-tight text-secondary">
              <span className="text-primary bg-primary/5">Step 3 —</span> The
              Path to Demand
            </h5>
            <span className="leading-8 text-secondary/80 text-[22px]">
              How to connect what you post to what you're actually trying to
              sell
            </span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default LandingHowItWorksSectionV1;
