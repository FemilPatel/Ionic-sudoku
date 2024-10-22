import React, { useState } from "react";
import { IonIcon } from "@ionic/react"; // Import IonIcon for using Ionicons
import {
  arrowBackCircle,
  arrowForwardCircle,
  refreshCircleOutline,
} from "ionicons/icons"; // Import refresh circle icon
import { useHistory } from "react-router";
type HeaderProps = {
  onClick: () => void;
};

/**
 * React component for the Header Section.
 */
export const Header = (props: HeaderProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isBack, setIsBack] = useState(false);

  const history = useHistory();

  const handleClick = () => {
    setIsClicked(true);

    // Reset the animation state after 0.5s (same as animation duration)
    setTimeout(() => {
      props.onClick(); // Call the reset function passed in props
      setIsClicked(false);
    }, 500);
  };
  const handleBack = () => {
    setIsBack(true);

    // Reset the animation state after 0.5s (same as animation duration)
    setTimeout(() => {
      history.push("/");
      // setIsBack(false);
    }, 500);
  };

  return (
    <header className="header">
      <h2
        className={`reset-button ${isBack ? "backed" : ""}`}
        onClick={handleBack}
      >
        <IonIcon icon={arrowForwardCircle} className="reset-icon" />
      </h2>
      <h1>
        Su<span className="header__group-one">do</span>
        <span className="header__group-two">ku</span>
      </h1>
      <h2
        className={`reset-button ${isClicked ? "clicked" : ""}`}
        onClick={handleClick}
      >
        <IonIcon icon={refreshCircleOutline} className="reset-icon" />
      </h2>
    </header>
  );
};
