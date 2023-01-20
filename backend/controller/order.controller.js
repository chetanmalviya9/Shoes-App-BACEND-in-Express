import { Order } from "../model/order.model.js";
import { Cart } from "../model/cart.model.js";
export const orderPlace= async(req,res,next)=>{
    console.log(req.body)
    Order.create({
        userId: req.body.userId,
        email : req.body.email,
        deliveryAddress: req.body.deliveryAddress,
        paymentMode: req.body.paymentMode,
        mobileNo: req.body.contact,
        date:req.body.date,
        total: req.body.billAmount*1,
        items: req.body.itemList
    }).then(result=>{
        Cart.deleteMany({userId: req.body.userId}).then((result)=>{
            console.log(result);
        }).catch((err)=>{
            console.log(err);
        })
        return res.status(200).json({message: 'Order placed Successfully',status:true});
    }).catch(err=>{
        return res.status(200).json({message: 'Oops! something went wrong',status:false});
    })
}