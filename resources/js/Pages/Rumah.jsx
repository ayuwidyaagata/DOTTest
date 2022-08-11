import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';
import Footer from '@/Components/Footer';

export default function Rumah(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Data Rumah 
            <ul className="menu menu-horizontal bg-base-100 float-right">
            <li>
                <Link href="data-rumah">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                </Link>
            </li>
            <li>
                <Link href="data-penjual">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                </Link>
            </li>
            </ul>
            </h2>}
        >
            <Head title="Dashboard" />

            <div className="flex flex-col min-h-screen sm:px-6 lg:px-8">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <button className="btn gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                        Tambah Rumah
                    </button>
                    <table className="min-w-full text-left mt-5">
                    <thead className="border-b bg-gray-50">
                        <tr>
                        <th scope="col" className="text-sm font-bold text-gray-900 px-6 py-4">
                            No
                        </th>
                        <th scope="col" className="text-sm font-bold text-gray-900 px-6 py-4">
                            Nama
                        </th>
                        <th scope="col" className="text-sm font-bold text-gray-900 px-6 py-4">
                            Harga
                        </th>
                        <th scope="col" className="text-sm font-bold text-gray-900 px-6 py-4">
                            Penjual
                        </th>
                        <th scope="col" className="text-sm font-bold text-gray-900 px-6 py-4">
                            Deskripsi
                        </th>
                        <th scope="col" className="text-sm font-bold text-gray-900 px-6 py-4">
                            Aksi
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="https://placeimg.com/260/400/arch" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">American Classic</div>
                                    <div className="text-sm opacity-50">Jakarta Pusat</div>
                                </div>
                            </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Rp. 1.000.000.000
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Otto
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Lokasi strategis, dilengkapi smarthome
                        </td>
                        <td className='whitespace-nowrap'>
                            <a href="" className="btn btn-xs btn-success mx-1">Lihat</a>
                            <a href="" className="btn btn-xs btn-warning">Edit</a>
                            <a href="" className="btn btn-xs btn-error mx-1">Hapus</a>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            </div>
            
            <Footer></Footer>
        </Authenticated>
    );
}