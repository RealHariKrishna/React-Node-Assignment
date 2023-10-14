import express from 'express';
import router from "./routes/route.js"
import cors from "cors";

const app = express();
const PORT = 1024;

app.use(cors());
app.use('/',router);



const initializeServer=async()=>{
    try {
        app.listen(PORT, () => {
          console.log(`Server Running at ${PORT}`);
        });
      } catch (error) {
        console.log(`Server Error: ${error.message}`);
        process.exit(1);
      }
};

initializeServer()

