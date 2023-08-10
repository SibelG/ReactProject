import "./rightbar.scss";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
        {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>

      
       <div className="userInformation">
       <h4 classname="userRightbarTitle">User Information</h4>
        <div className="topUserInfo">
          <div className="infoItems">
          <span className="rowTitle">City:  </span>
          <span className="info">Newyork</span>
          </div>
          <div className="infoItems">
          <span className="rowTitle">From:  </span>
          <span>Newyork</span>
          </div>
          <div className="infoItems">
          <span className="rowTitle">Relationsip:  </span>
          <span>Single</span>
          </div>
          

        </div>
        <div className="userFriends">
          <h4>User Friends</h4>
          <div className="userInfo">
          <div className="userInfoItems">
           <img className="imgInfo" src="assets/person/1.jpeg" alt=""/>
           <span className="profileName">John Carter</span>
          </div>
          <div className="userInfoItems">
           <img className="imgInfo" src="assets/person/1.jpeg" alt=""/>
           <span className="profileName">John Carter</span>
          </div>
          <div className="userInfoItems">
           <img className="imgInfo" src="assets/person/1.jpeg" alt=""/>
           <span className="profileName">John Carter</span>
          </div>
          <div className="userInfoItems">
           <img className="imgInfo" src="assets/person/2.jpeg" alt=""/>
           <span className="profileName">John Carter</span>
          </div>
          <div className="userInfoItems">
           <img className="imgInfo" src="assets/person/3.jpeg" alt=""/>
           <span className="profileName">John Carter</span>
          </div>
          <div className="userInfoItems">
           <img className="imgInfo" src="assets/person/4.jpeg" alt=""/>
           <span className="profileName">John Carter</span>
          </div>
          </div>
          
        </div>
       </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
      {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}