import React from "react";
import useScreenSize from "../../hooks/useScreenSize";

const styles = {
  username: {
    marginLeft: "10px",
    marginRight: "5px",
    marginTop: "7px",
    borderRadius: "5px",
    gridArea: "1/3/3/4",

    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gridTemplateRows: "1fr",
  },
  centeredUsername: {
    marginTop: "7px",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "5px",
    gridArea: "1/3/3/4",

    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "1fr",
  },

  avatar: {
    height: "3rem",
    width: "3rem",
    gridArea: "1/2/2/3",
    border: "2px solid #3766DB",
    borderRadius: "50%",
  },
  name: {
    gridArea: "1/1/2/2",
    fontSize: "1.5rem",
    marginTop: "auto",
    marginBottom: "auto",
  },
};

function ProfileHeader() {
  const username = "jessjelly";
  const imgURL =
    "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141";

  const { isMobile } = useScreenSize();
  return (
    <section style={isMobile ? styles.centeredUsername : styles.username}>
      {!isMobile && <p style={styles.name}>{username}</p>}
      <img src={imgURL} style={styles.avatar}></img>
    </section>
  );
}

export default ProfileHeader;
