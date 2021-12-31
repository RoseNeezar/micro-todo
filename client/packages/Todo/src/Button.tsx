import * as React from "react";

const Button: React.FC<{ value?: string; swap?: () => void }> = ({
  value,
  swap,
}) => (
  <button
    style={{
      backgroundColor: "green",
      borderRadius: 20,
      padding: 10,
      textAlign: "center",
      color: "wheat",
    }}
    onClick={() => (swap ? swap() : null)}
  >
    Props from Root App {value}
  </button>
);

export default Button;
