import { AvatarFallback, AvatarImage } from '@/shared/ui/avatar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shared/ui/card';
import {
  DialogTrigger,
  Dialog,
  DialogHeader,
  DialogFooter,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/shared/ui/dialog';
import { Avatar } from '@radix-ui/react-avatar';
import { File, Heart, Pin, Text } from 'lucide-react';
import { BaseButton } from '@/shared';
import { ImageDataType } from '@/app/types';
import { FolderButton } from '@/features/ImageList/ui/FolderButton';
import useBookMarks from '@/features/ImageList/hooks/useBookMarks';

interface Props {
  data: ImageDataType;
}

const ImageCard = ({ data }: Props) => {
  const { bookMarkList, handleAddBookMark } = useBookMarks();

  return (
    <>
      <li className="relative flex flex-col gap-4">
        <Card className="w-full border-none shadow-none">
          <CardHeader className="h-48 p-0">
            <Dialog>
              <DialogTrigger className="ring-transparent">
                <CardTitle>
                  <div className="max-h-40 overflow-y-hidden rounded-xl">
                    <img src={data.urls.small} alt="" className="w-full rounded-xl object-cover object-center" />
                  </div>
                </CardTitle>
              </DialogTrigger>
              <CardDescription>
                <FolderButton
                  onClick={() => {
                    handleAddBookMark(data);
                  }}
                />
              </CardDescription>
              <DialogContent className="w-full rounded-2xl bg-white p-8">
                <DialogHeader>
                  <DialogTitle>이미지 상세정보</DialogTitle>
                  <DialogDescription>선택한 이미지의 상세정보를 확인하세요.</DialogDescription>
                </DialogHeader>
                <section className="translate-1/2 flex transform flex-col gap-8">
                  <img src={data.urls.full} alt="" className="rounded-xl" />
                  <article className="flex justify-between gap-8">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage
                          src={data.user.profile_image.small}
                          alt="user profile avatar"
                          className="rounded-full"
                        />
                        <AvatarFallback>LO</AvatarFallback>
                      </Avatar>
                      <small className="font-medium leading-none marker:text-sm">{data.user.username}</small>
                    </div>
                    <BaseButton className="rounded-xl bg-zinc-100 shadow-none">북마크 추가</BaseButton>
                  </article>
                  <div className="flex w-full flex-col gap-3 overflow-hidden">
                    <p className="flex items-center gap-2">
                      <Pin size={16} />
                      <span className="text-sm">{data.alternative_slugs.ko}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <File size={16} />
                      <span className="text-sm">{data.alt_description}</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Text size={16} />
                      <span className="block h-fit w-full overflow-hidden text-ellipsis text-sm">
                        {data.description ? data.description : '등록된 묘사 및 설명글이 없습니다.'}
                      </span>
                    </p>
                  </div>
                </section>
                <DialogFooter>
                  <div className="flex w-full justify-end gap-4">
                    <p className="flex gap-1">
                      게시일: <span>{data.created_at.split('T')[0]}</span>
                    </p>
                    <p className="flex gap-1">
                      <Heart className="w-4 fill-red-500 stroke-red-500" />
                      <span>{data.likes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
                    </p>
                  </div>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent className="p-0 py-2 text-left">
            <CardDescription>
              <h3>
                {data.alternative_slugs.ko
                  ? data.alternative_slugs.ko?.replace(/[a-zA-Z0-9\-_]/g, ' ').trim() ||
                    '등록된 묘사 및 설명글이 없습니다.'
                  : '등록된 묘사 및 설명글이 없습니다.'}
              </h3>
            </CardDescription>
          </CardContent>
          <CardFooter className="px-0 text-sm">
            <div className="flex w-full justify-between">
              <p className="flex gap-1">
                게시일: <span>{data.created_at.split('T')[0]}</span>
              </p>
              <p className="flex gap-1">
                <Heart className="w-4 fill-red-500 stroke-red-500" />
                <span>{data.likes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
              </p>
            </div>
          </CardFooter>
        </Card>
      </li>
    </>
  );
};

export default ImageCard;
