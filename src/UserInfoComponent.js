import React from "react";
import OrgComponent from "./OrgComponent";
import RepoComponent from "./RepoComponent";
import ReportDispatcher from "jest-jasmine2/build/jasmine/ReportDispatcher";

const UserInfoComponent = ({ userData, userRepos, userOrgs, displayInfo }) => {
  return (
    <div className="userInfoContainer">
      {displayInfo && (
        <React.Fragment>
          <div className="userProfile">
            <img
              className="userAvatar"
              src={userData.avatar_url}
              alt="avatar"
            />
            <h2>{userData.name}</h2>
            <a href={userData.html_url}>
              <h2>@{userData.login}</h2>
            </a>
          </div>
          <div className="orgsContainer">
            <h2>Organizations: {userOrgs.length}</h2>
            <div className="orgsList">
              {userOrgs.length > 0 &&
                userOrgs.map((organization, index) => (
                  <OrgComponent key={`org-${index}`} {...organization} />
                ))}
            </div>
          </div>

          <div className="reposContainer">
            <h2>Repos: {userRepos.length}</h2>
            <div className="reposList">
              {userRepos.length > 0 &&
                userRepos.map((repo, index) => (
                  <RepoComponent key={`repo-${index}`} {...repo} />
                ))}
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default UserInfoComponent;
