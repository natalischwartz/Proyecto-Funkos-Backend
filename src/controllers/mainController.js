const path = require('path')


const mainControllers = {
    home: (req,res) =>{
        res.render("index");
    
    },
    contact: (req,res) =>{
        res.render('pages/admin/contact');
    },
    about:  (req,res) =>{
        res.send("Route for about view")
    },
    faqs: (req,res) =>{
        res.send("Route for faqs view")
    }
}

module.exports = mainControllers;