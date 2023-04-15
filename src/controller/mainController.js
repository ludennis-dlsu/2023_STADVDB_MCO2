exports.getHomePage = function(req, res) {
    res.render('index', {
        title: "MCO2 | Transaction Management"
    });
};
