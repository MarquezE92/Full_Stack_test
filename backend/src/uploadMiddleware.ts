import multer from 'multer';

const upload = multer({ dest: 'uploads/' }); 
export const uploadSingleFile = upload.single('file'); 