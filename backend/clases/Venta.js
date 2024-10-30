class Venta {
    constructor(data) {
        this.id = data.id;
        this.idUsu1 = data.idUsu1;
        this.idProd1 = data.idProd1;
        this.cantidad = data.cantidad;  
        this.fechaHora = data.fechaHora;  
        this.estatus = data.estatus;
    }

    set id(id) {
        this._id = id;
    }

    set idUsu1(idUsu1) {
        this._idUsu1 = idUsu1;
    }

    set idProd1(idProd1) {
        this._idProd1 = idProd1;
    }

    set cantidad(cantidad) {
        this._cantidad = cantidad;  
    }

    set fechaHora(fechaHora) {
        this._fechaHora = fechaHora;  
    }

    set estatus(estatus) {
        this._estatus = estatus;
    }

    get getVenta() {
        const conid = {
            id: this._id,
            idUsu1: this._idUsu1,
            idProd1: this._idProd1,
            cantidad: this._cantidad,  
            fechaHora: this._fechaHora, 
            estatus: this._estatus
        };

        const sinid = {
            idUsu1: this._idUsu1,
            idProd1: this._idProd1,
            cantidad: this._cantidad,  
            fechaHora: this._fechaHora,  
            estatus: this._estatus
        };

        return this._id ? conid : sinid;
    }
}

module.exports = Venta;
