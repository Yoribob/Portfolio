import { RoughNotation } from "react-rough-notation";
import { generateBorder } from "../../lib/utils/generateBorder";
import { NotationViewRender } from "../../lib/utils/useInViewOnce";
import { useEffect, useState } from "react";
export function AboutMe() {
  const [radius, setRadius] = useState(generateBorder);
  const [tilt, setTilt] = useState(() => Math.random() * 2 - 2);
  const [headingRef, headingVisible] = NotationViewRender<HTMLSpanElement>();

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setRadius(generateBorder());
      setTilt(Math.random() * 2 - 2);
    }, Math.random() * (3000 - 1000) + 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="mt-20 lg:mt-10" id="about">
      <RoughNotation
        type="underline"
        show={headingVisible}
        animationDuration={800}
        animationDelay={300}
        color="#e05a5a"
      >
        <span ref={headingRef} className="text-5xl font-semibold lg:text-6xl">About me</span>
      </RoughNotation>

      <div className="relative mt-7 flex flex-row items-start">
        <p className="w-[calc(70%-0.75rem)] text-xl leading-relaxed lg:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec
          turpis a eros finibus lacinia. Aenean quis lorem in sapien porta
          commodo. Integer nec vestibulum nulla, quis ornare odio. Maecenas
          gravida porttitor metus, vitae condimentum nulla rhoncus nec. Aenean
          convallis lectus sed turpis tempus, quis dapibus tellus cursus.
          Maecenas sit amet risus sit amet orci posuere elementum vel vitae
          lorem. Mauris magna libero, tincidunt sed elit iaculis
        </p>
        <div
          className="relative h-full w-[calc(35%-0.75rem)] bg-[#fffdf5] p-0"
          style={{ rotate: `${tilt}deg` }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 border-[2.5px] border-slate-800 [filter:url(#wobble)]"
            style={{ borderRadius: radius }}
          />
          <img
            src="../../src/assets/dog.jpg"
            className="h-36 w-full rounded object-cover lg:h-30"
          ></img>
        </div>
      </div>
    </section>
  );
}
