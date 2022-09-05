<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    <head>
      <title>Clarke Farm</title>
    </head>
    <!--Navbar-->
    <div>
      <b-navbar toggleable="lg" type="dark" variant="light">
        <b-navbar-brand
          ><div class="logo" style="font-family: Monotype Corsiva">
            Clarke Farm
          </div>
        </b-navbar-brand>

        <b-navbar-toggle
          target="nav-collapse"
          style="background-color: #068d68"
        ></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <nav>
            <RouterLink to="/">About Us</RouterLink>
            <RouterLink to="/dashboard">Login</RouterLink>
          </nav>
        </b-collapse>
      </b-navbar>
    </div>

    <body>
      <div id="app-body">
        <!-- BANNER -->
        <div class="content">
          <div class="content-left">
            <img src="../../backend/uploads/farm.jpg" alt="farm" width="100%" />
          </div>
          <div class="content-middle hero">
            <br />
            <h2>
              An eco-friendly coffee estate specializing<br />
              in high quality washed Robusta Coffee.
            </h2>
            <br />
            <h5>
              Visit Clarke Farm and experience the amazing hilltop views,
              explore the river and forest walks, try the activities such as
              bouldering and mountain biking, walk or jog on the farm trails or
              have an exciting guided tour of the farm by Jeep. Round off your
              stay by roasting some Clarke Farm coffee and enjoying the fresh
              locally prepared dishes.
            </h5>
            <div>
              <br />
              <!--Links-->
              <div>
                <a href="/visit-us" class="btn btn-outline-info">Visit Us</a>
                <a href="/buy-coffee" class="btn btn-outline-info"
                  >Buy Coffee</a
                >
              </div>
            </div>
          </div>
          <div class="content-right">
            <img
              src="../../backend/uploads/packaged-coffee.png"
              alt="packaged coffee"
              width="100%"
            />
          </div>
        </div>
      </div>
    </body>
  </div>
  <RouterView />
  <br />
</template>

<style scoped>
nav {
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.logo {
  font-size: 24pt;
  color: #068d68;
  text-align: center;
}

span {
  font-size: 12pt;
}

.contact,
.link {
  color: green;
}

img {
  padding-top: 6.5px;
}
</style>
