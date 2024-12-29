import React, { useContext } from "react";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import LogIn from "./pages/LogIn/LogIn";
import AcademicAdvising from "./pages/AcademicAdvising/AcademicAdvising";
import AdvicePage from "./pages/AdvicePage/AdvicePage";
import AdminLogin from "./pages/LogIn/AdminLogin";
import AdminRegister from "./pages/SignIn/AdminRegister";
import Calculator from "./pages/Calculator/Calculator";
import CourseCatalog from "./pages/CourseCatalog/CourseCatalog";
import AboutUs from "./pages/AboutUs/AboutUs";
import { ThemeProvider, ThemeContext } from "./ThemeContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppContent = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<SignIn />} />
          <Route exact path="/login" element={<LogIn />} />
          <Route exact path="/seek-advice" element={<AcademicAdvising />} />
          <Route exact path="/advice" element={<AdvicePage />} />

          <Route exact path="/admin/login" element={<AdminLogin />} />
          <Route exact path="/admin/register" element={<AdminRegister />} />

          <Route exact path="/calculate-gpa" element={<Calculator />} />
          <Route exact path="/courses" element={<CourseCatalog />} />
          <Route exact path="/About" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;
