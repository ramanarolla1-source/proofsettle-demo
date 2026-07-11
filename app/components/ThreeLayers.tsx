export default function ThreeLayers() {
  return (
    <section className="container section">

      <h2 className="section-title">
        ProofSettle: Three Layers of Trusted Prediction & Settlement
      </h2>

      <p className="section-subtitle">
        ProofSettle connects verified sports intelligence with trustless
        settlement through three complementary layers.
      </p>

      <div className="layers" style={{ marginTop: "50px" }}>

        <div className="layer-box">
          <h3>Layer 1</h3>
          <h2>TxLINE</h2>
          <p>Verified Sports Intelligence</p>
        </div>

        <div className="arrow">↓</div>

        <div className="layer-box">
          <h3>Layer 2</h3>
          <h2>ProofSettle</h2>
          <p>Transparent Decision Intelligence</p>
        </div>

        <div className="arrow">↓</div>

        <div className="layer-box">
          <h3>Layer 3</h3>
          <h2>Solana</h2>
          <p>Trustless Settlement</p>
        </div>

      </div>

    </section>
  );
}
