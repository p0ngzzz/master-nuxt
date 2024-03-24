<template>
  <v-app>
    <v-app-bar app dark>
      <v-toolbar-title class="text-h5 font-weight-bold">
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
        My Nuxt Website
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <nuxt-link to="/about">
        <v-btn class="white--text text-h6" text>Home</v-btn>
      </nuxt-link>
      <nuxt-link to="/about">
        <v-btn class="white--text text-h6" text>About</v-btn>
      </nuxt-link>
      <nuxt-link to="/contact">
        <v-btn class="white--text text-h6" text>Contact</v-btn>
      </nuxt-link>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" dark>
      <!-- Your navigation items here -->
      <v-list>
        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/about">
          <v-list-item-icon>
            <v-icon>mdi-information</v-icon>
          </v-list-item-icon>
          <v-list-item-title>About</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/contact">
          <v-list-item-icon>
            <v-icon>mdi-email</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Contact</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>    
    <v-main>
      <v-container>
        <v-row>
          <v-col :cols="drawer ? '12' : '9'">
            <router-view></router-view>
          </v-col>
          
          </v-col>
        </v-row>
        
      </v-container>
    </v-main>
    
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
  }),

  watch: {
    group() {
      this.drawer = false
    },
  },
}
</script>

<style></style>
