import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import localFont from "next/font/local";
import { persistor, store } from "@/Redux/ReduxPersistStore";
import Header from "@/Components/header/Header";
import Spinner from "@/Components/loading/Spinner";
import "../styles/globals.css";
import { useRouter } from "next/router";

const iranSansWeb = localFont({
  src: "../public/fonts/Vazirmatn-UI-FD-Regular.ttf",
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;
  const isAuthPage = pathname === "/login" || pathname === "/signup";
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
            {!isAuthPage && <Header />}
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      )}
    </div>
  );
}
