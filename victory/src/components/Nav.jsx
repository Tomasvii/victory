export function Nav() {
    return (
        <nav className="w-100 navbar d-flex">
            <div className="w-100 d-flex col-12">
                <div className="col-2 desktop align-center justify-content-end">
                    <div className="amarillo align-self-center d-flex">
                        <div className="d-flex w-75">
                            <a
                                href="https://www.victorygold.net"
                                className="d-flex"
                            >
                                <img
                                    className="logo mx-auto py-1 col-6"
                                    src="/images/icons/logo.svg"
                                    alt="Logo Victory Gold"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-3 mobile align-center justify-content-center">
                    <button
                        className="btn btn-warning blur amarillo align-self-center"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#staticBackdrop"
                        aria-controls="staticBackdrop"
                    >
                        <i className="fa-solid fa-bars"></i>
                    </button>

                    <div
                        className="offcanvas blur offcanvas-start min-vw-100 min-vh-100"
                        data-bs-backdrop="static"
                        tabIndex="-1"
                        id="staticBackdrop"
                        data-bs-scroll="true"
                        aria-labelledby="staticBackdropLabel"
                    >
                        <div className="offcanvas-header col-12 d-flex align-content-center amarillo w-100">
                            <img
                                className="logo-icon-2 mx-1 "
                                src="/images/icons/logo.svg"
                                alt="Logo Victory Gold"
                            />
                            <h3 className="w-100 py-2 mx-3 mt-2">
                                Victory Gold
                            </h3>
                            <button
                                type="button"
                                className="btn-close d-flex align-center text-ce col-3 mx-1 justify-content-center amarillo"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            >
                                <i className="fa-solid fa-x"></i>
                            </button>
                        </div>
                        <div className="offcanvas-body flex-column d-flex justify-content-between">
                            <ul className="nav border-top border-bottom-0 border-warning flex-column">
                                <li className="nav-item mt-4">
                                    <a
                                        className="nav-link"
                                        data-bs-toggle="collapse"
                                        href="#comprar"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample"
                                    >
                                        Comprar ▼
                                    </a>
                                    <div className="collapse" id="comprar">
                                        <div className="card card-body blur amarillo">
                                            <nav className="nav border-bottom-0 flex-column">
                                                <a
                                                    className="nav-link"
                                                    href="https://www.victorygold.net/buy/game/1"
                                                >
                                                    WoW Classic
                                                </a>
                                                <a
                                                    className="nav-link"
                                                    href="https://www.victorygold.net/buy/game/2"
                                                >
                                                    WoW Hardcore
                                                </a>
                                                <a
                                                    className="nav-link"
                                                    href="https://www.victorygold.net/buy/game/3"
                                                >
                                                    WoW WOTLK
                                                </a>
                                                <a
                                                    className="nav-link"
                                                    href="https://www.victorygold.net/buy/game/4"
                                                >
                                                    WoW Retail
                                                </a>
                                                <a
                                                    className="nav-link"
                                                    href="https://www.victorygold.net/buy/game/7"
                                                >
                                                    WoW SoD
                                                </a>
                                                <a
                                                    className="nav-link"
                                                    href="https://www.victorygold.net/buy/game/5"
                                                >
                                                    RuneScape
                                                </a>
                                                <a
                                                    className="nav-link"
                                                    href="https://www.victorygold.net/buy/game/6"
                                                >
                                                    Albion Online
                                                </a>
                                            </nav>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        data-bs-toggle="collapse"
                                        href="#vender"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample"
                                    >
                                        Vender ▼
                                    </a>
                                    <div className="collapse" id="vender">
                                        <div className="card card-body blur amarillo">
                                            <nav className="nav border-bottom-0 flex-column">
                                                <a
                                                    className="nav-link"
                                                    href="https://www.victorygold.net/sell/game/1"
                                                >
                                                    WoW Classic
                                                </a>
                                                <a
                                                    className="nav-link"
                                                    href="https://www.victorygold.net/sell/game/2"
                                                >
                                                    WoW Hardcore
                                                </a>
                                                <a
                                                    className="nav-link"
                                                    href="https://www.victorygold.net/sell/game/3"
                                                >
                                                    WoW WOTLK
                                                </a>
                                                <a
                                                    className="nav-link"
                                                    href="https://www.victorygold.net/sell/game/4"
                                                >
                                                    WoW Retail
                                                </a>
                                                <a
                                                    className="nav-link"
                                                    href="https://www.victorygold.net/sell/game/7"
                                                >
                                                    WoW SoD
                                                </a>
                                                <a
                                                    className="nav-link"
                                                    href="https://www.victorygold.net/sell/game/5"
                                                >
                                                    RuneScape
                                                </a>
                                                <a
                                                    className="nav-link"
                                                    href="https://www.victorygold.net/sell/game/6"
                                                >
                                                    Albion Online
                                                </a>
                                            </nav>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="https://www.victorygold.net/store"
                                    >
                                        Tienda
                                    </a>
                                </li>
                            </ul>
                            <div className="mt-auto justify-content-center d-flex flex-column align-items-center">
                                <div className="header-icons  d-flex gap-4 mx-5">
                                    <a
                                        href="https://discord.gg/CmgugsYFF2"
                                        target="_blank"
                                        className="url"
                                    >
                                        <i className="fa-brands fa-discord header-icon"></i>
                                    </a>
                                    <a
                                        href="https://api.whatsapp.com/send?phone=18126820424&text=Hola%2C%20quisiera%20mas%20informaci%C3%B3n%20de%20Victory%20Gold."
                                        target="_blank"
                                        className="url"
                                    >
                                        <i className="fa-brands fa-whatsapp header-icon"></i>
                                    </a>
                                    <a
                                        href="https://www.facebook.com/victorygold.net"
                                        target="_blank"
                                        className="url"
                                    >
                                        <i className="fa-brands fa-facebook header-icon"></i>
                                    </a>
                                </div>
                                <span className="text-center amarillo">
                                    © Victory LLC all rights reserved.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 d-flex mb-1">
                    <div className="mobile w-100 justify-content-center">
                        <div className="d-flex justify-content-center align-items-center">
                            <a
                                href="https://www.victorygold.net"
                                className="d-flex"
                            >
                                <img
                                    className="logo mx-auto py-1 col-6"
                                    src="/images/icons/logo.svg"
                                    alt="Logo Victory Gold"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="desktop col-12 align-content-center mt-4">
                        <div className="dropdown col-2 d-flex align-content-center">
                            <button
                                className="btn btn-secondary dropdown-toggle w-100 nav-btn"
                                type="button"
                                id="dropdownMenuButton"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                COMPRAR ORO
                            </button>
                            <ul
                                className="dropdown-menu bg-gray"
                                aria-labelledby="dropdownMenuButton"
                            >
                                <li>
                                    <a
                                        className="dropdown-item text-white"
                                        href="https://www.victorygold.net/buy/game/1"
                                    >
                                        WoW Classic
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item text-white"
                                        href="https://www.victorygold.net/buy/game/2"
                                    >
                                        WoW Hardcore
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item text-white"
                                        href="https://www.victorygold.net/buy/game/3"
                                    >
                                        WoW WOTLK
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item text-white"
                                        href="https://www.victorygold.net/buy/game/4"
                                    >
                                        WoW Retail
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item text-white"
                                        href="https://www.victorygold.net/buy/game/7"
                                    >
                                        WoW SoD
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item text-white"
                                        href="https://www.victorygold.net/buy/game/5"
                                    >
                                        RuneScape
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item text-white"
                                        href="https://www.victorygold.net/buy/game/6"
                                    >
                                        Albion Online
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="button col-2 d-flex align-content-center ">
                            <a
                                href="https://www.victorygold.net/store"
                                className="btn btn-secondary w-100 nav-btn d-flex align-items-center justify-content-center"
                                type="button"
                            >
                                TIENDA
                            </a>
                        </div>
                        <div className="dropdown col-2 d-flex align-content-center">
                            <button
                                className="btn btn-secondary dropdown-toggle w-100 nav-btn"
                                type="button"
                                id="dropdownMenuButton2"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                VENDER ORO
                            </button>
                            <ul
                                className="dropdown-menu bg-gray"
                                aria-labelledby="dropdownMenuButton"
                            >
                                <li>
                                    <a
                                        className="dropdown-item text-white"
                                        href="https://www.victorygold.net/sell/game/1"
                                    >
                                        WoW Classic
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item text-white"
                                        href="https://www.victorygold.net/sell/game/2"
                                    >
                                        WoW Hardcore
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item text-white"
                                        href="https://www.victorygold.net/sell/game/3"
                                    >
                                        WoW WOTLK
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item text-white"
                                        href="https://www.victorygold.net/sell/game/4"
                                    >
                                        WoW Retail
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item text-white"
                                        href="https://www.victorygold.net/sell/game/7"
                                    >
                                        WoW SoD
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item text-white"
                                        href="https://www.victorygold.net/sell/game/5"
                                    >
                                        RuneScape
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item text-white"
                                        href="https://www.victorygold.net/sell/game/6"
                                    >
                                        Albion Online
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-3 align-items-center justify-content-center mobile">
                    <div className="dropdown position-static">
                        <button
                            className="btn btn-secondary blur dropdown-toggle p-2"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Es 🇪🇸
                        </button>
                        <ul className="dropdown-menu blur w-100 text-center">
                            <li>
                                <a
                                    className="dropdown-item text-white"
                                    href="https://www.victorygold.net"
                                >
                                    🇪🇸 Español (ES)
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item text-white"
                                    href="https://www.victorygold.net/en"
                                >
                                    🇺🇸 English (EN)
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-4 justify-content-end align-items-center desktop">
                    <div className="col-3 align-items-center justify-content-center">
                        <div className="dropdow">
                            <button
                                className="btn btn-secondary blur dropdown-toggle p-2"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Español 🇪🇸
                            </button>
                            <ul className="dropdown-menu blur w-100 text-center">
                                <li>
                                    <a
                                        className="dropdown-item text-white"
                                        href="https://www.victorygold.net"
                                    >
                                        🇪🇸 Español (ES)
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item text-white"
                                        href="https://www.victorygold.net/en"
                                    >
                                        🇺🇸 English (EN)
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="header-icons d-flex gap-4 mx-5">
                        <a
                            href="https://discord.gg/CmgugsYFF2"
                            target="_blank"
                            className="url"
                        >
                            <i className="fa-brands fa-discord header-icon"></i>
                        </a>
                        <a
                            href="https://api.whatsapp.com/send?phone=18126820424&text=Hola%2C%20quisiera%20mas%20informaci%C3%B3n%20de%20Victory%20Gold."
                            target="_blank"
                            className="url"
                        >
                            <i className="fa-brands fa-whatsapp header-icon"></i>
                        </a>
                        <a
                            href="https://www.facebook.com/victorygold.net"
                            target="_blank"
                            className="url"
                        >
                            <i className="fa-brands fa-facebook header-icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
