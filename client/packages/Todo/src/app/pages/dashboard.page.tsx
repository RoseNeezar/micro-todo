import * as React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC<{ parentNavigation: any }> = () => {
  let navigate = useNavigate();
  return (
    <div
      style={{
        backgroundColor: "blueviolet",
        height: "100vh",
        width: "100vw",
      }}
    >
      <h1> XP Dashboard </h1>
      <div className="flex flex-col items-center justify-center w-full">
        <button
          className="w-32 h-16 mb-3 text-white bg-red-500 rounded-lg"
          onClick={() => navigate("/")}
        >
          back home
        </button>
        {/* <button
          className="w-32 h-16 text-white bg-red-500 rounded-lg"
          onClick={() => parentNavigation("/")}
        >
          back to root app
        </button> */}
      </div>
    </div>
  );
};

export default Dashboard;
