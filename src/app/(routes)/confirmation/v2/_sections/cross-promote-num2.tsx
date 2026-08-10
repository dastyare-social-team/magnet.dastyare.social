"use client";

import { Button } from "@/components/button";
import SectionWrapper from "@/components/section-wrapper";
import Link from "next/link";

const ConfirmationCrossPromoteNum2SectionV2 = () => {
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

      <div className="aspect-square flex-1 bg-primary/[1%] border-2 border-primary/5"></div>
    </SectionWrapper>
  );
};

export default ConfirmationCrossPromoteNum2SectionV2;
