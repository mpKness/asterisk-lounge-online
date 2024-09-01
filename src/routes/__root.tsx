import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <div className="flex flex-col justify-start w-screen min-h-screen">
      <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
        <div className='mb-2 sm:mb-0'>
          <Link to="/" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">
            Home
          </Link>
        </div>
        <div className="text-2xl font-bold text-blue-600">
          The Asterisk Lounge
        </div>
        <div>
          <Link to="/about" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">
            About
          </Link>
          <Link to="/chat" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">
            Chat
          </Link> 
          <Link to="/flgs" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">
            FLGS
          </Link>
        </div>
      </nav>
      <hr />
      <Outlet />
      {import.meta.env.MODE === "development" ? <TanStackRouterDevtools /> : null}
    </div>
  ),
})
