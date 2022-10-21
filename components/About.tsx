import { motion } from 'framer-motion';

type Props = {};

export const About = ({}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col relative text-center md:text-left md:flex-row h-screen max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="https://ca.slack-edge.com/T08D67804-U01QF5PSYBF-83ec15698dbf-512"
        className="-mb-32 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a <span className="underline decoration-[#e35f45]/50">little</span> background
        </h4>

        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione veniam hic delectus
          ipsam. Veritatis eum mollitia delectus unde, natus, ipsam qui deserunt, consequuntur
          voluptatum porro sunt necessitatibus nihil itaque odit! Modi soluta ea nihil dicta dolor
        </p>
      </div>
    </motion.div>
  );
};
