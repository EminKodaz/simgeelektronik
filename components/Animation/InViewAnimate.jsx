import { useRef } from "react";
import { useInView } from "framer-motion";
//* props ex:  translate = "translateY(-300px)"

function InviewAnimate({ children, className, translate, bezier }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className={className}>
      <div
        className=""
        style={{
          transform: isInView ? "none" : translate,
          opacity: isInView ? 1 : 0,
          transition: bezier,
        }}
      >
        {children}
      </div>
    </section>
  );
}

export default InviewAnimate;
