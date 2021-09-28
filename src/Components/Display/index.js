import { useSelector } from "react-redux";
import "./styles.css";

const Display = () => {
  const name = useSelector((state) => state.user);

  return (
    <div className="nameBox">
      <h1>Nome: {name.name}</h1>
    </div>
  );
};

export default Display;
