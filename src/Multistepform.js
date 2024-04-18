import { useState } from "react";
const form_data = [
  {
    type: "text",
    name: "name",
    placeholder: "Enter your name",
    btntext: "Next",
  },
  {
    type: "email",
    name: "email",
    placeholder: "Enter your email",
    btntext: "Next",
  },
  {
    type: "date",
    name: "dob",
    placeholder: "Enter your DOB",
    btntext: "next",
  },
  {
    type: "password",
    name: "password",
    placeholder: "Enter your password",
    btntext: "Submit",
  },
];
const Multistepform = () => {
  const [index, setIndex] = useState(0);
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    dob: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form_data.length - 1 !== index) {
      setIndex((prev) => prev + 1);
    } else {
      console.log(formData);
    }
  };

  const handleInputChange = (e) => {
    let inputValue = e.target.value;
    let inputNam = e.target.name;
    const newValue = { ...formData };
    newValue[inputNam] = inputValue;
    setFormdata(newValue);
  };
  const handleChangeBack = () => {
    setIndex((prev) => prev - 1);
  };
  return (
    <div>
      {form_data.length && (
        <div>
          {index > 0 && (
            <a
              style={{ cursor: "pointer", textDecoration: "underline" }}
              onClick={handleChangeBack}
            >
              Back
            </a>
          )}
          <form onSubmit={handleSubmit}>
            <label>{form_data[index].name}</label>
            <input
              type={form_data[index].type}
              name={form_data[index].name}
              placeholder={form_data[index].placeholder}
              onChange={(e) => handleInputChange(e)}
              value={formData[form_data[index].name]}
            />

            <button type={form_data[index].btntext}>
              {form_data[index].btntext}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
export default Multistepform;
