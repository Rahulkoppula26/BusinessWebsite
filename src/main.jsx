import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FooterSection from './Components/FooterSection.jsx';
import BodyContent from './Components/BodyContent.jsx';
import CartPage from './Components/CartPage.jsx';
import FavoritesPage from './Components/FavoritesPage.jsx';
import PaymentPage from './Components/PaymentPage.jsx';
import ProductDetail from './Components/ProductDetail.jsx';
import AccessoriesDetail from './Components/AccessoriesDetail.jsx';
import TermsConditions from './Components/TermsConditions.jsx';
import PrivacyPolicy from './Components/PrivacyPolicy.jsx';
import RefundPolicy from './Components/RefundPolicy.jsx';
import ErrorBoundary from './Components/ErrorBoundary.jsx';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <BodyContent />
      },
      {
        path: "cart",
        element: <CartPage />
      },
      {
        path: "favorites",
        element: <FavoritesPage />
      },
      {
        path: "payment",
        element: <PaymentPage />
      },
      {
        path: "product/:id",
        element: <ProductDetail />
      },
      {
        path: "accessory/:id",
        element: <AccessoriesDetail />
      },
      {
        path: "footer-section",
        element: <FooterSection />
      },
      {
        path: "terms-conditions",
        element: <TermsConditions />
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />
      },
      {
        path: "refund-policy",
        element: <RefundPolicy />
      }
    ],
  }
], {
  basename: import.meta.env.MODE === 'production' ? '/BusinessWebsite/' : undefined
});

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
