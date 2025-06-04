import "./App.css";

function App() {
  return (
    <div className="flex flex-col px-3 items-center text-[3rem] text-shadow-sm/30 gap-5 text-slate-950 font-semibold text-museo relative z-10">
      <img
        src="/bow.svg"
        alt="Logo"
        className="size-50 -mt-9 -mb-5 stroke-2 relative z-10"
      />
      <div className="text-shadow-xs/30 relative z-10">Pozivamo Vas na</div>
      <div className="text-minnie text-minniec mt-3 text-6xl font-semibold relative z-10">
        Rosanin
      </div>
      <div className="text-shadow-xs/30 relative z-10">
        <span className="text-xl -ml-10">(veliki)</span>{" "}
        <span className="text-minnie text-minniec text-shadow-sm/30 -ml-2 text-4xl font-semibold">
          prvi
        </span>{" "}
        <span className="">rođendan!</span>
      </div>
      <div className="flex flex-col justify-between gap-2 w-full max-w-md mt-10 relative">
        <div className="text-playwrite font-semibold text-slate-800 text-xl text-shadow-none h-full bg-white/50 p-4 rounded-xl">
          <div>Vidimo se u</div>
          <div className="pb-2 -mt-2 text-2xl font-bold">
            Martincu Orehovičkom 91
          </div>
          <div className="-mt-1 mb-2">21.06.2025. u <span className="font-bolder">14:00</span> sati</div>
          <div>Veselimo se vašem dolasku!</div>
        </div>
        <a href="https://maps.app.goo.gl/mHn2K9k5czh5nMwa6" target="_blank" rel="noopener noreferrer">
            <img
              src="/gmaps.png"
              alt="test"
              className="w-13 m-auto fixed bottom-5 right-44"
            />
            </a>
        <img src="/1_1.png" alt="test" className="w-30 absolute right-0" />
      </div>
    </div>
  );
}

export default App;
