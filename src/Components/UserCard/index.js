import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeName } from "../../store/modules/user/actions";

const UserCard = () => {
  const dispatch = useDispatch();

  const [newName, setNewName] = useState("");

  const handleClick = () => {
    dispatch(changeName(newName));
  };

  return (
    <div>
      <input onChange={(event) => setNewName(event.target.value)} type="text" />
      <button onClick={() => handleClick()}>Change</button>
    </div>
  );
};

export default UserCard;
