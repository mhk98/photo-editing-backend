const db = require("../../models");
const GhostMannequinHowItWorks = db.ghostMannequinHowItWorks;

exports.createGhostMannequinHowItWorks = async (req, res) => {
  try {
    const image = req.file ? req.file.path : ""; // Correctly assigning the image path

    const data = { image }; // Store the image path in the data object

    console.log(data);

    console.log(data);

    const result = await GhostMannequinHowItWorks.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully Created GhostMannequinHowItWorks",
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

exports.getAllGhostMannequinHowItWorks = async (req, res) => {
  try {
    const result = await GhostMannequinHowItWorks.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all GhostMannequinHowItWorks",
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

exports.deleteGhostMannequinHowItWorks = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await GhostMannequinHowItWorks.destroy({
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
      message: "Successfully delete GhostMannequinHowItWorks",
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

exports.updateGhostMannequinHowItWorks = async (req, res) => {
  try {
    const { id } = req.params;
    const banner = await GhostMannequinHowItWorks.findOne({ where: { Id: id } });

    if (!banner) {
      return res.status(404).send({
        status: "fail",
        message: "GhostMannequinHowItWorks not found",
      });
    }

    const image = req.file ? req.file.path : ""; // Correctly assigning the image path

    const data = { image }; // Store the image path in the data object

    console.log(data);

    const result = await GhostMannequinHowItWorks.update(data, {
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
      message: "Successfully updated GhostMannequinHowItWorks",
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
