
const controller = require("../controller/logic/student.controller");

module.exports = (app) => {
    app.get("/student", (req, res, next) => {
        controller.getAll(req, res, next);
    });

    app.get("/student/bycode/:code", (req, res, next) => {
        console.log("getiing student by code");
        controller.getByCode(req, res, next);
    });
    
    app.post("/student", (req, res, next) => {
        controller.createStudent(req, res, next);
    });
    
    app.put("/student", (req, res, next) => {
        controller.updateStudent(req, res, next);
    });
    
    app.delete("/student", (req, res, next) => {
        controller.deleteStudent(req, res, next);
    });
};