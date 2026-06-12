import { useState } from 'react'
import './styles/App.css'

// TEMPORARY TEST VERSION - to confirm React is working
function App() {
  return (
    <div style={{ 
      minHeight: "100vh", 
      backgroundColor: "#0a0a0a", 
      color: "#f4f4f4",
      padding: "40px",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{ fontSize: "3rem", color: "#d4af37", marginBottom: "20px" }}>
        ✅ MLU Poultry Farm - React is Working!
      </h1>
      <p style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
        🐔 If you see this, your React setup is fine.
      </p>
      <p style={{ fontSize: "1.2rem", color: "#b8b8b8" }}>
        The black screen was likely caused by a missing video, image, or component error.
      </p>
      <div style={{ marginTop: "30px", padding: "20px", backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "10px" }}>
        <h2 style={{ color: "#d4af37" }}>Next Step:</h2>
        <p>Check your browser console (F12) for any errors.</p>
        <p>Then we'll add components back one by one.</p>
      </div>
    </div>
  )
}

export default App
