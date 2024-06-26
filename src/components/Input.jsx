const Input = ({ title, type, id, area, veri }) => {
  return (
    <div className="grid grid-cols-2 gap-10	 items-center  w-full  ">
      <label className="text-nowrap text-xl justify-self-end " htmlFor={id}>
        {title}
      </label>
      {!area ? (
        <input
          className="w-full rounded-lg px-5 py-1 text-black text-xl"
          type={type}
          id={id}
          name={id}
          defaultValue={veri ? veri[id] : ""}
        />
      ) : (
        <textarea
          className="w-full rounded-lg px-5 py-1 text-black text-xl"
          type={type}
          id={id}
          name={id}
          defaultValue={veri ? veri[id] : ""}
        />
      )}
    </div>
  );
};

export default Input;
