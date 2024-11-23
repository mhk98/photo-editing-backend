const db = require("../../models");
const WhyChooseUs = db.whyChooseUs;

exports.createWhyChooseUs = async (req, res) => {
  try {
    const { image1, image2, image3, image4, image5 } = req.files || {};

    const data = {
      image1: image1 && image1[0] ? image1[0].path : null,
      image2: image2 && image2[0] ? image2[0].path : null,
      image3: image3 && image3[0] ? image3[0].path : null,
      image4: image4 && image4[0] ? image4[0].path : null,
      image5: image5 && image5[0] ? image5[0].path : null,
    };

    const result = await WhyChooseUs.create(data);

    res.status(201).send({
      status: "Success",
      message: "Successfully Created WhyChooseUs",
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

exports.getAllWhyChooseUs = async (req, res) => {
  try {
    const result = await WhyChooseUs.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully retrieved all WhyChooseUs entries",
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

exports.deleteWhyChooseUs = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await WhyChooseUs.destroy({
      where: { Id: id },
    });

    if (!result) {
      return res.status(404).send({
        status: "fail",
        message: "WhyChooseUs entry not found",
      });
    }

    res.status(200).send({
      status: "Success",
      message: "Successfully deleted WhyChooseUs entry",
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

exports.updateWhyChooseUs = async (req, res) => {
  try {
    const { id } = req.params;
    const banner = await WhyChooseUs.findOne({ where: { Id: id } });

    if (!banner) {
      return res.status(404).send({
        status: "fail",
        message: "WhyChooseUs not found",
      });
    }

    const { image1, image2, image3, image4, image5 } = req.files || {};

    const data = {
      image1: image1 && image1[0].path,
      image2: image2 && image2[0].path,
      image3: image3 && image3[0].path,
      image4: image4 && image4[0].path,
      image5: image5 && image5[0].path,
    };


    const result = await WhyChooseUs.update(data, {
      where: { Id: id },
    });

    if (result[0] === 0) { // Check if any rows were updated
      return res.status(400).send({
        status: "fail",
        message: "Update failed or no changes made",
      });
    }

    const updatedBanner = await WhyChooseUs.findOne({ where: { Id: id } });

    res.status(200).send({
      status: "Success",
      message: "Successfully updated WhyChooseUs",
      data: updatedBanner,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
