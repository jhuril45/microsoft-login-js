import { directiveHooks } from "./utils";
import { MicrosoftAuth } from './MicrosoftAuth'

async function login(value) {
  try {
    const microsoftAuth = new MicrosoftAuth(value.auth || {});
    console.log('microsoftAuth ', microsoftAuth)
    const data = await microsoftAuth.loginPopup(value.request || {})
    value.OnSuccess(data);
  } catch (error) {
    value.Onfail(error);
  }
}

function CheckComponentMethods(value) {
  if (!value.OnSuccess) {
    throw new Error(
      "The method OnSuccess must be passed"
    );
  }

  if (!value.Onfail) {
    throw new Error(
      "The method Onfail must be passed"
    );
  }
}

function initLogin(el, value) {
  CheckComponentMethods(value);
  el.removeEventListener("click", () => login(value));
  el.addEventListener("click", () => login(value));
}

function bind(el, { value }) {
  initLogin(el, value);
}

function unbind(el, { value }) {
  el.removeEventListener("click", () => login(value));
}

function update(el, { value, oldValue }) {
  initLogin(el, value);
}

const directive = {
  [directiveHooks.mounted]: bind,
  [directiveHooks.updated]: update,
  [directiveHooks.unmounted]: unbind,
};

export default directive;