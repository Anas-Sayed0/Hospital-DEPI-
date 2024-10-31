const { AboutUs, handleAboutUsValidation } = require("../models/aboutUs");
const upload = require("./image_uploader");
const express = require("express");
const router = express.Router();

/**************************************************************************************************/
//get all aboutUs
router.get("/", async (req, res) => {
  const aboutUs = await AboutUs.find().sort("title");
  res.send(aboutUs);
});
/**************************************************************************************************/
//adding aboutUs:
router.post("/", upload.single("img"), async (req, res) => {
  const { error } = handleAboutUsValidation(req.body);
  if (error) {
    // Map through all error details and extract messages
    const errorMessages = error.details.map((err) => err.message);
    return res.status(400).send(errorMessages); // Send all error messages
  }

  // check if the file was uploaded
  if (!req.file) {
    res.status(400).send("img is required..");
  }

  let aboutUs = new AboutUs({
    title: req.body.title,
    content: req.body.content,
    img: req.file.path,
  });

  try {
    aboutUs = await aboutUs.save();
    res.status(201).send(aboutUs); // Send the created aboutUs object with status 201
  } catch (error) {
    res.status(500).send("An error occurred");
  }
});

/**************************************************************************************************/
//updating aboutUs:
router.put("/:id", upload.single("img"), async (req, res) => {
  // validate the aboutUs
  const { error } = handleAboutUsValidation(req.body);
  if (error) {
    // Map through all error details and extract messages
    const errorMessages = error.details.map((err) => err.message);
    return res.status(400).send(errorMessages); // Send all error messages
  }

  let aboutUs = await AboutUs.findById(req.params.id);
  if (!aboutUs)
    return res
      .status(404)
      .send("the aboutUs object with the given id is not found");

  const updatedData = {
    title: req.body.title,
    content: req.body.content,
  };
  if (req.file) {
    updatedData.img = req.file.path;
  }

  aboutUs = await AboutUs.findByIdAndUpdate(req.params.id, updatedData, {
    new: true,
  });
  // Send the updated aboutUs object as the response
  res.status(200).send(aboutUs);
});
/**************************************************************************************************/
router.delete("/:id", async (req, res) => {
  const aboutUs = await AboutUs.findByIdAndDelete(req.params.id);
  // If the aboutUs does not exist, return 404
  if (!aboutUs) {
    return res.status(404).send("The aboutUs object is not available");
  }
  // Return the deleted aboutUs object
  res.status(200).send(aboutUs);
});

module.exports = router;
