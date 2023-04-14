const  Model = require('./model');


const product_All = async(req,res)=>{
    try {
       const product =  await Model.find(); 
       res.status(200).json(product)
    } catch (error) {
        res.status(500).json({error: 'not  get data'})
    }
};

const product_details = async(req,res) =>{
 try {
    const single_Data =  await Model.findById(req.params.product_id)
    res.status(200).json(single_Data)
 } catch (error) {
    res.status(500).json({error:error})
 }

};

const product_create = async(req,res) =>{
   const product = new Model({
    product_Id: req.body.product_Id,
    name: req.body.name,
    Quantity: req.body.Quantity,
    Opreations: req.body. Opreations
   });

try {
    const product_adds = await product.save()
    // res. status(201).json(product_adds);
    res.status(201).json({message: 'add data successfully'})
} catch (error) {
    res.status(400).json({error: 'product data not created'})
}
}

const product_update = async(req,res) =>{
    const product = {
        product_Id: req.body.product_Id,
        name: req.body.name,
        Quantity: req.body.Quantity,
        Opreations: req.body. Opreations
       };

       try {
        const datas =  await Model.findByIdAndUpdate({_id:req.params.product_id},product);
        res.status(200).json(datas)
       } catch (error) {
        res.send(error)
       }

}  

const product_delete = async(req,res) =>{
   try {
    const values = await Model.findByIdAndDelete(req.params.product_id);
    res.status(200).json(values); 
   } catch (error) {
    res.send(error);
   }
}


module.exports = {
    product_All,
    product_details,
    product_create,
    product_update,
    product_delete
};