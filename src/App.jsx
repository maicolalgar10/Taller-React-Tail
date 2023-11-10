import Familia from "./components/Familia";
import Logo from "./components/Logo";

const App = () => {
    return (
        <div className="bg bg-contain bg-no-repeat bg-white min-h-screen">
            <header className="container mx-auto px-4">
                <div className="flex justify-between pt-8">
                    <button className="px-20">
                        <Logo />
                    </button>
                    <div className="flex justify-between gap-4 px-20">
                        <button className="grow text-gray-600 text-sm">
                            HOW WE WORK
                        </button>
                        <button className="grow text-gray-600 text-sm">
                            BLOG
                        </button>
                        <button className="grow text-gray-600 text-sm">
                            ACCOUNT
                        </button>
                        <button className="border">
                            VIEW PLANS
                        </button>
                    </div>
                </div>

            </header>

            <main className="bg-blue-950 mt-5 ">
            <article className="flex gap-4 border-b border-b-gray-400 px-4 py-4">
            
            <p className="grow text-white text-sm">Humanity</p>
            
              <Familia/>
            
          </article>
            </main>
        </div>
    )
}
export default App;