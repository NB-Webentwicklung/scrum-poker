import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import React from "react";

interface IconUIProps {
  faIcon: IconDefinition;
  action?: () => void;
  disabled?: boolean;
}

const IconUI = ({ faIcon, action, disabled }: IconUIProps) => {
  return (
    <FontAwesomeIcon
      onClick={action}
      icon={faIcon}
      className={clsx(
        "w-6 h-6 text-slate-40",
        !disabled && "hover:text-slate-500 hover:cursor-pointer",
      )}
    />
  );
};

export default IconUI;
