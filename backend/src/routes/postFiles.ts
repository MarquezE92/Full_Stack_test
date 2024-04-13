import User from '../models/User.ts';
import csvParser from 'csv-parser';
import multer from 'multer';
import fs from 'fs';


interface CSVRow {
    name: string;
    city: string;
    country: string;
    favorite_sport: string;
}
const routePostFiles = async(req, res)=>{
    
    try {
        const uploadedFile = req.file; 
        if (!uploadedFile) {
          return res.status(400).json({ message: 'No file uploaded.' });
        }
    
        const results: CSVRow[] = [];
        fs.createReadStream(req.file.path)
            .pipe(csvParser())
            .on('data', (data: any) => results.push(data))
             .on('end', async () => {
                
              for (const row of results) {
                    const {city, country, favorite_sport} = row;
                    const name = row[Object.keys(row)[0]];
                    await User.create({ name, city, country, favorite_sport })
                }
                fs.unlinkSync(req.file.path); 
                res.status(200).json({ message: 'The file was uploaded successfully.' });
            });
      } catch(error) {
        res.status(500).json({message: error.message})
    }

}

export default routePostFiles

