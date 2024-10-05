const db = require("../../models");
const ColorCorrection = db.colorCorrection;

exports.createColorCorrection = async (req, res) => {
  try {
    const { image1, image2} = req.files || {};

    const data = {
      image1: image1 && image1[0] ? image1[0].path || "" : "",
      image2: image2 && image2[0] ? image2[0].path || "" : "",
    
    };

    console.log(data);

    const result = await ColorCorrection.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully Created ColorCorrection",
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

exports.getAllColorCorrection = async (req, res) => {
  try {
    const result = await ColorCorrection.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all ColorCorrection",
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

exports.deleteColorCorrection = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await ColorCorrection.destroy({
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
      message: "Successfully delete ColorCorrection",
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

exports.updateColorCorrection = async (req, res) => {
  try {
    const { id } = req.params;
    const banner = await ColorCorrection.findOne({ where: { Id: id } });

    if (!banner) {
      return res.status(404).send({
        status: "fail",
        message: "ColorCorrection not found",
      });
    }

    const image = req.file ? req.file.path : ""; // Correctly assigning the image path

    const data = { image }; // Store the image path in the data object

    console.log(data);

    const result = await ColorCorrection.update(data, {
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
      message: "Successfully updated ColorCorrection",
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
