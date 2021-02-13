const express = require('express');
const router = require('express').Router();

let Todolist = require('../models/todolist.model');

//get the users

router.get('/',async(req,res)=>{
  
    try{
      const todolist = await Todolist.find();
      res.json(todolist);
    }catch(err){
      res.json({message:err});
    }
  })

 //delete specific products
 router.delete('/:id',async (req,res)=>{
    try{
      const deleteTodolist = await Todolist.deleteOne({_id:req.params.id});
      res.json(deleteTodolist);
    }catch(err){
      res.json({message:err})
    }
  })


  //add products

router.post('/add',async(req,res)=>{
    
      const newTodolist = new Todolist({
          work: req.body.work,
         
        });
  
        try{
          const savedTodolist = await newTodolist.save();
          res.json(savedTodolist);
        }catch(err){
            res.json({message:err});
        }
  })


  module.exports = router;
