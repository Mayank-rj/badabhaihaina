import React from "react";
import CarLoan from "../../Components/CarLoan/CarLoan";
import CompareHomeLoan from "../../Components/CompareHomeLoan/CompareHomeLoan";
import HomeBt from "../../Components/HomeBt/HomeBt";

export default function Loans({ type }) {
  console.log(type);
  return (
    <>
      {type === "home-bt" ? (
        <HomeBt />
      ) : type === "compare-home-loan" ? (
        <CompareHomeLoan />
      ) : type === "car" ? (
        <CarLoan />
      ) : (
        "Loans"
      )}
    </>
  );
}
