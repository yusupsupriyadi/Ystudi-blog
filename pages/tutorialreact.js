import React from 'react'
import Footer from '../components/Footer'
import HeaderTutorial from '../components/HeaderTutorial'
import Navbar2 from '../components/Navbar2'

function tutorialreact() {
    return (
        <div>
            <Navbar2 />
            <HeaderTutorial/>
            <section className="font-sans container m-auto flex flex-col py-8 px-40">
                <h1 className="my-6 max-w-full text-3xl md:text-4xl lg:text-5xl font-medium">INSTALASI REACT JS</h1>

                <p className="my-4 max-w-full leading-loose text-left"><h1 className="my-2 max-w-full text-3xl md:text-4xl lg:text-2xl font-medium">1. Install nodeJS</h1>
                Download dan Install di <a className="text-blue-500" href="https://nodejs.org/">https://nodejs.org/</a> <br />
                setelah selesai install nodejs, buka CMD / DOS / Terminal, ketik
                npm -v</p>
                <p className="my-2 max-w-full leading-loose text-left"><h1 className="my-2 max-w-full text-3xl md:text-4xl lg:text-2xl font-medium">2. Install create-react-app</h1>
                tentukan lokasi install react, <br/>
                misalkan kalau di windows D:/belajar-react/ (buat folder tersebut kalau belum ada) <br />
ketik di CMD/DOS <br />
d:  <br />
cd belajar-react <br />
jika posisi sudah di folder tersebut, ketikkan perintah <br/>

npm install -g create-react-app<br />
untuk cek sukses / tidak, ketikan perintah:<br />

create-react-app --version</p>
                <p className="my-2 max-w-full leading-loose text-left"><h1 className="my-2 max-w-full text-3xl md:text-4xl lg:text-2xl font-medium">3. Buat project react js</h1>
                ketikkan perintah<br /><br />

create-react-app web-reactku<br />
cd web-reactku<br />
npm start<br />
tunggu sebentar, nanti otomatis buka halaman web dengan alamat localhost:3000<br />
jika ada error ketikkan perintah<br />

npm install<br />
npm start<br />
Hasilnya: <img src="https://i1.wp.com/rasupe.com/wp-content/uploads/2018/07/react-js-install.png?w=1042&ssl=1" alt=""/></p>
                <p className="my-2 max-w-full leading-loose text-left"><h1 className="my-2 max-w-full text-3xl md:text-4xl lg:text-2xl font-medium">4. Selesai</h1>
                    <h2 className="text-bold">Kesimpulan </h2>
Menginstall react js sangat mudah, memang banyak ditemukan cara lain untuk menginstall react js.
namun untuk pemula seperti saya, menggunakan create-react-app adalah cara termudah memulai belajar reactjs.</p>
            </section>
            <Footer />
        </div>
    )
}

export default tutorialreact
