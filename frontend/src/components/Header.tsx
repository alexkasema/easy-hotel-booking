import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";

const Header = () => {

  const { isLoggedIn } = useAppContext();
  return (
    <header className="py-6 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between">
      <div className=" flex justify-between items-center w-full">
        <span className="text-3xl font-black text-tertiary-dark tracking-tight">
          <Link to="/">EasyHotel Bookings</Link>
        </span>
        <span className="flex items-center space-x-6">
          {isLoggedIn ? (
            <>
              <Link
                className="font-bold hover:-translate-y-2 duration-500 transition-all"
                to="/my-bookings"
              >
                My Bookings
              </Link>
              <Link
                className="font-bold hover:-translate-y-2 duration-500 transition-all"
                to="/my-hotels"
              >
                My Hotels
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              to="/sign-in"
              className="btn-primary"
            >
              Sign In
            </Link>
           )}
        </span>
      </div>
    </header>
  )
}

export default Header;