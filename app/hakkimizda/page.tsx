import type { Metadata } from "next"
import { Heart, Users, Award, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Hakkımızda - Gazipaşa ASM",
  description: "Gazipaşa Aile Sağlığı Merkezi hakkında bilgiler, misyon ve vizyon",
}

export default function About() {
  const features = [
    {
      icon: Heart,
      title: "Kaliteli Sağlık Hizmeti",
      description: "Modern tıbbi ekipmanlar ve uzman kadromuzla kaliteli sağlık hizmeti sunuyoruz.",
    },
    {
      icon: Users,
      title: "Deneyimli Kadro",
      description: "Alanında uzman doktor ve sağlık personelimizle hizmet veriyoruz.",
    },
    {
      icon: Award,
      title: "Güvenilir Hizmet",
      description: "Hasta memnuniyetini ön planda tutarak güvenilir sağlık hizmeti sağlıyoruz.",
    },
    {
      icon: Clock,
      title: "7/24 Acil Destek",
      description: "Acil durumlar için 112 ile koordineli olarak hizmet veriyoruz.",
    },
  ]

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Hakkımızda</h1>

        {/* Introduction */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Gazipaşa Aile Sağlığı Merkezi</h2>
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              Gazipaşa Aile Sağlığı Merkezi olarak, bölgemizde yaşayan vatandaşlarımıza kaliteli ve güvenilir sağlık
              hizmeti sunmak için 2010 yılından beri hizmet vermekteyiz. Modern tıbbi ekipmanlarımız ve deneyimli
              kadromuzla birinci basamak sağlık hizmetlerini en iyi şekilde sunmayı hedefliyoruz.
            </p>
            <p>
              Merkezimizde aile hekimliği hizmetleri, koruyucu sağlık hizmetleri, aşı uygulamaları, laboratuvar
              hizmetleri ve sağlık eğitimi gibi birçok alanda hizmet vermekteyiz. Hasta memnuniyetini ön planda tutarak,
              her yaş grubundan vatandaşımıza uygun sağlık hizmeti sunmaya devam ediyoruz.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Misyonumuz</h3>
            <p className="text-gray-700">
              Gazipaşa ve çevresinde yaşayan vatandaşlarımıza, modern tıp anlayışı çerçevesinde, kaliteli, güvenilir ve
              ulaşılabilir birinci basamak sağlık hizmetleri sunmak, koruyucu sağlık hizmetleri ile toplum sağlığını
              geliştirmek.
            </p>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Vizyonumuz</h3>
            <p className="text-gray-700">
              Bölgemizde sağlık alanında öncü bir kurum olmak, hasta memnuniyetini en üst düzeyde tutarak, sürekli
              gelişen ve yenilenen bir sağlık merkezi olarak hizmet vermek.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="card p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Services */}
        <div className="card p-8">
          <h3 className="text-xl font-semibold mb-6 text-gray-800">Hizmetlerimiz</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-gray-700">
              <li>• Aile hekimliği hizmetleri</li>
              <li>• Koruyucu sağlık hizmetleri</li>
              <li>• Aşı uygulamaları</li>
              <li>• Laboratuvar hizmetleri</li>
              <li>• Sağlık taramaları</li>
            </ul>
            <ul className="space-y-2 text-gray-700">
              <li>• Kronik hastalık takibi</li>
              <li>• Sağlık eğitimi</li>
              <li>• Evde sağlık hizmeti</li>
              <li>• Acil müdahale</li>
              <li>• Sağlık raporu düzenleme</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
