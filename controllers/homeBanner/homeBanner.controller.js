const db = require("../../models");
const HomeBanner = db.homeBanner;

exports.createHomeBanner = async (req, res) => {
  try {
    const { image1, image2, image3, image4, image5 } = req.files || {};
    const data = {
      image1: image1 && image1[0] ? image1[0].path || "" : "",
      image2: image2 && image2[0] ? image2[0].path || "" : "",
      image3: image3 && image3[0] ? image3[0].path || "" : "",
      image4: image4 && image4[0] ? image4[0].path || "" : "",
      image5: image5 && image5[0] ? image5[0].path || "" : "",
    };

    // Check if the images are unique
    const existingBanners = await HomeBanner.findAll({
      where: {
        [db.Sequelize.Op.or]: [
          { image1: data.image1 },
          { image2: data.image2 },
          { image3: data.image3 },
          { image4: data.image4 },
          { image5: data.image5 },
        ],
      },
    });

    if (existingBanners.length > 0) {
      return res.status(400).send({
        status: "fail",
        message: "One or more images already exist",
      });
    }

    const result = await HomeBanner.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully Created HomeBanner",
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

exports.getAllHomeBanner = async (req, res) => {
  try {
    const result = await HomeBanner.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all HomeBanner",
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

exports.deleteHomeBanner = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await HomeBanner.destroy({
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
      message: "Successfully delete HomeBanner",
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



exports.updateHomeBanner = async (req, res) => {
  try {
    const { id } = req.params;
    const banner = await HomeBanner.findOne({ where: { Id: id } });

    if (!banner) {
      return res.status(404).send({
        status: "fail",
        message: "HomeBanner not found",
      });
    }

    const { image1, image2, image3, image4, image5 } = req.files || {};
    console.log(req.files)
    const newData = {
      image1: image1 && image1[0].path,
      image2: image2 && image2[0].path,
      image3: image3 && image3[0].path,
      image4: image4 && image4[0].path,
      image5: image5 && image5[0].path,
    };

    const result = await HomeBanner.update(newData, {
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
      message: "Successfully updated HomeBanner",
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

