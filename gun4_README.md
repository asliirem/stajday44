# Staj Günü 4 - REST API, JSON ve HTTP Metodları

Bu klasör, staj kapsamında REST API mantığı üzerine yapılan çalışmaları içerir.

## İçerik

- **01_json_ornekleri.json** — Ürün, müşteri ve sipariş verilerinin JSON formatında
  nasıl temsil edildiğine dair örnek çıktılar.
- **02_api_istekleri.http** — `GET`, `POST`, `PUT`, `DELETE` metodlarıyla hazırlanmış
  örnek API istekleri (REST Client formatında).
- **03_api_istek_ornegi.js** — JavaScript `fetch` kullanılarak hazırlanan API istek
  örnekleri: ürün listeleme, sipariş oluşturma, ürün güncelleme, sipariş silme.

## Konu Özeti

- **REST API**: Farklı yazılımların (örn. Kodexis uygulamaları ile Logo/Netsis ERP)
  birbiriyle veri alışverişi yapmasını sağlayan yapı.
- **JSON**: Sistemler arası veri alışverişinde en çok kullanılan, anahtar-değer
  mantığına dayanan veri formatı.
- **HTTP Metodları**:
  - `GET` → Veri listeleme / görüntüleme
  - `POST` → Yeni kayıt oluşturma
  - `PUT` → Var olan kaydı güncelleme
  - `DELETE` → Kayıt silme

## Nasıl Kullanılır

1. `01_json_ornekleri.json` dosyasını inceleyerek örnek veri yapısını görebilirsiniz.
2. `02_api_istekleri.http` dosyasını VS Code'da "REST Client" eklentisiyle açıp
   isteklerin üzerindeki "Send Request" bağlantısına tıklayarak test edebilirsiniz.
3. `03_api_istek_ornegi.js` dosyasını bir Node.js ortamında veya tarayıcı konsolunda
   çalıştırarak fetch tabanlı isteklerin nasıl kurgulandığını inceleyebilirsiniz.
