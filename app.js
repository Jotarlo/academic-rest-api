/** packages */
const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");

/** app configuration */
const app = express();
const port = config.get("server-port");
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded(
    { extended: true }
);

app.use(jsonParser);
app.use(urlEncodedParser);

const ipFn = require("./middleware/getIpAddress");
app.use("*", ipFn);

/** Methods */
app.get("/", (req, res, next) => {
    res.send("Welcome to academic rest api.");
});

// Student Routes Loading
const studentRoutes = require("./routes/student.routes");
studentRoutes(app);

// Teacher Routes Loading
const teacherRoutes = require("./routes/teacher.routes");
teacherRoutes(app);

// Period Routes Loading
const periodRoutes = require("./routes/period.routes");
periodRoutes(app);

// Course Routes Loading
const courseRoutes = require("./routes/course.routes");
courseRoutes(app);

// User Routes Loading
const userRoutes = require("./routes/user.routes");
userRoutes(app);

app.listen(port, () => {
    console.log("Server is running...")
});