import watch_main from "../assets/m1.png";
export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-black to-gray-900 text-white px-8 py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">
        <div className="flex flex-col gap-8 p-8 bg-gradient-to-br from-gray-900/80 to-gray-800/60 rounded-2xl shadow-xl backdrop-blur-md">
          <h2 className="text-2xl md:text-3xl font-extrabold leading-snug tracking-tight text-amber-400 drop-shadow-lg">
            Elevate Your Fitness Journey <br /> <span className="text-white">with TimeCraft</span>
          </h2>
          <p className="mt-2 text-base text-gray-200 max-w-md">
            Discover smartwatches built for <span className="font-semibold text-amber-300">athletes</span>, <span className="font-semibold text-amber-300">fitness enthusiasts</span>, and anyone striving for a healthier lifestyle. Track your <span className="font-semibold text-amber-300">workouts</span>, monitor your <span className="font-semibold text-amber-300">heart rate</span>, and stay motivated every step of the way.
          </p>
          <div>
            <button className="group relative inline-flex items-center gap-3 px-8 py-3 bg-amber-500 text-black font-bold rounded-full shadow-lg transition-all duration-300 hover:bg-amber-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-400">
              <span>Start Your Fitness Adventure</span>
              <svg className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>


        <div className="flex justify-center">
          <img
            src={watch_main}
            alt="watch"
            className="w-180 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
