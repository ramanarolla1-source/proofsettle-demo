export default function Architecture() {
  return (
    <section className="container section">

      <h2 className="section-title">
        ProofSettle Architecture
      </h2>

      <p className="section-subtitle">
        ProofSettle strengthens prediction and settlement through three
        complementary layers. TxLINE provides verified sports intelligence,
        ProofSettle transforms it into transparent operational decisions, and
        Solana executes trustless on-chain settlement.
      </p>

      <br />
      <br />

      <div className="layers">

        <div className="layer-box">
          <h3>Layer 1</h3>

          <h2>TxLINE</h2>

          <p>
            Verified Sports Intelligence
          </p>

          <br />

          <ul>
            <li>Historical Sports Data</li>
            <li>Live SSE Streams</li>
            <li>Consensus Odds</li>
            <li>Machine Readable Schema</li>
            <li>Merkle Proof Verification</li>
            <li>validate_stat</li>
          </ul>
        </div>

        <div className="arrow">
          ↓
        </div>

        <div className="layer-box">

          <h3>Layer 2</h3>

          <h2>ProofSettle</h2>

          <p>
            Transparent Decision Intelligence
          </p>

          <br />

          <ul>
            <li>Decision Intelligence</li>
            <li>Business Rules</li>
            <li>Smart Contract Evaluation</li>
            <li>Decision Validation</li>
            <li>Decision Artifact</li>
            <li>Merkle Tree</li>
          </ul>

        </div>

        <div className="arrow">
          ↓
        </div>

        <div className="layer-box">

          <h3>Layer 3</h3>

          <h2>Solana</h2>

          <p>
            Trustless Settlement
          </p>

          <br />

          <ul>
            <li>Settlement Authorization</li>
            <li>On-chain Execution</li>
            <li>Immutable Settlement</li>
            <li>Transaction Record</li>
          </ul>

        </div>

      </div>

    </section>
  );
}
