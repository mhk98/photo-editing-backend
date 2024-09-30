const db = require("../../models");
const ReflectionCreationTestimonial = db.reflectionCreationTestimonial;

exports.createReflectionCreationTestimonial = async (req, res) => {
  try {
    const image = req.file ? req.file.path : ""; // Correctly assigning the image path
    const {name, title, country, description } = req.body;
    const data = { image, title, name, country, description }; // Store the image path in the data object

    console.log(data);

    const result = await ReflectionCreationTestimonial.create(data); // Creating AboutUs with image path

    res.status(200).send({
      status: "Success",
      message: "Successfully Created ReflectionCreationTestimonial",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.getAllReflectionCreationTestimonial = async (req, res) => {
  try {
    const result = await ReflectionCreationTestimonial.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all ReflectionCreationTestimonial",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

// exports.singleProduct = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const result = await Product.findOne({
//       where: { Id: id },
//     });

//     if (!result) {
//       return res.status(401).send({
//         status: "fail",
//         message: "No result found",
//       });
//     }
//     res.status(200).send({
//       status: "Success",
//       message: "Successfully got your result",
//       data: result,
//     });
//   } catch (error) {
//     res.status(500).json({
//       status: "fail",
//       message: "Something went wrong",
//       error: error.message,
//     });
//   }
// };

exports.deleteReflectionCreationTestimonial = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await ReflectionCreationTestimonial.destroy({
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No result found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully delete ReflectionCreationTestimonial",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};


exports.updateReflectionCreationTestimonial = async (req, res) => {
  try {
    const { id } = req.params;

    const image = req.file ? req.file.path : ""; 
    const {name, title, country, description } = req.body;


    const AboutUs = await ReflectionCreationTestimonial.findOne({ where: { Id: id } });

    if (!AboutUs) {
      return res.status(404).send({
        status: "fail",
        message: "ReflectionCreationTestimonial not found",
      });
    }



    const data = {
      title: title === "" ? undefined : title,
      name: name === "" ? undefined : name,
      country: country === "" ? undefined : country,
      description: description === "" ? undefined : description,
      image: req.file === undefined ? undefined : req.file.path,
    };

    const result = await ReflectionCreationTestimonial.update(data, {
      where: { Id: id },
    });

    if (!result) {
      return res.status(400).send({
        status: "fail",
        message: "Update failed",
      });
    }

    res.status(200).send({
      status: "Success",
      message: "Successfully updated ReflectionCreationTestimonial",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
