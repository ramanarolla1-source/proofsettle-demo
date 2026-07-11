export default function ProcessTimeline() {
  const steps = [
    {
      title: "Verified Sports Intelligence",
      description:
        "TxLINE continuously provides trusted historical data, live SSE match events, consensus odds, standardized machine-readable schemas, cryptographic proofs and validated statistics.",
    },
    {
      title: "Decision Intelligence",
      description:
        "ProofSettle transforms verified sports intelligence into deterministic operational decisions using transparent business logic.",
    },
    {
      title: "Smart Contract Rule Evaluation",
      description:
        "Business rules evaluate every prediction condition and authorize only valid settlement outcomes.",
    },
    {
      title: "Decision Validation",
      description:
        "Every operational decision is verified before settlement authorization, ensuring deterministic and reproducible outcomes.",
    },
    {
      title: "Decision Artifact",
      description:
        "A mathematically verifiable Decision Artifact is generated, preserving the exact operational state before settlement.",
    },
    {
      title: "Cryptographic Merkle Tree",
      description:
        "Decision Artifacts are organized into a Merkle Tree, making every decision tamper-evident and independently verifiable.",
    },
    {
      title: "Settlement Authorization",
      description:
        "Only validated decisions are authorized for settlement.",
    },
    {
      title: "Trustless Solana Settlement",
      description:
        "Solana executes immutable on-chain settlement through deterministic smart contract execution.",
    },
    {
      title: "Trust Receipt",
      description:
        "The complete decision journey becomes visible through a Trust Receipt, allowing anyone to understand, inspect and verify how the decision was reached.",
    },
  ];

  return (
    <section className="container section">
      <h2 className="section-title">
        Inside ProofSettle
      </h2>

      <p className="section-subtitle">
        Every prediction follows a transparent engineering journey before
        settlement is authorized.
      </p>

      <div className="timeline" style={{ marginTop: "50px" }}>
        {steps.map((step, index) => (
          <div
            key={index}
            className="timeline-item"
          >
            <h3>
              Step {index + 1} — {step.title}
            </h3>

            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
