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
      setStorage('bookmark', imageData);
      setBookMarkList((prev) => [...prev, imageData]);
      toast({
        title: '북마크에 등록되었습니다.',
        className: 'bg-white',
      });
    }
  };
  const handleRemoveBookMark = () => {};
  useEffect(() => {
    setBookMarkList(getBookmark());
  }, []);

  return { bookMarkList, handleAddBookMark };
};

export default useBookMarks;
