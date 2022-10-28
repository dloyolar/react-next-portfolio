import { motion } from 'framer-motion';
type Props = {};

export const ExperienceCard = ({}: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-top"
        src="https://uploads-ssl.webflow.com/5e925c42b499e51725d6e19a/62e30e455b5f027245349386_logo%20continuum%20-%20main.svg"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Developer</h4>
        <p className="font-bold text-2xl mt-1">Company</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full "
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full "
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full "
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png"
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-300">Started work... - Ended...</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
};
