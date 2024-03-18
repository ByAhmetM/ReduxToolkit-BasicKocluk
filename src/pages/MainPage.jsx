import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <h1 className="text-3xl text-center my-5 font-bold text-red-500">
        Öğrenci Koçluk Sistemimize Hoşgeldiniz!
      </h1>

      <p className="text-center text-lg">
        Sitemiz yapım aşamasında olup soru etkinliğimiz için menü kısmını
        kullanabilirsiniz.
      </p>

      <div className="text-center mt-10">
        <Link
          to={"/list"}
          className="p-5 bg-blue-300 rounded-lg mx-3 font-bold text-black text-lg"
        >
          Sorular
        </Link>
        <Link
          to={"/add"}
          className="p-5 bg-orange-700 rounded-lg font-bold text-black text-lg"
        >
          Soru Ekle
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
