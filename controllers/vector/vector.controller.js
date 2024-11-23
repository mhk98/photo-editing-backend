const db = require("../../models");
const Vector = db.vector;

exports.createVector = async (req, res) => {
  try {
    const { image1, image2} = req.files || {};

    const data = {
      image1: image1 && image1[0] ? image1[0].path || "" : "",
      image2: image2 && image2[0] ? image2[0].path || "" : "",
    
    };

    console.log(data);

    const result = await Vector.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully Created Vector",
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

exports.getAllVector = async (req, res) => {
  try {
    const result = await Vector.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all Vector",
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

exports.deleteVector = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Vector.destroy({
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
      message: "Successfully delete Vector",
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

exports.updateVector = async (req, res) => {
  try {
    const { id } = req.params;
    const banner = await Vector.findOne({ where: { Id: id } });

    if (!banner) {
      return res.status(404).send({
        status: "fail",
        message: "Vector not found",
      });
    }

    const { image1, image2 } = req.files || {};
    const data = {
      image1: image1 && image1[0].path,
      image2: image2 && image2[0].path,
      
    };

    const result = await Vector.update(data, {
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
      message: "Successfully updated Vector",
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
