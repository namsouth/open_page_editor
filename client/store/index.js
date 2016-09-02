import Vue from 'vue'
import Vuex from 'vuex'

import firebase from 'firebase';
import vuexFire from '../../node_modules/vuexfire/src/index';

Vue.use(Vuex)

var config = {
  apiKey: "AIzaSyAKn-JZptPQSIXblp2pMgCwJ2UUA5bYEtE",
  authDomain: "localgreen-1317.firebaseapp.com",
  databaseURL: "https://localgreen-1317.firebaseio.com",
  storageBucket: "localgreen-1317.appspot.com",
};
var firebaseApp = firebase.initializeApp(config);
var db = firebaseApp.database();

const state = {
  count: 0,
  items: null
}

const mutations = {
  INCREMENT(state) {
    state.count++
  }
}

const actions = {
  incrementAsync({commit}) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 200)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
