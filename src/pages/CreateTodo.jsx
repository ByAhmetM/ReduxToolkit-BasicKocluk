import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { inputData } from "../constant";
import { v4 } from "uuid";
import { useDispatch } from "react-redux";
import { addData } from "../redux/dataSlice";
import axios from "axios";

const CreateTodo = ({ setFormVeri }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const newQuestion = Object.fromEntries(form.entries());

    newQuestion.id = v4();

    newQuestion.date = new Date().toLocaleDateString();

    axios
      .post("http://localhost:3000/data", newQuestion)
      .then(() => dispatch(addData(newQuestion)))
      .catch((error) => console.log(error));

    navigate("/list");
  };

  const handleClick = () => {};

  return (
    <div className="flex flex-col gap-7 mt-10 items-center">
      <h2 className="text-3xl font-bold">Todo Oluştur!</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-5"
        id="form"
      >
        {inputData.map((input, i) => (
          <Input
            key={i}
            area={input.area}
            title={input.title}
            id={input.id}
            type={input.type}
          />
        ))}

        <button
          onClick={handleClick}
          className="px-7 py-2 bg-blue-400 rounded-lg text-lg font-bold"
          type="submit"
        >
          Gönder
        </button>
      </form>
    </div>
  );
};

export default CreateTodo;
