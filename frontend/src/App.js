import { BrowserRouter, Routes, Route } from "react-router-dom";
import  ResponsiveAppBar  from "./components/Utils/HeaderBar";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ResponsiveAppBar />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
