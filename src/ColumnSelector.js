import { useGridContext, useGridContextDispatch } from "./GridContext";

export default function ColumnSelector({ onColumnChange }) {
  const context = useGridContext();
  const dispatch = useGridContextDispatch();

  const addColumn = (name) => {
    dispatch({
      type: "add_column",
      name: name
    });
  };

  const removeColumn = (name) => {
    dispatch({
      type: "remove_column",
      name: name
    });
  };

  const columnList = context.columns.map((column) => (
    <li key={column + "01"}>
      {column}:<button onClick={(e) => addColumn(column)}>✔</button>|
      <button onClick={(e) => removeColumn(column)}>x</button>
    </li>
  ));

  return (
    <div>
      Column Selector
      <ol>{columnList}</ol>
    </div>
  );
}
