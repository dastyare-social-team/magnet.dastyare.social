import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Founder's Personal Brand Guide",
  description:
    "A guide for self-taught founders — how to go from invisible to a personal brand that generates real demand. Instant PDF download",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return children;
}
