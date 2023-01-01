# v-microsoft-login
A simple Vue directive to include Apple Login Button behavior in any component.

## Install

```bash
$ npm install --save vue-microsoft-login-directive
```

```bash
$ yarn add vue-microsoft-login-directive
```

## Vue2

```js
import Vue from 'vue'
import vMicrosoftLogin from 'vue-microsoft-login-directive'

Vue.use(vMicrosoftLogin)
```


## Vue 3

```js
import vMicrosoftLogin from 'vue-microsoft-login-directive'
import { ref } from "vue";

<script setup>
  const microsoftSettings = ref({
    auth: {
      clientId, 
      authority, 
      redirectUri, 
      cacheLocation, 
      storeAuthStateInCookie,
    },
    request: {
      scopes, 
      prompt, 
      response_type
    }
  });

  function appleCallBackSuccess(data) {
    console.log('appleCallBackSuccess', data);
  }

  function appleCallBackError(error) {
    console.log('appleCallBackError', error);
  }
</script>

<template>
  <div v-microsoft-login="microsoftSettings"></div>
</template>
```


> Looking for the [Google counterpart](https://github.com/jhuril45/vue-google-login-directive)?

## License

MIT © [Jhuril Bandola](https://github.com/jhuril45)