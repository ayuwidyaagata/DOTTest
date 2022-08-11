import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

export default function Homepage(props) {
    console.log('props: ', props)
    return (
        <div className="">
            <div className='m-2'>
            <Head title={props.title}></Head>
            <Navbar user={props.auth.user}> </Navbar>
            <div className="hero min-h-screen bg-base-100 p-5">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                    <h1 className="text-5xl font-bold">Hunian Masa Depan!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Telusuri</button>
                    </div>
                </div>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
}