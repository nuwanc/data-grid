import { useGridContext } from "./GridContext";

export default function Gird() {
  const context = useGridContext();
  const columns = context.selectedColumns;
  const data = context.filtered;

  const th = columns.map((column) => <th key={column + "01"}>{column}</th>);

  const printTds = (record) => {
    const tds = [];
    const td = columns.map((column, index) => (
      <td key={column}>{record[column]}</td>
    ));
    tds.push(td);
    return tds;
  };

  const printTrs = () => {
    const trs = [];
    const tr = data.map((record) => (
      <tr key={record["id"]}>{printTds(record)}</tr>
    ));
    trs.push(tr);
    return trs;
  };

  return (
    <div>
      <table>
        <thead>
          <tr>{th}</tr>
        </thead>
        <tbody>{printTrs()}</tbody>
      </table>
    </div>
  );
}
