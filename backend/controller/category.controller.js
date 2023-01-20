import { Category } from "../model/category.model.js";
import { Brand } from "../model/brand.model.js";
import { Product } from "../model/product.model.js";

export const addCategoryPost=(req,res,next)=>{
    Category.create(req.body).then((result)=>{
        return res.status(200).json({status:true,message:"category add successfully",category:result});
    }).catch((err)=>{
        console.log(err);
    });
}

export const listCategory=(req,res,next)=>{
    Category.find().then((result)=>{
        return res.status(200).json({status:true,categories:result});
    }).catch((err)=>{
        return res.status(500).json({message: 'Server Error'});
    })
}

export const updateCategory=(req,res,next)=>{
    console.log(req.body)
    const id=req.body._id;
    delete req.body._id;
    Category.updateOne({_id: id},{
        $set:req.body
    }).then((msg)=>{
        return res.status(200).json({message:msg});
    }).catch((err)=>{
        return res.status(500).json({message:err});
    })
}
export const deleteCategory=async(req,res,next)=>{
    await Brand.deleteMany({
        categoryId:req.params.id
    })
    await Product.deleteMany({
        categoryId:req.params.id
    })
    let data =  Category.deleteOne({
    _id:req.params.id
    }).then((msg)=>{
        console.log(msg)
        
        return res.status(200).json({status:true});
    }).catch((err)=>{
        return res.status(200).json({status:false,message:err});
    })
    console.log(data)
}