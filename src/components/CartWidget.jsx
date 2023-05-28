import React, {useEffect, useState, useMemo} from 'react'
import { ProductCardMin } from './ProductCardMin';
import { initializeApp } from "firebase/app";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


export const CartWidget = ({productos, getFirestore, collection, addDoc }) => {

    const [productosEnCarrito, setproductosEnCarrito] = useState([]);
    const [cargaLista, setCargaLista] = useState(false);
    const [realizarCompraActiva, setRealizarCompraActiva] = useState(false);
    const [precioTotal, setPrecioTotal] = useState(0);
    const [compraLista, setCompraLista] = useState(false);

    const [errorMensaje, setErrorMensaje] = useState('');

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [confirmarEmail, setConfirmarEmail] = useState('');

    const firebaseConfig = {
        apiKey: "AIzaSyBg3uC-r9tqS3itlzWZxqP1VW34CMbvxy8",
        authDomain: "entregafinalcoder-b70c2.firebaseapp.com",
        projectId: "entregafinalcoder-b70c2",
        storageBucket: "entregafinalcoder-b70c2.appspot.com",
        messagingSenderId: "84699097415",
        appId: "1:84699097415:web:f462e8e8c9d4dc53fd8462"
    };
      
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    const handleChangeNombre = (e) => {
        setNombre(e.target.value);
        chequearCamposCompletos();
    }
    const handleChangeApellido = (e) => {
        setApellido(e.target.value);
        chequearCamposCompletos();
    }
    const handleChangeTelefono = (e) => {
        setTelefono(e.target.value);
        chequearCamposCompletos();
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
        chequearCamposCompletos();
    }
    const handleChangeConfirmarEmail = (e) => {
        setConfirmarEmail(e.target.value);
        chequearCamposCompletos();
    }

    const chequearCamposCompletos = () =>{
        if(nombre.length > 0 && apellido.length > 0 && telefono.length > 0 && email.length > 0 && confirmarEmail.length > 0)
            setRealizarCompraActiva(true);
        else
            setRealizarCompraActiva(false);
    }

    const prodListos = useMemo(() => productos);

    useEffect(() => {
        let currentListadoProductos = localStorage.getItem("productos");
        if(currentListadoProductos == null)
        currentListadoProductos = "[]";

        const auxListado = JSON.parse(currentListadoProductos);

        let prodEnCarrAux = [];
        auxListado.forEach((prodYCant) => {
            prodEnCarrAux.push(productos.find((p) => {
                if(p.id == prodYCant[0])
                    return p;
            }));
        });
        console.log(prodEnCarrAux)
        const precioTotal = prodEnCarrAux.reduce((acc, producto) => acc + producto.precio, 0)
        //console.log(precioTotal)
        setproductosEnCarrito(prodEnCarrAux);
        setPrecioTotal(precioTotal)

        setTimeout(() => {
            setCargaLista(true);
        }, (1500));

    }, []);
    

    const handleCheckout = async () => {
        let validFields = true;
        let regex_email = /\S+@\S+\.\S+/;

        if(!regex_email.test(email)){
            validFields = false;
            setErrorMensaje('El email no es valido');
        }
        if(validFields && email != confirmarEmail){
            validFields = false;
            setErrorMensaje('La confirmación del email no es valida');
        }

        if(validFields)
        {
            setErrorMensaje('');

            try {
                // Aquí puedes construir el objeto de la orden de compra con los datos necesarios
                const orderData = {
                  nombre: nombre,
                  apellido: apellido,
                  telefono: telefono,
                  email: email,
                  preciototal: precioTotal,

                  // Agrega los datos de la orden de compra
                  // Ejemplo: productName, quantity, totalPrice, etc.
                };
            
                
                const db = getFirestore()
                //await addDoc(collection(db, 'orders'), orderData)
            
                // La orden de compra se registró exitosamente
                console.log('Orden de compra registrada');
            } catch (error) {
                // Ocurrió un error al registrar la orden de compra
                console.error('Error al registrar la orden de compra:', error);
            }
            
            setCompraLista(true);
            toast.success("Orden de compra registrada", {
                position: toast.POSITION.TOP_CENTER
            });

            //vacias el local storage

            
        }
    }


    return (
        <div className="conteinerCarrito">
        {cargaLista && productosEnCarrito.length > 0 ? 
            <div className="mt-5 m-auto border border-3 carrito">
                <div>
                  <h1 className="mt-2 mb-3 text-center h1carrito" id="exampleModalLabel">Carrito de compras</h1> 
                </div>
                <div className=" d-flex justify-content-center row g-3" id="modal-bodyCarrito">
                    {productosEnCarrito.map((producto, idx) => {
                        return <ProductCardMin key={idx} detalle={producto} />
                    })}
                </div>
                <h3 className='text-center mt-3 pt-3'> Precio total =  ${precioTotal} </h3>
                <div className={`d-flex justify-content-center ${compraLista ? 'd-none' : ''}`}>
                    <form className="row g-3 needs-validation p-4 mt-5 pb-3">
                        <div className="col-md-4">
                            <label htmlFor="validationCustom01" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="validationCustom01" onChange={handleChangeNombre} placeholder="Mark" required/>

                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom01" className="form-label">Apellido</label>
                            <input type="text" className="form-control" id="validationCustom01" onChange={handleChangeApellido} placeholder="Zuckerberg" required/>

                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom01" className="form-label">Telefono</label>
                            <input type="text" className="form-control" id="validationCustom01" onChange={handleChangeTelefono} placeholder="3492-123456" required/>

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" onChange={handleChangeEmail} placeholder="name@example.com"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Repetir email</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" onChange={handleChangeConfirmarEmail} placeholder="name@example.com"/>
                        </div>

                        <div className="d-flex justify-content-center m-3">
                            <button type="button" className="btn btn-dark m-1" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" onClick={handleCheckout} data-bs-dismiss="modal" className={`btn btn-dark m-1 ${!realizarCompraActiva ? 'invisible' : ''}`} >
                                Realizar Compra
                            </button>
                        </div>
                    </form>
                </div>

                {compraLista ? 
                <div className='text-center'>
                    <h3 className='text-success'>Orden de compra registrada</h3>
                </div>
                :
                <div></div>}



                <div className='text-center'>
                    <label className='text-danger '>{errorMensaje}</label>
                </div>
            </div>
        :
        productosEnCarrito.length == 0 ?
            <div>Carrito vacio</div>
        :
            <div className="text-center mt-5">
                <div className="spinner-grow" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            }
        </div>
    )
}
