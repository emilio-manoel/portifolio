import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layout/RootLayout";
import InitialPage from "./pages/InitialPage";


export const router = createBrowserRouter(
  [
    {
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <InitialPage />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);
