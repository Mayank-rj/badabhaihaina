import CarLoan from "../../Components/CarLoan/CarLoan";
import CompareHomeLoan from "../../Components/CompareHomeLoan/CompareHomeLoan";
import ComparePersonalLoan from "../../Components/ComparePersonalLoan/ComparePersonalLoan";
import CompareLoanAgainstProp from "../../Components/CompareLoanAgainstProp/CompareLoanAgainstProp";
import HomeLoan from "../../Components/HomeLoan/HomeLoan";
import PersonalLoan from "../../Components/PerosnalLoan/PersonalLoan";
import LoanAgainstProperty from "../../Components/LoanAgainstProp/LoanAgainstProp";

export default function Loans({ type }) {
  console.log(type);
  return (
    <>
      {type === "home-loan" ? (
        <HomeLoan />
      ) : type === "compare-home-loan" ? (
        <CompareHomeLoan />
      ) : type === "compare-personal-loan" ? (
        <ComparePersonalLoan />
      ) : type === "compare-loan-against-property" ? (
        <CompareLoanAgainstProp />
      ) : type === "car" ? (
        <CarLoan />
      ) : type === "personal-loan" ? (
        <PersonalLoan />
      ) : type === "loan-against-property" ? (
        <LoanAgainstProperty />
      ) : (
        "Loans"
      )}
    </>
  );
}
