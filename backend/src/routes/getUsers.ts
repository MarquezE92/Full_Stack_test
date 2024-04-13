import { Op } from 'sequelize';
import User from '../models/User.ts' 


const routeGetUsers = async(req, res)=>{
    const searchData = req.query.q

    try{
      let usersData;
        if (searchData) {
            usersData = await User.findAll({
                where: {
                    [Op.or]: [
                        { name: { [Op.like]: `%${searchData}%` } },
                        { city: { [Op.like]: `%${searchData}%` } },
                        { country: { [Op.like]: `%${searchData}%` } },
                        { favorite_sport: { [Op.like]: `%${searchData}%` } }
                    ]
                }
            });
        } else {
            usersData = await User.findAll();
        }
        return res.status(200).json({ data: usersData });
    } catch(error) {
        res.status(500).json({message: error.message})
    }
    
}

export default routeGetUsers