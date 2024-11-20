import { fetchImages } from '@/app/api';
import { atom } from 'jotai';

export const queryAtom = atom('seoul');
export const pageIdAtom = atom(1);

export const totalPageAtom = atom(0);
// export const apiDataAtom = atom(async (get) => {
//   console.log('start api fetching');
//   const queryId = get(queryAtom);
//   const pageId = get(pageIdAtom);
//   const response = await fetchImages(queryId, pageId);
//   return response; // results, totalPage ..
// });
