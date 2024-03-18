const QuestionModal = ({ modalData, closeQuestion }) => {
  return (
    <div className="absolute inset-0 z-10 grid place-items-center w-[100vw] h-[100vh] bg-[#0000009c]">
      <div className="h-[500px] w-[500px] bg-gray-400 rounded-lg">
        <div className="flex justify-between p-5 text-black font-bold text-xl">
          <h2 className="text-2xl">Soru:</h2>
          <button onClick={closeQuestion}>X</button>
        </div>
        <div className="p-3 text-lg text-black font-bold flex flex-col items-center gap-3 h-[500px]">
          <h2 className="capitalize">Soru Sahibi: {modalData.author}</h2>
          <h2 className="capitalize">
            {modalData.class}.Sınıf {modalData.lesson} dersi {modalData.subject}{" "}
            konusu
          </h2>
          <h2>Soru İçeriği</h2>
          <p className="font-normal self-start mt-10 indent-10">
            {modalData.question}
          </p>
          <button className="border w-full rounded-lg  bg-red-300 text-xl">
            Soruya cevap yaz
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionModal;
