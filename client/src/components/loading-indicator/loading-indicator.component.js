import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import { Dna } from "react-loader-spinner";

const LoadingIndicator = (props) => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    promiseInProgress && (
      <div
        style={{
          width: "100%",
          height: "100",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Dna visible={true} height="100" width="100" />
      </div>
    )
  );
};

export default LoadingIndicator;
