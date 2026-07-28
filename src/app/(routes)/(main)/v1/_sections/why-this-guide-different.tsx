import SectionWrapper from "@/components/section-wrapper";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table";
import { getTranslations } from "next-intl/server";
import { CheckIcon, XIcon } from "lucide-react";
import RegistrationForm from "@/components/registration-form";

const tableData = [
  {
    type: "header" as const,
    cells: [
      {
        key: "table.headers.empty",
        className: "max-w-37.5 whitespace-normal wrap-break-word",
      },
      {
        key: "table.headers.workshop",
        className:
          "w-[150px] max-w-[150px] whitespace-normal break-words text-primary px-5 py-2.5 text-center text-[20px]",
      },
      {
        key: "table.headers.generic_courses",
        className:
          "w-[150px] max-w-[150px] whitespace-normal break-words px-5 py-2.5 text-center text-[20px]",
      },
      {
        key: "table.headers.just_post_more",
        className:
          "w-[150px] max-w-[150px] whitespace-normal break-words px-5 py-2.5 text-center text-[20px]",
      },
    ],
  },
  {
    type: "row" as const,
    labelKey: "table.rows.technical_founders",
    cells: [
      { kind: "icon" as const, Icon: CheckIcon, className: "text-primary" },
      { kind: "icon" as const, Icon: XIcon },
      { kind: "icon" as const, Icon: XIcon },
    ],
  },
  {
    type: "row" as const,
    labelKey: "table.rows.campaign_structure",
    cells: [
      { kind: "icon" as const, Icon: CheckIcon, className: "text-primary" },
      {
        kind: "text" as const,
        key: "table.values.sometimes",
        className: "text-[20px]",
      },
      { kind: "icon" as const, Icon: XIcon },
    ],
  },
  {
    type: "row" as const,
    labelKey: "table.rows.product_side",
    cells: [
      { kind: "icon" as const, Icon: CheckIcon, className: "text-primary" },
      {
        kind: "text" as const,
        key: "table.values.rarely",
        className: "text-[20px]",
      },
      {
        kind: "text" as const,
        key: "table.values.dash",
        className: "text-[20px]",
      },
    ],
  },
  {
    type: "row" as const,
    labelKey: "table.rows.team_or_budget",
    cells: [
      { kind: "icon" as const, Icon: CheckIcon, className: "text-primary" },
      { kind: "icon" as const, Icon: XIcon },
      { kind: "icon" as const, Icon: CheckIcon },
    ],
  },
  {
    type: "row" as const,
    labelKey: "table.rows.live_qa",
    cells: [
      { kind: "icon" as const, Icon: CheckIcon, className: "text-primary" },
      {
        kind: "text" as const,
        key: "table.values.rarely",
        className: "text-[20px]",
      },
      { kind: "icon" as const, Icon: XIcon },
    ],
  },
];

const LandingWhyThisGuideIsDifferentSectionV1 = async () => {
  const t = await getTranslations("why_this_guide_different");

  return (
    <SectionWrapper className="hidden lg:flex flex-1 justify-center items-center">
      <div className="flex flex-col gap-y-8 items-center">
        <div className="flex flex-col max-w-xl gap-y-2.5 items-center">
          <h2 className="text-center">
            Why This Guide{" "}
            <span className="text-primary bg-primary/5">is different</span>
          </h2>
          <p>Not Another "50 Content IDEAS" PDF</p>
        </div>

        <RegistrationForm primary_cta="Get the Guide — Now" />

        {/* —— Comparison Table —— */}
        <Table className="w-full max-w-5xl overflow-x-scroll select-none">
          <TableHeader className="border-b-2 border-primary/10 overflow-x-scroll">
            {tableData
              .filter((item) => item.type === "header")
              .map((item, index) => (
                <TableRow
                  key={`header-${index}`}
                  className="hover:bg-transparent"
                >
                  {item.cells.map((cell, cellIndex) => (
                    <TableHead
                      key={`${index}-${cellIndex}`}
                      className={cell.className}
                    >
                      {cell.key ? t(cell.key) : ""}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
          </TableHeader>

          <TableBody className="border-l-2 border-primary/10">
            {tableData
              .filter((item) => item.type === "row")
              .map((item, index) => (
                <TableRow key={`${item.labelKey}-${index}`} className="h-full">
                  <TableCell className="px-4.5 py-2.5 max-w-87.5 whitespace-normal wrap-break-word text-[22px] border-r-2 border-primary/10 bg-primary/3">
                    {t(item.labelKey)}
                  </TableCell>

                  {item.cells.map((cell, cellIndex) => (
                    <TableCell
                      key={`${item.labelKey}-${cellIndex}`}
                      className={`px-5 py-2.5 text-center border-r-2 border-primary/10 ${cell.className ?? ""}`}
                    >
                      <div className="flex flex-1 justify-center items-center">
                        {cell.kind === "icon" ? (
                          <cell.Icon />
                        ) : (
                          <span className={cell.className}>{t(cell.key)}</span>
                        )}
                      </div>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </SectionWrapper>
  );
};

export default LandingWhyThisGuideIsDifferentSectionV1;
