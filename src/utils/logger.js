import pino from 'pino';
import dayjs from 'dayjs';

const logger = pino({
  base: {
    pid: false, // processID
  },
  timestamp: () => `, "time":"${dayjs().format()}"`,
});

export default logger;
