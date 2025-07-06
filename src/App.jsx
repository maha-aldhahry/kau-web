import React, { useState } from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import "./index.css";

import "@fontsource/cairo";
import "@fontsource/amiri";
import "@fontsource/tajawal";

function App() {
  const [hideImages, setHideImages] = useState(false);
  const [fontClass, setFontClass] = useState("font-cairo");

  return (
    <div className={`${hideImages ? "hide-images" : ""} ${fontClass}`}>
      {/* زر إخفاء الصور */}
      <button
        onClick={() => setHideImages(!hideImages)}
        style={{
          position: "fixed",
          top: "100px",
          left: "20px",
          zIndex: 2000,
          padding: "10px 20px",
          fontSize: "16px",
        }}
      >
        {hideImages ? "إظهار الصور" : "إخفاء الصور"}
      </button>

      {/* اختيار الخط */}
      <select
        onChange={(e) => setFontClass(e.target.value)}
        style={{
          position: "fixed",
          top: "160px",
          left: "20px",
          zIndex: 2000,
          padding: "10px",
        }}
      >
        <option value="font-cairo">Cairo</option>
        <option value="font-amiri">Amiri</option>
        <option value="font-tajawal">Tajawal</option>
      </select>

      <NavBar />
      <HeroSection />

      {/* محتوى إضافي لإطالة الصفحة */}
      <div style={{ height: "2000px", backgroundColor: "#f9f9f9" }}>
        <h2 style={{ padding: "2rem", textAlign: "center" }}>محتوى إضافي</h2>
        <p style={{ padding: "0 2rem", textAlign: "center" }}>
          هذا النص مضاف فقط لزيادة طول الصفحة حتى تتمكن من رؤية الناف بار وهو يتغير عند التمرير.
        </p>
      </div>
    </div>
  );
}

export default App;
