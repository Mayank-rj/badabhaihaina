import CarLoan from "../../Components/CarLoan/CarLoan";
import CompareHomeLoan from "../../Components/CompareHomeLoan/CompareHomeLoan";
import ComparePersonalLoan from "../../Components/ComparePersonalLoan/ComparePersonalLoan";
import CompareLoanAgainstProp from "../../Components/CompareLoanAgainstProp/CompareLoanAgainstProp";
import HomeLoan from "../../Components/HomeLoan/HomeLoan";
import PersonalLoan from "../../Components/PerosnalLoan/PersonalLoan";
import LoanAgainstProperty from "../../Components/LoanAgainstProp/LoanAgainstProp";
import TermLoan from "../../Components/TermLoan/TermLoan";

export default function Loans({ type }) {
  console.log(type);
  return (
    <>
      {type === "home-loan" ? (
        <HomeLoan />
      ) : type === "compare-home-loan" ? (
        <CompareHomeLoan />
      ) : type === "personal-loan" ? (
        <PersonalLoan />
      ) : type === "compare-personal-loan" ? (
        <ComparePersonalLoan />
      ) : type === "term-loan" ? (
        <TermLoan />
      ) : type === "compare-loan-against-property" ? (
        <CompareLoanAgainstProp />
      ) : type === "loan-against-property" ? (
        <LoanAgainstProperty />
      ) : type === "car" ? (
        <CarLoan />
      ) : (
        "Loans"
      )}
    </>
  );
}
