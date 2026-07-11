"use client";

interface DecisionModalProps {
  isOpen: boolean;
  onClose: () => void;
  receipt: any;
}

export default function DecisionModal({
  isOpen,
  onClose,
  receipt,
}: DecisionModalProps) {
  if (!isOpen) return null;

  return (
    <div
      style={overlayStyle}
      onClick={onClose}
    >
      <div
        style={modalStyle}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={headerStyle}>
          <h2>Decision Receipt</h2>

          <button
            style={closeButton}
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <p style={{ color: "#94a3b8", marginBottom: 20 }}>
          Complete Decision Journey
        </p>

        <pre style={preStyle}>
          {JSON.stringify(receipt, null, 2)}
        </pre>
      </div>
    </div>
  );
}

const overlayStyle: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.75)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalStyle: React.CSSProperties = {
  width: "90%",
  maxWidth: "850px",
  maxHeight: "85vh",
  overflowY: "auto",
  background: "#0f172a",
  color: "#fff",
  borderRadius: "14px",
  padding: "30px",
  border: "1px solid #334155",
};

const headerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
};

const closeButton: React.CSSProperties = {
  background: "transparent",
  color: "#fff",
  border: "none",
  fontSize: "22px",
  cursor: "pointer",
};

const preStyle: React.CSSProperties = {
  background: "#020617",
  color: "#38bdf8",
  padding: "20px",
  borderRadius: "10px",
  overflowX: "auto",
  fontSize: "14px",
  lineHeight: "1.6",
};
