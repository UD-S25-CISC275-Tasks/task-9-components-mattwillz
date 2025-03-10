import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    return (
        <span>
            <Button
                onClick={() => {
                    setVisible(!visible);
                }}
            >
                Reveal Answer
            </Button>
            <div>{visible ? "42" : ""}</div>
        </span>
    );
}
