import App from "./App";
import AppLayout from "./layouts/AppLayout";
import NotFoundPage from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <App />},
      { path: "*", element: <NotFoundPage />}
    ]
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

export default routes;