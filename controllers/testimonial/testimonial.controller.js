const db = require("../../models");
const Testimonial = db.testimonial;

exports.createTestimonial = async (req, res) => {
  try {
    const { image1, image2, image3 } = req.files;
    
    const data = {
      image1: image1 && image1[0] ? image1[0].path || "" : "",
      image2: image2 && image2[0] ? image2[0].path || "" : "",
      image3: image3 && image3[0] ? image3[0].path || "" : "",
    };

   

    const result = await Testimonial.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully Created Testimonial",
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

exports.getAllTestimonial = async (req, res) => {
  try {
    const result = await Testimonial.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all Testimonial",
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

exports.deleteTestimonial = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Testimonial.destroy({
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
      message: "Successfully delete Testimonial",
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

exports.updateTestimonial = async (req, res) => {
  try {
    const { id } = req.params;
    const banner = await Testimonial.findOne({ where: { Id: id } });

    if (!banner) {
      return res.status(404).send({
        status: "fail",
        message: "Testimonial not found",
      });
    }

    const { image1, image2, image3 } = req.files;

    // const data = {
    //   image1: image1 && image1[0] ? image1[0].path : banner.image1,
    //   image2: image2 && image2[0] ? image2[0].path : banner.image2,
    //   image3: image3 && image3[0] ? image3[0].path : banner.image3,
    // };


    const data = {
      image1: image1 && image1[0].path,
      image2: image2 && image2[0].path,
      image3: image3 && image3[0].path,
    };

  
 
    const result = await Testimonial.update(data, {
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
      message: "Successfully updated Testimonial",
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
