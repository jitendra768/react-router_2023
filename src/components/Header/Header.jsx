import { Link, NavLink } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <NavLink
              to="login"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </NavLink>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b
                     border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"about"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b
                     border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"contact"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b
                     border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"github"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b
                     border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Github
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"register"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b
                     border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Registration
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"usestatewithobject"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b
                     border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  UseState with Object
                </NavLink>
              </li>

              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    React Topics
                    <ChevronDownIcon
                      className="-mr-1 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-5">
                      <Menu.Item>
                        <NavLink
                          to={"renderList"}
                          className={({ isActive }) =>
                            `block py-2 pr-4 pl-3 duration-200 ${
                              isActive ? "text-orange-700" : "text-gray-700"
                            } border-b
                     border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                          }
                        >
                          RenderList
                        </NavLink>
                      </Menu.Item>
                      <Menu.Item>
                        <NavLink
                          to={"context"}
                          className={({ isActive }) =>
                            `block py-2 pr-4 pl-3 duration-200 ${
                              isActive ? "text-orange-700" : "text-gray-700"
                            } border-b
                     border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                          }
                        >
                          Context Api
                        </NavLink>
                      </Menu.Item>
                      
                      <Menu.Item>
                        <NavLink
                          to={"event"}
                          className={({ isActive }) =>
                            `block py-2 pr-4 pl-3 duration-200 ${
                              isActive ? "text-orange-700" : "text-gray-700"
                            } border-b
                     border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                          }
                        >
                          Events
                        </NavLink>
                      </Menu.Item>
                      <Menu.Item>
                        <NavLink
                          to={"state"}
                          className={({ isActive }) =>
                            `block py-2 pr-4 pl-3 duration-200 ${
                              isActive ? "text-orange-700" : "text-gray-700"
                            } border-b
                     border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                          }
                        >
                          State
                        </NavLink>
                      </Menu.Item>
                      <Menu.Item>
                        <NavLink
                          to={"useState"}
                          className={({ isActive }) =>
                            `block py-2 pr-4 pl-3 duration-200 ${
                              isActive ? "text-orange-700" : "text-gray-700"
                            } border-b
                     border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                          }
                        >
                          UseState
                        </NavLink>
                      </Menu.Item>
                      <Menu.Item>
                        <NavLink
                          to={"useEffect"}
                          className={({ isActive }) =>
                            `block py-2 pr-4 pl-3 duration-200 ${
                              isActive ? "text-orange-700" : "text-gray-700"
                            } border-b
                     border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                          }
                        >
                          UseEffectHooks
                        </NavLink>
                      </Menu.Item>
                      <Menu.Item>
                        <NavLink
                          to={"useRef"}
                          className={({ isActive }) =>
                            `block py-2 pr-4 pl-3 duration-200 ${
                              isActive ? "text-orange-700" : "text-gray-700"
                            } border-b
                     border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                          }
                        >
                          UseRefHook
                        </NavLink>
                      </Menu.Item>
                      <Menu.Item>
                        <NavLink
                          to={"useMemo"}
                          className={({ isActive }) =>
                            `block py-2 pr-4 pl-3 duration-200 ${
                              isActive ? "text-orange-700" : "text-gray-700"
                            } border-b
                     border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                          }
                        >
                          UseMemoHooks
                        </NavLink>
                      </Menu.Item>
                      <Menu.Item>
                        <NavLink
                          to={"propDrilling"}
                          className={({ isActive }) =>
                            `block py-2 pr-4 pl-3 duration-200 ${
                              isActive ? "text-orange-700" : "text-gray-700"
                            } border-b
                     border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                          }
                        >
                          PropDriling
                        </NavLink>
                      </Menu.Item>
                      <Menu.Item>
                        <NavLink
                          to={"context1"}
                          className={({ isActive }) =>
                            `block py-2 pr-4 pl-3 duration-200 ${
                              isActive ? "text-orange-700" : "text-gray-700"
                            } border-b
                     border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                          }
                        >
                          Context Api
                        </NavLink>
                      </Menu.Item>
                      <Menu.Item>
                        <NavLink
                          to={"useContext"}
                          className={({ isActive }) =>
                            `block py-2 pr-4 pl-3 duration-200 ${
                              isActive ? "text-orange-700" : "text-gray-700"
                            } border-b
                     border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                          }
                        >
                          UseCOntext Hooks
                        </NavLink>
                      </Menu.Item>
                      <Menu.Item>
                        <NavLink
                          to={"callback"}
                          className={({ isActive }) =>
                            `block py-2 pr-4 pl-3 duration-200 ${
                              isActive ? "text-orange-700" : "text-gray-700"
                            } border-b
                     border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                          }
                        >
                          UseCallback Hooks
                        </NavLink>
                      </Menu.Item>
                      <Menu.Item>
                        <NavLink
                          to={"control"}
                          className={({ isActive }) =>
                            `block py-2 pr-4 pl-3 duration-200 ${
                              isActive ? "text-orange-700" : "text-gray-700"
                            } border-b
                     border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                          }
                        >
                          controled components
                        </NavLink>
                      </Menu.Item>

                      <Menu.Item>
                        <NavLink
                          to={"uncontrol"}
                          className={({ isActive }) =>
                            `block py-2 pr-4 pl-3 duration-200 ${
                              isActive ? "text-orange-700" : "text-gray-700"
                            } border-b
                     border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                          }
                        >
                        uncontroled components
                        </NavLink>
                      </Menu.Item>
                      <Menu.Item>
                        <NavLink
                          to={"liftingState"}
                          className={({ isActive }) =>
                            `block py-2 pr-4 pl-3 duration-200 ${
                              isActive ? "text-orange-700" : "text-gray-700"
                            } border-b
                     border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                          }
                        >
                        Liftingup State
                        </NavLink>
                      </Menu.Item>
                      <form method="POST" action="#">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="submit"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block w-full px-4 py-2 text-left text-sm"
                              )}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </form>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
