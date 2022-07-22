import User from "../models/user";
import jwt from 'jsonwebtoken';


export const signup = async (req, res) => {
    const { email, name, password} = req.body // lấy dữ liệu phía client
    try {
        const existUser = await User.findOne({email}).exec(); //lấy email - kiểm tra email
        if(existUser){                             // tồn tại thì dừng hiện message
            res.json({
                message: "Email đã tồn tại"
            })
        };
        const user = await new User({email, name, password}).save(); // chưa thì thực hiện câu lệnh đăng kí
        res.json({   // trả về user bên dưới
            user: {
                _id: user._id,
                email: user.email,
                name: user.name
            }
        })
    } catch (error) {
        
    }
}
export const signin = async (req, res) => {
    const { email, password} = req.body;
    try {
        const user = await User.findOne({email}).exec();
        if(!user){
            res.status(400).json({
                message: "email không tồn tại"
            })
        }
        if(!user.authenticate(password)){
            res.status(400).json({
                message: "Sai mật khẩu"
            })
        }

        const token = jwt.sign({_id: user._id }, "123456", { expiresIn: 60 * 120})

        res.json({
            token,
            user: {
                _id: user._id,
                email: user.email,
                name: user.name,
                role: user.role
            }
        })
    } catch (error) {
        
    }
}
