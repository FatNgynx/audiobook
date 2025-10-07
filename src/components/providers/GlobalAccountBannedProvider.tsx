"use client";
import React from "react";

type Props = { children: React.ReactNode };

export function GlobalAccountBannedProvider({ children }: Props) {
  return <>{children}</>;
}