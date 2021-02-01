"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _filters = require("./filters.js");

var state = {
  rests: [{
    name: 'pizza hut',
    cl: 'pi',
    type: ['pizza'],
    state: ['ca'],
    id: 'rest0'
  }, {
    name: 'mcDonalds',
    cl: 'ha',
    type: ['hamburger'],
    state: ['ca'],
    id: 'rest1'
  }, {
    name: 'burger king',
    cl: 'ha',
    type: ['hamburger'],
    state: ['ca'],
    id: 'rest2'
  }, {
    name: 'In&Out Burger',
    cl: 'ha',
    type: ['hamburger'],
    state: ['ca'],
    id: 'rest3'
  }, {
    name: 'Wendys',
    cl: 'ha',
    type: ['hamburger'],
    state: ['ca'],
    id: 'rest4'
  }, {
    name: 'Fatburger',
    cl: 'ha',
    type: ['hamburger'],
    state: ['ca'],
    id: 'rest5'
  }, {
    name: 'Wahlburger',
    cl: 'ha',
    type: ['hamburger'],
    state: ['ca'],
    id: 'rest6'
  }, {
    name: 'fiveguys',
    cl: 'ha',
    type: ['hamburger'],
    state: ['ca'],
    id: 'rest7'
  }, {
    name: 'pizza hut',
    cl: 'pi',
    type: ['pizza'],
    state: ['ca'],
    id: 'rest8'
  }, {
    name: 'dominos',
    cl: 'pi',
    type: ['pizza'],
    state: ['ca'],
    id: 'rest9'
  }, {
    name: 'little caesars',
    cl: 'pi',
    type: ['pizza'],
    state: ['ca'],
    id: 'rest10'
  }, {
    name: 'papa johns',
    cl: 'pi',
    type: ['pizza'],
    state: ['ca'],
    id: 'rest11'
  }, {
    name: 'subway',
    cl: 'sa',
    type: ['sandwich'],
    state: ['ca'],
    id: 'rest12'
  }, {
    name: 'jersey mike',
    cl: 'sa',
    type: ['sandwich'],
    state: ['ca'],
    id: 'rest13'
  }, {
    name: 'subway',
    cl: 'sa',
    type: ['sandwich'],
    state: ['ca'],
    id: 'rest14'
  }, {
    name: 'potbelly',
    cl: 'sa',
    type: ['sandwich'],
    state: ['ca'],
    id: 'rest15'
  }, {
    name: '31 flavors',
    cl: 'ic',
    type: ['icecream'],
    state: ['ca'],
    id: 'rest16'
  }, {
    name: 'ben & jerry',
    cl: 'ic',
    type: ['icecream'],
    state: ['ca'],
    id: 'rest17'
  }, {
    name: 'falafel king',
    cl: 'mi',
    type: ['mideast'],
    state: ['ca'],
    id: 'rest18'
  }, {
    name: 'halal brothers',
    cl: 'mi',
    type: ['mideast'],
    state: ['ca'],
    id: 'rest19'
  }, {
    name: 'taco bell',
    cl: 'ta',
    type: ['tacos'],
    state: ['ca'],
    id: 'rest20'
  }, {
    name: 'del taco',
    cl: 'ta',
    type: ['taco'],
    state: ['ca'],
    id: 'rest21'
  }, {
    name: 'rubios',
    cl: 'ta',
    type: ['taco'],
    state: ['ca'],
    id: 'rest22'
  }, {
    name: 'kfc',
    cl: 'ch',
    type: ['chicken'],
    state: ['ca'],
    id: 'rest23'
  }, {
    name: 'popeyes',
    cl: 'ch',
    type: ['chicken'],
    state: ['ca'],
    id: 'rest24'
  }, {
    name: 'browns',
    cl: 'ch',
    type: ['chicken'],
    state: ['ca'],
    id: 'rest25'
  }, {
    name: 'churches',
    cl: 'ch',
    type: ['chicken'],
    state: ['ca'],
    id: 'rest26'
  }, {
    name: 'IHOP',
    cl: 'di',
    type: ['diner'],
    state: ['ca'],
    id: 'rest27'
  }, {
    name: 'Cracker Barrel',
    cl: 'di',
    type: ['diner'],
    state: ['ca'],
    id: 'rest28'
  }, {
    name: 'Waffle House',
    cl: 'di',
    type: ['diner'],
    state: ['in'],
    id: 'rest29'
  }, {
    name: 'Dennys',
    cl: 'di',
    type: ['diner'],
    state: ['ca'],
    id: 'rest30'
  }]
};
var getters = {
  //allRests: (state) => state.rests
  allrests: function allrests(state, payload) {
    console.log(payload);

    if (payload.type === Array) {
      state.rests = payload;
    }

    return state.rests;
  }
};
var mutations = {
  FilterByType: _filters.FilterByType,
  FilterByState: _filters.FilterByState
};
var actions = {
  displayByType: function displayByType(state, payload) {
    state.commit("FilterByType", payload);
  },
  getAllByType: function getAllByType(state, payload) {
    return state.filter(function (itm) {
      return itm.type === payload;
    });
  }
};
var _default = {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
};
exports["default"] = _default;