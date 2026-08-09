"use client";

import SectionWrapper from "@/components/section-wrapper";

const ConfirmationHeaderSectionV2 = () => {
  return (
    <SectionWrapper className="md:pt-0 border-0">
      <div className="flex flex-col gap-y-2.5">
        <h2>You're registered</h2>
        <p>
          Check your email for the link and calendar invite — we'll also send a
          reminder before it starts
        </p>
      </div>
    </SectionWrapper>
  );
};

export default ConfirmationHeaderSectionV2;
