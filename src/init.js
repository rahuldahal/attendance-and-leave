import envs from './utils/envs';
import app from './app';
import db from './db';
import logger from './utils/logger';

const { port } = envs;

(async function init() {
  try {
    await db();
    logger.info('Connected to the database.');
    app.listen(port, () =>
      logger.info(`The server is listening on  http://localhost:${port}`)
    );
  } catch (error) {
    logger.error(error.message);
    process.exit(1);
  }
})();
