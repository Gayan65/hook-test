import { useReducer } from "react";
import { reducer } from "../hooks/personalHooks";

const PersonalInfo = () => {
  const [state, dispatch] = useReducer(reducer, { name: "", age: "" });

  const handdleClick = () => {
    console.log(state);
  };

  return (
    <div>
      <h3>Personal Information</h3>
      <div className="personal-info-form">
        <input
          name="first_name"
          value={state.name}
          onChange={(e) =>
            dispatch({ type: "set_name", payload: e.target.value })
          }
        />
        <input
          type="number"
          name="age"
          value={state.age}
          onChange={(e) =>
            dispatch({ type: "set_age", payload: e.target.value })
          }
        />
        <button onClick={handdleClick}>Save</button>
      </div>
    </div>
  );
};

export default PersonalInfo;
