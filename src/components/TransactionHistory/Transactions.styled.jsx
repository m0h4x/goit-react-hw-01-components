import styled from '@emotion/styled';

export const Table = styled.table`
  width: calc(100% / 3);
  width: 900px;
  margin-left: auto;
  margin-right: auto;
  border-spacing: 0;
  border-collapse: collapse;
  border-radius: 5px;
  background-color:  #fff;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 1), -23px 0 20px -23px rgba(0, 0, 0, 0.8),
    23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1) inset;
`;

export const TableHead = styled.thead`
 background-color: rgb(5, 230, 230);
  th {
    width: calc(100% / 3);
  }
`;

export const TableHeading = styled.th`
  padding: 10px;
  text-transform: uppercase;
  color: #fff;
`;

export const TableBody = styled.tbody`
  text-align: center;
  text-transform: capitalize;
`;

export const TableData = styled.td`
  padding: 8px;
  border: 1px solid #ccc;
`;

export const TableRowHead = styled.tr`
  th {
    border-color: #fff;
  }
`;

export const TableRowBody = styled.tr`
  td {
    border-color: #fff;
  }
`;
