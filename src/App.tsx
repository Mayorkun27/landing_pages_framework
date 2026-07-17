import { Routes, Route } from "react-router-dom";

import HomeLayout from "./layout/MainLayout";
import NotFound from "./pages/view/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route 
            path="*" 
            element={<NotFound />} 
            handle={{ pageName: "Not Found" }}
          />
          {/* <Route 
            index 
            element={<Home />} 
            handle={{ pageName: "Home" }}
          /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
