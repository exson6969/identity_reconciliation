const contactModel = require('../models/contactModel.ts')

exports.identify =  (req, res) => {
    const { email, phoneNumber } = req.body;

    contactModel.getContact( email, phoneNumber,(err, result)=>{
        if(err){
            console.log('Error fetching data');
            res.status(500).json({ error: 'Internal Server Error' });
        }
        else{
            res.status(200).json(result);
        }
    })

};
