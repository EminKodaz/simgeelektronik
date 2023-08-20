import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsChevronDown } from 'react-icons/bs';

/**! items props looks like :
 * 
 *   const items = [{
    title: "merhabba",
    content: "benim adım vedat"
  }, {
    title: "merhabba",
    content: "benim adım vedat"
  }, {
    title: "merhabba",
    content: "benim adım vedat"
  }] */

function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="border rounded-xl p-5 pb-10">
      {items.map((item, index) => (
        <div key={index} className="border-b">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full px-4 py-2 flex items-center justify-between "
          >
            <span className="font-medium text-lg text-zinc-600 ">{item.title}</span>
            <span>
              <BsChevronDown size={20} className={`${activeIndex === index ? "rotate-180" : "rotate-0"} duration-200 text-sky-700`} />
            </span>
          </button>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.1 }}
              >
                <p className="p-4 backdrop-blur-md ">{item.content}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
