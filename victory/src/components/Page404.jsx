import React from "react";

export function Page404() {
    return (
        <>
            <div className="mobile-form">
                <div className="w-100 mobile justify-content-center my-5">
                    <div className="d-flex justify-content-center align-content-center col-10 my-5">
                        <img
                            src="/images/icons/logo.svg"
                            alt="Logo Victory Gold"
                            style={{ width: "2em", height: "2em" }}
                            className="align-self-center justify-center mx-2"
                        />
                        <h2 className="form-text-mobile mb-0 pb-2">
                            Página no encontrada :(
                        </h2>
                    </div>
                </div>
            </div>

            <div className="container justify-content-center desktop">
                <div className="row m-5 text-center col-12 p-3 rounded-3">
                    <div className="col-12 d-flex justify-content-center">
                        <img
                            src="/images/icons/logo.svg"
                            alt="logo Victory Gold"
                            style={{ width: "2em", height: "2em" }}
                            className="align-self-center m-2"
                        />
                        <p className="form-text-desktop mb-0 pb-2">
                            Página no encontrada :(
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
