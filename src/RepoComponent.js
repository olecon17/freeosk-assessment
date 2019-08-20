import React from "react";

const RepoComponent = ({ name, html_url }) => (
  <div>
    <a href={html_url}>
      <p>{name}</p>
    </a>
  </div>
);

export default RepoComponent;
