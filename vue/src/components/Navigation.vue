<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light ps-4 pe-5">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Perky Rabbit Inventory</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link :to="{ name: 'Home' }" class="nav-link">
              <span> Home </span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Dashboard' }" class="nav-link">
              <span> Dashboard </span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'AddProduct' }" class="nav-link">
              <span> Add Product </span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Register' }" class="nav-link">
              <span> Account </span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
