import { fetchImages } from '@/app/api';
import { atom } from 'jotai';

const API_KEY = 'RtXdVXs2b2QhLghvC4Rg-bM2lZABj6sXq3Aa74AQ7D8';
const BASE_URL = 'https://api.unsplash.com/search/photos';

// TODO data fetching
//  참고 코드

// const userIdAtom = atom(1)
// const userAtom = atom(async (get, { signal }) => {
//   const userId = get(userIdAtom)
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}?_delay=2000`,
//     { signal },
//   )
//   return response.json()
// })

// const Controls = () => {
//   const [userId, setUserId] = useAtom(userIdAtom)
//   return (
//     <div>
//       User Id: {userId}
//       <button onClick={() => setUserId((c) => c - 1)}>Prev</button>
//       <button onClick={() => setUserId((c) => c + 1)}>Next</button>
//     </div>
//   )
// }

// const UserName = () => {
//   const [user] = useAtom(userAtom)
//   return <div>User name: {user.name}</div>
// }


export const queryIdAtom = atom<string>('seoul');
export const pageIdAtom = atom<number>(1);

export const getApiAtom = atom<any>(async (get) => {
  const queryId = get(queryIdAtom);
  const pageId = get(pageIdAtom);
  return await fetchImages(queryId, pageId);
});

export const totalPageAtom = atom<any>(async (get) => {
  const response = get(getApiAtom);
  return response.total_pages;
});

export const ImageListAtom = atom<any>(async (get) => {
  const response = get(getApiAtom);
  return response.results;
});

//set
