"use client";

import RegistrationForm from "@/components/registration-form";
import SectionWrapper from "@/components/section-wrapper";
import Image from "next/image";

const LandingHeroSectionV2 = () => {
  return (
    <SectionWrapper className="md:pt-0 border-0">
      <div className="flex flex-col flex-1 gap-y-8">
        <div className="flex flex-col gap-y-1.5">
          <p className="text-[20px]">
            Stop Guessing — Here's How to Build a Personal Brand That Sells
          </p>
          <h2>
            Stop Guessing What to Post{" "}
            <span className="text-primary">— No More Content with No Plan</span>{" "}
            behind it
          </h2>
          <p>
            A no-fluff guide for founders who can build products but don't know
            how to build the brand around it — what to post, how to structure
            it, and how to turn attention into actual demand
          </p>
        </div>

        <div className="flex flex-col gap-y-2.5">
          <RegistrationForm primary_cta="Get Your Guide — Now" />

          <div className="text-[18px] opacity-80 leading-6.5">
            instant download — no spam
          </div>
        </div>
      </div>

      <div
        onContextMenu={(e) => e.preventDefault()}
        className="aspect-3/4 flex-1 bg-primary/[1%] border-2 border-primary/5"
      >
        <Image
          width={588}
          height={588}
          src="/images/sections/hero.webp"
          loading="eager"
          alt=""
          className="px-1 py-1 aspect-3/4 object-cover"
        />
      </div>
    </SectionWrapper>
  );
};

export default LandingHeroSectionV2;
