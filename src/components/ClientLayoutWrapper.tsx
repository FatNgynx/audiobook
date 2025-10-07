"use client";

import React from "react";

type Props = {
  children: React.ReactNode;
};

// Simple pass-through wrapper for client-only layout logic if needed.
export default function ClientLayoutWrapper({ children }: Props) {
  return <>{children}</>;
}
