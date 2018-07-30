<template id="signin-page">
    <ons-page>
      <ons-toolbar modifier="night">
        <div class="center"><b>Fake Uber</b></div>
        <!-- <div class="right"><ons-toolbar-button modifier="night">Cerrar</ons-toolbar-button></div> -->
      </ons-toolbar>

      <div class="login-form">
        <input type="text" class="text-input--material" placeholder="Nombre de usuario o correo electrónico" value="">
        <input type="password" class="text-input--material" placeholder="Contraseña" value="">
        <br><br>
        <ons-button modifier="large" class="login-button" @click="$ons.notification.alert('Iniciando sesión...')">Iniciar sesión</ons-button>
        <div class="_1rf5">
          <span class="_1rf8">o</span>
        </div>
        <ons-button modifier="simple" class="forgot-password"><b>Crear una cuenta nueva</b></ons-button><ons-button modifier="quiet" class="forgot-password">¿Se te olvidó tu contraseña?</ons-button>
      </div>
    </ons-page>
</template>

<style>

._1rf5 {
    display: block;
    margin-bottom: 10px;
    margin-left: 10.5%;
    margin-right: 10.5%;
    margin-top: 10px;
    overflow: hidden;
    text-align: center;
    white-space: nowrap;
    width: 79%;
}
._1rf5>span {
    display: inline-block;
    position: relative;
}
._1rf8 {
    color: #4b4f56;
}
._1rf5>span:before {
    margin-right: 15px;
    right: 100%;
}
._1rf5>span:after {
    left: 100%;
    margin-left: 15px;
}
._1rf5>span:before, ._1rf5>span:after {
    background: #ced0d4;
    content: "";
    height: 1px;
    position: absolute;
    top: 50%;
    width: 9999px;
}

.toolbar--night {
  background-color: #333333;
}

.toolbar-button--night {
  color:white;
  font-style:oblique;
}

.toolbar--night div{
  color: white;
}

.button--simple {
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 200px;
    border-radius: 10px;
    background-color: hsl(141, 71%, 48%);
    /* background-color: hsl(120, 100%, 40%); */
}

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