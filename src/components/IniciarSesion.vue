<template>
    <ons-page>
      <ons-toolbar>
        <div class="center">Iniciar sesión</div>
        <div class="right"><ons-toolbar-button>Cerrar</ons-toolbar-button></div>
      </ons-toolbar>

      <div class="login-form">
        <input type="text" class="text-input--material" placeholder="Nombre de usuario o correo electrónico" value="">
        <input type="password" class="text-input--material" placeholder="Contraseña" value="">
        <br><br>
        <ons-button modifier="large" class="login-button" @click="$ons.notification.alert('Iniciando sesión...')">Iniciar sesión</ons-button>
        <br><br>
        <ons-button modifier="quiet" class="forgot-password">¿Se te olvidó tu contraseña?</ons-button><ons-button modifier="quiet" class="forgot-password">Regístrate</ons-button>
      </div>
    </ons-page>
</template>

<style>
input[type=text], input[type=password] {
  display: block;
  width: 100%;
  margin: 0 auto;
  outline: none;
  height: 100%;
  padding-top: 15px;
  padding-bottom: 16px;
}

.login-form {
  text-align: center;
  width: 80%;
  margin: 60px auto 0;
}

.login-button {
  width: 100%;
  margin: 0 auto;
}

.forgot-password {
  display: block;
  margin: 8px auto 0 auto;
  font-size: 14px;
}
</style>

<script>
//<![CDATA[document.write('<script src="//' + (location.hostname || 'localhost') + ':35729/livereload.js?snipver=1"><\/script>')//]]>
</script>