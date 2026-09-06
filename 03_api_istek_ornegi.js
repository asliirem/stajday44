// =========================================================
// API İsteği Hazırlama - JavaScript (fetch) Örneği
// Staj Günü 4: REST API, JSON, HTTP Metodları
// =========================================================

const baseUrl = "https://api.ornekfirma.com/v1";

// ---------------------------------------------------------
// 1) GET isteği - Ürün listesini görüntüleme
// ---------------------------------------------------------
async function getUrunler() {
  const response = await fetch(`${baseUrl}/products`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });

  const data = await response.json();
  console.log("Ürünler:", data);
  return data;
}

// ---------------------------------------------------------
// 2) POST isteği - Yeni sipariş oluşturma
// ---------------------------------------------------------
async function siparisOlustur() {
  const yeniSiparis = {
    musteriId: 1,
    urunler: [
      { urunId: 101, adet: 2 },
      { urunId: 103, adet: 1 }
    ]
  };

  const response = await fetch(`${baseUrl}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(yeniSiparis)
  });

  const data = await response.json();
  console.log("Oluşturulan Sipariş:", data);
  return data;
}

// ---------------------------------------------------------
// 3) PUT isteği - Ürün bilgisi güncelleme
// ---------------------------------------------------------
async function urunGuncelle(urunId) {
  const guncelBilgi = {
    urunAdi: "Kablosuz Klavye",
    fiyat: 420.00,
    stokMiktari: 95
  };

  const response = await fetch(`${baseUrl}/products/${urunId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(guncelBilgi)
  });

  const data = await response.json();
  console.log("Güncellenen Ürün:", data);
  return data;
}

// ---------------------------------------------------------
// 4) DELETE isteği - Sipariş silme
// ---------------------------------------------------------
async function siparisSil(siparisId) {
  const response = await fetch(`${baseUrl}/orders/${siparisId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (response.ok) {
    console.log(`Sipariş #${siparisId} silindi.`);
  }
}

// ---------------------------------------------------------
// Örnek çağrılar
// ---------------------------------------------------------
getUrunler();
siparisOlustur();
urunGuncelle(101);
siparisSil(501);
