const mongoose  = require('mongoose');
const NoteSchema = new mongoose.Schema({

    title:{
        type:String,
        required:[true,'please add a title'],
        unique:true,
        trim:true,
        maxlength:[40,'title cannot go beyond 40 characters'] 
    },
description:{
    type:String,
    required:true,
    maxlength:[200, 'desc cannot be greater than 200 char']
}

})

module.exports = mongoose.models.Note||mongoose.model('Note',NoteSchema);
