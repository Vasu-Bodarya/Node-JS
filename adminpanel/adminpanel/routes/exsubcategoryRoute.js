const express = require('express');

const routes = express.Router();

const { viewexsubCategory, addexSubCategory, ajaxCategorywiseRecord, insertExsubcategory, deleteExSubcategory, changeStatus, editExsubcategory, updateExsubcategory } = require('../controllers/ExsubcategoryController');


routes.get('/', viewexsubCategory)
routes.get('/addexsubCategory', addexSubCategory);
routes.get('/ajaxcategorywiserecord', ajaxCategorywiseRecord)
routes.post('/insertexsubcategory', insertExsubcategory)
routes.get('/deleteexsubcategory', deleteExSubcategory)
routes.get('/editexsubcategory', editExsubcategory)
routes.post('/updateexsubcategory', updateExsubcategory)
routes.get('/changestatus', changeStatus)


// routes.get('/ajaxgetsinglecategory', ajaxGetSingleCategory)

module.exports = routes;