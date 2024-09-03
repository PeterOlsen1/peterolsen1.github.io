import React from "react";

//animate individual letters of the title?
const Title = ({ text }) => {
    const letters = text.split("");

    return (
        <div className="title">
            {letters.map((letter, idx) => (
                <span 
                    key={idx}
                    className="title-letter" 
                    style={{animationDelay: `${0.1 + idx * 0.05}s`}}>
                    {letter}
                </span> 
            ))}
        </div>
    )
}

export default Title;