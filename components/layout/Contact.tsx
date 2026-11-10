import { RoughNotation } from "react-rough-notation";
import { NotationViewRender } from "../../lib/utils/useInViewOnce";

export function Contact() {
  const [emailRef, emailVisible] = NotationViewRender<HTMLDivElement>();
  const [headingRef, headingVisible] = NotationViewRender<HTMLSpanElement>();

  return (
    <section className="mt-15 lg:mt-7" id="contact">
      <RoughNotation
        type="underline"
        show={headingVisible}
        animationDuration={800}
        color="#e05a5a"
      >
        <span ref={headingRef} className="text-5xl font-semibold lg:text-6xl">Contact me</span>
      </RoughNotation>
      <span className="mt-3 block text-2xl leading-relaxed italic lg:text-xl">
        Want to send me an email? Here
      </span>
      <div ref={emailRef} className="my-12 flex flex-row justify-center lg:my-6">
        <RoughNotation
          type="circle"
          show={emailVisible}
          animationDuration={800}
          animationDelay={1200}
          padding={15}
          color="rgb(255,0,0)"
        >
          <span className="break-all text-2xl font-bold lg:text-2xl">fedsg2007@gmail.com</span>
        </RoughNotation>
      </div>

      <div className="mt-10 flex flex-row gap-5 lg:mt-0 lg:gap-5">
        <a className="underline font-black">GitHub</a>
        <a className="underline font-black">LinkedIn</a>
      </div>
    </section>
  );
}
