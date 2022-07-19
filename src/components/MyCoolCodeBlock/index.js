import { CodeBlock,dracula } from "react-code-blocks";

function MyCoolCodeBlock({ code, language, showLineNumbers }) {
    return (
      <CodeBlock
        text={code}
        language={language}
        showLineNumbers={showLineNumbers}
        theme={dracula}
      />
    );
  }
  export default MyCoolCodeBlock;