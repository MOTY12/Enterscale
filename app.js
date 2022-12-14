import express from "express"
import cors from "cors"
import helmet from "helmet"
import loaddb from "./config/db"
import router from "./routers/index"


const app = express();
require('dotenv').config();

const port = process.env.PORT || 3000;


// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



//routes
app.use('/', router);



app.get('/api/v1', (req, res) => {
  res.send('Hello World!')
})


// Listen on port
app.listen(port, () => {
    console.log(`server is running on ${port}`)
    }
)

// export default app;