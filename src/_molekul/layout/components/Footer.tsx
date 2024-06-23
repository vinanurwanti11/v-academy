/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useEffect, useState } from 'react'
import { useLayout } from '../core'
import { useLocation } from 'react-router-dom'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import clsx from 'clsx';
import * as Yup from 'yup'
import { useFormik } from 'formik';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const contactSchema = Yup.object().shape({
  from_email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email tidak boleh kosong'),
  from_name: Yup.string()
    .required('Nama Lengkap tidak boleh kosong'),
  message: Yup.string()
    .required('Pesan tidak boleh kosong'),
})

const Footer: FC = () => {
  const { classes } = useLayout()
  const location = useLocation()
  const [isLocation, setIsLocation] = useState<boolean>(false)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openContact, setOpenContact] = useState(false);
  const handleOpenContact = () => setOpenContact(true);
  const handleCloseContact = () => setOpenContact(false);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if ((location.pathname === '/materi/details' && 'active') || (location.pathname === '/evaluasi/soal' && 'active')) {
      setIsLocation(true)
    } else {
      setIsLocation(false)
    }
  }, [])

  useEffect(() => {
    if (!openContact) {
      formik.values.from_email = ""
      formik.values.from_name = ""
      formik.values.message = ""
      formik.setSubmitting(false)
      formik.resetForm()
    }
  }, [openContact])

  const formik = useFormik({
    initialValues: {
      from_email: '',
      from_name: '',
      message: '',
      to_name: 'Vina'
    },
    validationSchema: contactSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setLoading(true)
      const serviceID = 'service_sbmicld';
      const templateID = 'template_7bmrzj4';
      const userID = 'StMpeve0bryCM5gA1';

      const swalSuccess = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
        },
        buttonsStyling: false
      })

      emailjs.send(serviceID, templateID, values, userID)
        .then((response) => {
          handleCloseContact()
          swalSuccess.fire({
            title: `Pesan Berhasil Dikirim Ke Email Admin!`,
            icon: 'success',
            confirmButtonText: 'Dismiss',
          }).then(async (result) => {
            if (result.isConfirmed || result.dismiss) {
              values.from_email = ""
              values.from_name = ""
              values.message = ""
              values.from_email = ""
              formik.resetForm()
              setLoading(false)
            }
          })
        }, (error) => {
          handleCloseContact()
          swalSuccess.fire({
            title: `Pesan Gagal Dikirim Ke Email Admin!`,
            icon: 'error',
            confirmButtonText: 'Dismiss',
          }).then(async (result) => {
            if (result.isConfirmed || result.dismiss) {
              values.from_email = ""
              values.from_name = ""
              values.message = ""
              values.from_email = ""
              setSubmitting(false)
              formik.resetForm()
              setLoading(false)
            }
          })
        });
    },
  })

  return (
    <>
      {
        isLocation ?
          <div style={{ marginTop: '100px' }}>

          </div>
          :
          <div className='footer py-4 d-flex flex-lg-column shadow-sm' id='kt_footer'
          // style={{ position: 'sticky', bottom: 0, backgroundColor: 'white', }}
          >
            {/* begin::Container */}
            <div
              className={`${classes.footerContainer} d-flex flex-column flex-md-row align-items-center justify-content-between`}
            >
              {/* begin::Copyright */}
              <div className='text-dark order-2 order-md-1'>
                <span className='text-muted fw-bold me-2'>{new Date().getFullYear()} &copy;</span>
                <span className='text-gray-800 text-hover-primary'>
                  v-academy by vina nurwanti
                </span>
              </div>
              {/* end::Copyright */}

              {/* begin::Nav */}
              <ul className='menu menu-gray-600 menu-hover-primary fw-bold order-1'>
                <li onClick={handleOpen} className='menu-item'>
                  <span className='menu-link ps-0 pe-2'>
                    About
                  </span>
                </li>
                <li onClick={handleOpenContact} className='menu-item'>
                  <span className='menu-link pe-0 pe-2'>
                    Contact
                  </span>
                </li>
                {/* <li className='menu-item'>
                  <span className='menu-link pe-0'>
                    Report
                  </span>
                </li> */}
              </ul>
              {/* end::Nav */}
            </div>
            {/* end::Container */}
          </div>
      }

      {
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box borderRadius={2} borderColor={"white"} sx={style}>
              <Typography style={{ fontWeight: 'bold' }} id="modal-modal-title" variant="h6" component="h2">
                APA ITU V ACADEMY ?
              </Typography>
              <Typography style={{ fontSize: '15px', textAlign: "justify" }} id="modal-modal-description" sx={{ mt: 2 }}>
                Hallo!
                <br />
                Selamat datang di V-Academy!
                <br />
                <br />
                V’Academy adalah sebuah website pembelajaran dengan menerapkan model Think-Talk-Write. Model tersebut dimulai dengan siswa mempelajadi materi, memahami latihan soal yang diberikan, dan menuliskannya di catatan kecil (Think). Setelah itu siswa berdiskusi dengan teman sekelompok dan membahas jawaban yang paling tepat dari jawaban masing-masing anggota kelompok (Talk). Terakhir siswa menuliskan jawaban berdasarkan hasil diskusi ke dalam lembar kerja (Write), lalu perwakilan dari setiap kelompok membagikan jawabannya dengan kelompok lain. Dengan diterapkannnya model pembelajaran ini, diharapkan dapat meningkatkan Logical Thinking siswa pada meteri Percabangan.
                <br />
                <div style={{ textAlign: 'justify', alignSelf: 'start', marginTop: '20px', marginBottom: '20px' }}>
                  <p style={{ fontSize: "15px", alignSelf: 'start' }}>Referensi:</p>
                  <ul style={{ fontSize: "15px", alignSelf: 'start' }}>
                    <li>Semua elemen yang digunakan dalam media pembelajaran V-Academy, termasuk <em>icon</em> dan <em>component</em>, dibuat menggunakan <em><a href="https://keenthemes.com/metronic" target="_blank" rel="noopener noreferrer">Metronic</a></em> untuk memastikan kualitas dan konsistensi desain.</li>
                  </ul>
                </div>
              </Typography>
              {/* <div style={{ marginTop: "50px", marginBottom: '50px' }}></div>
              <Typography style={{ fontWeight: 'bold' }} id="modal-modal-title" variant="h6" component="h2">
                APA ITU ROOM DISKUSI ?
              </Typography>
              <Typography style={{ fontSize: '15px' }} id="modal-modal-description" sx={{ mt: 2 }}>
                Setelah masing-masing individu mendapatkan hasil jawaban dari latihan soal sebelumnya, dari jawaban-jawaban tersebut diskusikan dan tentukan jawaban yang paling tepat lalu bagikan dengan teman kelompok lain. Semangat!!
              </Typography> */}
            </Box>
          </Modal>
        </div >
      }
      {
        <div>
          <Modal
            open={openContact}
            onClose={handleCloseContact}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box borderRadius={2} borderColor={"white"} sx={style}>
              <h1>Contact Us!</h1>
              <span className='fs-5'>Apakah kalian mempunyai masukan atau butuh bantuan? hubungi kami, kami ingin mendengar apa masukkan dari kalian dan memberikan bantuan</span>
              <div className='mb-6' style={{ position: 'relative' }}>
                <form
                  className="form w-200"
                  onSubmit={formik.handleSubmit}
                  noValidate
                  id='kt_login_signin_form'>
                  <h6 className="text-black fw-bold mt-5">Nama Lengkap</h6>
                  <input
                    type="text"
                    {...formik.getFieldProps('from_name')}
                    placeholder="Admin"
                    name="from_name"
                    autoComplete="off"
                    className={clsx(
                      "form-control",
                      {
                        'is-invalid': formik.touched.from_name && formik.errors.from_name || formik.status
                      },
                      {
                        'is-valid': formik.touched.from_name && !formik.errors.from_name,
                      }
                    )}
                  />
                  {formik.touched.from_name && formik.errors.from_name && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>
                        <span role='alert'>{formik.errors.from_name}</span>
                      </div>
                    </div>
                  )}
                  <h6 className="text-black fw-bold mt-5">Email</h6>
                  <input
                    type="email"
                    {...formik.getFieldProps('from_email')}
                    placeholder="contoh: admin@vacademy.com"
                    name="from_email"
                    autoComplete="off"
                    className={clsx(
                      "form-control",
                      {
                        'is-invalid': formik.touched.from_email && formik.errors.from_email || formik.status
                      },
                      {
                        'is-valid': formik.touched.from_email && !formik.errors.from_email,
                      }
                    )}
                  />
                  {formik.touched.from_email && formik.errors.from_email && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>
                        <span role='alert'>{formik.errors.from_email}</span>
                      </div>
                    </div>
                  )}

                  <h6 className="text-black fw-bold mt-5">Pesan</h6>
                  <textarea
                    rows={5}
                    {...formik.getFieldProps('message')}
                    placeholder="Detail pesannya tulis disini!.."
                    name="message"
                    autoComplete="off"
                    className={clsx(
                      "form-control",
                      {
                        'is-invalid': formik.touched.message && formik.errors.message || formik.status
                      },
                      {
                        'is-valid': formik.touched.message && !formik.errors.message,
                      }
                    )}
                  />
                  {formik.touched.message && formik.errors.message && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>
                        <span role='alert'>{formik.errors.message}</span>
                      </div>
                    </div>
                  )}

                  <button type="submit" className="btn w-25 mt-10" id='kt_sign_in_submit'
                    disabled={formik.isSubmitting || !formik.isValid || loading}
                    style={{ color: 'white', background: '#4584AD', cursor: 'pointer' }}
                  >
                    {!loading && <span className='indicator-label'>
                      {"Submit"}
                    </span>}
                    {loading && (
                      <span className='indicator-progress' style={{ display: 'block' }}>
                        Please wait...
                        <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                      </span>
                    )}
                  </button>
                </form>
              </div>
            </Box>
          </Modal>
        </div >
      }
    </>

  )
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #ffff',
  // boxShadow: 24,
  p: 4,
};

export { Footer }
