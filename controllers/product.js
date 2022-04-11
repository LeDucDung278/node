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
