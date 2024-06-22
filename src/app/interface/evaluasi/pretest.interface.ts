export interface listIsiMateri {
  judulMateri: string,
  isiMateri: string,
  htmlMateri?: string
  Image: string,
  UrlYoutube: string,
  type?: string
  soal?: string
  imageSoal?: string
  typePilihanSoal?: string
  kunjawSoal?: number
  pilihanSoal?: string[]
}

export interface DataSubTitle {
  titleModul: string,
  isiMateri: listIsiMateri[]
}

export interface DataMateri {
  // title: string;
  materi: DataSubTitle;
  status: string;
}

export interface DataSoal {
  title: string
  typeSoal: string
  Pertanyaan: string
  jawaban: string
  pilihanJawaban: string[]
}

export const soalPretest: DataMateri[] = [
  {
    // title: "Operator Logika, Relasional, dan Kesaman",
    materi:
    {
      titleModul: "Evaluasi Pre-test",
      isiMateri: [
        {
          judulMateri: "1",
          isiMateri: `
          Seorang siswa sedang belajar matematika dan dia ingin membuat program sederhana untuk menentukan apakah suatu bilangan adalah bilangan ganjil. Berikut adalah pernyataan yang benar tentang program yang akan dia buat:  
              `,
          Image: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Perhatikan pernyataan di bawah ini:<br/>
                Susan sedang berada di wahana bermain dan ia ingin menaiki wanaha rollercoaster. Tetapi wahana tersebut mimiliki syarat dimana tinggi badannya harus lebih dati 150 cm untuk menaiki wahana tersebut. <br/>
                Berdasarkan pernyataan di atas, jenis percabangan yang tepat untuk digunakan adalah….
                </span>
              </div>
                          
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                a.	If, karena hanya menentukan apakah tinggi badan pengunjung lebih dari 150 cm.
                </span>
              </div>           
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                b.	If-Else, karena membutuhkan dua kondisi dimana satu kondisi menentukan apakah tinggi badan kurang dari 150 cm, dan kondisi kedua jika tinggi badan lebih dari 150 cm.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                c.	Switch Case, karena dibutuhkan banyak kondisi untuk menentukan apakah tinggi badan pengunjung lebih dari 150 cm.
                </span>
              </div>           
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                d.	Nested-If, karena memiliki  kondisi bertingkat untuk menentukan tinggi badan pengunjung memenuhi syarat atau tidak.
                </span>
              </div>
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                e.	For, karena dibutuhkan pengurangan untuk menentukan tinggi badan pengunjung.
                </span>
              </div>
            </div>
            `
          ],
          kunjawSoal:0,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "2",
          isiMateri: `
              Sebelum melangkah lebih jauh tentang materi struktur kontrol keputusan, sebaiknya kalian pahami terlebih dahulu operator yang sering di gunakan dalam kondisi struktur kontrol keputusan. Yaitu operator logika, relasional, kesamaan dan Operator Kondisional (Ternary). 
              `,
          Image: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Perhatikan pseudocode berikut:
                </span>
              </div>  
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/2webpre.png"
                  style="height: 50%; width: 50%;"
                />
              </div>
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Susunan dari pseudocode di atas tidak sesuai, manakah susunan yang paling tepat…
                </span>
              </div>            
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                a.	1-4-3-2-5
                </span>
              </div>           
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                b.	1-2-3-5-4
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                c.	2-3-5-4-1
                </span>
              </div>           
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                d.	4-3-1-5-2
                </span>
              </div>
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                e.	2-4-1-3-5
                </span>
              </div>
            </div>
            `
          ],
          kunjawSoal: 0,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "3",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Perhatikan program berikut:
                </span>
              </div>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/pre3.png"
                  style="height: 50%; width: 50%;"
                />
              </div>
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Jika diinputkan jumlah produk yang dibeli sebanyak 6, maka output dari program tersebut adalah…
                </span>
              </div>
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                a.	Anda mendapatkan diskon
                </span>
              </div>           
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                b.	Membeli produk < 10
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                c.	Membeli produk = 6
                </span>
              </div>           
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                d.	Tidak terjadi apa-apa
                </span>
              </div>
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                e.	Selamat anda mendapat diskon
                </span>
              </div>
            </div>
            `
          ],
          kunjawSoal: 3,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "4",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Perhatikan code berikut:
                </span>
              </div>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/pre4.png"
                  style="height: 20%; width: 20%;"
                />
              </div>
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Apabila program tersebut dijalankan, maka akan menggalami erorr. Mengapa?
                </span>
              </div>
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                a.	Penempatan tanda “{“ seharusnya disimpan setelah if sebelum kondisi
                </span>
              </div>           
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                b.	Setelah tanda “{“ dan “}” harus menggunkan tanda “;”
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                c.	Setelah printf (“A”) harus menggunakan tanda “;”
                </span>
              </div>           
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                d.	Terjadi kesalahan penulisan kondisi
                </span>
              </div>
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                e.	“if” harus ditulis dengan huruf kapital
                </span>
              </div>
            </div>
            `
          ],
          kunjawSoal: 2,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "5",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Perhatikan pernyataan berikut: <br/>
                “Suatu laboratorium memiliki sensor yang akan berbunyi apabila suhu di laboratorium tersebut mencapai lebih dari 100°C yang menandakan tanda bahaya.” <br/>
                Berdasarkan pernyataan di atas, penulisan kode percabangan if yang tepat adalah…
                </span>
              </div>
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/7a.png"
                  style="height: 30%; width: 30%;"
                />
              </div>
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/7b.png"
                  style="height: 30%; width: 30%;"
                />
              </div>
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/7c.png"
                  style="height: 30%; width: 30%;"
                />
              </div>
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/7d.png"
                  style="height: 30%; width: 30%;"
                />
              </div>
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/7e.png"
                  style="height: 30%; width: 30%;"
                />
              </div>
            </div>
            `
          ],
          kunjawSoal: 3,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "6",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Perhatikan program berikut: <br/>
                </span>
              </div>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/6webpre.png"
                  style="height: 50%; width: 50%;"
                />
              </div>
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Berdasarkan program di atas, jika inputan = 8, maka output yang dihasilkan adalah…
                </span>
              </div>
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                a.	Angka 8 adalah bilangan positif.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                b.	Angka 8 adalah bilangan negatif.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                c.	Angka 8 adalah nol.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                d.	Tidak ada output yang dihasilkan.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                e.	Error karena sintaks program salah.
                </span>
              </div>        
            </div>
            `
          ],
          kunjawSoal: 0,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "7",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Perhatikan program berikut:
                </span>
              </div>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
              <img
                alt="Logo"
                src="/media/pretest/7webpre.png"
                style="height: 50%; width: 50%;"
              />
            </div>
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
              Berdasarkan program di atas, jika kita menginputkan warna “biru” maka output dari program tersebut adalah…
              </span>
            </div>
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                a.	Berhenti
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                b.	Hati-hati
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                c.	Jalan
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                d.	Status lampu tidak valid
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                e.	Error
                </span>
              </div>        
            </div>
            `
          ],
          kunjawSoal: 3,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "8",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Perhatikan pseudocode berikut:
                </span>
              </div>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
              <img
                alt="Logo"
                src="/media/pretest/pre11.png"
                style="height: 50%; width: 50%;"
              />
            </div>
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
              Berdasarkan program di atas, jika inputan = 8, maka output yang dihasilkan adalah…
              </span>
            </div>
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                a.	1-2-3-4-5-6
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
              b.	2-1-3-6-4-5
              </span>
            </div>        
          </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                c.	3-2-4-1-5-6
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                d.	4-1-2-3-6-5
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                e.	6-1-3-2-4-5
                </span>
              </div>        
            </div>
            `
          ],
          kunjawSoal: 1,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "9",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Perhatikan program berikut: <br/>
                </span>
              </div>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/9webpre.png"
                  style="height: 40%; width: 40%;"
                />
              </div>
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                <br/> Jika kita membeli 5 barang dengan harga total barang Rp.50.000, maka output dari program tersebut adalah…
                </span>
              </div>
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                a.	Harga setelah diskon: 45000.00
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                b.	Harga setelah diskon: 40000.00
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                c.	Harga setelah diskon: 44000.00
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                d.	Harga setelah diskon: 42500.00
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                e.	Program error
                </span>
              </div>        
            </div>
            `
          ],
          kunjawSoal: 3,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "10",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Perhatikan program berikut:
                </span>
              </div>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/pre10.png"
                  style="height: 70%; width: 70%;"
                />
              </div>
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Jika pada program berikut kita menginputkan tahun 2024, maka output dari program tersebut adalah…
                </span>
              </div>
            </div>
            `,
          pilihanSoal: [
            `
           <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
              a.	Tahun kabisat
              </span>
            </div>        
           </div>
            `,
            `
           <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
              b.	Bukan tahun kabisat
              </span>
            </div>        
           </div>
            `,
            `
           <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
              c.	2024 adalah tahun kabisat.
              </span>
            </div>        
           </div>
            `,
            `
           <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
              d.	2024 bukan tahun kabisat.
              </span>
            </div>        
           </div>
            `,
            `
           <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
              e.	Program error
              </span>
            </div>        
           </div>
            `
          ],
          kunjawSoal: 2,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "11",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Perhatikan program berikut:
                </span>
              </div>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/11webpre.png"
                  style="height: 50%; width: 50%;"
                />
              </div>
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Output dari program di atas adalah…
                </span>
              </div>
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                a.	Anda sudah dewasa.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                b.	Anda masih di bawah umur.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                c.	Anda berumur 15 tahun
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                d.	Program error
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                e.	Tidak ada output
                </span>
              </div>        
            </div>
            `
          ],
          kunjawSoal: 1,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "12",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Perhatikan code berikut: <br/>
                </span>
              </div>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/12webpre.png"
                  style="height: 30%; width: 30%;"
                />
              </div>
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Apabila program tersebut dijalankan, maka akan menggalami erorr. Mengapa?
                </span>
              </div>
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                a.	Penempatan tanda “{“ seharusnya disimpan setelah if sebelum kondisi
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                b.	Tidak perlu menggunkan tanda “;” 
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                c.	Terjadi kesalahan penulisan kondisi
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                d.	Penulisan kata “else if” seharusnya “else” saja
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                e.	Code sudah benar
                </span>
              </div>        
            </div>
            `
          ],
          kunjawSoal: 3,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "13",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Perhatikan potongan-potongan program berikut: <br/>
                </span>
              </div>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/13webpre.png"
                  style="height: 50%; width: 50%;"
                />
              </div>
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                <br/>Urutan potongan program yang tepat agar menjadi program yang utuh adalah…
                </span>
              </div>
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                a.	1-2-3-4-5
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                b.	2-3-4-5-1
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                c.	2-4-5-3-1
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                d.	3-2-4-1-5
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                e.	4-5-2-1-3
                </span>
              </div>        
            </div>
            `
          ],
          kunjawSoal: 2,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "14",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Perhatikan program pengelompokkan umur di bawah ini: <br/>
                </span>
              </div>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/14webpre.png"
                  style="height: 50%; width: 50%;"
                />
              </div>
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                <br/>Dari program di atas, manakah pernyataan yang benar…
                </span>
              </div>
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                a.	Program ini akan memberikan output "Anda termasuk dalam kelompok Dewasa Muda." jika umur yang dimasukkan adalah 25.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                b.	Program ini hanya dapat mengelompokkan umur hingga 25 tahun.               
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                c.	Program ini tidak valid karena penggunaan kata kunci "end" yang tidak tepat.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                d.	Jika umur yang dimasukkan adalah -5, program akan memberikan output "Anda termasuk dalam kelompok Balita."
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                e.	Program ini hanya akan memberikan output "Anda termasuk dalam kelompok Dewasa."
                </span>
              </div>        
            </div>
            `
          ],
          kunjawSoal: 3,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "15",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Perhatikan progran berikut: <br/>
                </span>
              </div>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/15webpre.png"
                  style="height: 50%; width: 50%;"
                />
              </div>
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                <br/>Jika program di atas diinputkan angka 3, maka output yang dihasilkan adalah…
                </span>
              </div>
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                a.	Tidak menghasilkan output
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                b.	Angka 3 adalah positif lebih dari 10
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                c.	Angka 3 adalah positif kurang dari 10 atau sama dengan 10.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                d.	Angka 3 adalah bilangan positif.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                e.	Angka 3 adalah bilangan negative.
                </span>
              </div>        
            </div>
            `
          ],
          kunjawSoal: 2,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "16",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Perhatikan program berikut:
                </span>
              </div>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/16webpre.png"
                  style="height: 50%; width: 50%;"
                />
              </div>
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                <br/>Pada line 15, mengapa batas usia ditentukan sebagai 60 tahun untuk kelompok dewasa dan bukan lebih rendah atau lebih tinggi?
                </span>
              </div>
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                a.	Karena orang yang berusia lebih dari 60 tahun dianggap tidak termasuk dalam kelompok dewasa.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                b.	Ini adalah kesalahan dalam kode dan seharusnya tidak ada batasan usia.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                c.	Karena usia 60 tahun dianggap sebagai batas antara dewasa dan lansia.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                d.	Agar program memiliki lebih banyak kelompok usia.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                e.	Karena pada usia 60 tahun, seseorang dianggap
                </span>
              </div>        
            </div>
            `
          ],
          kunjawSoal: 2,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "17",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Perhatikan program di bawah: <br/>
                </span>
              </div>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/17webpre.png"
                  style="height: 40%; width: 40%;"
                />
              </div>
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Terdapat kesalahan urutan penulisan pada program perusahaan yang ingin membuat sebuah program untuk memberikan bonus kepada pegawainya jika pegawai tersebut sudah bekerja lebih dari satu tahun dan tidak pernah bolos. Urutan yang paling tepat berdasarkan penjelasan di atas adalah…
                </span>
              </div>
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                a.	2-1-3-4-5
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                b.	2-3-1-5-4
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                c.	3-2-1-5-4
                </span>
              </div>        
            </div>
            `,
            `

            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                d.	3-1-4-2-5
                </span>
              </div>        
            </div>
            `,
            `

            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                e.	1-2-4-5-3
                </span>
              </div>        
            </div>
            `

          ],
          kunjawSoal: 0,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "18",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Dalam bahasa C, apakah switch case dapat digunakan untuk mengevaluasi beberapa kondisi secara bersamaan? <br/>
                </span>
              </div>
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                a.	Ya, karena switch case paling tepat digunakan saat terdapat banyak sekali kondisi yang diperlukan.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                b.	Tidak, karena switch case hanya dapat digunakan untuk mengevaluasi satu kondisi tunggal.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                c.	Tidak, karena hanya jika menggunakan ekstensi pihak ketiga dalam bahasa C.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                d.	Ya, karena tergantung pada versi dari kompiler yang digunakan.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                e.	Ya, karena switch case lebih efektif jika digunakan untuk mengecek kondisi secara bersamaa.
                </span>
              </div>        
            </div>
            `
          ],
          kunjawSoal: 1,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "19",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Program yang menggunakan menu untuk menghitung persegi panjang (1. Mencari luas, 2. Mencari Panjang sisi, 3. Mencari keliling) paling tepat menggunakan jenis percabangan... <br/>
                </span>
              </div>
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                a.	Percabangan If, karena hanya perlu menghitung persegi panjang.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                b.	Percabangan If-Else, karena diperlukan menu dan proses perhitungan.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                c.	Percabangan Nested-If, karena untuk membuat opsi menu dibutuhkan pengecekan bertingkat.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                d.	Percabangan Switch-Case, karena melibatkan pemilihan antara beberapa opsi menu yang berbeda untuk menjalankan proses perhitungan.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                e.	For, karena dibuhkan proses perulangan untuk membuat sebuah opsi menu dan perhitungan.
                </span>
              </div>        
            </div>
            `
          ],
          kunjawSoal: 3,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "20",
          isiMateri: "",
          Image: "",
          imageSoal: "",
          soal: `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Perhatikan program berikut: <br/>
                </span>
              </div>
              <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                <img
                  alt="Logo"
                  src="/media/pretest/20webpre.png"
                  style="height: 40%; width: 40%;"
                />
              </div>
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                Jika kita menginputkan angka 3 pada program tersebut, maka outputnya adalah…
                </span>
              </div>
            </div>
            `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                a.	Anda memilih Pensil.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                b.	Anda memilih Pulpen.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                c.	Pilihan tidak valid.
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                d.	Pensil
                </span>
              </div>        
            </div>
            `,
            `
            <div style="font-family: Arial, sans-serif;">
              <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                <span style="font-size: 20px; text-align: justify;">
                e.	Pulpen 
                </span>
              </div>        
            </div>
            `
          ],
          kunjawSoal: 2,
          UrlYoutube: "",
          type: "soal"
        }
      ]
    },
    status: "materi"
  }
];