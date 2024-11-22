import React from "react";
import { CompareHomeLoan } from "../../Components/CompareHomeLoan/CompareHomeLoan";
import HomeBt from "../../Components/HomeBt/HomeBt";

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
