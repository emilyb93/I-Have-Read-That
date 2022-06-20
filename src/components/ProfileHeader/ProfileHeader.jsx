import React from "react";

const styles = {
  username: {
    marginLeft: "10px",
    marginRight: "5px",
    borderRadius: "5px",
    gridArea: "1/3/3/4",

    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gridTemplateRows: "1fr",
  },

  avatar: {
    height: "70%",
    width: "70%",
    gridArea: "1/2/2/3",
    border: "1px solid black",
    borderRadius: "50%",
  },
  name: {
    gridArea: "1/1/2/2",
  },
};

function ProfileHeader() {
  const username = "jessjelly";
  const imgURL =
    "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141";

  return (
    <section style={styles.username}>
      <p style={styles.name}>{username}</p>
      <img src={imgURL} style={styles.avatar}></img>
    </section>
  );
}

export default ProfileHeader;
