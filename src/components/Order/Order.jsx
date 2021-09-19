import React from 'react'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';


const Order = () => {
    return (
        <>
        <div className="icons-whatsaap">
                 <i><WhatsAppIcon fontSize="large" color="action"  /></i>   
        </div>
    
        <div className="d-flex justify-content-center  ">   
            <hr />
            <form className="row">
                <div className="col-md-7 form-group">
                    <input
                        type="text"
                        name="Nombre"
                        placeholder="Ingrese su Nombre"
                        id="nombre"
                        className="form-control"

                    >
                    </input>
                </div>
                <div className="col-md-7 form-group pt-3">

                    <input
                        placeholder="Ingrese su teléfono"
                        className="form-control"

                    >
                    </input>
                </div>
                <div className="col-md-7 form-group pt-3">
                    <input
                        placeholder="Ingrese su dirección"
                        className="form-control"

                    >
                    </input>
                </div>


                <div className="col-md-7 form-group pt-3">
                    <div className="col-auto my-1">
                        <label className="mr-sm-2" for="inlineFormCustomSelect">Forma de Pago</label>
                        <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                            <option selected>Elegir</option>
                            <option value="1">Efectivo</option>
                            <option value="2">Tajeta de débito</option>

                        </select>
                    </div>
                    <p className="text-danger small">*Los campos son obligatorios</p>
                    <button className="btn btn-success" type="submit">
                        Enviar
                    </button>
                </div>
            </form>

        </div>
        </>
     
           

    )
}

export { Order }
