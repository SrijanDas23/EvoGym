import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

const classes: Array<ClassType> = [
  {
    name: "Bla Bla 1 Classes",
    description:
      "orem epsum bla bla bla lorem epsum bla bla bla lorem epsum bla bla",
    image: image1,
  },
  {
    name: "Bla Bla 2 Classes",
    description:
      "orem epsum bla bl bla lorem epsum bla bla bla lorem epsum bla bla",
    image: image2,
  },
  {
    name: "Bla Bla 3 Classes",
    description:
      "orem epsum bla bla bla lorm epsum bla bla bla lorem epsum bla bla",
    image: image3,
  },
  {
    name: "Bla Bla 4 Classes",
    description:
      "orem epsum bla bla bla lorem epsu bla bla bla lorem epsum bla bla",
    image: image4,
  },
  {
    name: "Bla Bla 5 Classes",
    description:
      "orem epsm bla bla bla lorem epsum bla bla bla lorem epsum bla bla",
    image: image5,
  },
  {
    name: "Bla Bla 6 Classes",
    description:
      "orem epsum bla bla bla lorem epsum bla bla bla lorem epsu bla bla",
    image: image6,
  },
];

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section className="w-full bg-primary-100 py-40" id="ourclasses">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>Our Classes</HText>
            <p className="py-5">
              orem epsum bla bla bla lorem epsum bla bla bla lorem epsum bla bla
              bla lorem epsum bla bla bla lorem epsum bla bla bla lorem epsum
              bla bla blalorem epsum bla bla bla lorem epsum bla bla bla lorem
              epsum bla bla bla lorem epsum bla bla bla lorem epsum bla bla bla
              lorem epsum bla bla bla
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.15, duration: 0.75 }}
          variants={{
            hidden: { opacity: 0, x: -65 },
            visible: { opacity: 1, x: 0 },
          }}
          className="mt-10 h-[350px] w-full overflow-x-auto overflow-y-hidden"
        >
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75 }}
            variants={container}
            className="w-[2800] whitespace-nowrap"
          >
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
