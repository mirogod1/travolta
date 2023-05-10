<template>
  <header>
    <div class="heading flex-center">
      <router-link class="nav-button" to="/">
        <div class="logo-text flex-center">
          <div class="logo flex-center">🕺🏻</div>
          <span>
            TRAVOLTA
          </span>
        </div>
      </router-link>
      <nav>
        <router-link class="nav-button" to="/about">About Us</router-link>
        <router-link class="nav-button" to="/a">My Bookings</router-link>
        <router-link class="nav-button" to="/d">Sign-in</router-link>
      </nav>
    </div>
  </header>
  <router-view />
</template>

<style lang="scss">
body {
  margin: 15px 30px;
  background-color: #eee;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.heading {
  justify-content: space-between;
  margin-bottom: 15px;

  .nav-button {
    text-decoration: none;
    color: inherit;
  }

  nav {
    padding: 30px;

    a {
      &.nav-button {
        font-weight: bold;
        color: rgb(233, 226, 226);
        background-color: #686a6a;
        height: 1.3em;
        padding: 0.5em;
        text-decoration: none;

        &:not(:last-child) {
          margin-right: 5px;
        }

        &.router-link-exact-active {
          color: #42b983;
        }

      }
    }
  }

  .logo-text {
    span {
      font-size: 35px;
    }

    .logo {
      height: 2.5em;
      width: 2.5em;
      font-size: 1.5em;
      background-color: fuchsia;
      border-radius: 50%;
      margin-right: 10px;
    }
  }

}
</style>
