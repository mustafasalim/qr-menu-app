import { useLocation } from "react-router-dom"
import React from "react"

function TitleHeader() {
  let location = useLocation()
  React.useEffect(() => {
    // Google Analytics
  }, [location])

  const title = () => {
    switch (location.pathname) {
      case "/admin/dashboard/products":
        return "Ürünler"
      case "/admin/dashboard/users":
        return "Kullanıcılar"
      case "/admin/dashboard/performans":
        return "Performans"
      case "/admin/dashboard/Blog":
        return "Blog"

      default:
        return "dashboard"
    }
  }

  return (
    <section className="w-full h-[150px]  flex items-center justify-center t p-10">
      <div className="lg:w-[1200px]">
        <h1 className="text-[24px] font-semibold text-[#212b36]">{title()}</h1>
      </div>
    </section>
  )
}

export default TitleHeader
