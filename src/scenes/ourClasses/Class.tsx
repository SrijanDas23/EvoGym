import { motion } from "framer-motion";

type Props = {
  name: string;
  description: string;
  image: string;
};
const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const Class = ({ name, description, image }: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex h-[380px] w-[480px] 
  flex-col items-center justify-center whitespace-normal bg-primary-500 text-center 
  text-white opacity-0 transition duration-500 hover:opacity-80`;

  return (
    <motion.li
      variants={childVariant}
      className="relative mx-5 inline-block h-[380px] w-[480px]"
    >
      <div className={overlayStyles}>
        <p className="text-3xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img alt={`${image}`} src={image} />
    </motion.li>
  );
};

export default Class;
