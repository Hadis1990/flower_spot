import profileImage from "../../assets/images/profile-holderprofile.png";

import { User } from "../../types";

type Props = {
  user: Exclude<User, "password">;
  sightings: number;
};

export default ({ user }: Props) => (
  <div id="user-profile">
    <div className="section-1">
      <div>
        <img src={profileImage} />
      </div>
      <div>
        <div>John Doe</div>
        <div>17 sightings</div>
      </div>
    </div>
    <div>
      <div>
        <label>First Name</label>
        <div>John</div>
      </div>
      <div>
        <label>Last Name</label>
        <div>Doe</div>
      </div>
      <div>
        <label>Date of Birth</label>
        <div>19.01.1997</div>
      </div>
      <div>
        <label>Email Address</label>
        <div>test@test.com</div>
      </div>
    </div>
    <div>
      <button>Logout</button>
    </div>
  </div>
);
