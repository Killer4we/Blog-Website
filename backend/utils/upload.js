import { GridFsStorage } from "multer-gridfs-storage";
import multer from "multer";

const storage = new GridFsStorage({
  url: `mongodb+srv://mern-blog:blogHCI@mern-blog.kqrfaod.mongodb.net/?retryWrites=true&w=majority&appName=mern-blog`,
  options: { useNewUrlParser: true },
  file: (request, file) => {
    const match = ["image/png", "image/jpg"];

    if (match.indexOf(file.mimetype) === -1) {
      return `${Date.now()}-blog-${file.originalname}`;
    }
    
    return {
      bucketName: "photos",
      filename: `${Date.now()}-blog-${file.originalname}`,
    };

  },
});

export default multer({ storage });