<template id="register-page">
    <v-ons-page>
        <ons-toolbar>
            <div class="left"><ons-back-button>Atrás</ons-back-button></div>
            <div class="center">Regístrate</div>
        </ons-toolbar>
        <div class="formarea">
            <div class="form-row">
                <input type="text" class="text-input--material width-half" placeholder="Nombre" value="">
                <input type="text" class="text-input--material width-half" placeholder="Apellido" value="" style="margin-left:5px">
            </div>
            <div class="form-row">
                <input type="text" class="text-input--material width-full" placeholder="Correo electrónico" value="">
            </div>
            <div class="form-row">
                <input type="password" class="text-input--material width-full" placeholder="Contraseña" value="">
            </div>
            <div class="lucent">
                <p class="note">Contraseña - 6 caracteres o más</p>
            </div>
            <div class="vspc form-row">
                <ons-button modifier="large--cta" @click="$ons.notification.alert('Registrando...')">Regístrate</ons-button>
            </div>
        </div>
    </v-ons-page>
</template>

<style>
.form-row {
  margin: 4px;
}

.width-full {
  width: 100%;
}

.width-half {
  width: 49%;
}

.lucent {
  opacity: 0.4;
}

.note {
  margin: 12px 8px;
  font-size: 13px;
}

.vspc {
  margin-top: 20px;
}

.formarea {
  width: 90%;
  margin: 50px auto 0px auto;
}

input[type=text], input[type=password] {
  height: 40px;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>

