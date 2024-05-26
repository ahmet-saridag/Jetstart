import React from "react";
import Header from "@/components/header";

export default function CommonLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
