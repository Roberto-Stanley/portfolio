import Text from "./components/Text/Index";

export default function Home() {
  return (
    <div>
      <main>
        <section className="w-full h-[52rem] bg-[url('/img/background-hero.jpg')] bg-no-repeat bg-cover bg-center">
          <div className="flex h-full w-full bg-black bg-opacity-50 items-center flex-col justify-center backdrop-blur-sm">
            <div className="flex items-center space-x-1">
              <h1 className="text-white text-4xl font-medium font-fireCode mb-6 tracking-widest overflow-hidden whitespace-nowrap border-r-4 animate-typing">
                Roberto Reyes
              </h1>
              {/* <span className="text-xl font-bold border-r-4 border-black animate-blink "></span> */}
            </div>

            {/* TODO: update the correct color */}
            <h3 className="leading-5 text-2xl text-[#ffffffb3]">
              Get ready to turn your
              <span className="font-rougeScript text-4xl"> ideas </span> into
              <span className="font-rougeScript text-4xl"> reality </span>
            </h3>
          </div>
        </section>
        <section className="mb-48">
          <div className="pt-12 max-w-screen-xl mx-auto">
            <article>
              <header className="mb-8">
                <Text type="title" className="mb-2 text-white">
                  Roberto Reyes
                </Text>
                <Text type="sub-title">Full stack developer</Text>
              </header>
              <main>
                <Text type="sub-title" className="text-white">
                  I am passionate about building excellent software that
                  improves the lives of those around me. I specialize in
                  creating software for clients ranging from individuals and
                  small-businesses all the way to large enterprise corporations.
                  What would you do if you had a software expert available at
                  your fingertips?
                </Text>
              </main>
              <footer>
                <button type="button">Mis Proyectos</button>
              </footer>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
