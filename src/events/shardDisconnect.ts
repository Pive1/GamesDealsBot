import logger from '../lib/logger';

export default {
  event: 'shardDisconnect',
  generator: (err: Error, id: number): void => {
    logger.info({ err, shard: id, message: `Shard ${id} disconnected` });
  },
};
