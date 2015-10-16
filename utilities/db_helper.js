"use strict"
let cloudant = require('../config/cloudant_config');
var scrum_db = cloudant.use('scrum_db');


let dbHelper = {
	getDocs : function (rows) {
		var docs = [];
		for (let doc of rows) {
			docs.push(doc.doc);
		}
		return docs;
	},
	getValues : function (rows) {
		var values = [];
		for (let doc of rows) {
			if(values.indexOf(doc.value) == -1) {
				values.push(doc.value);
			}
			
		}
		return values;
	},
	insertDocument : function(doc, callback) {
		scrum_db.insert(doc, callback);
	},
	bulkOperation : function(docs, callback) {
		scrum_db.bulk({"docs":docs}, callback);
	},
	destroyDocument : function(doc, callback) {
		scrum_db.destroy(doc._id, doc._rev, callback);
	}
}
module.exports = dbHelper;