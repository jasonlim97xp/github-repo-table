import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 1em;
  margin-bottom: 1em;
`;

export const StyledHead = styled.thead`
  position: sticky;
  z-index: 100;
`;

export const StyledHeadTR = styled.tr`
  background: rgb(245, 245, 245);
`;

export const StyledTH = styled.th`
  font-weight: normal;
  padding: 8px;
  color: ${({ theme }) => theme.text};
  text-transform: capitalize;
  font-weight: 600;
  font-size: 14px;
  width: 20%;
  :not(:last-of-type) {
    border-right: 1px solid rgb(237, 237, 237);
  }
`;

export const StyledBody = styled.tbody``;

export const StyledBodyTR = styled.tr`
  background: rgb(255, 255, 255);
`;

export const StyledTD = styled.td`
  padding: 8px;
  border: 1px solid rgb(237, 237, 237);
  font-size: 14px;
`;

export const StyledNone = styled.td.attrs({
  colSpan: 5,
})`
  width: 100%;
  padding: 8px;
  border: 1px solid rgb(237, 237, 237);
  font-size: 14px;
  flex: 1;
`;
