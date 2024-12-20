import CarLoan from "../../Components/CarLoan/CarLoan";
import CompareHomeLoan from "../../Components/CompareHomeLoan/CompareHomeLoan";
import ComparePersonalLoan from "../../Components/ComparePersonalLoan/ComparePersonalLoan";
import CompareLoanAgainstProp from "../../Components/CompareLoanAgainstProp/CompareLoanAgainstProp";
import HomeLoan from "../../Components/HomeLoan/HomeLoan";
import PersonalLoan from "../../Components/PerosnalLoan/PersonalLoan";
import LoanAgainstProperty from "../../Components/LoanAgainstProp/LoanAgainstProp";
import TermLoan from "../../Components/TermLoan/TermLoan";
import FlexiOD from "../../Components/FlexiOD/FlexiOD";
import WorkingCapital from "../../Components/WorkingCapital/WorkingCapital";
import MsmeLoan from "../../Components/MSMELoan/MsmeLoan";

export default function Loans({ type }) {
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
      ) : type === "working-capital" ? (
        <WorkingCapital />
      ) : type === "msme" ? (
        <MsmeLoan />
      ) : type === "compare-loan-against-property" ? (
        <CompareLoanAgainstProp />
      ) : type === "loan-against-property" ? (
        <LoanAgainstProperty />
      ) : type === "car" ? (
        <CarLoan />
      ) : type === "flexi-od" ? (
        <FlexiOD />
      ) : (
        "Loans"
      )}
    </>
  );
}
