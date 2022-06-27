import Main from "./Main"
import Sidemenu from "./Sidemenu"

const Layout = () => {
  return (
    <div className="mt-16 flex  w-full min-h-full ">
      <Sidemenu />
      <Main />
    </div>
  )
}
export default Layout
