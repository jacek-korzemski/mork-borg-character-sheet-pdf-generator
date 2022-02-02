import styled from 'styled-components'

const ButtonSelect = styled.div`
    width: 50%;
    text-align: center;
    padding: 8px;
    font-size: 16px;
    color: ${props => props.selected ? 'white' : 'orange'};
    background: ${props => props.selected ? 'green' : 'white'};
    border: ${props => props.selected ? '1px solid green' : '1px solid orange'};
    opacity: ${props => props.selected ? '1' : '0.5'};
    cursor: pointer;
    &:hover {
        opacity: 0.75;
    }
`;

export default ButtonSelect;