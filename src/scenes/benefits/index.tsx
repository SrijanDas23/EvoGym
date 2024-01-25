import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  AcademicCapIcon,
  HomeModernIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "lorem epsum bla bla bla lorem epsum bla bla bla lorem epsum bla bla bla",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Hundreds of Diverse Classes",
    description:
      "lorem epsum bla bla bla lorem epsum bla bla bla lorem epsum bla bla bla",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "lorem epsum bla bla bla lorem epsum bla bla bla lorem epsum bla bla bla",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Benefits({ setSelectedPage }: Props) {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:my-5 md:w-3/5"
        >
          <HText>More Than Just a Gym!</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>

        {/* benefits */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75 }}
          variants={container}
          className="mt-5 items-center justify-between gap-8 md:flex"
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* Graphics and description */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* Graphic */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.75 }}
            variants={{
              hidden: { opacity: 0, x: -75 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex basis-4/5 justify-center md:z-10 md:mr-auto md:mt-10 md:h-[30rem] md:justify-items-end"
          >
            <img
              className="mx-auto"
              alt="benefits-page-graphic"
              src={BenefitsPageGraphic}
            />
          </motion.div>

          {/* Description */}
          <div>
            {/* title */}
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    Millions of Happy Members Getting{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                lorem epsum bla bla bla lorem epsum bla bla bla lorem epsum bla
                bla bla lorem epsum bla bla bla lorem epsum bla bla bla lorem
                epsum bla bla blalorem epsum bla bla bla lorem epsum bla bla bla
                lorem epsum bla bla bla lorem epsum bla bla bla lorem epsum bla
                bla bla lorem epsum bla bla bla
              </p>
              <p className="mb-5">
                lorem epsum bla bla bla lorem epsum bla bla bla lorem epsum bla
                bla bla lorem epsum bla bla bla lorem epsum bla bla bla lorem
                epsum bla bla blalorem epsum bla bla bla lorem epsum bla bla bla
                lorem epsum bla bla bla lorem epsum bla bla bla lorem epsum bla
                bla bla lorem epsum bla bla bla
              </p>
            </motion.div>

            {/* button */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Benefits;
