// Data OSCE UKMPPD Bulan Mei 2022-2025
// Sudah dikoreksi dari human error di file Excel:
// - Fimosis (2023) salah masuk kolom Ginjal → dipindah ke Bedah/Urologi (Ginjal & Sal. Kemih)
// - Mei 2025 Ginjal: Mastitis, ANC, Bartholinitis → dipindah ke Obgyn
// - Mei 2025 Ginjal: Sistitis → tetap di Ginjal
// - Mei 2025 Obgyn: Gizi buruk, Cushing, Hipoparatiroid → dipindah ke Endokrin
// - Mei 2025 Endokrin: Syok Anafilaksis, Angioedem → dipindah ke Hemato/Imunologi
// - Mei 2025 Hemato: Meniscus tear, Ankle sprain, OA Genu, Ruptur tendon → dipindah ke Musku
// - Mei 2025 Musku: Dermatitis, Erupsi obat, Akne, LSK, Karbunkel → dipindah ke Integumen
// - Mei 2025 Kardio: Appendisitis, Abses perianal, GERD, Hernia, Abses hepar → dipindah ke Gastro
// - Mei 2025 Respirasi: Limfangitis, Tromboflebitis, AF → dipindah ke Kardio
// - Mei 2025 Gastro: Parafimosis, Fimosis → dipindah ke Ginjal & Sal. Kemih
// - Mei 2022 Hemato: Imunisasi → dipindah ke Pediatri catatan (tetap Hemato/Imunologi karena imunologi)
// - Mei 2024 Hemato: RA, SLE, Demam Rematik, Polimyalgia → penyakit reumatologi → tetap (Hemato Imunologi)
// - Mei 2022 Respirasi: duplikat Asma & PPOK → deduplicated
// - Mei 2022 Obgyn: duplikat PAP smear → deduplicated
// - Mei 2024 Obgyn: duplikat BV → deduplicated

export const SYSTEMS = [
  { key: 'saraf',      label: 'Saraf',                     icon: '🧠' },
  { key: 'psikiatri',  label: 'Psikiatri',                 icon: '💭' },
  { key: 'indera',     label: 'Indera',                    icon: '👁' },
  { key: 'respirasi',  label: 'Respirasi',                 icon: '🫁' },
  { key: 'kardio',     label: 'Kardiovaskular',             icon: '❤️' },
  { key: 'gastro',     label: 'Gastrointestinal',           icon: '🫄' },
  { key: 'ginjal',     label: 'Ginjal & Saluran Kemih',    icon: '💧' },
  { key: 'obgyn',      label: 'Obgyn',                     icon: '🌸' },
  { key: 'endokrin',   label: 'Endokrin & Metabolisme',    icon: '⚡' },
  { key: 'hemato',     label: 'Hemato, Imunologi & Infeksi', icon: '🦠' },
  { key: 'musku',      label: 'Muskuloskeletal',            icon: '🦴' },
  { key: 'integumen',  label: 'Integumen',                  icon: '🩹' },
]

export const RAW_DATA = {
  saraf: [
    // 2022
    { name: 'Classic migrain',           years: [2022] },
    { name: 'TTH (Tension-Type Headache)', years: [2022] },
    { name: 'BPPV',                      years: [2022, 2023] },
    { name: "Bell's palsy",              years: [2022] },
    { name: 'HNP Lumbal',                years: [2022, 2025] },
    // 2023
    { name: 'LBP e.c Susp. HNP',         years: [2023] },
    { name: 'Spondilitis TB',             years: [2023, 2025] },
    { name: 'Meniere disease',            years: [2023, 2025] },
    { name: 'Demensia Alzheimer',         years: [2023] },
    { name: 'TIA (Transient Ischemic Attack)', years: [2023] },
    { name: 'Stroke Iskemik',             years: [2023] },
    // 2024
    { name: 'Trauma Medulla Spinalis + Fraktur Kompresi', years: [2024] },
    { name: 'Meningoensefalitis',         years: [2024] },
    // 2025
    { name: 'Neuropati Perifer e.c DM Tipe 2', years: [2025] },
    { name: 'Spondylolisthesis',          years: [2025] },
    { name: 'Tarsal Tunnel Syndrome',     years: [2025] },
  ],

  psikiatri: [
    { name: 'PTSD',                                   years: [2022, 2023, 2025] },
    { name: 'Baby Blues / Depresi Postpartum',        years: [2023, 2025] },
    { name: 'Gangguan Cemas',                         years: [2022, 2024] },
    { name: 'Insomnia',                               years: [2022, 2023, 2024] },
    { name: 'Hipersomnia',                            years: [2022] },
    { name: 'Bipolar Episode Kini Depresi',           years: [2022] },
    { name: 'Disfungsi Seksual',                      years: [2023, 2025] },
    { name: 'Transient Tic Disorder',                 years: [2023] },
    { name: 'Gangguan Somatisasi',                    years: [2024] },
    { name: 'Skizoafektif Tipe Depresi',              years: [2024] },
    { name: 'Gangguan Psikotik Akut',                 years: [2024] },
    { name: 'Campuran Ansietas dan Depresi',          years: [2025] },
    { name: 'Depresi Ringan',                         years: [2025] },
  ],

  indera: [
    // Mata
    { name: 'Blefaritis',                             years: [2022, 2024] },
    { name: 'Episkleritis',                           years: [2022, 2023] },
    { name: 'Dry Eye Syndrome',                       years: [2022] },
    { name: 'Blefarokonjungtivitis Bakteri',          years: [2024] },
    { name: 'Hifema Grade II',                        years: [2024] },
    { name: 'Laserasi Palpebra',                      years: [2024] },
    { name: 'Uveitis Anterior',                       years: [2023] },
    { name: 'Keratitis Bakteri',                      years: [2023] },
    { name: 'Miopia',                                 years: [2025] },
    { name: 'Presbiopia',                             years: [2025] },
    { name: 'Astigmatisme',                           years: [2025] },
    // Telinga
    { name: 'OMA (Otitis Media Akut) Supuratif',     years: [2022, 2025] },
    { name: 'Otitis Media Efusi',                     years: [2025] },
    { name: 'Miringitis Bullosa',                     years: [2023] },
    { name: 'Mastoiditis ec OMSK',                    years: [2023] },
    // Hidung & Tenggorok
    { name: 'Rhinitis Alergi',                        years: [2022] },
    { name: 'Rhinitis Vasomotor',                     years: [2023] },
  ],

  respirasi: [
    { name: 'Asma',                                   years: [2022] },
    { name: 'PPOK Eksaserbasi Akut',                  years: [2022, 2023, 2024] },
    { name: 'Pneumotoraks Spontan',                   years: [2023] },
    { name: 'Efusi Pleura Masif',                     years: [2023] },
    { name: 'Edema Paru Akut',                        years: [2023] },
    { name: 'Bronkiolitis',                           years: [2023] },
    { name: 'Pneumonia Aspirasi',                     years: [2023] },
    { name: 'Abses Peritonsiler',                     years: [2024] },
    { name: 'Laringitis',                             years: [2024] },
    { name: 'Faringitis',                             years: [2024] },
    { name: 'TB Paru + Susp. HIV',                   years: [2024] },
    { name: 'Pertusis',                               years: [2024] },
  ],

  kardio: [
    { name: 'Hipertensi',                             years: [2022] },
    { name: 'Atrial Fibrilasi (AF)',                  years: [2022, 2025] },
    { name: 'SVT (Supraventrikular Takikardi)',        years: [2022, 2023] },
    { name: 'STEMI',                                  years: [2022] },
    { name: 'UAP (Unstable Angina Pectoris)',         years: [2022] },
    { name: 'PVC (Premature Ventricular Contraction)',years: [2022] },
    { name: 'VFib + RJP',                             years: [2023] },
    { name: 'Sinus Bradikardia',                      years: [2023] },
    { name: 'CVI (Chronic Venous Insufficiency)',     years: [2024] },
    { name: 'Tromboflebitis Superfisial',             years: [2024, 2025] },
    { name: 'Limfangitis',                            years: [2024, 2025] },
  ],

  gastro: [
    { name: 'Appendisitis Akut',                      years: [2022, 2023, 2025] },
    { name: 'GERD',                                   years: [2023, 2025] },
    { name: 'Demam Tifoid',                           years: [2022] },
    { name: 'Hepatitis A',                            years: [2022] },
    { name: 'Disentri Ameba',                         years: [2022] },
    { name: 'Kandidiasis Oral',                       years: [2022] },
    { name: 'DADRS (Drug-Associated Diarrhea)',       years: [2022] },
    { name: 'Hemoroid Interna',                       years: [2023] },
    { name: 'Peritonitis',                            years: [2023, 2024] },
    { name: 'Intususepsi',                            years: [2024] },
    { name: 'Ruptur Varises Esofagus',               years: [2024] },
    { name: 'Abses Perianal / Fistula Ani',          years: [2025] },
    { name: 'Hernia Inguinalis',                      years: [2025] },
    { name: 'Abses Hepar ec Entamoeba histolytica',  years: [2025] },
    { name: 'Fimosis (Sirkumsisi)',                   years: [2023, 2025] },
    { name: 'Parafimosis (Dorsumsisi)',               years: [2025] },
  ],

  ginjal: [
    { name: 'GNAPS',                                  years: [2022, 2024] },
    { name: 'Pielonefritis Akut',                     years: [2022, 2024] },
    { name: 'Sistitis',                               years: [2022, 2025] },
    { name: 'Nefrolitiasis / Ureterolitiasis',        years: [2022] },
    { name: 'Ruptur Ginjal ec Trauma',                years: [2022] },
    { name: 'Sindrom Nefritik',                       years: [2024] },
    { name: 'Prostatitis',                            years: [2024] },
    { name: 'Uretritis Gonore',                       years: [2024] },
  ],

  obgyn: [
    { name: 'PAP Smear / Skrining Kanker Serviks',   years: [2022] },
    { name: 'Bakterial Vaginosis (BV)',               years: [2022, 2024] },
    { name: 'Susp. Ca Serviks (IVA Test)',            years: [2022] },
    { name: 'Abortus Imminens',                       years: [2022] },
    { name: 'PEB (Preeklamsia Berat) - ANC',         years: [2023] },
    { name: 'Anemia Def. Besi pada Kehamilan - ANC', years: [2023] },
    { name: 'Endometritis',                           years: [2023] },
    { name: 'Abortus Komplit Spontan',                years: [2023] },
    { name: 'PID (Pelvic Inflammatory Disease)',      years: [2023, 2024] },
    { name: 'Salpingitis',                            years: [2024] },
    { name: 'Mastitis / Breast Engorgement',         years: [2025] },
    { name: 'ANC Kehamilan Risiko Tinggi',            years: [2025] },
    { name: 'Bartholinitis / Abses Bartolin',         years: [2025] },
    { name: 'Cracked Nipple',                         years: [2025] },
  ],

  endokrin: [
    { name: 'DM Tipe 2',                              years: [2022, 2024] },
    { name: 'Sindrom Metabolik',                      years: [2022, 2024] },
    { name: 'Obesitas + Hiperlipidemia',              years: [2022] },
    { name: 'Graves Disease / Hipertiroid',           years: [2022] },
    { name: 'HHS (Hyperosmolar Hyperglycemic State)', years: [2023] },
    { name: 'Hipoglikemia Berat',                     years: [2023] },
    { name: 'Goiter Endemik',                         years: [2024] },
    { name: 'Gizi Buruk (Marasmus)',                  years: [2025] },
    { name: 'Cushing Disease / Cushing Syndrome',     years: [2025] },
    { name: 'Hipoparatiroid',                         years: [2025] },
  ],

  hemato: [
    { name: 'Imunisasi Anak (Pentabio, OPV, BCG, KMS)', years: [2022] },
    { name: 'Malaria Falciparum',                     years: [2022, 2023] },
    { name: 'DHF / DBD',                              years: [2022, 2023] },
    { name: 'Leptospirosis',                          years: [2023] },
    { name: 'Limfadenopati TB Anak',                  years: [2023] },
    { name: 'Anemia Defisiensi Besi',                 years: [2023] },
    { name: 'Rheumatoid Arthritis (RA)',              years: [2024] },
    { name: 'SLE (Lupus Eritematosus Sistemik)',      years: [2024] },
    { name: 'Demam Rematik Akut / RHD',              years: [2024] },
    { name: 'Polimyalgia Reumatik',                   years: [2024] },
    { name: 'Syok Anafilaksis',                       years: [2025] },
    { name: 'Angioedema / Reaksi Anafilaktik',        years: [2025] },
  ],

  musku: [
    { name: 'Ankle Sprain',                           years: [2022, 2023, 2025] },
    { name: 'OA Genu (Osteoartritis Lutut)',          years: [2023, 2025] },
    { name: 'Knee Sprain',                            years: [2022] },
    { name: 'Wrist Sprain',                           years: [2022] },
    { name: 'Fraktur Klavikula / Radius Ulna',        years: [2022] },
    { name: 'Osteomyelitis',                          years: [2023] },
    { name: 'Tenosinovitis Supuratif',                years: [2023] },
    { name: 'Gout Arthritis',                         years: [2022] },
    { name: 'Lipoma (Eksisi)',                         years: [2024] },
    { name: 'Meniscus Tear',                          years: [2025] },
    { name: 'Ruptur Tendon Achilles',                 years: [2025] },
  ],

  integumen: [
    { name: 'Morbus Hansen (MH) Tipe MB',            years: [2022, 2024] },
    { name: 'Moluscum Kontagiosum',                   years: [2023, 2024] },
    { name: 'Tinea Pedis',                            years: [2022] },
    { name: 'Tinea Manuum',                           years: [2022] },
    { name: 'Herpes Zoster',                          years: [2022] },
    { name: 'FDE (Fixed Drug Eruption)',              years: [2022] },
    { name: 'Dermatitis Atopi',                       years: [2022] },
    { name: 'Varicella',                              years: [2023] },
    { name: 'Dermatitis Numularis / LSK',            years: [2023] },
    { name: 'Insect Bite',                            years: [2023] },
    { name: 'Pityriasis Rosea',                       years: [2023] },
    { name: 'Urtikaria Akut',                         years: [2023] },
    { name: 'Skrofuloderma TB',                       years: [2024] },
    { name: 'Furunkel',                               years: [2024] },
    { name: 'CLM (Cutaneous Larva Migrans)',          years: [2024] },
    { name: 'Erisipelas',                             years: [2024] },
    { name: 'Dermatitis Venenata',                    years: [2025] },
    { name: 'Erupsi Obat Morbiliformis',             years: [2025] },
    { name: 'Akne Vulgaris Derajat Berat',           years: [2025] },
    { name: 'LSK / Neurodermatitis',                 years: [2025] },
    { name: 'Karbunkel',                              years: [2025] },
  ],
}

// Pre-filled clinical data
export const CLINICAL_DATA = {
  'BPPV': {
    ss: 'Vertigo posisional episodik, dipicu perubahan posisi kepala (berbaring, bangun, menengok). Dix-Hallpike test (+), nistagmus geotropik. Tidak ada tuli atau tinitus. Berlangsung <1 menit.',
    dd: 'Vestibular neuritis, Meniere disease, Stroke serebelar, Ortostatik hipotensi, Labirintitis',
    tx: 'Manuver Epley (kanal posterior). Manuver Semont/Brandt-Daroff jika Epley gagal. Betahistin 2×16mg (simptomatik). Dimenhydrinate jika mual berat. Edukasi hindari posisi pemicu.'
  },
  "Bell's palsy": {
    ss: 'Paresis wajah unilateral perifer akut (tidak bisa menutup mata — dahi IKUT lemah, berbeda dengan lesi sentral). Hiperakusis, gangguan pengecapan 2/3 anterior lidah, air mata/saliva berkurang. House-Brackmann scale.',
    dd: 'Stroke (sentral — dahi TIDAK terlibat), Ramsay Hunt syndrome (ada vesikel di telinga/lidah), Tumor parotis, Otitis media, GBS',
    tx: 'Prednison 1mg/kgBB/hari (max 80mg) x5 hari, tapering 5 hari. Jika Ramsay Hunt: + Asiklovir 5×800mg x7 hari. Pelindung mata: air mata buatan, kacamata, tutup malam. Fisioterapi wajah.'
  },
  'PTSD': {
    ss: 'Riwayat trauma berat. Re-experiencing: flashback, mimpi buruk. Avoidance: menghindari hal terkait trauma. Hyperarousal: mudah kaget (startle), insomnia, konsentrasi buruk, iritabel. Durasi >1 bulan.',
    dd: 'Gangguan cemas umum, Depresi mayor, Gangguan adaptasi, Acute stress disorder (<1 bulan), Gangguan panik',
    tx: 'Psikoterapi: CBT focused trauma (TF-CBT) lini 1, EMDR. Farmakoterapi: SSRI — Sertralin 50-200mg atau Paroxetin. Jangan benzodiazepin jangka panjang. Kelompok dukungan.'
  },
  'Meniere disease': {
    ss: 'TRIAS: (1) Vertigo episodik 20 menit–beberapa jam, (2) Tuli sensorineural fluktuatif (frekuensi rendah), (3) Tinitus. Rasa penuh/tekanan di telinga (aural fullness). Audiogram: tuli frekuensi rendah.',
    dd: 'BPPV (tanpa tuli/tinitus), Vestibular migrain, Neuroma akustik, Labirintitis, TIA vertebrobasiler',
    tx: 'Diet rendah garam (<2g/hari), hindari kafein, alkohol, rokok. Betahistin 3×16–24mg (jangka panjang). Serangan akut: Diazepam 5mg atau Promethazin. Diuretik (Hidroklorotiazid). Rujuk SpTHT.'
  },
  'TTH (Tension-Type Headache)': {
    ss: 'Nyeri kepala bilateral, menekan/mengikat seperti "diikat tali" (non-pulsatil). Intensitas ringan-sedang. Tidak memburuk dengan aktivitas fisik. Tidak ada mual/muntah atau fotofobia/fonofobia bermakna (max 1).',
    dd: 'Migren tanpa aura, Cluster headache, Nyeri kepala servikal, Trigeminal neuralgia',
    tx: 'Episodik: Parasetamol 500-1000mg atau Ibuprofen 400-600mg. Kronis (>15 hari/bulan): Amitriptilin 10-25mg malam (lini 1). Manajemen stres, relaksasi, fisioterapi. Hindari analgetik berlebih.'
  },
  'Classic migrain': {
    ss: 'Nyeri kepala unilateral (bisa bilateral), pulsatil, intensitas sedang-berat, memburuk dengan aktivitas. Disertai mual/muntah dan fotofobia atau fonofobia. Dengan aura (MARIK): gejala neurologis reversibel <60 menit (kilatan cahaya, skotoma, paresthesia) sebelum nyeri.',
    dd: 'TTH, Cluster headache, Neuralgia trigeminal, Perdarahan subarakhnoid (thunderclap headache), Meningitis',
    tx: 'Serangan ringan-sedang: NSAID (Ibuprofen 400-600mg) + Antiemetik (Metoklopramid 10mg). Serangan berat: Triptan (Sumatriptan 50mg oral atau 6mg SC). Profilaksis (≥4x/bulan): Propranolol 2×40-80mg, Topiramat, atau Amitriptilin.'
  },
  'Asma': {
    ss: 'Mengi (wheezing) episodik, sesak napas, dada terasa berat, batuk kronik terutama malam/dini hari. Reversibel dengan bronkodilator. Riwayat atopi. Uji bronkodilator: ↑ VEP1 ≥12% atau ≥200ml.',
    dd: 'PPOK, Gagal jantung kiri (cardiac asthma), Bronkiolitis (anak), Benda asing, Disfungsi pita suara',
    tx: 'Serangan ringan: SABA inhalasi (Salbutamol 2-4 puff). Sedang-berat: SABA + kortikosteroid sistemik (Metilprednisolon IV) + oksigen. Tatalaksana jangka panjang: ICS (step-up therapy). Edukasi teknik inhaler.'
  },
  'PPOK Eksaserbasi Akut': {
    ss: 'Riwayat PPOK (merokok, batuk produktif kronis, sesak progresif). Eksaserbasi: ↑ dispnea, ↑ volume/purulensi sputum (kriteria Anthonisen). Hipoksemia (SpO2 turun). Pemeriksaan: barrel chest, hipersonor, suara napas ↓, ronki.',
    dd: 'Gagal jantung akut, Pneumonia, Pneumotoraks, Emboli paru, Efusi pleura',
    tx: 'Oksigen terkontrol (target SpO2 88-92%). Bronkodilator: SABA (Salbutamol) + SAMA (Ipratropium) nebulisasi. Kortikosteroid sistemik: Prednison 40mg/hari x5 hari. Antibiotik jika infeksi (Amoksisilin/Azitromisin). Pertimbangkan NIPPV.'
  },
  'Appendisitis Akut': {
    ss: 'Nyeri perut migrasi: periumbilikal → RLQ. Demam subfebris, mual, muntah. Titik McBurney nyeri tekan (+). Rovsing sign (+), Psoas sign (+), Blumberg sign (+). Leukositosis. Alvarado score ≥7.',
    dd: 'Kolik ureter kanan, KET (perempuan), Kista ovarium terpuntir, Adenitis mesenterika, Penyakit Crohn, Divertikulitis',
    tx: 'Appendektomi (laparoskopi/terbuka). Antibiotik preoperatif: Sefazolin 1-2g IV. Appendisitis perforasi: antibiotik broad-spectrum (Metronidazol + Seftriakson) + drainase. Puasa preoperatif, IVFD.'
  },
  'GERD': {
    ss: 'Heartburn (rasa terbakar retrosternal), regurgitasi, memburuk setelah makan besar/berbaring/membungkuk. Gejala alarm (disfagia, penurunan BB, hematemesis) → endoskopi. Gejala extraesofageal: batuk kronik, laringitis, asma.',
    dd: 'Ulkus peptikum, Angina pektoris, Spasme esofagus, Dyspepsia fungsional, Kandidiasis esofagus',
    tx: 'Modifikasi gaya hidup: hindari makanan asam/berlemak/kafein, tinggikan kepala tempat tidur, penurunan BB. PPI 30 menit sebelum makan (Omeprazol 2×20mg atau Lansoprazol 1×30mg) x4-8 minggu. Antasida prn.'
  },
  'Demam Tifoid': {
    ss: 'Demam stepladder (naik bertahap 1 minggu), relatif bradikardia, lidah tifoid (putih kotor, tepi hiperemis), meteorismus, konstipasi (bisa diare). Widal O/H ≥1/320 (kontekstual). Test Tubex/IgM tifoid (+).',
    dd: 'Malaria, Leptospirosis, Dengue, ISK, Hepatitis A akut',
    tx: 'Rawat inap jika berat. Antibiotik: Kloramfenikol 4×500mg x14 hari, atau Siprofloksasin 2×500mg x10-14 hari, atau Seftriakson IV. Diet lunak-lembek. Tirah baring. Monitoring komplikasi (perforasi, perdarahan).'
  },
  'Hepatitis A': {
    ss: 'Demam, mual, muntah, malaise, ikterus, urin dark (seperti teh), feses pucat (acholic). Hepatomegali nyeri tekan. IgM anti-HAV (+). SGOT/SGPT meningkat (>10x normal). Self-limiting.',
    dd: 'Hepatitis B/C/E akut, Kolestasis, EBV (mononukleosis), Hemolisis, Obstruksi biliaris',
    tx: 'Suportif: istirahat cukup, diet tinggi kalori-rendah lemak, hindari alkohol dan hepatotoksik. Antiemetik jika mual berat. Umumnya sembuh 4-8 minggu. Vaksinasi kontak serumah. Notifikasi penyakit.'
  },
  'GNAPS': {
    ss: 'Hematuria makroskopik (urin cola/merah kecoklatan), edema periorbita pagi hari, hipertensi, oliguria. Riwayat ISPA/infeksi kulit streptokokus 1-3 minggu lalu. Lab: ASTO ↑, C3 ↓, urinalisis eritrosit disformik.',
    dd: 'Sindrom nefrotik, IgA nephropathy (Berger), Lupus nefritis, Nefritis herediter (Alport), Purpura Henoch-Schönlein',
    tx: 'Tirah baring, diet rendah garam rendah protein. Antihipertensi: Amlodipine/Nifedipine. Diuretik (Furosemid) jika edema/oliguria berat. Antibiotik Penisilin 10 hari (eradikasi streptokokus). Self-limiting dalam 2-4 minggu.'
  },
  'Pielonefritis Akut': {
    ss: 'Demam tinggi mendadak, menggigil, nyeri pinggang (CVA tenderness +), disuria, frekuensi. Urinalisis: leukosituria, bakteriuria, cast leukosit. Urin kultur (+). WBC ↑.',
    dd: 'Sistitis, Appendisitis, Kolik ureter, Abses perinefrik, Kista ovarium terpuntir',
    tx: 'Rawat inap jika berat/komplikasi. Antibiotik IV: Seftriakson 1-2g/24 jam atau Siprofloksasin IV x10-14 hari. Oral jika ringan: Siprofloksasin 2×500mg x7-10 hari. IVFD, analgetik, antipiretik. Monitor fungsi ginjal.'
  },
  'Sistitis': {
    ss: 'Disuria, polakisuria, urgency, nyeri suprapubik. Tidak ada demam tinggi atau nyeri pinggang. Urinalisis: leukosituria, bakteriuria, nitrit (+). Terutama pada wanita usia reproduktif.',
    dd: 'Pielonefritis, Uretritis, Vulvovaginitis, Kandidiasis vulvovaginal, ISK atas',
    tx: 'Antibiotik 3-7 hari: Kotrimoksazol 2×960mg x3 hari, atau Siprofloksasin 2×500mg x3 hari, atau Nitrofurantoin 4×50mg x7 hari. Minum air banyak. Jika rekuren (≥3x/tahun): profilaksis antibiotik dosis rendah.'
  },
  'PAP Smear / Skrining Kanker Serviks': {
    ss: 'Prosedur skrining untuk perempuan seksual aktif usia ≥21 tahun. Hasil: Normal, ASC-US, LSIL, HSIL, Karsinoma. Indikasi: skrining rutin tiap 3 tahun. Temuan abnormal → kolposkopi dan biopsi.',
    dd: 'Servisitis, Infeksi HPV, CIN I/II/III, Adenokarsinoma serviks',
    tx: 'Teknik: posisi litotomi, pasang spekulum, usap ektoserviks (spatula) + endoserviks (sitobrush) → apus di kaca objek → fiksasi alkohol 95% segera. Interpretasi dengan Bethesda system. Tindak lanjut sesuai hasil (kolposkopi, LEEP, konisasi, histerektomi).'
  },
  'Bakterial Vaginosis (BV)': {
    ss: 'Sekret vagina abu-abu homogen berbau amis (fishy odor), terutama post-koitus. pH vagina >4.5. Clue cells (+) pada apusan. Whiff test (+) dengan KOH. Kriteria Amsel: ≥3 dari 4 terpenuhi.',
    dd: 'Kandidiasis vulvovaginal (sekret putih bergumpal, gatal), Trikomoniasis (sekret kuning berbusa), Servisitis, Vaginitis atrofi',
    tx: 'Metronidazol 2×500mg oral x7 hari, atau Metronidazol gel vagina 0.75% x5 hari, atau Klindamisin krim vagina 2% x7 hari. Tidak perlu terapi pasangan. Hindari pembersih vagina berlebihan.'
  },
  'DHF / DBD': {
    ss: 'Demam tinggi mendadak 2-7 hari, manifestasi perdarahan spontan (petekie, ekimosis, epistaksis, perdarahan gusi), uji tourniquet (+), trombositopenia <100.000, hematokrit ↑≥20%. NS1 antigen (+) hari 1-5.',
    dd: 'Demam dengue, ITP, Malaria, Leptospirosis, Demam tifoid, Meningokokemia',
    tx: 'Grade I/II: rawat inap, cairan kristaloid (RL/NaCl 0.9%) 5-7 ml/kgBB/jam, monitor tanda syok, Ht tiap 6 jam. Grade III/IV (DSS): resusitasi cairan cepat 10-20 ml/kgBB/15-30 menit. Parasetamol untuk demam. Hindari NSAID.'
  },
  'Malaria Falciparum': {
    ss: 'Demam periodik (bisa tidak beraturan), menggigil, berkeringat banyak, sakit kepala hebat, mual, muntah. Splenomegali. Apusan darah tepi: ring forms multiple/sel, "headphone" appearance. RDT malaria (+).',
    dd: 'Malaria vivax/malariae, Demam dengue, Leptospirosis, Sepsis, Meningitis',
    tx: 'Tanpa komplikasi: ACT — DHP (Dihydroartemisinin-Piperaquine) x3 hari + Primakuin hari ke-1 (gametosidal). Berat/serebral: Artesunat IV 2.4mg/kgBB (0, 12, 24 jam, lalu 24 jam sekali). Monitor komplikasi: serebral malaria, anemia berat, hipoglikemia.'
  },
  'Anemia Defisiensi Besi': {
    ss: 'Lemah, lesu, pusing, pucat (konjungtiva, telapak tangan, mukosa). Atrofi papil lidah, koilonichia, angular stomatitis. Hb ↓, MCV <80 fL, MCH <27 pg (mikrositik hipokromik), ferritin ↓, TIBC ↑, serum iron ↓.',
    dd: 'Anemia penyakit kronis (ferritin N/↑), Talasemia minor (HbA2 ↑), Anemia sideroblastik, Defisiensi B12/folat (makrositik)',
    tx: 'Ferrous sulfat 3×200mg oral (antara waktu makan + Vitamin C 250mg). Hb naik 1-2g/dL tiap 3 minggu. Lanjutkan 3 bulan setelah Hb normal untuk isi cadangan. Transfusi jika Hb <7 + gejala berat. Cari dan atasi penyebab.'
  },
  'Gout Arthritis': {
    ss: 'Nyeri sendi akut monoartikular (MTP-1 = podagra tersering), merah, panas, bengkak, onset mendadak (sering tengah malam). Asam urat serum ↑. Kristal urat monohidrat (jarum, negatif birefringent) pada aspirasi sendi.',
    dd: 'Artritis septik (kultur sendi), Pseudogout/CPPD (kristal rhomboid, positif birefringent), Selulitis, RA, Artritis reaktif',
    tx: 'Akut: NSAID (Indometasin 3×50mg atau Natrium Diklofenak 3×50mg) x5-7 hari. Kolkisin 3×0.5mg hari 1. Uraturia profilaksis: Allopurinol mulai 100mg setelah serangan reda, naik bertahap, target asam urat <6mg/dL. Diet rendah purin.'
  },
  'Leptospirosis': {
    ss: 'Fase leptospiremia (4-7 hari): demam tinggi mendadak, menggigil, sakit kepala, mialgia betis hebat (nyeri tekan). Fase imun: ikterus, gagal ginjal, perdarahan (Weil disease). Konjungtival suffusion (khas). Riwayat banjir/binatang. IgM leptospira (+).',
    dd: 'Dengue, Hepatitis akut, Malaria, Demam tifoid, Ricketsia, Hantavirus',
    tx: 'Ringan: Doksisiklin 2×100mg x7 hari atau Amoksisilin 4×500mg. Berat (Weil): Penisilin G 1.5 juta unit q6h IV atau Seftriakson 1g/24h x7 hari. Suportif: IVFD, monitor ginjal/hati, dialisis jika gagal ginjal.'
  },
  'Varicella': {
    ss: 'Lesi polimorfik berbagai stadium bersamaan (makula → papula → vesikel "teardrop" → krusta). Distribusi sentripetal (wajah, batang tubuh > ekstremitas). Demam, malaise, sangat gatal. Kontak 10-21 hari sebelumnya.',
    dd: 'Herpes zoster diseminata, Impetigo bulosa, Hand-foot-mouth disease, Scabies, Moluscum kontagiosum',
    tx: 'Asiklovir 5×800mg x7 hari oral (efektif jika <24 jam lesi/demam). Antihistamin (Loratadin/CTM) untuk gatal. Jaga lesi tetap bersih. Isolasi hingga semua lesi berkrusta. Imunokompromis/berat: Asiklovir IV.'
  },
  'Morbus Hansen (MH) Tipe MB': {
    ss: 'Lesi kulit >5, distribusi bilateral/simetris, eritematosa atau hipopigmentasi, batas tidak tegas, anestesia. Penebalan saraf perifer multipel (N.ulnaris, N.peroneus, N.auricularis magnus). BTA (+) banyak pada apusan kerokan kulit. Lepromatin test (-).',
    dd: 'MH tipe PB, Tinea versikolor, Vitiligo, Granuloma annulare, Lupus eritematosus kutis',
    tx: 'MDT MB (12 bulan): Rifampisin 600mg + Klofazimin 300mg (dosis bulanan supervisor) + Dapson 100mg + Klofazimin 50mg (dosis harian). Monitor reaksi kusta (tipe 1/tipe 2 ENL). POD (prevention of disability).'
  },
  'SLE (Lupus Eritematosus Sistemik)': {
    ss: 'Multiorgan: ruam butterfly (malar rash), fotosensitivitas, ulkus oral, arthritis non-erosif, serositis, nefritis lupus (proteinuria), neuropsikiatri. Lab: ANA (+), anti-dsDNA (+), anti-Sm (+), komplemen C3/C4 ↓. Kriteria SLICC ≥4 atau ACR 1997.',
    dd: 'RA, Sindrom Sjögren, Dermatomiositis, MCTD, Infeksi, Drug-induced lupus',
    tx: 'Semua pasien: Hidroksiklorokuin 400mg/hari (jaga SPF). Ringan: Prednison dosis rendah + NSAID. Sedang-berat: Metilprednisolon pulse + MMF atau Azatioprin. Nefritis: MMF atau Siklofosfamid. Proteksi sinar matahari. Konsul SpPD-KR.'
  },
  'Rheumatoid Arthritis (RA)': {
    ss: 'Artritis simetris sendi kecil (MCP, PIP, pergelangan tangan), kaku pagi >1 jam, berlangsung >6 minggu. RF (+), anti-CCP (+) spesifik tinggi. Foto: osteopenia periartikular, erosi. DAS28 untuk aktivitas penyakit.',
    dd: 'OA (kaku pagi <30 menit), Gout, Artritis lupus, Artritis reaktif, Spondilitis ankilosing, Psoriatic arthritis',
    tx: 'cDMARD: Metotreksat (MTX) lini 1 + asam folat 5mg/minggu. NSAID untuk gejala. Kortikosteroid bridging. bDMARD/tsDMARD (anti-TNF, JAK inhibitor) jika MTX gagal. Monitor fungsi hati, darah lengkap.'
  },
  'Syok Anafilaksis': {
    ss: 'Reaksi alergi sistemik berat cepat (menit-jam) setelah paparan alergen (obat, makanan, sengatan). Hipotensi + urtikaria/angioedema + gejala pernapasan (stridor, wheezing) atau gejala GI. Kesadaran dapat menurun.',
    dd: 'Syok septik, Syok kardiogenik, Sinkop vasovagal, Angioedema herediter, Serangan asma berat',
    tx: 'SEGERA: Epinefrin (Adrenalin) 0.3-0.5mg IM paha anterolateral (1:1000). Oksigen high-flow. IVFD kristaloid cepat. Posisi supine + elevasi kaki. Antihistamin H1+H2. Kortikosteroid IV. Observasi 4-8 jam. Bawa Epi-pen pulang.'
  },
  'Stroke Iskemik': {
    ss: 'Defisit neurologis fokal mendadak: hemiparesis/hemiplegia, disfasia/afasia, hemianopsia, ataksia. FAST: Face drooping, Arm weakness, Speech difficulty, Time. CT scan non-kontras: normal awal atau hipodens. Tanda UMN: spastik, refleks ↑, Babinski (+).',
    dd: 'TIA (gejala <24 jam, reversibel), Stroke hemoragik (CT: hiperdens), Ensefalitis, Hipoglikemia, Tumor otak, Seizure (Todd paralysis)',
    tx: 'Golden hour <4.5 jam: trombolisis IV rtPA 0.9mg/kgBB (10% bolus, 90% infus 1 jam). Antiplatelet: Aspirin 325mg (jika bukan kandidat trombolisis). Statin. Kontrol faktor risiko. Rehabilitasi dini. Rawat stroke unit.'
  },
  'Ankle Sprain': {
    ss: 'Riwayat inversi mendadak (lateral sprain tersering). Nyeri lateral ankle, edema, ekimosis. Nyeri tekan ligamen talofibular anterior (ATFL). Ottawa ankle rules untuk eksklusi fraktur: nyeri tulang malleolus/navikular/basis MT5 + tidak bisa jalan 4 langkah.',
    dd: 'Fraktur avulsi malleolus lateral, Fraktur basis MT5, Cedera tendon peroneus, Sindrom sinus tarsi, Dislokasi peroneal',
    tx: 'Grade I-II: PRICE (Protection, Rest, Ice 20 menit q2-3 jam, Compression, Elevation) 48-72 jam pertama. NSAID oral. Latihan ROM aktif segera setelah nyeri berkurang. Fisioterapi proprioseptif. Grade III/tidak stabil: rujuk orthopedi, pertimbangkan operasi.'
  },
  'OA Genu (Osteoartritis Lutut)': {
    ss: 'Nyeri lutut kronis ≥45 tahun, krepitasi saat gerakan, kaku pagi <30 menit, nyeri memburuk dengan aktivitas (beda dengan RA). Foto genu: penyempitan celah sendi, osteofit, sklerosis subkondral. Kriteria ACR: usia >50+krepitasi+kaku pagi <30 menit.',
    dd: 'RA (kaku pagi >1 jam, RF+), Gout/pseudogout (cairan sendi ada kristal), Bursitis prepatelar, Meniskopati, Artritis septik',
    tx: 'Non-farmako UTAMA: fisioterapi, penguatan kuadriseps, penurunan BB (BMI), tongkat. Farmako: Parasetamol (lini 1), NSAID topikal/oral, injeksi kortikosteroid intraartikular (max 3-4x/tahun), injeksi asam hialuronat. Berat + tidak responsif: TKR (total knee replacement).'
  },
  'Herpes Zoster': {
    ss: 'Prodromal: nyeri neuropatik terbakar/tersengat di dermatom, 2-3 hari sebelum lesi. Vesikel berkelompok di atas eritema, unilateral, mengikuti dermatom (tidak melewati garis tengah). Nyeri pasca-herpetik jika >3 bulan.',
    dd: 'Herpes simpleks, Dermatitis kontak vesikular, Impetigo, Gigitan serangga',
    tx: 'Asiklovir 5×800mg x7 hari (paling efektif <72 jam lesi). Atau Valasiklovir 3×1000mg x7 hari. Analgetik: NSAID/Opioid ringan untuk nyeri akut. Neuralgia post-herpetik: Pregabalin/Gabapentin, Amitriptilin, Lidokain patch.'
  },
  'Spondilitis TB': {
    ss: 'Nyeri punggung kronis progresif, gibbus (kifosis angular — KHAS). Demam subfebris, keringat malam, penurunan BB. Defisit neurologis (paraparesis) jika ada penekanan korda. MRI: destruksi corpus vertebra + abses paravertebral (cold abscess). BTA kultur (+).',
    dd: 'Osteomyelitis piogenik, Metastasis vertebra, Fraktur kompresi osteoporosis, Multiple myeloma, Tumor jinak vertebra',
    tx: 'OAT Kategori I: 2RHZE/10RH (total 12 bulan). Imobilisasi (korset rigid). Operasi (dekompresi + stabilisasi) jika: defisit neurologis progresif, instabilitas, abses besar. Fisioterapi setelah fase aktif terkontrol.'
  },
  'Baby Blues / Depresi Postpartum': {
    ss: 'Baby Blues: mood labil, mudah menangis, irritable, kelelahan, dalam 2-3 hari postpartum, berlangsung <2 minggu, self-limiting. Depresi Postpartum: gejala depresi mayor (anhedonia, rasa bersalah, sulit merawat bayi) >2 minggu dalam 4 minggu postpartum. EPDS ≥13.',
    dd: 'Baby blues vs Depresi postpartum vs Psikosis postpartum (bingung, halusinasi — darurat), Hipotiroid postpartum, Gangguan bipolar',
    tx: 'Baby blues: suportif, edukasi, dukungan keluarga. Depresi postpartum: SSRI (Sertralin — aman ASI, lini 1) + psikoterapi (CBT/IPT). Psikosis postpartum: rawat inap, antipsikotik. Skrining EPDS di semua kunjungan postpartum.'
  },
  'HNP Lumbal': {
    ss: 'Nyeri punggung bawah menjalar ke tungkai (radikulopati) sesuai dermatom (L4: medial tungkai, L5: dorsal kaki, S1: plantar/lateral kaki). Tes Laseque/SLR (+) <60°. Defisit motorik/sensorik/refleks sesuai level. MRI: herniasi diskus.',
    dd: 'Stenosis kanal spinalis, Tumor intradural, Piriformis syndrome, Spondilitis TB, Neuropati perifer',
    tx: 'Konservatif 6 minggu: analgetik (Parasetamol, NSAID), relaksan otot (Siklobenzaprin), fisioterapi (McKenzie exercise, TENS), edukasi posisi. Jika gagal atau kauda ekuina: operasi (diskektomi/mikrodiskektomi).'
  },
  'Fimosis (Sirkumsisi)': {
    ss: 'Preputium tidak dapat diretraksi ke proksimal glans. Fisiologis (bayi ≤3 tahun) vs Patologis (>3 tahun atau ada komplikasi: BXO/balanitis xerotica obliterans, infeksi rekuren, nyeri, retensi urin). Urin menetes, gembung preputium saat BAK.',
    dd: 'Parafimosis (preputium terjebak di proksimal glans — darurat urologi), BXO, Balanoposthitis, Stenosis meatal',
    tx: 'Konservatif (patologis tanpa komplikasi): kortikosteroid topikal (Betametason 0.05-0.1%) 2x sehari x4-8 minggu + retraksi pelan. Gagal konservatif atau fisiologis dengan komplikasi: sirkumsisi. Parafimosis: reduksi manual segera → dorsumsisi → sirkumsisi.'
  },
  'PID (Pelvic Inflammatory Disease)': {
    ss: 'Nyeri perut bawah bilateral + nyeri goyang serviks (cervical motion tenderness = CMT) + nyeri adneksa. Demam, sekret vagina purulen, disuria. Bisa ada massa (abses tuba-ovarium). Kriteria Hager untuk diagnosis.',
    dd: 'Appendisitis (nyeri kanan), KET, Kista ovarium terpuntir, Endometriosis, ISK, Peritonitis',
    tx: 'Rawat jalan: Seftriakson 500mg IM dosis tunggal + Doksisiklin 2×100mg x14 hari + Metronidazol 2×500mg x14 hari. Rawat inap (abses, hamil, gagal rawat jalan): Sefokstin IV + Doksisiklin IV. Terapi pasangan. Follow-up 72 jam.'
  },
  'Blefaritis': {
    ss: 'Peradangan kronis tepi kelopak mata. Kelopak merah, bersisik/berkerak di pangkal bulu mata, gatal, sensasi terbakar, krusta pagi hari. Tipe anterior (stafilokokal/seboroik) atau posterior (disfungsi kelenjar Meibom). Sering rekuren.',
    dd: 'Konjungtivitis alergi, Dry eye syndrome, Rosacea okular, Demodex (parasit folikel)',
    tx: 'Kompres hangat 5-10 menit + masase kelopak + membersihkan tepi kelopak (cotton bud + baby shampoo encer) 2x sehari. Antibiotik topikal jika infeksi (Eritromisin salep). Posterior: Doksisiklin oral 2×100mg x6-12 minggu. Air mata buatan.'
  },
  'Cushing Disease / Cushing Syndrome': {
    ss: 'Obesitas sentral (moon face, buffalo hump, perut buncit), striae ungu, kulit tipis mudah memar, hirsutisme, amenore, hipertensi, osteoporosis, diabetes. Kortisol serum ↑ atau UFC ↑. Tes supresi deksametason (+) abnormal.',
    dd: 'Obesitas biasa, Sindrom metabolik, DM tipe 2, Hipertensi esensial, Pseudo-Cushing (depresi, alkohol)',
    tx: 'Cushing Disease (adenoma hipofisis): operasi transsfenoidal. Adenoma adrenal: adrenalektomi. Ektopik ACTH: terapi tumor primer. Medikamentosa sementara: Ketokonazol, Metirapone, Pasireotide. Monitor pasca-op.'
  },
}

// Build final data with IDs and clinical info
function generateId(name) {
  return name.toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '_')
    .substring(0, 40)
}

function findClinical(name) {
  for (const [key, val] of Object.entries(CLINICAL_DATA)) {
    if (name.toLowerCase().includes(key.toLowerCase()) ||
        key.toLowerCase().includes(name.toLowerCase().split('/')[0].trim())) {
      return val
    }
  }
  return { ss: '', dd: '', tx: '' }
}

export function buildTopics() {
  const result = {}
  for (const sys of SYSTEMS) {
    const topics = (RAW_DATA[sys.key] || []).map(t => {
      const clinical = findClinical(t.name)
      return {
        id: generateId(t.name),
        name: t.name,
        years: t.years,
        ss: clinical.ss,
        dd: clinical.dd,
        tx: clinical.tx,
      }
    })
    result[sys.key] = topics
  }
  return result
}
