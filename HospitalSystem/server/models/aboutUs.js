const Joi = require("joi");
const mongoose = require("mongoose");

const aboutUsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 225,
  },
  content: {
    type: String,
    required: true,
    minlength: 15,
  },
  img: {
    type: String,
    required: true,
  },

  date: { type: Date, default: Date.now },
});

const AboutUs = mongoose.model("AboutUs", aboutUsSchema);
/**************************************************************************************************/
function handleAboutUsValidation(data) {
  const schema = Joi.object({
    title: Joi.string().min(3).required(),
    content: Joi.string().min(15).required(),
  });
  return schema.validate(data, { abortEarly: false });
}

exports.AboutUs = AboutUs;
exports.handleAboutUsValidation = handleAboutUsValidation;
