// Write your Character component here
import React from "react";
// import styled-components;
import styled from "styled-components";


const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%
    padding: 10px;
    text-align: center;
`;
const StyledNameBirth = styled.h2`
    border: 1px solid hsla(150, 83%, 25%, 0.841);
    color: white;
`

const Character = (props) => {
    // console.log(props);
    return (
        <StyledWrapper>
            <StyledNameBirth> {props.name} {props.birth_year}</StyledNameBirth>
        </StyledWrapper>
    )
}

export default Character
