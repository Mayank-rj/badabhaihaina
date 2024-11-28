import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./Pages/Error/ErrorPage.jsx";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Policy from "./Pages/Policy/Policy.jsx";
import Terms from "./Pages/Terms/Terms.jsx";
import Loans from "./Pages/Loans/Loans.jsx";
import Insurance from "./Pages/Insurance/Insurance.jsx";
import Help from "./Pages/Help/Help.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home-loan",
        element: <Loans type="home-loan" />,
      },
      {
        path: "compare-home-loan-rate",
        element: <Loans type="compare-home-loan" />,
      },
      {
        path: "personal-loan",
        element: <Loans type="personal-loan" />,
      },
      {
        path: "compare-personal-loan-rate",
        element: <Loans type="compare-personal-loan" />,
      },
      {
        path: "unsecured-business-loan",
        element: <Loans type="unsecured-business" />,
      },
      {
        path: "term-loan",
        element: <Loans type="term" />,
      },
      {
        path: "working-capital",
        element: <Loans type="working-capital" />,
      },
      {
        path: "msme-loan",
        element: <Loans type="msme" />,
      },
      {
        path: "loan-against-property",
        element: <Loans type="loan-against-property" />,
      },
      {
        path: "compare-loan-against-property-rate",
        element: <Loans type="compare-loan-against-property" />,
      },
      {
        path: "insurance",
        element: <Insurance />,
      },
      {
        path: "term-life-insurance",
        element: <Insurance type="term-life" />,
      },
      {
        path: "car-insurance",
        element: <Insurance type="car" />,
      },
      {
        path: "health-insurance",
        element: <Insurance type="health" />,
      },
      {
        path: "two-wheeler-insurance",
        element: <Insurance type="two-wheeler" />,
      },
      {
        path: "travel-insurance",
        element: <Insurance type="travel" />,
      },
      {
        path: "home-insurance",
        element: <Insurance type="home" />,
      },
      {
        path: "stock-insurance",
        element: <Insurance type="stock-insurance" />,
      },
      {
        path: "Corporate-insurance",
        element: <Insurance type="Corporate-insurance" />,
      },
      {
        path: "flexi-od",
        element: <Loans type="flexi-od" />,
      },
      {
        path: "car-loan",
        element: <Loans type="car" />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "privacy-policy",
        element: <Policy />,
      },
      {
        path: "terms-and-conditions",
        element: <Terms />,
      },
      {
        path: "help",
        element: <Help />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
