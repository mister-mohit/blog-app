import { Route, Routes } from "react-router-dom";
import PublicAuthorPage from "./components/PublicAuthorPage";
import PrivateAuthorPage from "./components/PrivateAuthorPage";

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<PublicAuthorPage />} />
      <Route path="/author" element={<PrivateAuthorPage />} />
    </Routes>
  );
}

export default App;
