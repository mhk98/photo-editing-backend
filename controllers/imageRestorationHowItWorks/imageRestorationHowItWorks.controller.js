const db = require("../../models");
const ImageRestorationHowItWorks = db.ImageRestorationHowItWorks;

exports.createImageRestorationHowItWorks = async (req, res) => {
  try {
    const image = req.file ? req.file.path : ""; // Correctly assigning the image path

    const data = { image }; // Store the image path in the data object

    console.log(data);

    console.log(data);

    const result = await ImageRestorationHowItWorks.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully Created ImageRestorationHowItWorks",
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

exports.getAllImageRestorationHowItWorks = async (req, res) => {
  try {
    const result = await ImageRestorationHowItWorks.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all ImageRestorationHowItWorks",
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

exports.deleteImageRestorationHowItWorks = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await ImageRestorationHowItWorks.destroy({
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
      message: "Successfully delete ImageRestorationHowItWorks",
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

exports.updateImageRestorationHowItWorks = async (req, res) => {
  try {
    const { id } = req.params;
    const banner = await ImageRestorationHowItWorks.findOne({ where: { Id: id } });

    if (!banner) {
      return res.status(404).send({
        status: "fail",
        message: "ImageRestorationHowItWorks not found",
      });
    }

    const image = req.file ? req.file.path : ""; // Correctly assigning the image path

    const data = { image }; // Store the image path in the data object

    console.log(data);

    const result = await ImageRestorationHowItWorks.update(data, {
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
      message: "Successfully updated ImageRestorationHowItWorks",
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
