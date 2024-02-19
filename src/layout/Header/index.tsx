import About from "../../components/About"
import Toggle from "../../components/toggle"

function Header() {
  return (
    <header className="w-full gap-y-2  relative h-[400px] lg:h-[600px] flex flex-col items-center justify-center bg-cover bg-no-repeat bg-center bg-[url('https://coffe-app-jade.vercel.app/images/bg-cafe.jpg')]">
      <About />
      <div>
        <Toggle title="Snow" />
      </div>
    </header>
  )
}

export default Header
