const db = require("../../models");
const StunningQuality = db.stunningQuality;

exports.createStunningQuality = async (req, res) => {
  try {
    const { image1, image2, image3, image4, image5 } = req.files || {};
    const data = {
      image1: image1 && image1[0] ? image1[0].path || "" : "",
      image2: image2 && image2[0] ? image2[0].path || "" : "",
      image3: image3 && image3[0] ? image3[0].path || "" : "",
      image4: image4 && image4[0] ? image4[0].path || "" : "",
      image5: image5 && image5[0] ? image5[0].path || "" : "",
    };

    console.log(data);

    const result = await StunningQuality.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully Created StunningQuality",
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

exports.getAllStunningQuality = async (req, res) => {
  try {
    const result = await StunningQuality.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all StunningQuality",
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

exports.deleteStunningQuality = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await StunningQuality.destroy({
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
      message: "Successfully delete StunningQuality",
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

exports.updateStunningQuality = async (req, res) => {
  try {
    const { id } = req.params;
    const stunningQuality = await StunningQuality.findOne({
      where: { Id: id },
    });

    if (!stunningQuality) {
      return res.status(404).send({
        status: "fail",
        message: "StunningQuality not found",
      });
    }

    const { image1, image2, image3, image4, image5 } = req.files || {};

    const data = {
      image1: image1 && image1[0] ? image1[0].path : banner.image1,
      image2: image2 && image2[0] ? image2[0].path : banner.image2,
      image3: image3 && image3[0] ? image3[0].path : banner.image3,
      image4: image4 && image4[0] ? image4[0].path : banner.image4,
      image5: image5 && image5[0] ? image5[0].path : banner.image5,
    };

    const result = await StunningQuality.update(data, {
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
      message: "Successfully updated StunningQuality",
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
