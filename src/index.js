import directive from "./directive";

const plugin = {
  install(Vue) {
    Vue.directive("microsoft-login", directive);
  },
  directive,
};



export default plugin;
