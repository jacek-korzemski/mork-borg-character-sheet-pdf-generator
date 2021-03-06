import styled from "styled-components";

const ButtonSelect = styled.div`
    width: 23%;
    text-align: center;
    padding: 2px 4px;
    font-size: 14px;
    color: ${(props) => (props.selected ? "white" : "orange")};
    background: ${(props) => (props.selected ? "green" : "white")};
    border: ${(props) => (props.selected ? "1px solid black" : "1px solid orange")};
    margin-bottom: -1px;
    margin-right: -1px;
    cursor: pointer;
    &:hover {
        opacity: 0.75;
    }
`;

export default ButtonSelect;
