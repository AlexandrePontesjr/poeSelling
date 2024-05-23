import React from "react";
import ReactGA from "react-ga4";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import { AuthProvider } from "./backend/contexts/auth.jsx";
import { GameDetails } from "./constants";
import "./index.css";
import {
  ProductLayout,
  QALayout,
  ServiceLayout,
  TestimonialsLayout,
} from "./layouts";
import LoginAdmin from "./layouts/LoginAdmin.jsx";

export default function Main() {
  // Configurando o ReactGA para inicialização
  // ReactGA.initialize("G-1RJ0VMBQS3");

  ReactGA.initialize("G-M2DYTTP2CN", {
    gaOptions: {
      debug_mode: false,
    },
    gtagOptions: {
      debug_mode: false,
    },
  });

  // Função para enviar eventos com logs de depuração
  const sendEventWithDebugLog = (eventCategory, eventName, debugMessage) => {
    const event = {
      event_category: eventCategory,
      event_label: eventName,
      debug: debugMessage, // Incluindo um campo 'debug' com mensagem de depuração
    };

    ReactGA.event(event);
    // console.log(`Sending GA event: ${eventName}, Debug Message: ${debugMessage}`);
  };

  sendEventWithDebugLog('Test Event', 'Page Load', 'This is a test debug message');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App game={GameDetails.diablo} />} />
        <Route
          path="/path-of-exile"
          element={<App game={GameDetails.pathOfExile} />}
        />
        <Route path="/diablo-4" element={<App game={GameDetails.diablo} />} />
        <Route
          path="/last-epoch"
          element={<App game={GameDetails.lastEpoch} />}
        />
        <Route path="admin" element={<LoginAdmin />} />
        <Route path="admin/products" element={<ProductLayout />} />
        <Route path="admin/testimonials" element={<TestimonialsLayout />} />
        <Route path="admin/services" element={<ServiceLayout />} />
        <Route path="admin/qas" element={<QALayout />} />
        {/* <Route path="cart" element={<Cart />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Main />
    </AuthProvider>
  </React.StrictMode>
);