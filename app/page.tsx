import HeroSlider from "@/components/HeroSlider"
import QuickAccessGallery from "@/components/QuickAccessGallery"

export default function Home() {
  return (
    <div className="space-y-8 sm:space-y-12 lg:space-y-16">
      {/* Hero Slider */}
      <section className="content-padding">
        <HeroSlider />
      </section>

      {/* Quick Access Gallery */}
      <section className="content-padding">
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h2 className="heading-1 mb-3 sm:mb-4">Hızlı Erişim</h2>
          <p className="text-responsive text-gray-600 max-w-2xl mx-auto">
            Sağlık hizmetlerimize ve önemli bilgilere hızlı erişim için aşağıdaki bağlantıları kullanabilirsiniz.
          </p>
        </div>
        <QuickAccessGallery />
      </section>

      {/* Information Section */}
      <section className="content-padding">
        <div className="card content-padding max-w-4xl mx-auto">
          <h2 className="heading-2 mb-4 sm:mb-6 text-center sm:text-left">Aile Sağlığı Merkezine Gelirken</h2>
          <div className="prose max-w-none text-gray-700 space-y-4 sm:space-y-6">
            <p className="text-responsive leading-relaxed">
              Aile Sağlığı Merkezimize gelirken lütfen aşağıdaki belgeleri yanınızda bulundurunuz:
            </p>
            <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-responsive ml-4">
              <li>Kimlik belgesi (TC Kimlik Kartı veya Nüfus Cüzdanı)</li>
              <li>Sosyal Güvenlik Kurumu kartı</li>
              <li>Varsa önceki sağlık raporları ve tahlil sonuçları</li>
              <li>Kullandığınız ilaçların listesi</li>
            </ul>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 sm:p-6 rounded-r-lg">
              <p className="text-responsive leading-relaxed">
                <strong className="text-blue-800">Randevu için:</strong> MHRS sistemini kullanabilir veya{" "}
                <a href="tel:03224547733" className="text-blue-600 hover:text-blue-800 font-semibold focus-visible">
                  0322 454 77 33
                </a>{" "}
                numaralı telefondan bizi arayabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className="content-padding">
        <div className="card content-padding max-w-4xl mx-auto">
          <h2 className="heading-2 mb-4 sm:mb-6 text-center">Sağlık Bilgilendirme Videosu</h2>
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/w3YkRSL-0FU"
              title="Sağlık Bilgilendirme Videosu"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <p className="text-sm text-gray-600 text-center mt-4">
            Sağlık hizmetlerimiz hakkında detaylı bilgi için videomuzu izleyebilirsiniz.
          </p>
        </div>
      </section>
    </div>
  )
}
