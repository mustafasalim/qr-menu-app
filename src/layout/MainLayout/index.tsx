import { Outlet } from "react-router-dom"
import Menu from "../../components/container/Menu"
import { menu } from "../../constant/menu"
import Footer from "./footer"
import Header from "./Header"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../store/store"
import { _backgroundColor, _color } from "../../store/apperance"
import Toggle from "../../components/ui/toggle"
import Loading from "../../components/ui/loading"

function MainLayout() {
  const apperance = useSelector((state: RootState) => state.apperanceSlice)
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--background-primary",
      apperance.backgroundColor.primary
    )
    document.documentElement.style.setProperty(
      "--background-third",
      apperance.backgroundColor.third
    )
    document.documentElement.style.setProperty(
      "--background-secondary",
      apperance.backgroundColor.secondary
    )

    document.documentElement.style.setProperty(
      "--color-primary",
      apperance.color.primary
    )
    document.documentElement.style.setProperty(
      "--color-secondary",
      apperance.color.secondary
    )
  }, [apperance])
  const dispatch = useDispatch<AppDispatch>()
  const theme = useSelector(
    (state: RootState) => state.apperanceSlice.backgroundColor.name
  )
  const handleChangeTheme = () => {
    if (theme === "dark") {
      dispatch(
        _backgroundColor({
          name: "light",
          primary: "#ffffff",
          secondary: "#EAEAF2",
          third: "#EAEAF2",
        })
      )

      dispatch(
        _color({
          primary: "#111315",
        })
      )
    } else {
      dispatch(
        _backgroundColor({
          name: "dark",
          primary: "#111315",
          secondary: "#FEF7EE",
          third: "#1B1D1F",
        })
      )

      dispatch(
        _color({
          primary: "#FEF7EE",
        })
      )
    }
  }

  return (
    <section className="bg-[color:var(--background-primary)] relative">
      <Header />
      <Menu menuTitle={menu} />
      <Outlet />
      <Footer />
      <div className=" bottom-0 left-2  fixed">
        <Toggle
          onChange={() => handleChangeTheme()}
          variant="danger"
          label={theme}
        ></Toggle>
      </div>
    </section>
  )
}
export default MainLayout
