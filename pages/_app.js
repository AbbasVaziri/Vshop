import Header from "@/Components/header/Header";
import "../styles/globals.css";
import Footer from "@/Components/footer/Footer";
import { Provider } from "react-redux";
import { store, persistor } from '@/Redux/ReduxPersistStore';
import { PersistGate } from "redux-persist/integration/react";
import { useEffect, useState } from "react";
import Spinner from "@/Components/loading/Spinner";
import localFont from "next/font/local";

const iranSansWeb = localFont({ src: "../public/fonts/Vazirmatn-UI-FD-Regular.ttf" });
export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className={iranSansWeb.className}>
      {loading ? (
        <Spinner />
      ) : (
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </PersistGate>
        </Provider>
      )}
    </div>
  );
}
