const db = require("../../models");
const Automotive = db.automotive;

exports.createAutomotive = async (req, res) => {
  try {
    const { image1, image2} = req.files || {};

    const data = {
      image1: image1 && image1[0] ? image1[0].path || "" : "",
      image2: image2 && image2[0] ? image2[0].path || "" : "",
    
    };

    console.log(data);

    const result = await Automotive.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully Created Automotive",
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

exports.getAllAutomotive = async (req, res) => {
  try {
    const result = await Automotive.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all Automotive",
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

exports.deleteAutomotive = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Automotive.destroy({
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
      message: "Successfully delete Automotive",
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

exports.updateAutomotive = async (req, res) => {
  try {
    const { id } = req.params;
    const banner = await Automotive.findOne({ where: { Id: id } });

    if (!banner) {
      return res.status(404).send({
        status: "fail",
        message: "Automotive not found",
      });
    }

    const { image1, image2 } = req.files || {};
    const data = {
      image1: image1 && image1[0].path,
      image2: image2 && image2[0].path,
      
    };

    console.log(data);

    const result = await Automotive.update(data, {
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
      message: "Successfully updated Automotive",
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
