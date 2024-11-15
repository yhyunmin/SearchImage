export const SubNavBar = () => {
  const list = [
    {
      id: 0,
      title: '보도/편집 전용',
      url: '/',
    },
    {
      id: 1,
      title: '팔로잉',
      url: '/',
    },
    {
      id: 2,
      title: 'Unsplash Photo+',
      url: '/',
    },
    {
      id: 3,
      title: '단색',
      url: '/',
    },
    {
      id: 4,
      title: '3D 렌더링',
      url: '/',
    },
    {
      id: 5,
      title: '자연',
      url: '/',
    },
    {
      id: 6,
      title: '텍스쳐 및 패턴',
      url: '/',
    },
    {
      id: 7,
      title: '인테리어',
      url: '/',
    },
    {
      id: 8,
      title: '필름',
      url: '/',
    },
    {
      id: 9,
      title: '실험적인',
      url: '/',
    },
    {
      id: 10,
      title: '여행',
      url: '/',
    },
    {
      id: 11,
      title: '스포츠',
      url: '/',
    },
  ];

  return (
    <>
      <div className="w-dvw border-b border-b-zinc-100">
        <ul className="mx-auto flex max-w-[1440px] items-center justify-between p-4 font-bold">
          {list.map((item, _) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
