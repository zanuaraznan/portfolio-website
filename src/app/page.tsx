import Image from "next/image";

const Home = () => {
  return (
    <>
      <section id="about">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full space-y-6 rounded-2xl bg-white/35 dark:bg-zinc-700/50 p-6 backdrop-blur-md">
            <h1 className="text-6xl md:text-8xl font-semibold">Zanuar Rasyidin</h1>
            <p className="text-justify text-lg">
              Hai, gue Zanuar, fresh graduate DKV yang sekarang fokus jadi full-stack web developer. Siap bikin solusi
              digital dari desain UI sampai coding yang nyambung banget. Mau tahu lebih?
            </p>
            <button className="p-4 px-6 font-bold rounded-full bg-slate-600 text-gray-100">Download CV</button>
          </div>
          <div className="w-full rounded-2xl overflow-hidden">
            <Image src="/profile.jpg" width={1920} height={1080} alt="Zanuar Rasyidin" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
