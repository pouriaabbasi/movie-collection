const dbConfig = require("./configs/dbConfig");
const expressConfig = require("./configs/expressConfig");
const auth = require("./middleware/authMiddleware")

const userRouter = require("./routes/userRouter");
const authRouter = require("./routes/authRouter");

dbConfig.initDatabaseConnection();

expressConfig.setRoute("/api/auth", authRouter);
expressConfig.setRoute("/api/users", userRouter, auth);
expressConfig.initExpress();
