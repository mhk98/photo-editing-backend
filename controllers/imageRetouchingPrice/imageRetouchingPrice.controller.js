const db = require("../../models");
const ImageRetouchingPrice = db.imageRetouchingPrice;

exports.createImageRetouchingPrice = async (req, res) => {
  try {
    const image = req.file ? req.file.path : ""; // Correctly assigning the image path
    const { title, price, feature1, feature2, feature3, feature4 } = req.body;
    const data = { image, title, price, feature1, feature2, feature3, feature4 }; // Store the image path in the data object

    console.log(data);

    const result = await ImageRetouchingPrice.create(data); // Creating AboutUs with image path

    res.status(200).send({
      status: "Success",
      message: "Successfully Created ImageRetouchingPrice",
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

exports.getAllImageRetouchingPrice = async (req, res) => {
  try {
    const result = await ImageRetouchingPrice.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all ImageRetouchingPrice",
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

exports.deleteImageRetouchingPrice = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await ImageRetouchingPrice.destroy({
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
      message: "Successfully delete ImageRetouchingPrice",
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

exports.updateImageRetouchingPrice = async (req, res) => {
  try {
    const { id } = req.params;
    const AboutUs = await ImageRetouchingPrice.findOne({ where: { Id: id } });

    if (!AboutUs) {
      return res.status(404).send({
        status: "fail",
        message: "ImageRetouchingPrice not found",
      });
    }

    const { title, price, feature1, feature2, feature3, feature4 } = req.body;

    const data = {
      title: title === "" ? undefined : title,
      price: price === "" ? undefined : price,
      feature1: feature1 === "" ? undefined : feature1,
      feature1: feature2 === "" ? undefined : feature2,
      feature1: feature3 === "" ? undefined : feature3,
      feature1: feature4 === "" ? undefined : feature4,
      image: req.file === undefined ? undefined : req.file.path,
    };

    const result = await ImageRetouchingPrice.update(data, {
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
      message: "Successfully updated ImageRetouchingPrice",
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
