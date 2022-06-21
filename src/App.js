import React from "react";
import Content from "./content/content";

class App extends React.Component {
  render() {
    return (
      <div className="p-3 mb-2 bg-warning text-dark">
        <h1 className="text-center">Bukan Berita Hoaks</h1>
        <Content />
      </div>
    );
  }
}

export default App;
