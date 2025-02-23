const express = require('express')

const { ctrlWrapper, isValiId } = require("../../helpers");

const {auth, validateBody }= require("../../middlewares");

const {addSchema, updateFavoriteSchema} = require("../../schemas/contacts")

const ctrl = require("../../controllers/contacts");

const router = express.Router();

router.get('/', auth,  ctrlWrapper(ctrl.listContacts))

router.get('/:contactId', isValiId, ctrlWrapper(ctrl.getContactById))

router.post('/', auth,  validateBody(addSchema), ctrlWrapper(ctrl.addContact));

router.delete('/:contactId', isValiId, ctrl.removeContact);

router.put('/:contactId', isValiId, validateBody(addSchema), ctrl.updateContact);

router.patch('/:contactId/favorite', isValiId, validateBody(updateFavoriteSchema), ctrlWrapper(ctrl.updateStatusContact));


module.exports = router;