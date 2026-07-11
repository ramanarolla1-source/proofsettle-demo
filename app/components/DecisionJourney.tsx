export default function DecisionJourney() {
  const steps = [
    "Verified Sports Intelligence",
    "Standardized Machine Readable Schema",
    "Decision Intelligence",
    "Smart Contract Rule Evaluation",
    "Decision Validation",
    "Decision Artifact",
    "Cryptographic Merkle Tree",
    "Settlement Authorization",
    "Trustless Solana Settlement",
    "Trust Receipt"
  ];

  return (
    <section className="container section">

      <h2 className="section-title">
        Decision Journey
      </h2>

      <div className="timeline">

        {steps.map((step, index) => (

          <div
            key={index}
            className="timeline-item"
          >
            <h4>
              Step {index + 1}
            </h4>

            <p>{step}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

 
