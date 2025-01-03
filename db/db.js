// // connect to database
// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const { Sequelize } = require("sequelize");
// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const dotenv = require("dotenv");
// dotenv.config();

// const sequelize = new Sequelize(
//   `${process.env.DB_NAME}`,
//   `${process.env.DB_USER}`,
//   `${process.env.DB_PASSWORD}`,
//   {
//       // host:'82.112.226.90',
      
//     // host: "sql.freedb.tech",
//     // host:"mysql-34ea360f-mohsinkabirseo-6632.i.aivencloud.com",
//     host:"localhost",
//     dialect: "mysql",
//     pool: { max: 5, min: 0, idle: 10000 },
//     logging: false,
//     timezone: "+06:00",
//     port: 3306
//     // port:25958
//   }
// );

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Database connected successfully");
//   })
//   .catch((error) => {
//     console.log("Error:", error.message);
//   });

// const db = {};
// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// module.exports = db;


// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  'pixamoss_db', // Replace with your actual database name
  'pixamoss', // Replace with your actual database user
  'Pixamoss@123', // Replace with your actual database password
  {
    // host: '82.112.226.90',
    // host: "sql.freedb.tech",
    // host: "mysql-34ea360f-mohsinkabirseo-6632.i.aivencloud.com",
    host: "127.0.0.1",
    dialect: "mysql",
    pool: { max: 5, min: 0, idle: 10000 },
    logging: false,
    timezone: "+06:00",
    port: 3306
    // port: 25958
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.log("Error:", error.message);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
