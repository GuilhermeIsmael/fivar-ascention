import { Redis } from '@upstash/redis';
import { Router } from 'worktop';

const routes = new Router();

const redis = new Redis({
  url: UPSTASH_REDIS_REST_URL,
  token: UPSTASH_REDIS_REST_TOKEN,
});

routes.add('GET', '/get', async (req, res) => {
  const access_count = await redis.get('access_count');

  return res.send(200, { access_count });
});

routes.add('POST', '/incr', async (req, res) => {
  const access_count = await redis.incr('access_count');

  return res.send(201, { access_count });
});

export { routes };
