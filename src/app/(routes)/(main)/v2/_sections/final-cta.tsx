"use client";

import RegistrationForm from "@/components/registration-form";
import SectionWrapper from "@/components/section-wrapper";
import Image from "next/image";

const value_props = [
  "instant download",
  "a system, not a content list",
  "written for founders, not marketers",
];

const LandingFinalCTASectionV2 = ({
  webhookUrl,
}: {
  webhookUrl?: string;
}) => {
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
          <RegistrationForm
            primary_cta="Get Your Guide — Now"
            cta_location="final-cta"
            webhookUrl={webhookUrl}
          />
        </div>
      </div>

      <div
        onContextMenu={(e) => e.preventDefault()}
        className="aspect-3/4 flex-1 bg-primary/[1%] border-2 border-primary/5"
      >
        <Image
          width={588}
          height={588}
          src="/images/sections/final-cta.webp"
          alt=""
          className="px-1 py-1 aspect-3/4 object-cover"
        />
      </div>
    </SectionWrapper>
  );
};

export default LandingFinalCTASectionV2;
