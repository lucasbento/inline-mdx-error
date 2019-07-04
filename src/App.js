import React, { Component } from "react";
import { inline } from "inline-mdx.macro";
import { MDXTag } from "@mdx-js/tag";

const SomeMDXComponent = inline`

## This is some MDX source

~~strikethrough~~
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <SomeMDXComponent />
      </div>
    );
  }
}

export default App;