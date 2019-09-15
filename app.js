import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";



import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
import {localsMiddleware} from "./middlewares"

const app = express();
app.use(helmet());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use("/uploads", express.static("uploads"))
app.set("view engine", "pug");

app.use(localsMiddleware)

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);


export default app;
