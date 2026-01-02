// src/components/Sidebar.jsx
const Sidebar = ({ name, age, onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        right: 0,
        top: 0,
        width: "250px",
        height: "100vh",
        backgroundColor: "#f3f4f6",
        borderLeft: "1px solid #ddd",
        padding: "20px",
        boxShadow: "-2px 0 10px rgba(0,0,0,0.1)",
        zIndex: 1000
      }}
    >
      <h2>Info Tambahan</h2>
      <p>Nama: {name}</p>
      <p>Umur: {age} tahun</p>
      <p>Tahun lahir: 1998</p>

      
      <button
        onClick={onClose} 
        style={{
          marginTop: "20px",
          padding: "6px 12px",
          background: "none",
          border: "none",
          color: "inherit",
          cursor: "pointer",
          textDecoration: "underline"
        }}
      >
        Tutup Sidebar
      </button>
    </div>
  );
};

export default Sidebar;