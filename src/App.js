import React from "react";

//components
import Steps from "./components/Steps";

import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.container}>
      <Steps />
    </div>
  );
}
