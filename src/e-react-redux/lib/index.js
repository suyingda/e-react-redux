if (process.env.NODE_ENV === 'production') {
    module.exports = require("../dist/e-react-redux.min.js");
} else {
    module.exports = require("../dist/e-react-redux.js");
}
