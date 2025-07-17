# Gazipaşa Aile Sağlığı Merkezi Web Sitesi

Bu proje, [Gazipaşa Aile Sağlığı Merkezi](https://gazipasaasm.com) için hazırlanmış, modern ve erişilebilir bir web sitesidir. Ziyaretçiler, kurum hakkında bilgi alabilir, kadroyu inceleyebilir, duyuruları takip edebilir, galeriye göz atabilir ve iletişim kurabilirler.

## Özellikler

-   **Kurumsal Tanıtım:** Hakkımızda, kadromuz ve çalışma programı sayfaları
-   **Duyurular:** Güncel haberler ve bilgilendirmeler
-   **Galeri:** Fotoğraf galerisi
-   **İletişim:** Telefon, e-posta ve adres bilgileri ile iletişim formu
-   **Mobil Uyumlu:** Tüm cihazlarda sorunsuz görüntülenir
-   **Hızlı ve Erişilebilir:** Next.js ile statik olarak derlenmiş, SEO uyumlu yapı
-   **Sitemap Desteği:** SEO için otomatik olarak oluşturulmuş sitemap.xml (`public/sitemap.xml`)

## Kullanılan Teknolojiler

-   [Next.js](https://nextjs.org/) (App Router, TypeScript)
-   React
-   Tailwind CSS
-   [Lucide React](https://lucide.dev/) (ikonlar için)

## Kurulum ve Geliştirme

1. **Depoyu klonlayın:**

    ```bash
    git clone https://github.com/kullaniciadi/gazipasa-asm.git
    cd gazipasa-asm
    ```

2. **Bağımlılıkları yükleyin:**

    ```bash
    npm install
    ```

3. **Geliştirme sunucusunu başlatın:**

    ```bash
    npm run dev
    ```

4. **Projeyi statik olarak derleyin ve export alın:**
    ```bash
    npm run build
    npm run export
    ```

## Canlı Site

-   [https://gazipasaasm.com](https://gazipasaasm.com)

## Proje Yapısı

-   `app/` — Next.js sayfaları ve routing
-   `components/` — React bileşenleri
-   `public/` — Statik dosyalar, görseller ve sitemap.xml
-   `styles/` — Global ve özel stiller
-   `lib/`, `hooks/` — Yardımcı fonksiyonlar ve özel hooklar

## Lisans

Bu proje, Gazipaşa Aile Sağlığı Merkezi için özel olarak hazırlanmıştır.
