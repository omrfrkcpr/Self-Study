import "./App.css";
import Counter from "./components/counter/Counter";
import ErrorBoundary from "./components/ErrorBoundary";
import Todo from "./components/todo/Todo";

function App() {
  return (
    <div className="app">
      <ErrorBoundary>
      <Counter />
      <Todo />
      </ErrorBoundary>
    </div>
  );
}

export default App;