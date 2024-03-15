const Input = ({ title, type, id, area }) => {
  return (
    <div className="flex items-center gap-3 w-full  ">
      <label className="text-nowrap text-xl" htmlFor={id}>
        {title}
      </label>
      {!area ? (
        <input
          className="w-full rounded-lg px-5 py-1 text-black text-xl"
          type={type}
          id={id}
          name={id}
        />
      ) : (
        <textarea
          className="w-full rounded-lg px-5 py-1 text-black text-xl"
          type={type}
          id={id}
          name={id}
        />
      )}
    </div>
  );
};

export default Input;
