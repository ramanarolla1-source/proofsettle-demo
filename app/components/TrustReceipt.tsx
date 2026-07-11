"use client";

import { useState } from "react";
import receipt from "../../data/receipt.json";
import DecisionModal from "./DecisionModal";

export default function TrustReceipt() {
  const [open, setOpen] = useState(false);

  return (
    <section className="container section">
      <h2 className="section-title">Trust Receipt</h2>

      <p className="section-subtitle">
        Every completed decision produces a Trust Receipt that enables anyone to
        inspect, understand and verify the complete decision journey.
      </p>

      <div className="receipt" style={{ marginTop: "40px" }}>
        <div className="receipt-row">
          <span className="receipt-label">Decision ID</span>
          <span className="receipt-value">{receipt.decisionId}</span>
        </div>

        <div className="receipt-row">
          <span className="receipt-label">Match</span>
          <span className="receipt-value">
            {receipt.match.homeTeam} vs {receipt.match.awayTeam}
          </span>
        </div>

        <div className="receipt-row">
          <span className="receipt-label">Outcome</span>
          <span className="receipt-value">
            {receipt.predictionMarket.selectedOutcome}
          </span>
        </div>

        <div className="receipt-row">
          <span className="receipt-label">Settlement</span>
          <span className="receipt-value">
            {receipt.settlement.status}
          </span>
        </div>

        <br />

        <button
          className="primary-btn"
          onClick={() => setOpen(true)}
        >
          View Decision Receipt
        </button>
      </div>

      <DecisionModal
        isOpen={open}
        onClose={() => setOpen(false)}
        receipt={receipt}
      />
    </section>
  );
}
