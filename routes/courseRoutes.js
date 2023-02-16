import express from "express";
import { addLecture, createCourse, deleteCourse, deleteLecture, getAllCourses, getCourseLectures } from "../controllers/courseController.js";
import { authorizeAdmin, isAuthenticated, authorizeSubscribers} from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";
const router = express.Router();

router.route("/courses").get(getAllCourses);

router.route("/createcourse").post(isAuthenticated, authorizeAdmin, singleUpload ,createCourse);

// Add Lecture, Delete Course, Get Course Details
router
.route("/course/:id")
.get(isAuthenticated,getCourseLectures, authorizeSubscribers)
.post(isAuthenticated, authorizeAdmin,singleUpload, addLecture)
.delete(isAuthenticated,authorizeAdmin, deleteCourse)


// Delete Lectures

router.route("/lecture")
.post(isAuthenticated, authorizeAdmin, deleteLecture)

export default router;