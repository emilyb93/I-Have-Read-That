import React from "react";
import { PuffLoader } from "react-spinners";

const styles = {
  loader: {
    // border: "1px solid black",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
};

function Loading() {
  return (
    <div style={styles.loader}>
      <PuffLoader loading={true} />
    </div>
  );
}

export default Loading;
