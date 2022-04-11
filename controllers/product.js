import Product from '../models/product'
import slugify from 'slugify';
// API thêm sản phẩm
export const create = async (req, res) => {
    req.body.slug = slugify(req.body.name)
    try {
        const product = await new Product(req.body).save();
        console.log('product', product);
        res.json(product)    
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được sản phẩm"
        })
    }
}
// API list sản phẩm
export const list = async (req, res) => { 
    try {
        const products = await Product.find().sort({createAt: -1});
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}
// API list one sản phẩm
export const read = async (req, res) => {
    const condition = { _id: req.params.id}

    try {
        const product = await Product.findOne(condition);
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}
// API xóa sản phẩm
export const remove = async (req, res) => {
    const condition = { _id: req.params.id}
    try {
        const product = await Product.findOneAndDelete(condition);
        res.json({
            message: "Đã xóa thành công",
            data: product
        });
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}
// API cập nhật
export const update = async (req, res) => {
    const condition = { _id: req.params.id};
    const doc = req.body;
    const option = { new: true};
    try {
        const product = await Product.findOneAndUpdate(condition, doc, option);
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}

// API Search
export const search = async (req, res) => {
    const SearchString = req.query.q ? req.query.q : ""
    try {
        const result = await Product.find( { $text: { $search: SearchString } } ).exec()
        res.json(result)
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}