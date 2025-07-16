import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <section className="mt-10 relative overflow-hidden bg-gray-100 border-gray-600 py-10 dark:text-gray-200 dark:bg-gray-900 dark:border-t-1 dark:border-gray-200">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo width="100px" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  &copy; Copyright 2023. All Rights Reserved by Nitin Sharma.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500 dark:text-gray-300">
                Quick Links
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-900  dark:text-gray-500 hover:text-gray-700  dark:hover:text-gray-200"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-900  dark:text-gray-500 hover:text-gray-700  dark:hover:text-gray-200"
                    to="/all-posts"
                  >
                    All Posts
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-900  dark:text-gray-500 hover:text-gray-700  dark:hover:text-gray-200"
                    to="/add-post"
                  >
                    Add a post
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-gray-900 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-200"
                    to="/profile"
                  >
                    Account
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500 dark:text-gray-300">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-900 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-200"
                    to="/profile"
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-900 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-200"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-900 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-200"
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-gray-900 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-200"
                    to="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500 dark:text-gray-300">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-900 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-200"
                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-900 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-200"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-gray-900 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-200"
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
