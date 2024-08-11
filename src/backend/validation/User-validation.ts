import Joi from "joi";

const userSchema = Joi.object({
  username: Joi.string().alphanum().max(20).min(3).required(),
  email: Joi.string().email().required(),
  age: Joi.number().max(55).min(18).required(),
  password: Joi.string().min(6).required(),
});

export default userSchema;
