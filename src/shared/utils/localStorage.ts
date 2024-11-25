import { ImageDataType } from '@/app/types';

export const setStorage = <T>(k: string, v: T) => {
  const value = typeof v === 'string' ? v : JSON.stringify(v);
  window.localStorage.setItem(k, value);
  // if (typeof v === 'string') {
  //   return window.localStorage.setItem(k, v);
  // }
  // const value = JSON.stringify(v);
  // return window.localStorage.setItem(k, value);
};

export const getStorage = <T>(key: string): T | null => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
    // if (typeof item === 'string') {
    //   return item;
    // }
    // return item ? JSON.parse(item) : null;
  } catch (e) {
    console.error('parsing error localStorage', e);
    return null;
  }
};

export const getBookmark = (): ImageDataType[] => {
  const result = getStorage<ImageDataType[]>('bookmark');
  // if (result && Array.isArray(result)) {
  //   const parsed = JSON.parse(result);
  //   return parsed;
  // }
  // return [];
  return Array.isArray(result) ? result: [];
};

// export const getBookmark = (): ImageDataType[] => {
//   const result = getStorage<ImageDataType[]>('bookmark');
//   if (!result) {
//     const bookmarks: ImageDataType[] = [];
//     const data = JSON.parse(result as string);
//     bookmarks.push(data);
//     return bookmarks;
//   } else {
//     return [];
//   }
// };
