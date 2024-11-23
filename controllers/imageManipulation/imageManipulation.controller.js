const db = require("../../models");
const ImageManipulation = db.imageManipulation;

exports.createImageManipulation = async (req, res) => {
  try {
    const { image1, image2} = req.files || {};

    const data = {
      image1: image1 && image1[0] ? image1[0].path || "" : "",
      image2: image2 && image2[0] ? image2[0].path || "" : "",
    
    };

    console.log(data);

    const result = await ImageManipulation.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully Created ImageManipulation",
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

exports.getAllImageManipulation = async (req, res) => {
  try {
    const result = await ImageManipulation.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all ImageManipulation",
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

exports.deleteImageManipulation = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await ImageManipulation.destroy({
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
      message: "Successfully delete ImageManipulation",
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

exports.updateImageManipulation = async (req, res) => {
  try {
    const { id } = req.params;
    const banner = await ImageManipulation.findOne({ where: { Id: id } });

    if (!banner) {
      return res.status(404).send({
        status: "fail",
        message: "ImageManipulation not found",
      });
    }

    const { image1, image2 } = req.files || {};
    const data = {
      image1: image1 && image1[0].path,
      image2: image2 && image2[0].path,
      
    };

    const result = await ImageManipulation.update(data, {
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
      message: "Successfully updated ImageManipulation",
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
