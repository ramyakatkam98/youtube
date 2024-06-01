import { logo_url } from "./utils/constants"
import { hamburger_url } from "./utils/constants"
import { notifi_logo } from "./utils/constants"
import { profile_logo } from "./utils/constants"
const Header = () => {
  return (
    <div className=" h-14 shadow-md">
        <div className=" flex justify-between">
        <div className="flex">
        <img className=" h-8 w-8 m-4 " src={hamburger_url}
         alt='hamburger menu' />
        <img className=' h-8 w-14 my-4 mx-2 ' src={logo_url} alt="logo" />
        </div>
        <input className=" h-[40px] w-[500px] p-1 pl-4 rounded-full border border-gray-400" type="text" placeholder="Search..." />
        <div className=" flex ">
        <img className=" h-[50px] w-[40px] mx-2" src={notifi_logo} alt="notification logo" />
        <img className=" h-[50px] w-[40px]" src={profile_logo} alt="profile logo" />
        </div>
        </div>
    </div>
  )
}

export default Header