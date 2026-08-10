"use client";

import SectionWrapper from "@/components/section-wrapper";

const ConfirmationHeaderSectionV1 = () => {
  return (
    <SectionWrapper className="md:pt-0 border-0">
      <div className="flex flex-col gap-y-2.5">
        <h2>Check your inbox — Your Guide is on its Way.</h2>
        <p>It should land within a couple minutes. Not there? Check spam</p>
      </div>
    </SectionWrapper>
  );
};

export default ConfirmationHeaderSectionV1;
