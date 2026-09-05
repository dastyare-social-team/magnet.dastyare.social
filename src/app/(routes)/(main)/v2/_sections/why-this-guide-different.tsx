import SectionWrapper from "@/components/section-wrapper";
import { getTranslations } from "next-intl/server";
import { CrownIcon } from "lucide-react";
import RegistrationForm from "@/components/registration-form";

const LandingWhyThisGuideIsDifferentSectionV2 = async ({
  webhookUrl,
}: {
  webhookUrl?: string;
}) => {
  const t = await getTranslations("why_this_guide_different");

  return (
    <SectionWrapper className="flex flex-1 justify-center items-center">
      <div className="flex flex-col gap-y-8 items-center">
        <div className="flex flex-col text-center max-w-xl gap-y-2.5 items-center">
          <h2 className="text-center">
            Why This Guide{" "}
            <span className="text-primary bg-primary/5">is different</span>
          </h2>
          <p>Not Another "50 Content IDEAS" PDF</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-5 mt-5">
          {/* —— ROW #1 — COL #1 —— */}
          <div className="flex flex-col col-span-1 h-min gap-y-3 rounded-3xl border border-primary/5 bg-primary/[1%] px-5 py-4.5">
            <CrownIcon className="text-primary" />{" "}
            <h5 className="leading-tight text-secondary">
              <span className="text-primary bg-primary/5">reason one —</span>{" "}
              Built for Technical Founders
            </h5>
            <span className="leading-8 text-secondary/80 text-[22px]">
              Not Marketers, Not Influencers
            </span>
          </div>

          {/* —— ROW #1 — COL #2 —— */}
          <div className="flex flex-col col-span-1 h-min gap-y-3 rounded-3xl border border-primary/5 bg-primary/[1%] px-5 py-4.5">
            <CrownIcon className="text-primary" />{" "}
            <h5 className="leading-tight text-secondary">
              <span className="text-primary bg-primary/5">reason two —</span> A
              System, Not a List
            </h5>
            <span className="leading-8 text-secondary/80 text-[22px]">
              Positioning, content structure, and a path to demand, in order
            </span>
          </div>

          {/* —— ROW #1 — COL #3 —— */}
          <div className="flex flex-col col-span-1 h-min gap-y-3 rounded-3xl border border-primary/5 bg-primary/[1%] px-5 py-4.5">
            <CrownIcon className="text-primary" />{" "}
            <h5 className="leading-tight text-secondary">
              <span className="text-primary bg-primary/5">reason three —</span>{" "}
              Connects to Actual Sales
            </h5>
            <span className="leading-8 text-secondary/80 text-[22px]">
              Not just "post more," but posting that leads somewhere
            </span>
          </div>

          {/* —— ROW #2 — COL #1 —— */}
          <div className="flex flex-col col-span-1 h-min gap-y-3 rounded-3xl border border-primary/5 bg-primary/[1%] px-5 py-4.5">
            <CrownIcon className="text-primary" />{" "}
            <h5 className="leading-tight text-secondary">
              <span className="text-primary bg-primary/5">reason four —</span>{" "}
              Written from Firsthand Experience
            </h5>
            <span className="leading-8 text-secondary/80 text-[22px]">
              Built from what actually worked, not theory
            </span>
          </div>

          {/* —— ROW #2 — COL #2 —— */}
          <div className="flex flex-col col-span-1 h-min gap-y-3 rounded-3xl border border-primary/5 bg-primary/[1%] px-5 py-4.5">
            <CrownIcon className="text-primary" />{" "}
            <h5 className="leading-tight text-secondary">
              <span className="text-primary bg-primary/5">reason five —</span>{" "}
              Instant Download
            </h5>
            <span className="leading-8 text-secondary/80 text-[22px]">
              Name and email, that's it
            </span>
          </div>

          {/* —— ROW #2 — COL #3 —— */}
          <div className="flex flex-col col-span-1 h-min gap-y-3 rounded-3xl border border-primary/5 bg-primary/[1%] px-5 py-4.5">
            <CrownIcon className="text-primary" />{" "}
            <h5 className="leading-tight text-secondary">
              <span className="text-primary bg-primary/5">reason six —</span>{" "}
              Short and Usable
            </h5>
            <span className="leading-8 text-secondary/80 text-[22px]">
              Built to act on this week, not read once and forget
            </span>
          </div>
        </div>

        <RegistrationForm
          primary_cta="Get Your Guide — Now"
          webhookUrl={webhookUrl}
        />
      </div>
    </SectionWrapper>
  );
};

export default LandingWhyThisGuideIsDifferentSectionV2;
