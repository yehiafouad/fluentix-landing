import "./App.css";
import "antd/dist/reset.css";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import HomePage from "./pages/home";
import FooterSection from "components/landing-page-components/common/footer";

function App() {
  return (
    <div>
      <Routes>
        <Route path={routes.home} element={<HomePage />} />
      </Routes>
      <FooterSection />
    </div>
  );
}

export default App;
