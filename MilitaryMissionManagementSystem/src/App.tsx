import React from 'react';
import AddTask from "./components/AddTask"
import styles from "./App.module.css"

const App = () => {
  return (
    <div className={styles.app}>
      <AddTask />
    </div>
  )
}

export default App