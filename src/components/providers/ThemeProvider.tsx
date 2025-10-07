"use client";
import React from "react";

type Props = { children: React.ReactNode };

export function ThemeProvider({ children }: Props) {
  return <>{children}</>;
}