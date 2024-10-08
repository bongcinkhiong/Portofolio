import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import BarLogo from '@/Components/BarLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from "react-icons/hi";

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <nav className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
                {/* <Barlogo className=""/> */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                {/* <Link href="/"> */}
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
                                {/* </Link> */}
                            </div>

                            <div className="hidden items-center text-xl text-white space-x-8 sm:-my-px sm:ms-4 sm:flex">
                                    Portofolio
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ms-6">
                            <div className="ms-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {user.name}

                                                <svg
                                                    className="ms-2 -me-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-me-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                    {/* <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
                            Dashboard
                        </ResponsiveNavLink>
                    </div> */}

                    <div className="pt-2 pb-3 space-y-1">
                        <Sidebar aria-label="Sidebar with multi-level dropdown example">
                                <Sidebar.Items>
                                    <Sidebar.ItemGroup>
                                        <Sidebar.Item href="#" icon={HiChartPie}>
                                            <NavLink href={route('admin.dashboard')} active={route().current('admin.dashboard')} icon={HiChartPie}>
                                                    Dashboard
                                                </NavLink>
                                            </Sidebar.Item>

                                            <Sidebar.Collapse icon={HiShoppingBag} label="E-commerce">
                                                <Sidebar.Item href="#">Products</Sidebar.Item>
                                                <Sidebar.Item href="#">Sales</Sidebar.Item>
                                                <Sidebar.Item href="#">Refunds</Sidebar.Item>
                                                <Sidebar.Item href="#">Shipping</Sidebar.Item>
                                            </Sidebar.Collapse>

                                            <Sidebar.Item href="#" icon={HiInbox}>
                                                Inbox
                                            </Sidebar.Item>
                                            <Sidebar.Item href="#" icon={HiUser}>
                                                Users
                                            </Sidebar.Item>
                                            <Sidebar.Item href="#" icon={HiShoppingBag}>
                                                Products
                                            </Sidebar.Item>
                                            <Sidebar.Item href="#" icon={HiArrowSmRight}>
                                                Sign In
                                            </Sidebar.Item>
                                            <Sidebar.Item href="#" icon={HiTable}>
                                                Sign Up
                                            </Sidebar.Item>
                                        </Sidebar.ItemGroup>
                                    </Sidebar.Items>
                                </Sidebar>
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200 dark:border-gray-600">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800 dark:text-gray-200">{user.name}</div>
                            <div className="font-medium text-sm text-gray-500">{user.email}</div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
                            <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="hidden sm:flex sm:items-center
                fixed top-15 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
                <Sidebar aria-label="Sidebar with multi-level dropdown example">
                        <Sidebar.Items>
                            <Sidebar.ItemGroup>
                                <Sidebar.Item href="#" icon={HiChartPie}>
                                    <NavLink href={route('admin.dashboard')} active={route().current('admin.dashboard')} icon={HiChartPie}>
                                        Dashboard
                                    </NavLink>
                                </Sidebar.Item>

                                <Sidebar.Collapse icon={HiShoppingBag} label="E-commerce">
                                    <Sidebar.Item href="#">Products</Sidebar.Item>
                                    <Sidebar.Item href="#">Sales</Sidebar.Item>
                                    <Sidebar.Item href="#">Refunds</Sidebar.Item>
                                    <Sidebar.Item href="#">Shipping</Sidebar.Item>
                                </Sidebar.Collapse>

                                <Sidebar.Item href="#" icon={HiInbox}>
                                    Inbox
                                </Sidebar.Item>
                                <Sidebar.Item href="#" icon={HiUser}>
                                    Users
                                </Sidebar.Item>
                                <Sidebar.Item href="#" icon={HiShoppingBag}>
                                    Products
                                </Sidebar.Item>
                                <Sidebar.Item href="#" icon={HiArrowSmRight}>
                                    Sign In
                                </Sidebar.Item>
                                <Sidebar.Item href="#" icon={HiTable}>
                                    Sign Up
                                </Sidebar.Item>
                            </Sidebar.ItemGroup>
                        </Sidebar.Items>
                </Sidebar>
            </div>

            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border rounded-lg dark:border-gray-700">
                    <div className="">
                        {header && (
                            <header className="bg-white dark:bg-gray-800 shadow">
                                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                            </header>
                        )}

                        <main>
                            {children}
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}

