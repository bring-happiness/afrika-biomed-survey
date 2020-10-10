<template>
  <div id="app">
    <transition name="el-fade-in-linear" mode="out-in">
      <locker-page v-if="showLockerPage" @accessgranted="openSurvey"></locker-page>
      <survey-page v-else-if="showSurveyPage"></survey-page>
    </transition>
    <!--{{ store }}-->
  </div>
</template>

<script>
import LockerPage from './components/LockerPage'
import SurveyPage from './components/SurveyPage'

import store from './store'

export default {
  name: 'App',
  components: {
    'locker-page': LockerPage,
    'survey-page': SurveyPage
  },
  data () {
    return {
      pageToShow: 'locker',
      store: store
    }
  },
  computed: {
    showLockerPage () {
      return this.pageToShow === 'locker'
    },
    showSurveyPage () {
      return this.pageToShow === 'survey'
    },
  },
  methods: {
    openSurvey() {
      this.pageToShow = 'survey'
    }
  }
}
</script>

<style>

</style>
