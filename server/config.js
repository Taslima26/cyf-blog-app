const Joi = require('joi');
const path = require('path');


require('dotenv').config()

const config = {
  client_id: 'f897e1716a41568a5332',
  redirect_uri: 'https://cyf-blog-app.herokuapp.com/login',
  client_secret: 'f449d163b85ad48ae63cedde8f5263a4e6071809',
  proxy_url: 'https://cyf-blog-app.herokuapp.com/api/authenticate',
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
