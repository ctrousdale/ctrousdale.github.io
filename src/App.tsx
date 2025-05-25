import * as React from "react";
import { Button } from "./components/ui/button";
import PageBackground from "./components/PageBackground";
import PageNavMenu from "./components/PageNavMenu";

function App() {
  return (
    <PageBackground>
      <PageNavMenu />
      <article className="flex items-center flex-col">
        <h2 className="text-4xl">Chandler Trousdale</h2>
        <p>Full-Stack Software Engineer</p>
        <p>Ex-Microsoft</p>
      </article>
    </PageBackground>
  );
}

export default App;
