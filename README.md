# OSCE UKMPPD — Materi Bulan Mei 2022–2025

Aplikasi web rangkuman materi OSCE UKMPPD bulan Mei, dibangun dengan **Next.js 14**.

## ✨ Fitur

- 📚 **195 topik** dari Mei 2022–2025, dikoreksi dari human error Excel
- 🔁 Topik yang muncul lebih dari 1 tahun **digabungkan** dengan badge "Muncul Nx"
- 🧠 Setiap topik punya 3 kolom editable: **Signs & Symptoms**, **Diagnosis Banding**, **Tatalaksana**
- 💾 Catatan tersimpan otomatis di `localStorage` (tidak hilang walau browser ditutup)
- 🔍 Pencarian real-time di seluruh konten
- 🎛️ Filter per tahun (bisa kombinasi bebas)
- 📱 Responsive (mobile-friendly)

## 🗂️ Koreksi Human Error dari Excel

| Kolom Asli (Excel) | Diagnosis | Dipindah ke |
|---|---|---|
| Ginjal (2023) | Fimosis | Ginjal & Sal. Kemih (tetap, tapi konteks tindakan) |
| Ginjal (2025) | Mastitis, ANC, Bartholinitis, Cracked Nipple | **Obgyn** |
| Ginjal (2025) | Sistitis | Ginjal (tetap) |
| Obgyn (2025) | Gizi Buruk, Cushing, Hipoparatiroid | **Endokrin** |
| Endokrin (2025) | Syok Anafilaksis, Angioedema | **Hemato & Imunologi** |
| Hemato (2025) | Meniscus Tear, Ankle Sprain, OA Genu, Ruptur Tendon | **Muskuloskeletal** |
| Musku (2025) | Dermatitis Venenata, Erupsi Obat, Akne, LSK, Karbunkel | **Integumen** |
| Kardio (2025) | Appendisitis, GERD, Hernia, Abses Hepar, Abses Perianal | **Gastrointestinal** |
| Respirasi (2025) | Limfangitis, Tromboflebitis, AF | **Kardiovaskular** |
| Gastro (2025) | Parafimosis, Fimosis | **Ginjal & Sal. Kemih** |

## 🚀 Cara Jalankan Lokal

```bash
npm install
npm run dev
# Buka http://localhost:3000
```

## 🌐 Deploy ke GitHub Pages

1. Push project ini ke GitHub repository
2. Jalankan `npm run build` → akan membuat folder `out/`
3. Masuk ke **Settings → Pages**
4. Source: **GitHub Actions** atau deploy folder `out/` ke branch `gh-pages`

### Cara mudah dengan `gh-pages`:

```bash
npm install --save-dev gh-pages
# Tambahkan di package.json scripts:
# "deploy": "next build && touch out/.nojekyll && npx gh-pages -d out"
npm run deploy
```

Akses di: `https://username.github.io/nama-repo`

> **Catatan:** Data disimpan di `localStorage` masing-masing browser — setiap user punya catatan pribadi sendiri.
