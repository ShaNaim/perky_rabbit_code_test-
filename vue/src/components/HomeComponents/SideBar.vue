<template>
  <div class="sidebar">
    <div class="sidebar__top">
      <img
        src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080"
        alt=""
      />
      <i class="material-icons sidebar__topAvatar"> account_circle </i>

      <h2>Somanath Goudar</h2>
      <h4>add a photo</h4>
    </div>

    <div class="sidebar__stats_section">
      <div class="sidebar__stat">
        <div class="cont">
          <p class="top-text">Connection</p>
          <p class="bottom-text">Grow Your Network</p>
        </div>
        <i class="material-icons-outlined"> </i>
      </div>
    </div>
    <div class="sidebar__stats">
      <div class="sidebar__stat">
        <div class="cont">
          <p class="top-text">Access exclusive sites and insights</p>
          <p class="bottom-text">Grow Your Account</p>
        </div>
      </div>
    </div>

    <div class="sidebar__bottom">
      <p>Recent</p>
      <div class="sidebar__recentItem">
        <span class="sidebar__hash">#</span>
        <p>reactjs</p>
      </div>
      <div class="sidebar__recentItem">
        <span class="sidebar__hash">#</span>
        <p>programming</p>
      </div>
      <div class="sidebar__recentItem">
        <span class="sidebar__hash">#</span>
        <p>softwareengineering</p>
      </div>
      <div class="sidebar__recentItem">
        <span class="sidebar__hash">#</span>
        <p>design</p>
      </div>
      <div class="sidebar__recentItem">
        <span class="sidebar__hash">#</span>
        <p>developer</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.sidebar {
  position: sticky;
  top: 80px;
  flex: 0.2;
  border-radius: 10px;
  text-align: center;
  height: fit-content;
}

.sidebar__top > img {
  margin-bottom: -20px;
  width: 100%;
  height: 60px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  object-fit: cover;
}

.sidebar__top {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid lightgray;
  border-bottom: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: white;
  padding-bottom: 10px;
}
.sidebar__stats {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid lightgray;
  background-color: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.sidebar__stats_section {
  padding: 10px;
  border: 1px solid lightgray;
  background-color: white;
}
.sidebar__stat {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

.sidebar__stat .cont {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.sidebar__stat .top-text {
  color: rgb(114, 107, 107);
  font-size: 13px;
  font-weight: 600;
  margin: 0;
}
.sidebar__stat .bottom-text {
  color: rgb(82, 78, 78);
  font-size: 13px;
  font-weight: 600;
}

.sidebar__statNumber {
  font-weight: bold;
  color: #0a66c2 !important;
}

.sidebar__top > h4 {
  color: gray;
  font-size: 12px;
  margin-top: 5px;
}

.sidebar__top > h2 {
  font-size: 18px;
}

.sidebar__bottom {
  text-align: left;
  padding: 10px;
  border: 1px solid lightgray;
  background-color: white;
  border-radius: 10px;
  margin-top: 10px;
}

.sidebar__recentItem {
  display: flex;
  font-size: 13px;
  color: gray;
  font-weight: bolder;
  cursor: pointer;
  margin-bottom: 5px;
  padding: 5px;
}

.sidebar__topAvatar {
  font-size: 40px;
}

.sidebar__recentItem:hover {
  background-color: whitesmoke;
  border-radius: 10px;
  cursor: pointer;
  color: black;
}

.sidebar__hash {
  margin-right: 10px;
  margin-left: 10px;
}

.sidebar__bottom > p {
  font-size: 14px;
  padding-bottom: 10px;
}

.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
}
</style>
