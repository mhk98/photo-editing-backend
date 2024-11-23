const db = require("../../models");
const ClippingPath = db.clippingPath;

exports.createClippingPath = async (req, res) => {
  try {
    const { image1, image2} = req.files || {};

    const data = {
      image1: image1 && image1[0] ? image1[0].path || "" : "",
      image2: image2 && image2[0] ? image2[0].path || "" : "",
    
    };
  

    console.log(data);

    const result = await ClippingPath.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully Created ClippingPath",
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

exports.getAllClippingPath = async (req, res) => {
  try {
    const result = await ClippingPath.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all ClippingPath",
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

exports.deleteClippingPath = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await ClippingPath.destroy({
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
      message: "Successfully delete ClippingPath",
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

exports.updateClippingPath = async (req, res) => {
  try {
    const { id } = req.params;
    const banner = await ClippingPath.findOne({ where: { Id: id } });

    if (!banner) {
      return res.status(404).send({
        status: "fail",
        message: "ClippingPath not found",
      });
    }

    const { image1, image2 } = req.files || {};
    const data = {
      image1: image1 && image1[0].path,
      image2: image2 && image2[0].path,
      
    };

    const result = await ClippingPath.update(data, {
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
      message: "Successfully updated ClippingPath",
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
