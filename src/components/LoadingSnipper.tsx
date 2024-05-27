import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/BeatLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

function LoadingSnipper() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#8568F5");

  return (
    <div
      className="sweet-loading "
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={17}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default LoadingSnipper;
