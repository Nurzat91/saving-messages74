import {Router} from 'express';

const messagesRouter = Router();

messagesRouter.get('/', async (req, res) => {
  res.send('Главная стр.');
});

messagesRouter.get('/:id', async (req, res) => {
  res.send('Стр по id');
});

messagesRouter.post('/', async (req, res) => {
  res.send('отправка сообщений.');
  console.log(req.body);
});

export default messagesRouter;