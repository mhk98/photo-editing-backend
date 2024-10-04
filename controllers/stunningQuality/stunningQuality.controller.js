const db = require("../../models");
const StunningQuality = db.stunningQuality;

// exports.createStunningQuality = async (req, res) => {
//   try {
//     const { image1, image2, image3, image4, image5 } = req.files || {};
//     const data = {
//       image1: image1 && image1[0] ? image1[0].path || "" : "",
//       image2: image2 && image2[0] ? image2[0].path || "" : "",
//       image3: image3 && image3[0] ? image3[0].path || "" : "",
//       image4: image4 && image4[0] ? image4[0].path || "" : "",
//       image5: image5 && image5[0] ? image5[0].path || "" : "",
//     };

//     console.log('data', data);
//     console.log('data1', image1, image2, image3, image4, image5 );

//     const result = await StunningQuality.create(data);

//     res.status(200).send({
//       status: "Success",
//       message: "Successfully Created StunningQuality",
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


exports.createStunningQuality = async (req, res) => {
  try {
    const { image1, image2, image3, image4, image5 } = req.files || {};
    const imagePaths = [
      image1 && image1[0] ? image1[0].path || "" : "",
      image2 && image2[0] ? image2[0].path || "" : "",
      image3 && image3[0] ? image3[0].path || "" : "",
      image4 && image4[0] ? image4[0].path || "" : "",
      image5 && image5[0] ? image5[0].path || "" : "",
    ];

    // Check for duplicates in the database
    for (const imagePath of imagePaths) {
      if (imagePath) {
        const existingEntry = await StunningQuality.findOne({
          where: { image1: imagePath }, // Change this field if necessary
        });

        if (existingEntry) {
          return res.status(409).send({
            status: "fail",
            message: `Duplicate image found: ${imagePath}`,
          });
        }
      }
    }

    // Prepare data for insertion
    const data = {
      image1: image1 && image1[0] ? image1[0].path || "" : "",
      image2: image2 && image2[0] ? image2[0].path || "" : "",
      image3: image3 && image3[0] ? image3[0].path || "" : "",
      image4: image4 && image4[0] ? image4[0].path || "" : "",
      image5: image5 && image5[0] ? image5[0].path || "" : "",
    };

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
    
    // Fetch the existing StunningQuality record
    const stunningQuality = await StunningQuality.findOne({
      where: { Id: id },
    });

    if (!stunningQuality) {
      return res.status(404).send({
        status: "fail",
        message: "StunningQuality not found",
      });
    }

    // Destructure new images from the request files
    const { image1, image2, image3, image4, image5 } = req.files || {};

    // Prepare updated data
    const data = {
      image1: image1 && image1[0] ? image1[0].path : stunningQuality.image1,
      image2: image2 && image2[0] ? image2[0].path : stunningQuality.image2,
      image3: image3 && image3[0] ? image3[0].path : stunningQuality.image3,
      image4: image4 && image4[0] ? image4[0].path : stunningQuality.image4,
      image5: image5 && image5[0] ? image5[0].path : stunningQuality.image5,
    };

    // Check for duplicates before updating
    for (const imagePath of Object.values(data)) {
      if (imagePath) {
        const existingEntry = await StunningQuality.findOne({
          where: { image1: imagePath }, // Check for duplicates
        });

        if (existingEntry && existingEntry.Id !== id) {
          return res.status(409).send({
            status: "fail",
            message: `Duplicate image found: ${imagePath}`,
          });
        }
      }
    }

    // Update the record in the database
    const result = await StunningQuality.update(data, {
      where: { Id: id },
    });

    if (result[0] === 0) { // result[0] indicates the number of affected rows
      return res.status(400).send({
        status: "fail",
        message: "Update failed",
      });
    }

    res.status(200).send({
      status: "Success",
      message: "Successfully updated StunningQuality",
      data: { ...data, Id: id }, // Include the updated data in the response
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
