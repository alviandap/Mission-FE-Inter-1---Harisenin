import React from "react";
import { useNavigate } from "react-router-dom"; // Impor useNavigate
import "./dashboard.css";

const HomePage = () => {
    const navigate = useNavigate(); // Mendeklarasikan navigate menggunakan hook useNavigate

    return (
        <div className="homepage-container">
            {/* Bagian Teks */}
            <div className="homepage-text">
                <p>VIDEO LEARNING PLATFORM</p>
                <h1>VideoBelajar</h1>
                <p className="desc">
                    VideoBelajar adalah platform pembelajaran video berbasis web yang memberi pengguna akses ke beragam kursus dan tutorial berbasis video. Dengan VideoBelajar, pengguna dapat belajar dengan kecepatan dan jadwal mereka sendiri. VideoBelajar menawarkan cara yang fleksibel dan nyaman untuk memperoleh keterampilan dan pengetahuan baru, sehingga memudahkan pengguna menyesuaikan pembelajaran ke dalam kehidupan mereka yang sibuk. VideoBelajar menawarkan berbagai kursus dan tutorial, mencakup topik seperti bisnis, teknologi, kesehatan dan kesejahteraan, pembelajaran bahasa, dan banyak lagi.
                </p>

            </div>

            {/* Bagian Mockup */}
            <div className="homepage-image">
                <img src="/mockup-phone.png" alt="Mockup Phone" />
            </div>
        </div>
    );
};

export default HomePage;
