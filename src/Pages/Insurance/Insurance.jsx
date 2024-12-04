import FlexiOD from "../../Components/FlexiOD/FlexiOD";
import CarInsurance from "../../Components/Insurance/CarInsurance/CarInsurance";
import CorporateInsurance from "../../Components/Insurance/CorporateInsurance/CorporateInsurance";
import HealthInsurance from "../../Components/Insurance/HealthInsurance/HealthInsurance";
import HomeInsurance from "../../Components/Insurance/HomeInsurance/HomeInsurance";
import StockInsurance from "../../Components/Insurance/StockInsurance/StockInsurance";
import TermLifeInsurance from "../../Components/Insurance/TermLifeInsurance/TermLifeInsurance";
import TravelInsurance from "../../Components/Insurance/TravelInsurance/TravelInsurance";
import TwoWheelerInsurance from "../../Components/Insurance/TwoWheelerInsurance/TwoWheelerInsurance";

export default function Insurance({ type }) {
  return (
    <>
      {type === "term-life" ? (
        <TermLifeInsurance />
      ) : type === "car-insurance" ? (
        <CarInsurance />
      ) : type === "health-insurance" ? (
        <HealthInsurance />
      ) : type === "two-wheeler" ? (
        <TwoWheelerInsurance />
      ) : type === "travel-insurance" ? (
        <TravelInsurance />
      ) : type === "home-insurance" ? (
        <HomeInsurance />
      ) : type === "stock-insurance" ? (
        <StockInsurance />
      ) : type === "Corporate-insurance" ? (
        <CorporateInsurance />
      ) : (
        "Insurance"
      )}
    </>
  );
}
