const db = require("../../models");
const HomeSlider = db.homeSlider;

exports.createHomeSlider = async (req, res) => {
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

    const result = await HomeSlider.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully Created HomeSlider",
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

exports.getAllHomeSlider = async (req, res) => {
  try {
    const result = await HomeSlider.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all HomeSlider",
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

exports.deleteHomeSlider = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await HomeSlider.destroy({
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
      message: "Successfully delete HomeSlider",
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

exports.updateHomeSlider = async (req, res) => {
  try {
    const { id } = req.params;
    const banner = await HomeSlider.findOne({ where: { Id: id } });

    if (!banner) {
      return res.status(404).send({
        status: "fail",
        message: "HomeSlider not found",
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

    const result = await HomeSlider.update(data, {
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
      message: "Successfully updated HomeSlider",
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
