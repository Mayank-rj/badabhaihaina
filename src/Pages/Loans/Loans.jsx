import React from "react";
import { HomeBt } from "../../Components/HomeBt/HomeBt";
import { CompareHomeLoan } from "../../Components/CompareHomeLoan/CompareHomeLoan";

export default function Loans({ type }) {
  console.log(type);
  return (
    <>
      {type === "home-bt" ? (
        <HomeBt />
      ) : type === "compare-home-loan" ? (
        <CompareHomeLoan />
      ) : (
        "Loans"
      )}
    </>
  );
}
