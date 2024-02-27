import Snowfall from "react-snowfall"

function Header() {
  return (
    <header className=" w-full lg:h-[400px] h-[300px] flex items-center justify-center bg-cover bg-no-repeat bg-center bg-[url('https://coffe-app-jade.vercel.app/images/bg-cafe.jpg')]">
      <Snowfall snowflakeCount={50} />
    </header>
  )
}

export default Header
