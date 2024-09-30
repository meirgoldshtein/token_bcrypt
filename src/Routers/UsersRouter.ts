import { Request, Response} from 'express';
import SignupDto from '../Types/dto/signupDto';
import UserService from '../Services/UsersService';
import ResponseData from '../Types/dto/ResponseData';

export const handelSignupRequest = async (req: Request<{}, {}, SignupDto>, res: Response) : Promise<void> => {
    try {
        const resault = await UserService.signup(req.body); 
        res.status(resault.status || 201).json(resault);
      
    } catch (error) {
        console.log(error);
    }
}