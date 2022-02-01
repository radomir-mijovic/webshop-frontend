import React from 'react';
import {AddNewProductFormStyled, FormButton} from "./AddNewProductFormStyled";
import {Formik, Form, ErrorMessage, Field} from "formik";
import {validationSchema} from "../../schemas/yup_schemas";
import Head from 'next/head'
import Image from "next/image";

const AddNewProductForm = () => {

    const initialValues = {
        name: '',
        brand: '',
        description: '',
        price: 0,
        code: ''
    }

    async function submitHandler(values) {
        console.log(values)
    }

    return (
        <>
            <Head>
                <title>Add New Product</title>
            </Head>
            <AddNewProductFormStyled>
                {/*<div className='form-image'>*/}
                {/*<Image*/}
                {/*    // width={1000}*/}
                {/*    // height={1000}*/}
                {/*    layout='fill'*/}
                {/*    objectFit={'cover'}*/}
                {/*    src='/assets/shoes.jpg'*/}
                {/*    alt='shoes img'/>*/}
                {/*</div>*/}
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={submitHandler}>
                    <Form>
                        <div>
                            <label className='label' htmlFor="name">Name</label>
                            <Field className='input' type='text' name='name'/>
                            <ErrorMessage name='name'>
                                {msg => <p className='error-msg'>{msg}</p>}
                            </ErrorMessage>
                        </div>

                        <div>
                            <label className='label' htmlFor="brand">Brand</label>
                            <Field className='input' type='text' name='brand'/>
                            <ErrorMessage name='brand'>
                                {msg => <p className='error-msg'>{msg}</p>}
                            </ErrorMessage>
                        </div>

                        <div>
                            <label className='label' htmlFor="description">Description</label>
                            <Field className='input' type='text' name='description'/>
                            <ErrorMessage name='description'>
                                {msg => <p className='error-msg'>{msg}</p>}
                            </ErrorMessage>
                        </div>

                        <div>
                            <label className='label' htmlFor="code">Code</label>
                            <Field className='input' type='text' name='code'/>
                            <ErrorMessage name='code'>
                                {msg => <p className='error-msg'>{msg}</p>}
                            </ErrorMessage>
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