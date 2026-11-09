import pfp from "../../src/assets/pfp.jpg";

export function Introduction() {
  return (
    <div className="mt-10 px-5">
      <div className="flex flex-row my-2">
        <span className="text-2xl lg:text-6xl">
          Hi, I am <span className="font-bold">Stepan</span>
        </span>
        <img
          className="h-20 w-20 shrink-0 rounded-full object-cover object-center border-2 border-slate-300 shadow-sm mr-auto ml-25"
          src={pfp}
          alt="Stepan's profile photo"
        />
      </div>
      <p className="lg:text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
}
