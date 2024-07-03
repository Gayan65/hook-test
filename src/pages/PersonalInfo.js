import { useState } from "react";

//useReduser
const PersonalInfo = () => {
  const [name, setName] = useState("");

  const handdleClick = () => {
    console.log(name);
  };

  return (
    <div>
      <h3>Personal Information</h3>
      <div className="personal-info-form">
        <input
          name="first_name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handdleClick}>Save</button>
      </div>
    </div>
  );
};

export default PersonalInfo;
