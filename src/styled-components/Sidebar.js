import styled from 'styled-components';

const Sidebar = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 300px;
    height: 100vh;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    background: white;
    transition: all 0.3s;
    transform: ${props => props.open ? 'translateX(0)' : 'translateX(-301px)'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    h1, h2, h3 {
        margin: 0;
    }
`;

export default Sidebar;