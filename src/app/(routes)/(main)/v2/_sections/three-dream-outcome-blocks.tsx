"use client";

import RegistrationForm from "@/components/registration-form";
import SectionWrapper from "@/components/section-wrapper";
import Image from "next/image";

const LandingThreeDreamOutcomeBlocksSectionV2 = () => {
  return (
    <>
      <SectionWrapper className="md:flex-row-reverse">
        <div className="flex flex-col flex-1 gap-y-8">
          <div className="flex flex-col gap-y-1.5">
            <p className="text-[20px]">Clarity on What to Actually Say</p>
            <h2>Know Your Positioning Cold</h2>
            <p>
              You'll leave with a clear, specific way to describe what you do
              and why it matters — not a vague "founder building cool things"
              bio nobody remembers
            </p>
          </div>

          <RegistrationForm primary_cta="Get Your Guide — Now" />
        </div>

        <div
          onContextMenu={(e) => e.preventDefault()}
          className="aspect-3/4 flex-1 bg-primary/[1%] border-2 border-primary/5"
        >
          <Image
            width={588}
            height={588}
            src="/images/sections/benefit-block-num-1.webp"
            alt=""
            className="px-1 py-1 aspect-3/4 object-cover"
          />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="flex flex-col flex-1 gap-y-8">
          <div className="flex flex-col gap-y-1.5">
            <p className="text-[20px]">A Repeatable Content Structure</p>
            <h2>A System, Not a Content Calendar</h2>
            <p>
              The guide breaks down the exact structure to turn a single idea
              into a week of content that builds toward something — instead of a
              pile of disconnected posts
            </p>
          </div>

          <RegistrationForm primary_cta="Get Your Guide — Now" />
        </div>

        <div
          onContextMenu={(e) => e.preventDefault()}
          className="aspect-3/4 flex-1 bg-primary/[1%] border-2 border-primary/5"
        >
          <Image
            width={588}
            height={588}
            src="/images/sections/benefit-block-num-2.webp"
            alt=""
            className="px-1 py-1 aspect-3/4 object-cover"
          />
        </div>
      </SectionWrapper>

      <SectionWrapper className="md:flex-row-reverse">
        <div className="flex flex-col flex-1 gap-y-8">
          <div className="flex flex-col gap-y-1.5">
            <p className="text-[20px]">A Path from Content to Demand</p>
            <h2>Know How Attention Turns into Money</h2>
            <p>
              Content without a path to an offer just generates likes. You'll
              get the missing piece: how to structure your content so it
              actually leads somewhere
            </p>
          </div>

          <RegistrationForm primary_cta="Get Your Guide — Now" />
        </div>

        <div
          onContextMenu={(e) => e.preventDefault()}
          className="aspect-3/4 flex-1 bg-primary/[1%] border-2 border-primary/5"
        >
          <Image
            width={588}
            height={588}
            src="/images/sections/benefit-block-num-3.webp"
            alt=""
            className="px-1 py-1 aspect-3/4 object-cover"
          />
        </div>
      </SectionWrapper>
    </>
  );
};

export default LandingThreeDreamOutcomeBlocksSectionV2;
