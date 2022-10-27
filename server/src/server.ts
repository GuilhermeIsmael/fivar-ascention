import { listen } from 'worktop/cache';
import { routes } from './index';

declare global {
  var UPSTASH_REDIS_REST_URL: string;
  var UPSTASH_REDIS_REST_TOKEN: string;
}

listen(routes.run);
