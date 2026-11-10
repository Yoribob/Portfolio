import { RoughNotation } from "react-rough-notation";

export function Introduction() {
  return (
    <section className="mt-10 relative my-2 flex flex-col">
        <span className="text-3xl lg:text-6xl">
          Hi, I am{" "}
          <RoughNotation
            type="underline"
            show
            color="#ffc400"
            strokeWidth={2}
            padding={-7}
          >
            <span className="font-bold">Stepan</span>
          </RoughNotation>
        </span>
        <p className="mt-3 pr-15 text-xl lg:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <img
          className="absolute bottom-6 mr-auto ml-70 h-20 w-20 shrink-0 rounded-full border-2 border-slate-300 object-cover object-center shadow-sm"
          src="../../src/assets/pfp.jpg"
          alt=" Profile photo"
        />
    </section>
  );
}
