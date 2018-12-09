const mongoose = require("mongoose");

const dbURI = "mongodb://admin:Wqeo5oBizzrMZzJ6@cluster0-shard-00-00-qpsfw.mongodb.net:27017,cluster0-shard-00-01-qpsfw.mongodb.net:27017,cluster0-shard-00-02-qpsfw.mongodb.net:27017/alumnos?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";

const options = {
	poolSize: 10
};

mongoose.connect(dbURI, options).then(
	() => {
		console.log("Connection success!");
	},
	err => {
		console.log("Error connecting Database: ", err);
	}
);
require("../models/alumnos");