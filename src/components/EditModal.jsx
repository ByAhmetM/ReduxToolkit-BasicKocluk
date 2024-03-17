import { useDispatch } from "react-redux";
import { inputData } from "../constant";
import Input from "./Input";
import axios from "axios";
import { updateData } from "../redux/dataSlice";

const EditModal = ({ close, veri, modalData }) => {
  console.log(modalData);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const newQuestion = Object.fromEntries(form.entries());
    const updated = { ...modalData, ...newQuestion };

    axios
      .patch(`http://localhost:3000/data/${updated.id}`, updated)
      .then(() => dispatch(updateData(updated)))
      .catch((error) => console.log(error));

    close();
  };

  return (
    <div className="absolute inset-0 z-10 grid place-items-center w-[100vw] h-[100vh] bg-[#0000009c]">
      <div className="bg-black w-[500px] rounded-lg h-[500px]">
        <div className="flex flex-col gap-7 mt-10 items-center z-10">
          <div className="flex items-center justify-between w-full px-5">
            <h2 className="text-3xl font-bold">Düzenle!</h2>
            <span onClick={close} className="font-bold  text-xl cursor-pointer">
              X
            </span>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-5"
            id="form"
          >
            {inputData.map((input, i) => (
              <Input
                veri={modalData}
                key={i}
                area={input.area}
                title={input.title}
                id={input.id}
                type={input.type}
              />
            ))}

            <div className="flex gap-3 items-center">
              <button
                onClick={close}
                className="px-7 py-2 bg-red-400 rounded-lg text-lg font-bold"
                type="button"
              >
                Vazgeç
              </button>

              <button
                className="px-7 py-2 bg-blue-400 rounded-lg text-lg font-bold"
                type="submit"
              >
                Gönder
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
