import React from "react";
import "./BorderLine.scss";

const BorderLine = (props) => {
    return (
        <div className="borderLineContainer"
            style={{
                maxWidth: `${props.maxWidth}`,
                backgroundColor: `${props.color}`,
                marginTop: `${props.marginTop}`,
                marginBottom: `${props.marginBottom}`
            }}></div>
    )
}

export default BorderLine;