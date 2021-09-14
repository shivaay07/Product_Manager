const Person = require("../models/person.model");

module.exports.index = (req,res)=>{
    res.json({
        message:"Welcome To DutTech"
    });
}

module.exports.createPerson=
    (req,res) =>{
            // const {firstName, lastName} = req.body;
            // Person.create({
            //     firstName,
            //     lastName
            // })
        Person.create(req.body)
            .then(newlyCreatedPerson =>{
                res.json({person:newlyCreatedPerson})
            })
            .catch(err=>res.json(err))
    }

module.exports.getAllPeople=
    (req,res)=>{
        Person.find({})
            .then((person) => res.json(person))
            .catch((err)=> res.json(err))
    }


module.exports.getPerson = (req,res) =>{
    Person.findOne({_id:req.params.id})
        .then(person=>res.json(person))
        .catch(err=>res.json(err))
}

module.exports.updatePerson = (req,res) =>{
    Person.findOneAndUpdate(
        {_id:req.params.id},
        req.body,
        {new:true}
    )
    .then(updatedPerson=>res.json(updatedPerson))
    .catch(err=>res.json(err))
}

module.exports.deletePerson=(req,res) =>{
    Person.deleteOne({_id:req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err=>res.json(err))
}