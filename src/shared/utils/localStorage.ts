import { ImageDataType } from '@/app/types';

export const setStorage = <T>(k: string, v: T) => {
  if (typeof v === 'string') {
    return window.localStorage.setItem(k, v);
  }
  const value = JSON.stringify(v);
  return window.localStorage.setItem(k, value);
};

export const getStorage = <T>(key: string): T | string | null => {
  try {
    const item = localStorage.getItem(key);
    if (typeof item === 'string') {
      return item;
    }
    return item ? JSON.parse(item) : null;
  } catch (e) {
    console.error('parsing error localStorage', e);
    return null;
  }
};

export const getBookmark = (): ImageDataType[] => {
  const result = getStorage<ImageDataType[]>('bookmarks');
  return Array.isArray(result) ? result : [];
}