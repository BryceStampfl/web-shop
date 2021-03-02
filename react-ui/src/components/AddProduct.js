import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../_reducers/productsSlice'

const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')

    const onTitleChanged = e => setTitle(e.target.value);
    const onDescriptionChanged = e => setDescription(e.target.value);
    const onPriceChanged = e => setPrice(e.target.value);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addProduct({
            title: title,
            price: price,
            description: description
        }))
    }

    return (
        <section>
            <h2>Add a new Product</h2>
            <form>
                <label htmlFor="Title">Title</label>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={onTitleChanged} />

                <label htmlFor="Price">Price</label>
                <input
                    type="text"
                    value={price}
                    onChange={onPriceChanged} />

                <label htmlFor="Description">Description</label>
                <textarea
                    value={description}
                    onChange={onDescriptionChanged} />

                <button onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </section>
    )
}

export default AddProduct;