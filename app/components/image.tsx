import Image from 'next/image';

const MyImageComponent: React.FC = () => {
  return (
    <div className="w-40 mx-3.5 min-h-fit">
      <Image
        src="/hariyali-abhiyan-logo-3.png"
        alt=""
        width={150}
        height={35}
        layout="fixed"
        objectFit="cover"
      />
    </div>
  );
};

export default MyImageComponent;
