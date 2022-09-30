<template>
  <HeaderVue />
  <!-- Header Ends -->

  <!-- Main Body Starts -->
  <div class="body__main">
    <!-- Sidebar Starts -->
    <SideBar />

    <!-- Sidebar Ends -->

    <!-- Feed Starts -->
    <div class="feed">
      <div class="feed__inputContainer">
        <div class="feed__input">
          <i class="material-icons sidebar__topAvatar"> account_circle </i>
          <form>
            <input type="text" class="form-control" />
            <button type="submit">Send</button>
          </form>
        </div>

        <div class="feed__inputOptions">
          <div class="inputOption">
            <i style="color: #70b5f9" class="material-icons"> insert_photo </i>
            <h4>Photo</h4>
          </div>
          <div class="inputOption">
            <i style="color: #e7a33e" class="material-icons"> subscriptions </i>
            <h4>Video</h4>
          </div>
          <div class="inputOption">
            <i style="color: #c0cbcd" class="material-icons"> event_note </i>
            <h4>Event</h4>
          </div>
          <div class="inputOption">
            <i style="color: #7fc15e" class="material-icons">
              calendar_view_day
            </i>
            <h4>Write Article</h4>
          </div>
        </div>
      </div>

      <!-- Post Starts -->
      <div class="post">
        <div class="post__header">
          <i class="material-icons sidebar__topAvatar"> account_circle </i>
          <div class="post__info">
            <h2>Somanath Goudar</h2>
            <p>Job Description</p>
          </div>
        </div>

        <div class="post__body">
          <p>Message here</p>
        </div>

        <div class="feed__inputOptions">
          <div class="inputOption">
            <i style="color: gray" class="material-icons"> thumb_up </i>
            <h4>Like</h4>
          </div>
          <div class="inputOption">
            <i style="color: gray" class="material-icons"> comment </i>
            <h4>Comment</h4>
          </div>
          <div class="inputOption">
            <i style="color: gray" class="material-icons"> share </i>
            <h4>Share</h4>
          </div>
          <div class="inputOption">
            <i style="color: gray" class="material-icons"> send </i>
            <h4>Send</h4>
          </div>
        </div>
      </div>
      <!-- Post Ends -->

      <!-- Post Ends -->
    </div>
    <!-- Feed Ends -->

    <!-- Widgets Starts -->
    <div class="widgets">
      <div class="widgets__header">
        <h2>LinkedIn Clone</h2>
        <i class="material-icons"> info </i>
      </div>
      <div class="widgets__article">
        <div class="widgets__articleLeft">
          <i class="material-icons"> fiber_manual_record </i>
        </div>
        <div class="widgets__articleRight">
          <h4>Coding LinkedIn Clone</h4>
          <p>Top news - 4500 readers</p>
        </div>
      </div>

      <div class="widgets__article">
        <div class="widgets__articleLeft">
          <i class="material-icons"> fiber_manual_record </i>
        </div>
        <div class="widgets__articleRight">
          <h4>Coding LinkedIn Clone</h4>
          <p>Top news - 4500 readers</p>
        </div>
      </div>

      <div class="widgets__article">
        <div class="widgets__articleLeft">
          <i class="material-icons"> fiber_manual_record </i>
        </div>
        <div class="widgets__articleRight">
          <h4>Coding LinkedIn Clone</h4>
          <p>Top news - 4500 readers</p>
        </div>
      </div>
    </div>

    <!-- Widgets Ends -->
  </div>
  <!-- Main Body Ends -->
</template>
<script setup>
import HeaderVue from "../components/HomeComponents/Header.vue";
import SideBar from "../components/HomeComponents/SideBar.vue";
</script>
<style scoped>
/* Main Body */
.body__main {
  width: 100%;
  display: flex;
  margin-top: 35px;
  max-width: 1200px;
  margin-left: 20px;
  margin-right: 20px;
}
/* Sidebar */

.sidebar__topAvatar {
  font-size: 40px;
}

/* Feed */
.feed {
  flex: 0.6;
  margin: 0 20px;
}

.feed__inputContainer {
  background-color: white;
  padding: 10px;
  padding-bottom: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.feed__input {
  border: 1px solid lightgray;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: gray;
  padding-left: 15px;
}

.feed__input > form {
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 0 !important;
  padding: 4px;
}

.feed__input > form > input {
  border: none;
  margin-left: 10px;
  outline-width: 0;
  font-weight: 600;
}

.feed__input > form > button {
  display: none;
}

.feed__inputOptions {
  display: flex;
  justify-content: space-evenly;
}

.inputOption {
  display: flex;
  align-items: center;
  margin-top: 15px;
  color: gray;
  padding: 10px;
  cursor: pointer;
}

.inputOption:hover {
  background-color: whitesmoke;
  border-radius: 10px;
}

.inputOption > h4 {
  margin-left: 5px;
}

/* Post */
.post {
  background-color: white;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 10px;
}

.post__header {
  display: flex;
  margin-bottom: 10px;
}

.post__info {
  margin-left: 10px;
}

.post__info > p {
  font-size: 12px;
  color: gray;
}

.post__info > h2 {
  font-size: 15px;
}

/* widgets */
.widgets {
  position: sticky;
  top: 80px;
  flex: 0.2;
  background-color: white;
  border-radius: 10px;
  border: 1px solid lightgray;
  height: fit-content;
  padding-bottom: 10px;
}

.widgets__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}

.widgets__header > h2 {
  font-size: 16px;
  font-weight: 400;
}

.widgets__article {
  display: flex;
  padding: 10px;
  cursor: pointer;
}

.widgets__article:hover {
  background-color: whitesmoke;
}

.widgets__articleLeft {
  color: #0177b7;
  margin-right: 5px;
}

.widgets__articleLeft .material-icons {
  font-size: 15px;
}

.widgets__articleRight {
  flex: 1;
}

.widgets__articleRight > h4 {
  font-size: 14px;
}

.widgets__articleRight > p {
  font-size: 12px;
  color: gray;
}
@font-face {
  font-family: "Material Icons";
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialicons/v139/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2)
    format("woff2");
}

.material-icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
}
</style>
