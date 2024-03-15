import CreateTodo from "./pages/CreateTodo";
import TodoList from "./pages/TodoList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/add" element={<CreateTodo />} />
        <Route path="/list" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
