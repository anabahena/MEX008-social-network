let header = {

    render : async () => {
        let view =  /*html*/`
        <div class="header">
          <img src="./imgenes/logo2.png" class="logo-two">
        </div>
        `
        return view
    }
    , after_render: async () => {}
}
export default header;