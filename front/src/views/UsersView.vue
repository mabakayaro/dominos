<template>
  <div>
    Bla bla bla...etc
  </div>
</template>

<script>
export default {
  name: 'UsersView',
  data() {
    return {
      users: [],
    }
  },
  mounted() {
    this.getUsers();
  },

  methods: {
    async getUsers() {
      console.log('[getUsers] fired :', this);
      let users = [];
      users = await this.$http.get('/api/user').catch((err) => console.warn(err));
      if (users) {
        this.users = users;
      } 
    }
  },

}
</script>
