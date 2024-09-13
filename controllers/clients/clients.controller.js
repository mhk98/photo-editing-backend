const db = require("../../models");
const Clients = db.clients;

exports.createClients = async (req, res) => {
  try {
    const { image1, image2, image3, image4, image5, image6 } = req.files || {};
    const data = {
      image1: image1 && image1[0] ? image1[0].path || "" : "",
      image2: image2 && image2[0] ? image2[0].path || "" : "",
      image3: image3 && image3[0] ? image3[0].path || "" : "",
      image4: image4 && image4[0] ? image4[0].path || "" : "",
      image5: image5 && image5[0] ? image5[0].path || "" : "",
      image6: image6 && image6[0] ? image6[0].path || "" : "",
    };

    console.log(data);

    const result = await Clients.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully Created Clients",
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

exports.getAllClients = async (req, res) => {
  try {
    const result = await Clients.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all Clients",
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

exports.deleteClients = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Clients.destroy({
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

exports.updateClients = async (req, res) => {
  try {
    const { id } = req.params;
    const banner = await Clients.findOne({ where: { Id: id } });

    if (!banner) {
      return res.status(404).send({
        status: "fail",
        message: "Clients not found",
      });
    }

    const { image1, image2, image3, image4, image5, image6 } = req.files || {};

    const data = {
      image1: image1 && image1[0] ? image1[0].path : banner.image1,
      image2: image2 && image2[0] ? image2[0].path : banner.image2,
      image3: image3 && image3[0] ? image3[0].path : banner.image3,
      image4: image4 && image4[0] ? image4[0].path : banner.image4,
      image5: image5 && image5[0] ? image5[0].path : banner.image5,
      image6: image6 && image6[0] ? image6[0].path : banner.image6,
    };

    const result = await Clients.update(data, {
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
      message: "Successfully updated Clients",
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
