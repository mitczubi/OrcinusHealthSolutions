import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import { MutatingDots } from "react-loader-spinner";

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
        <MutatingDots
          height="100"
          width="100"
          color="#9d8da5"
          radius="12.5"
          ariaLabel="dots-loading"
        />
      </div>
    )
  );
};

export default LoadingIndicator;
