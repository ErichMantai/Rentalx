import { Router } from 'express';
import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController';
import { UpdateUserAvatarController } from '../modules/accounts/useCases/updateUseAvatar/UpdateUserAvatarController';
import multer from 'multer';
import uploadConfig from "../config/upload";
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserController = new CreateUserController();
const updateAvatarController = new UpdateUserAvatarController();


usersRoutes.post("/",createUserController.handle);

usersRoutes.patch("/avatar", 
ensureAuthenticated, 
uploadAvatar.single("avatar"),
updateAvatarController.handle);

export {usersRoutes}