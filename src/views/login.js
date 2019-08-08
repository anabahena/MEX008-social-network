let login = {

    render : async () => {
        let view =  /*html*/`

<div class="text-center" class="pantalla-login" id="pantalla-login">
      <div class="header">
      </div>
    
      <div class="row-fluid">
          <div class="span12">
            <img src="./imgenes/logo-women.png" class="logo-one">
          </div>
      </div>
      <div class="row-fluid">
        <div class="span12">
            <form action="">
              <h3>Inicia sesión</h3>

              <input type="email" placeholder="Ingresa tu correo" class="login-input" id="email-login">
      
              <input type="password" placeholder="Ingresa tu contraseña" class="login-input" id="password-login">
              <p class="prueba">Ingresa el correo y contraseña con los que te registraste</p>
              <br>


              <input type="submit" value="ENTRAR" class="btn" id="btn-login">
              <br>

              <div class="divider">
                <div class="linea">&nbsp;</div>
                <div class="leyenda">o bien</div>
                <div class="linea">&nbsp;</div>
              </div>
              
                <div class="row-fluid login-input">
                    <div class="span12">
                      <div class="input-prepend">
                        <img src="./imgenes/google-icon.png" class="add-on">
                        <input type="submit" value="Inicia con Google" class="btn" id="btnGoogle">
                      </div>
                    </div>
                  </div>
            
                  <div class="row-fluid login-input">
                      <div class="span12">
                        <div class="input-prepend">
                          <img src="./imgenes/icon-facebook.png" class="add-on">
                          <input type="submit" value="Inicia con Facebook" class="btn">
                        </div>
                      </div>
                  </div> 

            </form>
        </div>
      </div>

      <div class="row-fluid login-input">
        <div class="span12">
          <a href="#" id="pasar-registro">¿Eres nueva? Da click aquí</a>
        </div>
      </div>
            
          
    </div>
    `
        return view
    }
    , after_render: async () => {
      
    }
}
export default login;