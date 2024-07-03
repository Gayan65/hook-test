import { useReducer } from "react";
import { reducer } from "../hooks/personalHooks";

const PersonalInfo = () => {
  const [state, dispatch] = useReducer(reducer, "");

  const handdleClick = () => {
    console.log(state);
  };

  return (
    <div>
      <h3>Personal Information</h3>
      <div className="personal-info-form">
        <input
          name="first_name"
          value={state}
          onChange={(e) =>
            dispatch({ type: "set_name", payload: e.target.value })
          }
        />
        <button onClick={handdleClick}>Save</button>
      </div>
    </div>
  );
};

export default PersonalInfo;
