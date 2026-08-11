"use client";

import { Button } from "@/components/button";
import SectionWrapper from "@/components/section-wrapper";
import Image from "next/image";
import Link from "next/link";

const ConfirmationCrossPromoteNum1SectionV2 = () => {
  return (
    <SectionWrapper className="md:flex-row-reverse">
      <div className="flex flex-col flex-1 gap-y-8">
        <div className="flex flex-col gap-y-1.5">
          <h2>Want to go deeper than the guide?</h2>
          <p>
            Join the live workshop — build your content and campaign system in
            real time, with Q&A on your actual brand
          </p>
        </div>

        <Link
          href="https://workshop.dastyare.social"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Save My Seat — Now</Button>
        </Link>
      </div>

      <div
        onContextMenu={(e) => e.preventDefault()}
        className="aspect-3/4 flex-1 bg-primary/[1%] border-2 border-primary/5"
      >
        <Image
          width={588}
          height={588}
          src="/images/sections/workshop-cross-promote.webp"
          alt=""
          className="px-1 py-1 aspect-3/4 object-cover"
        />
      </div>
    </SectionWrapper>
  );
};

export default ConfirmationCrossPromoteNum1SectionV2;
