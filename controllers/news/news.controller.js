const db = require("../../models");
const News = db.news;

exports.createNews = async (req, res) => {
  try {
    const image = req.file ? req.file.path : ""; // Correctly assigning the image path
    const { title } = req.body;
    const data = { image, title }; // Store the image path in the data object

    console.log(data);

    const result = await News.create(data); // Creating AboutUs with image path

    res.status(200).send({
      status: "Success",
      message: "Successfully Created News",
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

exports.getAllNews = async (req, res) => {
  try {
    const result = await News.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all News",
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

exports.deleteNews = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await News.destroy({
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
      message: "Successfully delete News",
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

exports.updateNews = async (req, res) => {
  try {
    const { id } = req.params;
    const AboutUs = await News.findOne({ where: { Id: id } });

    if (!AboutUs) {
      return res.status(404).send({
        status: "fail",
        message: "News not found",
      });
    }

    const { title } = req.body;
    const data = {
      title: title === "" ? undefined : title,
      image: req.file === undefined ? undefined : req.file.path,
    };

    const result = await News.update(data, {
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
      message: "Successfully updated News",
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
