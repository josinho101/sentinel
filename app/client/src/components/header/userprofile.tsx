import React from "react";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import profileIcon from "../../assets/images/dummy-user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  displayName: string;
}

const UserProfile: React.FunctionComponent<Props> = (props) => {
  return (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item dropdown no-arrow">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="userDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span className="mr-2 d-none d-lg-inline text-white-600 small">
            {props.displayName}
          </span>
          <img className="img-profile rounded-circle" src={profileIcon} />
        </a>
        <div
          className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
          aria-labelledby="userDropdown"
        >
          <a
            className="dropdown-item"
            href="#"
            data-toggle="modal"
            data-target="#logoutModal"
          >
            <FontAwesomeIcon
              icon={["fas", "sign-out-alt"]}
              className="fa-fw mr-2 text-gray-400"
            />
            Logout
          </a>
        </div>
      </li>
    </ul>
  );
};

export default UserProfile;
