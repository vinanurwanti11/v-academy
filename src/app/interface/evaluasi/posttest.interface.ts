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

export const soalPosttest: DataMateri[] = [
  {
    // title: "Operator Logika, Relasional, dan Kesaman",
    materi:
    {
      titleModul: "Evaluasi Post-test",
      isiMateri: [
        {
          judulMateri: "1",
          isiMateri: `
                 
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Perhatikan program berikut!<br/>
                  </span>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/po2.png"
                    style="height: 50%; width: 50%;"
                  />
                </div>   
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  <br/>Output dari program di atas adalah…
                  </span>
                </div>         
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  a.	Nilai x lebih besar dari 10
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  b.	Nilai x tidak lebih besar dari 10
                  </span>
                </div>        
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  c.	Tidak ada output yang ditampilkan
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  d.	Terjadi kesalahan saat kompilasi
                  </span>
                </div>
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  e.	Tidak dapat ditentukan
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
          judulMateri: "2",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Permasalahan berikut yang dapat dimplementasi kedalam percabangan if-else, kecuali...<br/>
                  </span>
                </div>        
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  a.	Menentukan remedial atau tidaknya siswa dalam ujian, karena untuk menentukan remedial atau tidaknya siswa membutuhkan beberapa kali pengecekan kondisi.
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  b.	Menentukan keterlambatan absensi masuk, karena ada kebutuhan untuk menentukan dua kemungkinan kondisi: keterlambatan dan ketepatan waktu.
                  </span>
                </div>        
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  c.	Menentukan status kelulusan berdasarkan rata-rata nilai ujian, karena kondisi kelulusan memiliki dua kemungkinan, lulus atau tidak lulus berdasarkan rata-rata nilai ujian.
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  d.	Menentukan besarnya tunjangan keluarga berdasarkan status pernikahan, karena terdapat beberapa kemungkinan status pernikahan yang berbeda.
                  </span>
                </div>
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  e.	Menentukan jenis bunga yang sesuai dengan bulan kelahiran, karena diperlukan kondisi yang sangat banyak untuk menentukan jenis bungan yang sesuai dengan bulan.
                  </span>
                </div>
              </div>
              `
          ],
          kunjawSoal: 4,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "3",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Perhatikan program berikut!<br/>
                  </span>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/3webpo.png"
                    style="height: 40%; width: 40%;"
                  />
                </div>
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  <br/>Jika kita menginputkan jumlah uang Rp. 150.000 dan menginput total belanja = Rp. 20.000, maka output dari program tersebut adalah…
                  </span>
                </div>         
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  a.	20000
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  b.	80000
                  </span>
                </div>        
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  c.	100000
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  d.	130000
                  </span>
                </div>
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  e.	150000
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
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Perhatikan program berikut:<br/>
                  </span>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/4webpo.png"
                    style="height: 40%; width: 40%;"
                  />
                </div>
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Jika menginputkan suhu -5 derajat celcius, maka output dari program tersebut adalah…
                  </span>
                </div>  
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  a.	Suhu titik beku air.
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  b.	Suhu membeku air.
                  </span>
                </div>        
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  c.	Suhu normal.
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  d.	Suhu panas.
                  </span>
                </div>
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  e.	Suhu mendidih.
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
          judulMateri: "5",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
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
                    src="/media/posttest/5webpo.png"
                    style="height: 40%; width: 40%;"
                  />
                </div>
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Pseudocode di atas belum tersusun dengan baik. Susunan pseudocode yang tepat adalah…
                  </span>
                </div>
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  a.	1-4-3-2-6-5
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  b.	2-3-1-6-4-5
                  </span>
                </div>        
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  c.	3-1-2-4-6-5
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  d.	3-6-1-2-4-5
                  </span>
                </div>
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  e.	4-2-3-1-6-5
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
          judulMateri: "6",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Perhatikan program menghitung harga sewa studio musik:
                  </span>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/6webpo.png"
                    style="height: 50%; width: 50%;"
                  />
                </div>
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Jika sebuah band ingin menyewa studio selama 5 jam, maka output dari program di atas jika diinputkan 5 jam adalah…
                  </span>
                </div>
              </div>
              `,
          pilihanSoal: [
            `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
              a.	Harga sewa total: Rp 15000.00
              </span>
            </div>           
          </div>
          `,
        `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
              b.	Harga sewa total: Rp 25000.00
              </span>
            </div>        
          </div>
          `,
        `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
              c.	Harga sewa total: Rp 40000.00
              </span>
            </div>           
          </div>
          `,
        `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
              d.	Harga sewa total: Rp 90000.00
              </span>
            </div>
          </div>
          `,
        `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
              e.	Harga sewa total: RP 105000.00
              </span>
            </div>
          </div>
          `
          ],
          kunjawSoal: 4,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "7",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Perhatikan program berikut:<br/>
                  </span>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/7webpo.png"
                    style="height: 70%; width: 70%;"
                  />
                </div>  
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Pada program di atas terdapat kesalahan, pada line berapakah kesalahan tersebut?
                  </span>
                </div>
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  a.	Posisi Line 1 terbalik dengan di Line 3
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  b.	Posisi Line 3 terbalik dengan di Line 5
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  c.	Posisi Line 5 terbalik dengan di Line 1
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  d.	Posisi Line 2 terbalik dengan di Line 4
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  e.	Posisi Line 6 terbalik dengan di Line 3
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
          judulMateri: "8",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Perhatikan pseudocode berikut:<br/>
                  </span>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/8webpo.png"
                    style="height: 60%; width: 60%;"
                  />
                </div>  
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Pseudocode di atas merupakan pseudocode untuk memeriksa kedatangan siswa. Tetapi susunan pseudocode di atas belum sesuai. Susunan pseudocode yang paling sesuai adalah…
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
                  b.	2-3-1-5-4
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  c.	3-5-4-1-2
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  d.	2-4-1-5-3
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  e.	1-5-2-4-3
                  </span>
                </div>           
              </div>
              `
          ],
          kunjawSoal: 4,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "9",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Perhatikan program berikut:<br/>
                  </span>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/9webpo.png"
                    style="height: 50%; width: 50%;"
                  />
                </div>  
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Program di atas adalah program untuk menghitung jika kembalian lebih dari Rp30.000 maka ibu meminta untuk dibelikan gula. Tetapi saat dijalankan program tersebut mengalami error. Pada line berapakah yang mengakibatkan program tersebur error?
                  </span>
                </div>
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  a.	Line 1 seharusnya di Line 2
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  b.	Line 1 seharusnya di Line 3
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  c.	Line 2 seharusnya di Line 3
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  d.	Line 3 seharusnya di Line 4
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  e.	Line 4 seharusnya di Line 2
                  </span>
                </div>           
              </div>
              `
          ],
          kunjawSoal: 4,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "10",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Perhatikan program berikut:<br/>
                  </span>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/10webpo.png"
                    style="height: 40%; width: 40%;"
                  />
                </div>  
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Dari program di atas, manakah pernyataan yang benar…
                  </span>
                </div>
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  a.	Program tersebut menghitung Body Mass Index (BMI) seseorang. Karena program tersebut menggunakan rumus untuk mengukur BMI.
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  b.	Program tersebut menghitung total berat dan tinggi badan seseorang. Karena diperlukan inputan berat badan dan tinggi badan.
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  c.	Program tersebut menghitung rata-rata berat dan tinggi badan seseorang. Karena dari program tersebut menggunakna rumus untuk menghitung rata-rata berat dan tinggi badan.
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  d.	Program tersebut menghitung rasio berat dan tinggi badan seseorang. Karena program di atas menunjukkan perhitungan untuk menghitung rasio dan tinggi badan seseorang.
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  e.	Program tersebut menghitung persentase BMI seseorang. Karena output dari program tersebut beruma persentase.
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
          judulMateri: "11",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
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
                    src="/media/posttest/10webpo.png"
                    style="height: 40%; width: 40%;"
                  />
                </div>  
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Pernyataan yang sesuai dengan program di atas adalah…
                  </span>
                </div>
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  a.	program yang menentukan tingkat kesulitan soal perdasarkan nilai
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  b.	program yang menentukan nilai soal perdasarkan tingkat kesulitan
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  c.	program untuk menentukan nilai
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  d.	program untuk menentukan tingkat kesulitan
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  e.	program untuk menentukan nilai soal dan juga tingkat kesulitannya
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
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Seorang pelatih atletik memiliki persyaratan berikut untuk siswa yang ingin bergabung dengan tim atletiknya:<br/>
                  •	Siswa harus memiliki tinggi badan minimal 160 cm. <br/>
                  •	Jika tinggi badan siswa kurang dari 160 cm, maka siswa harus memiliki berat badan minimal 50 kg. <br/>
                  Berdasarkan persyaratan di atas, jenis percabangan yang tepat untuk digunakan dalam program pengecekan kelayakan siswa adalah...
                  </span>
                </div>
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  a.	If, karena hanya diperkukan satu kali pengecekan yaitu siswa yang memiliki tinggi badan 160 cm.
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  b.	If-Else, karena diperlukan pengcekan untuk mengukur tinggi badan dan berat badan siswa.
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  c.	Nested-If, karena pada kasus tersebut diperlukan pengecekan kondisi bertingkat.
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  d.	Switch-Case, karena diperlukan banyak kondisi untuk menentukan siswa yang memenuhi syarat masuk tim atletik.
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  e.	For, karena diperlukan perulangan pada kasus tersebut.
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
          judulMateri: "13",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Perhatikan pseuducode berikut:<br/>
                  </span>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/po27.png"
                    style="height: 50%; width: 50%;"
                  />
                </div>  
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Pseudocode di atas belum memiliki susunan yang tepat. Susunan pseudocode yang tepat adalah...
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
                  b.	1-3-2-5-4-6
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  c.	1-4-2-3-5-6
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  d.	2-4-3-1-5-6
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  e.	3-1-5-4-6-2
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
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Perhatikan program berikut:<br/>
                  </span>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/14webpo.png"
                    style="height: 40%; width: 40%;"
                  />
                </div>  
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Dari program di atas, jika  kita menginputkan sudah memiliki pekerjaan dan penghasilan Rp. 400.000, maka output dari program tersebut adalah…
                  </span>
                </div>
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  a.	Penghasilan Anda mencukupi.
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  b.	Penghasilan Anda kurang.
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  c.	Anda belum memiliki pekerjaan.
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  d.	Input tidak valid.
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
          kunjawSoal: 1,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "15",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Perhatikan program berikut!<br/>
                  </span>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/15webpo.png"
                    style="height: 50%; width: 50%;"
                  />
                </div>  
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Jika kita menginputkan bukan membership dari toko tersebut dan total pembelian Rp. 50.000, maka output dari program tersebut adalah…
                  </span>
                </div>
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  a.	Total yang harus dibayar: Rp 50000.00
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  b.	Total yang harus dibayar: Rp 45000.00
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  c.	Total yang harus dibayar: Rp 47500.00
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  d.	Total yang harus dibayar: Rp 40000.00
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
          kunjawSoal: 0,
          UrlYoutube: "",
          type: "soal"
        },
        {
          judulMateri: "16",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
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
                    src="/media/posttest/16webpo.png"
                    style="height: 50%; width: 50%;"
                  />
                </div>  
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Pernyataan yang sesuai dengan program di atas adalah…
                  </span>
                </div>
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  a.	Tidak mendapat beasiswa apabila peringkat 10
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  b.	Apabila peringkat 10 maka mendapatkan beasiswa sampai tamat sekolah
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  c.	Apabila peringkat 5 maka mendapatkan beasiswa selama 2 semester
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  d.	Apabila peringkat 5 dan apabila pengasilan 1500000 maka mendapatkan beasiswa sampai tamat sekolah
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  e.	Apabila peringkat 5 dan apabila pengasilan 1500000 maka tidak mendapatkan beasiswa
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
          judulMateri: "17",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Sebuah restoran ingin membuat program yang menampilkan menu makanan yang berbeda setiap harinya. Jika pelanggan menginputkan hari tertentu maka output yang dihasilkan adalah menu apa saja yang tersedia di hari tersebut. <br/>
                  Berdasarkan kasus di atas, jenis percabangan apa yang paling tepat digunakan…
                  </span>
                </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  a.	If, karena hanya ada satu kondisi yang harus diperiksa.
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  b.	If-else, karena membutuhkan beberapa kondisi yang harus diperiksa.
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  c.	Nested-if, karena diperlukan pengecekan kondisi secara bertahap.
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  d.	Swich-case, karena diperlukan banyak pilihan yang harus dicek secara terpisah berdasarkan suatu variable.
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  e.	For, karena dibutuhkan perulangan pada saat program dibuat.
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
          judulMateri: "18",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Perhatikan program berikut!<br/>
                  </span>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/18webpo.png"
                    style="height: 50%; width: 50%;"
                  />
                </div>  
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Dari program di atas, maka output yang tepat adalah…
                  </span>
                </div>
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  a.	Excellent!
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  b.	Good!
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  c.	Fair!
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  d.	Needs Improvement!
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  e.	Invalid Grade!
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
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Perhatikan program berikut:
                </div> 
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/19webpo.png"
                    style="height: 40%; width: 40%;"
                  />
                </div>  
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  <br/>Program di atas merupakan program diskon di sebuah restoran. Syarat untuk mendapatkan promo tersebut yaitu:
                  <br/>-	Jika membeli makanan (m), mendapat diskon 10%
                  <br/>-	Jika membeli minuman (d), mendapat diskon 5%
                  <br/>-	Jika membeli dessert (s), mendapat diskon 8%
                  <br/>-	Jika membeli paket makan dan minum (p), mendapat diskon 15%
                  <br/>-	Jika membeli paket komplit (k), mendapat diskon 25%.
                  Pada program di atas terdapat ketidak sesuaian dengan syarat yang diberikan. Pada line berapakah yang tidak sesuai?
                  </span>
                </div>
              </div>
              `,
          pilihanSoal: [
            `
            <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
              a.	Posisi Line 1 terbalik dengan Line 2
              </span>
            </div>           
          </div>
          `,
        `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
              b.	Posisi Line 2 terbalik dengan Line 5
              </span>
            </div>           
          </div>
          `,
        `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
              c.	Posisi Line 5 terbalik dengan Line 11
              </span>
            </div>           
          </div>
          `,
        `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
              d.	Posisi Line 8 terbalik dengan Line 11
              </span>
            </div>           
          </div>
          `,
        `
          <div style="font-family: Arial, sans-serif;">
            <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 20px; text-align: justify;">
              e.	Posisi Line 14 terbalik dengan Line 5
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
          judulMateri: "20",
          isiMateri: `
                Pernahkah kalian ingin pergi ke sebuah tempat tertentu dengan menggunakan moda transportasi? Keputusan menggunakan sebuah moda transportasi untuk bepergian biasanya tergantung pada sebuah keadaan tertentu.Misalnya, apabila kondisi hujan, maka kalian akan lebih memilih menggunakan mobil daripada menggunakan sepeda motor, namun apabila cuaca sedang cerah dan jarak yang ditempuh adalah dekat, maka kalian akan memilih menggunakan sepeda motor.  
                Komputer merupakan alat yang membantu banyak aktivitas manusia.Pada dasarnya, komputer menjalankan perintah dari manusia.Perintah - perintah tersebut dituangkan secara tertulis dalam sebuah aturan tertentu yang disebut sebagai kode program yang bertujuan untuk mengatur bagaimana komputer harus bertindak untuk menyelesaikan sebuah permasalahan tertentu.Hal ini termasuk juga dalam proses pengambilan keputusan, seperti halnya dalam contoh pemilihan moda transportasi di atas.  
                `,
          Image: "",
          soal: `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  Perhatikan percabangan switch-case berikut:<br/>
                  </span>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px;">
                  <img
                    alt="Logo"
                    src="/media/posttest/po40.png"
                    style="height: 50%; width: 50%;"
                  />
                </div>  
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  <br/>Apakah code di atas sesuai dengan percabangan switch-case…
                  </span>
                </div>
              </div>
              `,
          pilihanSoal: [
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  a.	Ya, pernyataan di atas valid dan tidak akan menimbulkan kesalahan saat kompilasi.
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  b.	Tidak, pernyataan tersebut tidak valid karena mencampur tipe data karakter dan bilangan bulat dalam satu switch case.
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  c.	Tidak, karena sintaks switch case harus menggunakan kata kunci case of bukan hanya case.
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  d.	Mungkin, karena tergantung pada nilai variabel nilai.
                  </span>
                </div>           
              </div>
              `,
            `
              <div style="font-family: Arial, sans-serif;">
                <div style="display: flex; flex-direction: column; justify-content: center; margin-bottom: 20px;">
                  <span style="font-size: 20px; text-align: justify;">
                  e.	Ya, karena program di atas sudah menuliskan program dengan baik sesuai ketentuan.
                  </span>
                </div>           
              </div>
              `
          ],
          kunjawSoal: 1,
          UrlYoutube: "",
          type: "soal"
        },
      ]
    },
    status: "materi"
  }
];