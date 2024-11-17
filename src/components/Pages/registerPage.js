import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './registerPage.css';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState(''); // Untuk nomor HP
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const navigate = useNavigate();

    const emailRegex = /^[a-zA-Z0-9._-]+@gmail\.com$/; // Memastikan domain adalah @gmail.com
    const phoneRegex = /^[0-9]{10,15}$/;  // Mengizinkan nomor HP dengan panjang 10-15 digit

    const handleRegister = (e) => {
        e.preventDefault();

        // Validasi Email
        if (!emailRegex.test(email)) {
            setEmailError('Email harus memiliki domain @gmail.com dan format yang benar');
            return;
        } else {
            setEmailError('');
        }

        // Validasi Nomor HP
        if (!phoneRegex.test(username)) {
            setPhoneError('Nomor HP hanya boleh berisi angka dan panjangnya antara 10-15 digit');
            return;
        } else {
            setPhoneError('');
        }

        // Validasi Password
        if (password !== rePassword) {
            alert('Password dan Re-Password tidak cocok!');
            return;
        }

        console.log('Registering:', { name, email, username, password, rePassword });
        // Logika pendaftaran lainnya
        navigate('/login'); // Redirect ke halaman login
    };

    // Untuk memastikan hanya angka yang dapat dimasukkan pada nomor HP
    const handlePhoneChange = (e) => {
        const value = e.target.value;
        // Hanya ambil angka dari inputan
        if (/^[0-9]*$/.test(value)) {
            setUsername(value);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-800">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Register</h1>
                
                <form onSubmit={handleRegister}>
                    {/* Input Nama */}
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700">Nama</label>
                        <input
                            type="text"
                            placeholder="Masukkan Nama"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    
                    {/* Input Email */}
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700">Alamat Email</label>
                        <input
                            type="email"
                            placeholder="Masukkan email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                        {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
                    </div>
                    
                    {/* Input Nomor HP */}
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700">Nomor HP</label>
                        <input
                            type="text"  // Menggunakan type "text" agar dapat menambahkan pengecekan manual
                            placeholder="Nomor HP"
                            value={username}
                            onChange={handlePhoneChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                        {phoneError && <p className="text-red-500 text-sm">{phoneError}</p>}
                    </div>
                    
                    {/* Input Password */}
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Re-Password */}
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700">Re-Password</label>
                        <input
                            type="password"
                            placeholder="Re-Password"
                            value={rePassword}
                            onChange={(e) => setRePassword(e.target.value)}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    
                    {/* Tombol Register */}
                    <button className="btn-login" type="submit">Register</button>

                    <p className="text-sm text-center mt-4">
                        Sudah punya akun?{' '}
                        <span
                            className="text-blue-500 cursor-pointer hover:underline"
                            onClick={() => navigate('/login')}
                        >
                            Login
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
