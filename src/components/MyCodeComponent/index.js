import { CopyBlock } from "react-code-blocks";

function MyCodeComponent(props) {
    return (
        <CopyBlock
            text={props.code}
            language={props.language}
            showLineNumbers={props.showLineNumbers}
            wrapLines
        />
    );
}
export default MyCodeComponent;