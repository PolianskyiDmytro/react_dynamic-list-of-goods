import { Good } from '../types/Good';
import { httpClient } from '../utils/httpClient';

export function getGoods() {
  return httpClient<Good[]>('/goods.json');
}

export function get5First() {
  return getGoods().then(goods =>
    goods
      .sort((good1, good2) => good1.name.localeCompare(good2.name))
      .slice(0, 5),
  );
}

export function getRed() {
  return getGoods().then(goods => goods.filter(good => good.color === 'red'));
}
