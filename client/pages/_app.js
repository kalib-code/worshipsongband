import "./style.css";
import {QueryClientProvider, QueryClient} from "react-query";

const queryClient = new QueryClient();

export default function MyApp({
  Component: Component,
  pageProps: pageProps
}) {

  return (
  <>
  <QueryClientProvider client={queryClient}>
  <Component {...pageProps} />
  </QueryClientProvider>
  </>);
}
