const userRoute = require('./user');
const productRoute = require('./product');
const productCategoryRoute = require('./productCategory');
const { notFound, errHandler } = require('../middlewares/errHandler')

const initRoutes = (app) => {
    app.use('/api/user', userRoute)
    app.use('/api/product', productRoute)
    app.use('/api/prodcategory', productCategoryRoute)



    app.use(notFound)
    app.use(errHandler)

}

module.exports = initRoutes