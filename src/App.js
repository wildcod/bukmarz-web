import React from 'react'
import HomePage from "./components/pages/home-page/HomePage";
import Layout from "./components/common/layout/Layout";

function App() {
  return (
    <div className="App">
        <Layout>
            <HomePage />
        </Layout>
    </div>
  );
}

export default App;
