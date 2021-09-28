import { useSelector } from "react-redux";

const Display = () => {
  const name = useSelector((state) => state.user);

  return (
    <div>
      <h1>{name.name}</h1>
    </div>
  );
};

export default Display;
