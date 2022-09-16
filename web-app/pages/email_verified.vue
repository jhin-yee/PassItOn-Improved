<template>
  <div>
    <div class="pt-5 row justify-content-center" v-if="verified">
      <b-card class="col-10 col-md-6 col-lg-5 col-xl-4">
        <h4>Your email has been verified!</h4>
        <span style="font-size: 1.2em;">Click <a href='/login'>here</a> to login</span>
      </b-card>
    </div>
    <div class="pt-5 row justify-content-center" v-if="error">
      <b-card class="col-10 col-md-6 col-lg-5 col-xl-4">
        <h4>Try verifying your email again</h4>
        <span style="font-size: 1.2em;">Your request to verify your email has expired or the link has already been used</span>
      </b-card>
    </div>
  </div>
</template>

<script>
import { getAuth, applyActionCode } from 'firebase/auth'

export default {
  mounted() {
    this.handleVerifyEmail()
  },
  data() {
    return {
      verified: false,
      error: false,
    }
  },
  methods: {
    handleVerifyEmail() {
      const mode = this.$route.query.mode;
      console.log(mode)
      const actionCode = this.$route.query.oobCode;
      console.log(actionCode)
      const auth = getAuth()
      applyActionCode(auth, actionCode)
        .then((resp) => {
          this.verified = true
        })
        .catch((error) => {
          this.error = true
        })
    },
  },
}
</script>

<style scoped>
* {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>