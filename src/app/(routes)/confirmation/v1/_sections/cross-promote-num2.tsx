"use client";

import { Button } from "@/components/button";
import SectionWrapper from "@/components/section-wrapper";
import Image from "next/image";
import Link from "next/link";

const ConfirmationCrossPromoteNum2SectionV1 = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col flex-1 gap-y-8">
        <div className="flex flex-col gap-y-1.5">
          <h2>Curious where you actually stand?</h2>
          <p>
            Get your Personal Brand Health Score in 5 minutes — no email
            required
          </p>
        </div>

        <Link
          href="https://quiz.dastyare.social"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Get My Score — Now</Button>
        </Link>
      </div>

      <div
        onContextMenu={(e) => e.preventDefault()}
        className="aspect-3/4 flex-1 bg-primary/[1%] border-2 border-primary/5"
      >
        <Image
          width={588}
          height={588}
          src="/images/sections/scorecard-cross-promote.webp"
          alt=""
          className="px-1 py-1 aspect-3/4 object-cover"
        />
      </div>
    </SectionWrapper>
  );
};

export default ConfirmationCrossPromoteNum2SectionV1;
