import React, { useState, useEffect } from "react";
import { getProductById, createProduct, updateProduct } from "../services/productService";

const ProductForm = ({ productId, onAddProduct, onUpdateProduct }) => {
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [error, setError] = useState(null);

    // Función que maneja el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!nombre || !precio || !descripcion) {
            setError("Todos los campos son obligatorios.");
            return;
        }

        const product = { nombre, precio, descripcion };

        try {
            if (productId) {
                const response = await updateProduct(productId, product);
                onUpdateProduct(response.data);
            } else {
                const response = await createProduct(product);
                onAddProduct(response.data);
            }
            
            setError(null);
            setNombre("");
            setPrecio("");
            setDescripcion("");
        } catch (error) {
            console.error("Error al procesar el producto", error);
            setError("Hubo un error al procesar el producto.");
        }
    };

    useEffect(() => {
        const fetchProduct = async () => {
            if (productId) {
                try {
                    const response = await getProductById(productId);
                    const product = response.data;
                    setNombre(product.nombre);
                    setPrecio(product.precio);
                    setDescripcion(product.descripcion);
                } catch (error) {
                    console.error("Error al obtener el producto", error);
                    setError("Error al obtener los datos del producto.");
                }
            } else {
                setNombre("");
                setPrecio("");
                setDescripcion("");
            }
        };

        fetchProduct();
    }, [productId]);

    return (
        <form onSubmit={handleSubmit}>
            <h2>{productId ? "Editar Producto" : "Crear Producto"}</h2>
            {error && <div className="error">{error}</div>}
            <div>
                <label>Nombre</label>
                <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>
            <div>
                <label>Precio</label>
                <input
                    type="number"
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                />
            </div>
            <div>
                <label>Descripción</label>
                <textarea
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                />
            </div>
            <button type="submit">
                {productId ? "Actualizar Producto" : "Guardar Producto"}
            </button>
        </form>
    );
};

export default ProductForm;