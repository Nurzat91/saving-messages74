import express from 'express';
import messagesRouter from "./routers/messages";

const appMessages = express();
const port = 8000;

appMessages.use(express.json());
appMessages.use('/messages', messagesRouter);

appMessages.listen(port, () => {
  console.log(`Server started on ${port} port!`);
});