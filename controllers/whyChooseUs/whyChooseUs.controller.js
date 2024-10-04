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

    // Check for duplicates before creating
    const existingEntries = await WhyChooseUs.findAll({
      where: {
        [db.Sequelize.Op.or]: [
          { image1: data.image1 },
          { image2: data.image2 },
          { image3: data.image3 },
          { image4: data.image4 },
          { image5: data.image5 },
        ].filter(Boolean), // Filter out null values
      },
    });

    if (existingEntries.length > 0) {
      return res.status(400).send({
        status: "fail",
        message: "One or more images already exist",
      });
    }

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
      image1: image1 && image1[0] ? image1[0].path : banner.image1,
      image2: image2 && image2[0] ? image2[0].path : banner.image2,
      image3: image3 && image3[0] ? image3[0].path : banner.image3,
      image4: image4 && image4[0] ? image4[0].path : banner.image4,
      image5: image5 && image5[0] ? image5[0].path : banner.image5,
    };

    // Check for duplicates before updating
    const existingEntries = await WhyChooseUs.findAll({
      where: {
        Id: { [db.Sequelize.Op.ne]: id }, // Exclude current entry
        [db.Sequelize.Op.or]: [
          { image1: data.image1 },
          { image2: data.image2 },
          { image3: data.image3 },
          { image4: data.image4 },
          { image5: data.image5 },
        ].filter(Boolean), // Filter out null values
      },
    });

    if (existingEntries.length > 0) {
      return res.status(400).send({
        status: "fail",
        message: "One or more images already exist",
      });
    }

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
