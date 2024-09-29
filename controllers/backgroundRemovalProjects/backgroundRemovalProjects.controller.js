const db = require("../../models");
const BackgroundRemovalProjects = db.backgroundRemovalProjects;

exports.createBackgroundRemovalProjects = async (req, res) => {
  try {
    const image = req.file ? req.file.path : ""; // Correctly assigning the image path

    const data = { image }; // Store the image path in the data object

    console.log(data);

    console.log(data);

    const result = await BackgroundRemovalProjects.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully Created BackgroundRemovalProjects",
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

exports.getAllBackgroundRemovalProjects = async (req, res) => {
  try {
    const result = await BackgroundRemovalProjects.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all BackgroundRemovalProjects",
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

exports.deleteBackgroundRemovalProjects = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await BackgroundRemovalProjects.destroy({
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
      message: "Successfully delete BackgroundRemovalProjects",
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

exports.updateBackgroundRemovalProjects = async (req, res) => {
  try {
    const { id } = req.params;
    const banner = await BackgroundRemovalProjects.findOne({ where: { Id: id } });

    if (!banner) {
      return res.status(404).send({
        status: "fail",
        message: "BackgroundRemovalProjects not found",
      });
    }

    const image = req.file ? req.file.path : ""; // Correctly assigning the image path

    const data = { image }; // Store the image path in the data object

    console.log(data);

    const result = await BackgroundRemovalProjects.update(data, {
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
      message: "Successfully updated BackgroundRemovalProjects",
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
