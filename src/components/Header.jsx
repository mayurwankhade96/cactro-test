import logo from "../assets/company-logo/logo.png";
import downArrow from "../assets/icons/icon_chevron_black_nav.svg";

export const Header = () => {
  return (
    <header className="px-8 py-4">
      <nav className="flex justify-between text-[15px]">
        <div className="flex items-center gap-6">
          <img src={logo} alt="Company logo" width={100} />
          <ul className="flex items-center gap-6 font-bold text-[#1d1d1d]">
            <li className="flex items-center gap-2">
              Product <img src={downArrow} alt="Down Arrow Icon" />
            </li>
            <li>Enterprise</li>
            <li>Resources</li>
            <li>Pricing</li>
          </ul>
        </div>

        <ul className="flex items-center gap-6 font-bold text-[#1d1d1d]">
          <li>
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m18.78 17.72c.1467.1467.22.3233.22.53 0 .2133-.0733.39-.22.53-.16.1467-.3367.22-.53.22-.2067 0-.3833-.0733-.53-.22l-4.47-4.47c-.6667.54-1.4067.9567-2.22 1.25-.8067.2933-1.65.44-2.53.44-1.36 0-2.61333-.3367-3.76-1.01s-2.05667-1.5833-2.73-2.73-1.01-2.4-1.01-3.76.33667-2.61333 1.01-3.76 1.58333-2.05667 2.73-2.73 2.4-1.01 3.76-1.01 2.6133.33667 3.76 1.01 2.0567 1.58333 2.73 2.73 1.01 2.4 1.01 3.76c0 .88-.1467 1.7267-.44 2.54-.2933.8067-.71 1.5433-1.25 2.21zm-10.28-3.22c1.08667 0 2.0867-.27 3-.81.92-.54 1.65-1.2667 2.19-2.18.54-.92.81-1.92333.81-3.01s-.27-2.08667-.81-3c-.54-.92-1.27-1.65-2.19-2.19-.9133-.54-1.91333-.81-3-.81s-2.09.27-3.01.81c-.91333.54-1.64 1.27-2.18 2.19-.54.91333-.81 1.91333-.81 3s.27 2.09.81 3.01c.54.9133 1.26667 1.64 2.18 2.18.92.54 1.92333.81 3.01.81z"
                stroke="#000"
                stroke-width=".5"
              ></path>
            </svg>
          </li>
          <li>Sign in</li>
          <li>
            <button className="rounded-sm border border-solid border-[#611f69] px-4 py-3 text-sm text-[#611f69]">
              TALK TO SALES
            </button>
          </li>
          <li>
            <button className="rounded-sm bg-[#611f69] px-4 py-3 text-sm text-white">
              TRY FOR FREE
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
