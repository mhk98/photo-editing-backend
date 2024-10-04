const db = require("../../models");
const HomeSlider = db.homeSlider;


exports.createHomeSlider = async (req, res) => {
  try {
    const { image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12 } = req.files || {};
    const data = {
      image1: image1 && image1[0] ? image1[0].path || "" : "",
      image2: image2 && image2[0] ? image2[0].path || "" : "",
      image3: image3 && image3[0] ? image3[0].path || "" : "",
      image4: image4 && image4[0] ? image4[0].path || "" : "",
      image5: image5 && image5[0] ? image5[0].path || "" : "",
      image6: image6 && image6[0] ? image6[0].path || "" : "",
      image7: image7 && image7[0] ? image7[0].path || "" : "",
      image8: image8 && image8[0] ? image8[0].path || "" : "",
      image9: image9 && image9[0] ? image9[0].path || "" : "",
      image10: image10 && image10[0] ? image10[0].path || "" : "",
      image11: image11 && image11[0] ? image11[0].path || "" : "",
      image12: image12 && image12[0] ? image12[0].path || "" : "",
    };

    // Check for existing images
    const existingBanners = await HomeSlider.findAll({
      where: {
        [db.Sequelize.Op.or]: [
          { image1: data.image1 },
          { image2: data.image2 },
          { image3: data.image3 },
          { image4: data.image4 },
          { image5: data.image5 },
          { image6: data.image6 },
          { image7: data.image7 },
          { image8: data.image8 },
          { image9: data.image9 },
          { image10: data.image10 },
          { image11: data.image11 },
          { image12: data.image12 },
        ],
      },
    });

    if (existingBanners.length > 0) {
      return res.status(400).send({
        status: "fail",
        message: "One or more images already exist",
      });
    }

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
    const slider = await HomeSlider.findOne({ where: { Id: id } });

    if (!slider) {
      return res.status(404).send({
        status: "fail",
        message: "HomeSlider not found",
      });
    }

    const { image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12 } = req.files || {};

    const newData = {
      image1: image1 && image1[0] ? image1[0].path : slider.image1,
      image2: image2 && image2[0] ? image2[0].path : slider.image2,
      image3: image3 && image3[0] ? image3[0].path : slider.image3,
      image4: image4 && image4[0] ? image4[0].path : slider.image4,
      image5: image5 && image5[0] ? image5[0].path : slider.image5,
      image6: image6 && image6[0] ? image6[0].path : slider.image6,
      image7: image7 && image7[0] ? image7[0].path : slider.image7,
      image8: image8 && image8[0] ? image8[0].path : slider.image8,
      image9: image9 && image9[0] ? image9[0].path : slider.image9,
      image10: image10 && image10[0] ? image10[0].path : slider.image10,
      image11: image11 && image11[0] ? image11[0].path : slider.image11,
      image12: image12 && image12[0] ? image12[0].path : slider.image12,
    };

    // Check for existing images
    const existingBanners = await HomeSlider.findAll({
      where: {
        [db.Sequelize.Op.or]: [
          { image1: newData.image1 },
          { image2: newData.image2 },
          { image3: newData.image3 },
          { image4: newData.image4 },
          { image5: newData.image5 },
          { image6: newData.image6 },
          { image7: newData.image7 },
          { image8: newData.image8 },
          { image9: newData.image9 },
          { image10: newData.image10 },
          { image11: newData.image11 },
          { image12: newData.image12 },
        ],
      },
    });

    if (existingBanners.length > 0) {
      return res.status(400).send({
        status: "fail",
        message: "One or more images already exist",
      });
    }

    const result = await HomeSlider.update(newData, {
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

