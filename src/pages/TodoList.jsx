import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchData, { deleteData } from "../redux/dataActions";
import Loading from "./../components/Loading";
import EditModal from "./../components/EditModal";
import QuestionModal from "./../components/QuestionModal";

const TodoList = () => {
  const [modalData, setModalData] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenQuestion, setIsOpenQuestion] = useState(false);

  const data = useSelector((state) => state.data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const close = () => {
    setIsEdit(false);
  };

  const closeQuestion = () => {
    setIsOpenQuestion(false);
  };

  return (
    <div className="grid place-items-center mt-10">
      <table className="bg-pink-700 w-[800px] ">
        <thead>
          <tr>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3  font-bold text-black sm:pl-0"
            >
              Yazan
            </th>
            <th scope="col" className="px-3 py-3.5   font-bold text-blue-500">
              Sınıf
            </th>
            <th scope="col" className="px-3 py-3.5  font-bold text-orange-500">
              Ders
            </th>
            <th scope="col" className="px-3 py-3.5   font-bold text-gray-900">
              Konu
            </th>
            <th scope="col" className="px-3 py-3.5   font-bold text-yellow-400">
              Soru Metni
            </th>
            <th scope="col" className="px-3 py-3.5   font-bold text-yellow-400">
              Düzenle
            </th>
          </tr>
        </thead>
        <tbody className="bg-white p-5">
          {data?.loading ? (
            <Loading />
          ) : (
            data?.data?.map((veri) => (
              <tr key={veri.id}>
                <td className="whitespace-nowrap capitalize text-center text-sm font-medium text-gray-900 sm:pl-0">
                  {veri.author}
                </td>
                <td className="whitespace-nowrap text-center text-sm text-black">
                  {veri.class}
                </td>
                <td className="whitespace-nowrap capitalize text-center text-sm text-black">
                  {veri.lesson}
                </td>
                <td className="whitespace-nowrap capitalize text-center text-sm text-black">
                  {veri.subject}
                </td>
                <td className="whitespace-nowrap text-center text-black  text-sm font-medium sm:pr-0">
                  <button
                    onClick={() => {
                      setModalData(veri), setIsOpenQuestion(true);
                    }}
                  >
                    <span class="box">Soruyu Gör!</span>
                  </button>
                </td>

                {isEdit && (
                  <EditModal modalData={modalData} close={close} veri={veri} />
                )}

                {isOpenQuestion && (
                  <QuestionModal
                    modalData={modalData}
                    closeQuestion={closeQuestion}
                  />
                )}

                <td className="flex gap-2 items-center justify-center py-4 pl-3 pr-4 text-black text-center  text-sm font-medium sm:pr-0">
                  <button
                    onClick={() => {
                      setModalData(veri), setIsEdit(true);
                    }}
                    class="edit-button"
                  >
                    <svg class="edit-svgIcon" viewBox="0 0 512 512">
                      <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                    </svg>
                  </button>
                  <button
                    onClick={() => dispatch(deleteData(veri.id))}
                    class="Btn"
                  >
                    <div class="sign">
                      <svg
                        viewBox="0 0 16 16"
                        class="bi bi-trash3-fill"
                        fill="currentColor"
                        height="18"
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"></path>
                      </svg>
                    </div>

                    <div class="text">Sil</div>
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
