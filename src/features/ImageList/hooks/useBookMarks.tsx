import { ImageDataType } from '@/app/types';
import { useToast } from '@/shared/hooks/use-toast';
import { getBookmark, setStorage } from '@/shared/utils/localStorage';
import { useEffect, useState } from 'react';

const useBookMarks = () => {
  const [bookMarkList, setBookMarkList] = useState<ImageDataType[]>([]);
  const { toast } = useToast();

  const handleAddBookMark = (imageData: ImageDataType) => {
    const bookmark = getBookmark();
    const isExisting = bookmark.some((i) => i.id === imageData.id);
    if (isExisting) {
      toast({
        title: '북마크에 이미 등록되어있습니다.',
        className: 'bg-white',
      });
    } else {
      const updated = [...bookmark, imageData];
      setStorage('bookmark', updated);
      setBookMarkList(updated);
      toast({
        title: '북마크에 등록되었습니다.',
        className: 'bg-white',
      });
    }
  };
  const handleRemoveBookMark = (imageData: ImageDataType) => {
    const bookmark = getBookmark();
    const filteredBookmark = bookmark.filter((i) => i.id !== imageData.id);
    setStorage('bookmark', filteredBookmark);
    setBookMarkList(getBookmark());
    toast({
      title: '북마크에 제거되었습니다.',
      className: 'bg-white',
    });
  };
  useEffect(() => {
    const stored = getBookmark();
    if (stored.length === 0) {
      setStorage('bookmark', []);
    } else {
      setBookMarkList(getBookmark());
    }
  }, []);

  const isBookmarked = (id: string) => {
    return bookMarkList.some((i) => i.id === id);
  };
  return { bookMarkList, handleAddBookMark, isBookmarked, handleRemoveBookMark };
};

export default useBookMarks;
