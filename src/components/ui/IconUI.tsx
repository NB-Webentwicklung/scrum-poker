import React from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

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
        "w-6 h-6 text-slate-500",
        !disabled && "hover:text-slate-600 hover:cursor-pointer",
      )}
    />
  );
};

export default IconUI;
