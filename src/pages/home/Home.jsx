import { NavLink, Outlet } from "react-router";
import Header from "../../components/Header";


export default function Home() {
  return (
    <div>
      <Header />

      <h1 clasName="text-3xl font-bold">This is home page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi exercitationem reprehenderit, sit nisi esse optio animi atque voluptas assumenda eos reiciendis. Placeat qui et perspiciatis cupiditate magnam impedit maiores.

      </p>
     
      <nav>
        <NavLink to={'/'}>Page1</NavLink>
        <NavLink to={'/Page-2'}>Page2</NavLink>
      </nav>
       <Outlet />
    </div>
  )
}
