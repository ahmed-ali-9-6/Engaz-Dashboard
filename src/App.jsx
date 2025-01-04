import { BrowserRouter, Route, Routes } from "react-router-dom";
import VerticalLayout from "./layouts/VerticalLayout";
import Dashboard from "./pages/Dashboard";
import SuccessCard from "./components/cards/SuccessCard";
import AllEmployees from "./pages/allEmployees/AllEmployees";

const dashboardRoutes = [
  { path: "/", component: <Dashboard /> },
  { path: "/all-employees", component: <AllEmployees /> },
  { path: "/1", component: <Dashboard /> },
  { path: "/2", component: <Dashboard /> },
  { path: "/3", component: <Dashboard /> },
  { path: "/4", component: <Dashboard /> },
  { path: "/5", component: <Dashboard /> },
  { path: "/6", component: <Dashboard /> },
  { path: "/7", component: <Dashboard /> },
  { path: "/8", component: <Dashboard /> },
  { path: "/9", component: <SuccessCard /> },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          {dashboardRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={<VerticalLayout>{route.component}</VerticalLayout>}
              key={idx}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
