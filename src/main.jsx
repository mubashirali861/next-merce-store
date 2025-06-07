import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";
import { ModalProvider } from "./app/context/QuickViewModalContext.jsx";
import { PreviewSliderProvider } from "./app/context/PreViewSliderContext.jsx";
import QuickViewModal from "./Component/common/QuickViewModal";
import CartSidebarModal from "./Component/common/CartSidebarModal/CartSidebarModal";
import PreviewSlider from "./Component/common/PreviewSlider";
import { CartModalProvider } from "./app/context/CartSideBarModalContext.jsx";
import Footer from "./Component/Footer/Footer.jsx";
import TopScroll from "./Component/common/TopScroll";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <CartModalProvider>
          <ModalProvider>
            <PreviewSliderProvider>
              <App />
              <QuickViewModal />
              <CartSidebarModal />
              <PreviewSlider />
            </PreviewSliderProvider>
          </ModalProvider>
        </CartModalProvider>
      </Provider>
      <TopScroll />
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
