import "./styles.css";
import ColumnSelector from "./ColumnSelector";
import Filter from "./Filter";
import FilterBar from "./FilterBar";
import Grid from "./Grid";
import { GridProvider } from "./GridContext";

export default function App() {
  return (
    <div className="App">
      <GridProvider>
        <FilterBar />
        <Filter />
        <Grid />
        <ColumnSelector />
      </GridProvider>
    </div>
  );
}
