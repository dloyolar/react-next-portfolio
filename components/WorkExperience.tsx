import { motion } from 'framer-motion';
import { ExperienceCard } from './ExperienceCard';
type Props = {};

export const WorkExperience = ({}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen flex overflow-hidden flex-col text-left max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="mt-10 uppercase tracking-[20px] text-gray-500 text-2xl">Experience</h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
};
