import express from "express";
import { addToPlaylist, changePassword, deleteMyProfile, deleteUser, forgetPassword, getAllUsers, getMyProfile, login, logout, register, removeFromPlaylist, resetPassword, updateProfile, updateprofilepicture, UpdateUserRole } from "../controllers/userController.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";
const router = express.Router();

// Register
router.route("/register").post(singleUpload,register)

// Login 

router.route("/login").post(login)

// Logout

router.route("/logout").get(logout)

// Get my profile

router.route("/me").get(isAuthenticated, getMyProfile)


// Delete my profile
router.route("/me").delete(isAuthenticated, deleteMyProfile)
// Change Password

router.route("/changepassword").put(isAuthenticated, changePassword)


// Update Profile

router.route("/updateprofile").put(isAuthenticated, updateProfile)

//UpdateProfilePicture

router.route("/updateprofilepicture").put(isAuthenticated, singleUpload,updateprofilepicture)

// ForgetPassword

router.route("/forgetpassword").post(forgetPassword)

// ResetPassword

router.route("/resetpassword/:token").put(resetPassword)

// AddtoPlaylist
router.route("/addtoplaylist").post(isAuthenticated, addToPlaylist)

// Remove from Playlist
router.route("/removefromplaylist").delete(isAuthenticated, removeFromPlaylist)

// Admin Routes 
router.route("/admin/users").get(isAuthenticated,authorizeAdmin,getAllUsers)

// UpdateUserRole
router.route("/admin/user/:id").put(isAuthenticated,authorizeAdmin,UpdateUserRole).delete(isAuthenticated,authorizeAdmin,deleteUser)
export default router;