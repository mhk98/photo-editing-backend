const db = require("../../models");
const RemoveImage = db.removeImage;

exports.createRemoveImage = async (req, res) => {
  try {
    const { image1, image2 } = req.files || {};
    const data = {
      image1: image1 && image1[0] ? image1[0].path || "" : "",
      image2: image2 && image2[0] ? image2[0].path || "" : "",
    };

    console.log(data);

    const result = await RemoveImage.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully Created RemoveImage",
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

exports.getAllRemoveImage = async (req, res) => {
  try {
    const result = await RemoveImage.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all RemoveImage",
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

exports.deleteRemoveImage = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await RemoveImage.destroy({
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
      message: "Successfully delete RemoveImage",
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

exports.updateRemoveImage = async (req, res) => {
  try {
    const { id } = req.params;
    const banner = await RemoveImage.findOne({ where: { Id: id } });

    if (!banner) {
      return res.status(404).send({
        status: "fail",
        message: "RemoveImage not found",
      });
    }

    const { image1, image2 } = req.files || {};

    const data = {
      image1: image1 && image1[0] ? image1[0].path : banner.image1,
      image2: image2 && image2[0] ? image2[0].path : banner.image2,
    };

    const result = await RemoveImage.update(data, {
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
      message: "Successfully updated RemoveImage",
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
