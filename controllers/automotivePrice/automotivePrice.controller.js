const db = require("../../models");
const AutomotivePrice = db.automotivePrice;

exports.createAutomotivePrice = async (req, res) => {
  try {
    const image = req.file ? req.file.path : ""; // Correctly assigning the image path
    const { title, price, feature1, feature2, feature3, feature4 } = req.body;
    const data = { image, title, price, feature1, feature2, feature3, feature4 }; // Store the image path in the data object

    console.log(data);

    const result = await AutomotivePrice.create(data); // Creating AboutUs with image path

    res.status(200).send({
      status: "Success",
      message: "Successfully Created AutomotivePrice",
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

exports.getAllAutomotivePrice = async (req, res) => {
  try {
    const result = await AutomotivePrice.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all AutomotivePrice",
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

exports.deleteAutomotivePrice = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await AutomotivePrice.destroy({
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
      message: "Successfully delete AutomotivePrice",
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

exports.updateAutomotivePrice = async (req, res) => {
  try {
    const { id } = req.params;
    const AboutUs = await AutomotivePrice.findOne({ where: { Id: id } });

    if (!AboutUs) {
      return res.status(404).send({
        status: "fail",
        message: "AutomotivePrice not found",
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

    const result = await AutomotivePrice.update(data, {
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
      message: "Successfully updated AutomotivePrice",
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
