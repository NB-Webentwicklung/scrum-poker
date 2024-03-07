import { useState } from "react";

import UserDropdown from "./UserDropdown";
import UserDropdownContent from "./UserDropdownContent";

interface UserHeaderProps {
  startAction: () => void;
}

const UserHeader = ({ startAction }: UserHeaderProps) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div>
      <UserDropdown
        showDropdown={showDropdown}
        changeDropdown={() => setShowDropdown(!showDropdown)}
      />
      <UserDropdownContent
        startAction={startAction}
        showDropdown={showDropdown}
      />
    </div>
  );
};

export default UserHeader;
