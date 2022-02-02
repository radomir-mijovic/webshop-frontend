import React, {useState} from 'react';
import {AddNewProductFormStyled, FormButton, FormH1} from "./AddNewProductFormStyled";
import {Formik, Form, ErrorMessage, Field} from "formik";
import {validationSchema} from "../../schemas/yup_schemas";
import Head from 'next/head'
import axios from "axios";
import {ImAttachment} from "react-icons/im";
import {useRouter} from "next/router";
import useSWR, {useSWRConfig} from "swr";
import {useStyleContext} from "../../context/style_context";
import {useProductContext} from "../../context/product_context";
import {useModalContext} from "../../context/modal_context";

const AddNewProductForm = () => {
    const [imageUrl, setImageUrl] = useState('')
    const {setIsActiveClass} = useStyleContext()
    const {setIsProducts} = useProductContext()
    const {setIsModalMsg, setIsModal} = useModalContext()
    const router = useRouter()

    const fetcher = url => axios.get(url).then(res => res.data)
    const {mutate} = useSWRConfig()
    useSWR('https://nordhealth.herokuapp.com/api/products', fetcher)


    const initialValues = {
        name: '',
        brand: '',
        description: '',
        price: '',
        code: '',
    }

    async function submitHandler(values) {

        const formData = new FormData()
        formData.append('name', values.name)
        formData.append('brand', values.brand)
        formData.append('description', values.description)
        formData.append('price', values.price)
        formData.append('code', values.code)
        formData.append('image', imageUrl)

        try {
            await axios.post('https://nordhealth.herokuapp.com/api/products', formData)
            mutate('https://nordhealth.herokuapp.com/api/products').then(r =>  setIsProducts(r))
            setIsActiveClass(0)
            setIsModalMsg('Product added successfully')
            setIsModal(true)
            router.push('/')

        } catch (e) {
            if (e.response.data) {
                for (const [key, value] of Object.entries(e.response.data)) {
                    setIsModalMsg(value[0])
                    setIsModal(true)
                }
            }
            return
        }
    }

    return (
        <>
            <Head>
                <title>Add New Product</title>
            </Head>
            <AddNewProductFormStyled>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={submitHandler}>
                    <Form className='form'>
                        <FormH1>
                            Add New Product
                        </FormH1>

                        <div className='input-form'>
                            <label className='label' htmlFor="name">Name</label>
                            <Field className='input' type='text' name='name'/>
                            <ErrorMessage name='name'>
                                {msg => <p className='error-msg'>{msg}</p>}
                            </ErrorMessage>
                        </div>

                        <div className='input-form'>
                            <label className='label' htmlFor="brand">Brand</label>
                            <Field className='input' type='text' name='brand'/>
                            <ErrorMessage name='brand'>
                                {msg => <p className='error-msg'>{msg}</p>}
                            </ErrorMessage>
                        </div>

                        <div className='input-form'>
                            <label className='label' htmlFor="price">Price</label>
                            <Field className='input' type='number' name='price'/>
                            <ErrorMessage name='price'>
                                {msg => <p className='error-msg'>{msg}</p>}
                            </ErrorMessage>
                        </div>

                        <div className='input-form'>
                            <label className='label' htmlFor="description">Description</label>
                            <Field className='input' type='text' name='description'/>
                            <ErrorMessage name='description'>
                                {msg => <p className='error-msg'>{msg}</p>}
                            </ErrorMessage>
                        </div>

                        <div className='input-form'>
                            <label className='label' htmlFor="code">Code</label>
                            <Field className='input' type='text' name='code'/>
                            <ErrorMessage name='code'>
                                {msg => <p className='error-msg'>{msg}</p>}
                            </ErrorMessage>
                        </div>

                        <div className='input-form'>
                            <label className='label label-image' htmlFor="image">
                                Choose Image
                                <ImAttachment/>
                            <input
                                id='image'
                                onChange={e => setImageUrl(e.target.files[0])}
                                type='file'
                                accept="image/*"/>
                                {imageUrl &&
                                <h2 className='image__h2'>
                                    {imageUrl.name}
                                </h2>}
                            </label>
                        </div>

                        <FormButton
                            whileTap={{scale: .95}}
                            type='submit'>
                            Add
                        </FormButton>

                    </Form>
                </Formik>
            </AddNewProductFormStyled>
        </>
    );
};

export default AddNewProductForm;