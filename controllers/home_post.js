const path = require("path");

const home = (req, res) => {
    return res.sendFile(path.join(`${__dirname}/../views/index_post.html`));
};

module.exports = {
    getHome: home
};
