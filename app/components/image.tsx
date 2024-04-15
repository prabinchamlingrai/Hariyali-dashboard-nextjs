import Image from 'next/image';

const MyImageComponent: React.FC = () => {
  return (
    <div className="w-30 mx-3.5 min-h-fit">
      <Image
        src="/hariyali-abhiyan-logo-3.png"
        alt="logo"
        width={100}
        height={35}
        objectFit="cover"
      />
    </div>
  );
};

export default MyImageComponent;
