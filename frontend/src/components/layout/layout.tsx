import { Outlet } from "react-router-dom"
import { NavBar } from "../navBar/navBar"
import { Footer } from "../footer/footer"

export const Layout=() => {
  return (
    <>
    <NavBar/>
    <Outlet />
    <Footer />
    </>
  )
}
export default Layout