import bcrypt from 'bcryptjs';
import { User } from "../model/user.model.js"

export const signUp = async (req, res, next) => {

    console.log(req.body)
    let password = req.body.password;
    let saltKey = await bcrypt.genSalt(10);
    let encryptedPassword = await bcrypt.hash(password, saltKey);
    User.create({
        email: req.body.email,
        password: encryptedPassword
    }).then(result => {

        return res.status(200).json({ result, status: true });
    }).catch(err => {
        return res.status(500).json({ message: "something went wrong", status: false })
    })
}
export const signIn = async (req, res, next) => {
    let user = await User.findOne({ email: req.body.email });
    
    if (user) {
        let validPassword = await bcrypt.compare(req.body.password, user.password);
        if (validPassword) {
            return res.status(200).json({ userDetail: user, status: true });
        }
        else
            return res.status(500).json({ message: "something went wrong", status: false })
    }
    else
        return res.status(500).json({ message: "something went wrong", status: false })
}