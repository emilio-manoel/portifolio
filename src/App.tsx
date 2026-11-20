import { RouterProvider } from "react-router-dom";
import { router } from "./router";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-primary-bg text-text">
      <RouterProvider router={router} />
    </div>
  );
}
