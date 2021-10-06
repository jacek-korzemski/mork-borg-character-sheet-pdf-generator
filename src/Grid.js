import React from "react";
import styled from "styled-components";

const GridWrapper = styled.div`
  margin: 8px 4px;
  padding: 16px;
  min-width: 750px;
  max-width: 750px;
  min-height: 1080px;
  max-height: 1080px;
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 30px 30px;
  grid-template-areas:
    ". ."
    ". .";
  width: 100%;
  height: 100%;
`;

const Grid = (props) => {
  return <GridWrapper>{props.children}</GridWrapper>;
};

export default Grid;
