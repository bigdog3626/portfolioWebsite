import React from "react";
import { RoughNotation } from "react-rough-notation";

export const RainBowHighlight = ({color, children}) => {
    const animationDuration=Math.floor(30*children.length);

    return (
        <RoughNotation
        type="highlight"
        multiline={true}
        paddind={[0,2]}
        iterations={1}
        animationDuration={animationDuration}
        color = {color}
        >
            {children}
        </RoughNotation>
    );


};