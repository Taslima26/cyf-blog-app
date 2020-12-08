const Joi = require('joi');
const path = require('path');


require('dotenv').config()

const config = {
  client_id: "f897e1716a41568a5332",
  redirect_uri:"http://localhost:3000/login" ,
  client_secret:"1ed7dc6c58bb4e53b3ed8e68a9da415011b567c7" ,
  proxy_url: "http://localhost:3100/api/authenticate",
};
console.log(config);

const envVarsSchema = Joi.object({
  client_id: Joi.string().required(),
  redirect_uri: Joi.string().required(),
  client_secret: Joi.string().required(),
  proxy_url: Joi.string().required(),
});

const { error } = envVarsSchema.validate(config);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = config;
