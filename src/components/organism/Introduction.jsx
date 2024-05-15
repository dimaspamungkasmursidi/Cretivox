import { useEffect } from 'react';
import { TweenMax, Power3 } from 'gsap';

const Introduction = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-fade-in-up');
    elements.forEach((element, index) => {
      TweenMax.from(element, 1, {
        opacity: 0,
        y: -50,
        ease: Power3.easeOut,
        delay: 1.5 * index,
      });
      
      // Set opacity to 1 after animation completes
      TweenMax.to(element, 0, {
        opacity: 1,
        delay: 1.5 * index + 1, // Sesuaikan dengan durasi animasi Anda
      });
    });
  }, []);

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center md:h-92 md:text-2xl bg-gray-700 text-white px-8">
        <p className="text-center animate-fade-in-up duration-1000">
          Biasa di panggil Dimas, Dim, atau, Mas.. Asal gue dari bekasi, umur
          gue 23 tahun dan gue mahasiswa informatika di universitas bhayangkara
          jakarta raya. Cita-cita gue mau jadi Fullstack Developer, karna ketika
          gue berhasil menyelesaikan sebuah website yang gue bangun sendiri itu
          ada perasaan seneng yang ga bisa gue deskripsikan.
        </p>
        <br />
        <p className="text-center animate-fade-in-up duration-1000 delay-200">
          Memiliki pengalaman belajar sebagai frontend developer dan UI/UX di
          sebuah team web developer studi independent.
        </p>
        <br />
        <p className="text-center animate-fade-in-up duration-1000 delay-200">
          Gue berharap bisa magang ataupun kerja di Cretivox, entah sekarang
          ataupun nanti. Mungkin untuk sekarang skill coding gue masih sedikit
          banget. Tapi mulai dari sekarang, gue akan berusaha belajar dengan
          giat untuk bisa menjadi bagian dari Cretivox!... tapi sorry ni yee gue 
          ga percaya Zodiak wkwk.
        </p>
      </div>
    </>
  );
};

export default Introduction;
