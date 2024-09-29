const db = require("../../models");
const ImageRetouchingProjects = db.imageRetouchingProjects;

exports.createImageRetouchingProjects = async (req, res) => {
  try {
    const image = req.file ? req.file.path : ""; // Correctly assigning the image path

    const data = { image }; // Store the image path in the data object

    console.log(data);

    console.log(data);

    const result = await ImageRetouchingProjects.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully Created ImageRetouchingProjects",
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

exports.getAllImageRetouchingProjects = async (req, res) => {
  try {
    const result = await ImageRetouchingProjects.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all ImageRetouchingProjects",
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

exports.deleteImageRetouchingProjects = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await ImageRetouchingProjects.destroy({
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
      message: "Successfully delete ImageRetouchingProjects",
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

exports.updateImageRetouchingProjects = async (req, res) => {
  try {
    const { id } = req.params;
    const banner = await ImageRetouchingProjects.findOne({ where: { Id: id } });

    if (!banner) {
      return res.status(404).send({
        status: "fail",
        message: "ImageRetouchingProjects not found",
      });
    }

    const image = req.file ? req.file.path : ""; // Correctly assigning the image path

    const data = { image }; // Store the image path in the data object

    console.log(data);

    const result = await ImageRetouchingProjects.update(data, {
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
      message: "Successfully updated ImageRetouchingProjects",
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
