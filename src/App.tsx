import { Routes, Route } from "react-router-dom";

import HomeLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import NotFound from "./pages/view/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route 
            index 
            element={<Home />} 
            handle={{ pageName: "Home" }}
          />
          <Route 
            path="*" 
            element={<NotFound />} 
            handle={{ pageName: "Not Found" }}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
