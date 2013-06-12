var mongoose = require('mongoose');

var flexSchema = new Schema({}, { strict: false });
//Mongo database connection to mongolab account
mongoose.connect('mongodb://FDadmin:Brikim2013@ds035257.mongolab.com:35257/cmsnuevo');