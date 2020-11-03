var express = require('express');
var {adminModel}=require('../model/AdminModel');
var adminloginRouter = express.Router();

function route() {

    adminloginRouter.route('/')
        .post((req, res) => {
            console.log("adminlogin");
            adminModel.findOne({ email: req.body.email, password: req.body.password }, (err, data) => {
                if (err) {
                    res.json({ AdminStatus: "Error" });
                }
                else if (!data) {
                    res.json({ AdminStatus: "Invalid" });
                }
                else {
                    res.json({ AdminStatus: "Success" });
                }
            });

        });
    

    return adminloginRouter;
}
module.exports = route;
