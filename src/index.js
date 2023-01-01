import directive from "./directive";
import { MicrosoftAuth } from './MicrosoftAuth'

const Auth = (value) => new MicrosoftAuth(value);

export {
  Auth
}

const plugin = {
  install(Vue) {
    Vue.directive("microsoft-login", directive);
  },
  directive,
};



export default plugin;
