require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const redis = require('redis');
const redisClient = redis.createClient();
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const passport = require('passport');
require('./passportSetup');

// session
const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: process.env.ORIGIN }));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const checkUser = require('./middleware/checkUser');
const userRouter = require('./routes/userRouter');
const noteRouter = require('./routes/noteRouter')
const googleRouter = require('./routes/googleRouter');

const sessionParser = session({
  name: 'sesid',
  store: new RedisStore({ client: redisClient }),
  saveUninitialized: false,
  secret: process.env.SECRET,
  resave: false,
  cookie: {
    expries: 24 * 60 * 60e3,
    httpOnly: true,
  },
});
app.use(sessionParser);

app.use(passport.initialize());
app.use(passport.session());

app.use(checkUser)

app.use('/user', userRouter);
app.use('/note', noteRouter);
app.use('/google', googleRouter);

// Если HTTP-запрос дошёл до этой строчки, значит ни один из ранее встречаемых рутов не ответил на запрос. Это значит, что искомого раздела просто нет на сайте. Для таких ситуаций используется код ошибки 404. Создаём небольшое middleware, которое генерирует соответствующую ошибку.
app.use((req, res, next) => {
  const error = createError(404, 'Запрашиваемой страницы не существует на сервере.');
  next(error);
});


app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
