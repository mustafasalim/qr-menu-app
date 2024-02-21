import About from "../../../components/About"
import Toggle from "../../../components/ui/toggle"

function Header() {
  return (
    <header className="w-full gap-y-2  relative h-[400px] lg:h-[600px] flex flex-col items-center justify-center bg-cover bg-no-repeat bg-center bg-[url('https://coffe-app-jade.vercel.app/images/bg-cafe.jpg')]">
      <About />
      <div>
        <Toggle imgUrl="https://images.freeimages.com/vhq/images/previews/ad0/blue-snowflake-icon-psd-392545.jpg" />
      </div>
    </header>
  )
}

export default Header
