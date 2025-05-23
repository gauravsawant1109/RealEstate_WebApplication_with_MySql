import express from 'express'
// import Controller from '../Controllers/userController.js'
import inquiryController from "../Controllers/inquiryController.js"
import middleware from '../middleware/Auth.js'
// import multer from '../middleware/multer.js'
const inquiryRouter = express.Router()

inquiryRouter.post('/addInquiry',middleware.auth, inquiryController.addInquiry)
inquiryRouter.get('/getAllInquiries',middleware.auth,middleware.adminCheck, inquiryController.getAllInquiries)
inquiryRouter.delete('/deleteInquiry/:inq_id',middleware.auth,middleware.adminCheck, inquiryController.deleteInquiry)


export default inquiryRouter;
