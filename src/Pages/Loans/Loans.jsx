import React from "react";
import CarLoan from "../../Components/CarLoan/CarLoan";
import CompareHomeLoan from "../../Components/CompareHomeLoan/CompareHomeLoan";
import HomeBt from "../../Components/HomeBt/HomeBt";
import NewUser from "../../Components/NewUser/NewUser";
import ComparePersonalLoan from "../../Components/ComparePersonalLoan/ComparePersonalLoan";
import CompareLoanAgainstProp from "../../Components/CompareLoanAgainstProp/CompareLoanAgainstProp";

export default function Loans({ type }) {
  console.log(type);
  return (
    <>
      {type === "home" ? (
        <HomeBt />
      ) : type === "compare-home-loan" ? (
        <CompareHomeLoan />
      ) : type === "compare-personal-loan" ? (
        <ComparePersonalLoan />
      ) : type === "compare-loan-against-property" ? (
        <CompareLoanAgainstProp />
      ) : type === "car" ? (
        <CarLoan />
      ) : type === "new-user-home-loan" ? (
        <NewUser />
      ) : (
        "Loans"
      )}
    </>
  );
}
