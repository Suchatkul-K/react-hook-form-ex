import React from "react";
import { useForm } from "react-hook-form";
import CustomInput from "./CustomInput";
import { joiResolver } from "@hookform/resolvers/joi";
// import Joi from "joi";

// const schema = Joi.object({
//   username: Joi.string().trim().required().messages({
//       'string.empty': 'username is required'
//   }),
//   email: Joi.string().email({ tlds: false }).required().messages({
//       'string.empty': 'email is required',
//       'string.email': 'invalid email pattern'
//   }),
//   password: Joi.string().pattern(/^[a-zA-Z0-9]{6}/).required().messages({
//       'string.empty': 'password is required',
//       'string.pattern.base' : 'password must be atleast 6 charecters and contain only alphabet and number'
//   }),
//   // confirmPassword: Joi.string().valid(Joi.ref('password')).required()
//   // .messages({
//   //     'string.empty': 'confirm password is required',
//   //     'any.only' : 'confirm password does not matched'
//   // }),
// }).unknown(true)

function HookForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm(
    // { resolver: joiResolver(schema) }
  );
  const doSubmit = (data) => console.log(data);

  const input = watch();

  console.log("errors", errors);
  console.log("input", input);
  return (
    <>
      <form
        id="applicationForm"
        className="flex flex-col"
        onSubmit={handleSubmit(doSubmit)}
      >
        {/* Hook form syntax */}
        {/* <div className="flex gap-4">
          <label>Name</label>
          <input {...register("username", { required: true, maxLength: 10 })}/>
          {errors.username && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="flex gap-4">
          <label>Password</label>
          <input type="password" {...register("password", { required: true, maxLength: 10 })}
          />
          {errors.password && <span className="text-red-600">This field is required</span>}
        </div> */}

        {/* Custom hook form */}
        <CustomInput field="username" register={register} errors={errors} />
        <CustomInput
          field="password"
          inputType="password"
          register={register}
          errors={errors}
          option={{ required: "Custom require option" }}
        />
        <input
          {...register("email", {
            required: "Email Address is required",
            maxLength: 10,
          })}
        />
        {errors.mail && <p className="text-red-600">{errors.mail?.message}</p>}

        <button className="p-4 rounded-md bg-amber-300" form="applicationForm">
          Submit
        </button>
      </form>

      <div>Value: {JSON.stringify(watch())}</div>
    </>
  );
}

export default HookForm;
