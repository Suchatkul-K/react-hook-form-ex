import React from "react";

function CustomInput({
  field,
  inputType = "text",
  register,
  errors,
  option = { required: "This field is required", maxLength: 10 },
}) {
  // console.log(errors)
  return (
    <div className="flex gap-4">
      <label>{field}</label>
      <input type={inputType} {...register(`${field}`
        , option
        )} />
      {errors[field] && (
        <div className="text-red-600">{errors[field].message}</div>
      )}
    </div>
  );
}

export default CustomInput;
