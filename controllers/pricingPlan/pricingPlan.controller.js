const db = require("../../models");
const PricingPlan = db.pricingPlan;

exports.createPricingPlan = async (req, res) => {
  try {
    const { image1, image2, image3, image4 } = req.files || {};
    const data = {
      image1: image1 && image1[0] ? image1[0].path || "" : "",
      image2: image2 && image2[0] ? image2[0].path || "" : "",
      image3: image3 && image3[0] ? image3[0].path || "" : "",
      image4: image4 && image4[0] ? image4[0].path || "" : "",
    };

    console.log(data);

    const result = await PricingPlan.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully Created PricingPlan",
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

exports.getAllPricingPlan = async (req, res) => {
  try {
    const result = await PricingPlan.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all PricingPlan",
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

exports.deletePricingPlan = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await PricingPlan.destroy({
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
      message: "Successfully delete PricingPlan",
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

exports.updatePricingPlan = async (req, res) => {
  try {
    const { id } = req.params;
    const banner = await PricingPlan.findOne({ where: { Id: id } });

    if (!banner) {
      return res.status(404).send({
        status: "fail",
        message: "PricingPlan not found",
      });
    }

    const { image1, image2, image3, image4 } = req.files || {};

    const data = {
      image1: image1 && image1[0] ? image1[0].path : banner.image1,
      image2: image2 && image2[0] ? image2[0].path : banner.image2,
      image3: image3 && image3[0] ? image3[0].path : banner.image3,
      image4: image4 && image4[0] ? image4[0].path : banner.image4,
    };

    const result = await PricingPlan.update(data, {
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
      message: "Successfully updated PricingPlan",
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
