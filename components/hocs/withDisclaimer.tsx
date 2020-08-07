import { useEffect, useState } from "react";
import { Disclaimer } from "../disclaimer/disclaimer";
import Router from "next/router";

export const withDisclaimer = (Page) => (props) => {
  const [modal, setModal] = useState<boolean>(false);
  const [checkBox, setCheckBox] = useState<boolean>(false);

  useEffect(() => {
    const disc = localStorage.getItem("movies");

    if (disc !== "movies") {
      setModal(true);
      setCheckBox(false);
    } else {
      setModal(false);
    }
  }, []);

  const dismissModal = () => {
    if (checkBox) {
      localStorage.setItem("movies", "disclaimer");
    }
    setModal(false);
  };

  const toggleCheckBox = () => {
    setCheckBox((prevState) => !prevState);
  };

  return (
    <>
      <Page {...props} />
      {!!modal && Router.pathname === "/" && (
        <Disclaimer
          toggleDisc={toggleCheckBox}
          handleButton={dismissModal}
          checkBox={checkBox}
        />
      )}
    </>
  );
};
