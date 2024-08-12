import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toAbsoluteUrl } from '../../../_molekul/helpers'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { CreateProfileSiswaType } from '../../interface/profile.siswa.interface'
import { getAllSiswa, getProfileSiswa } from '../../api/Request/profile.siswa.api'
import Lottie from 'lottie-react'
import animLoading from '../../../_molekul/assets/loading/animLoading.json'
import { isEvaluasi } from '../../api/Request/materi.siswa.api'
import Swal from 'sweetalert2'
import { getEvaluasiByUUID } from '../../api/Request/evaluasi.siswa.api'
import { penilaianMedia } from '../../interface/evaluasi/media.interface'
import { getAllIsOpen, updateIsOpenDiskusi, updateIsOpenMedia, updateIsOpenPosttest, updateIsOpenPretest } from '../../api/Request/isopen.api'

const Evaluasi = () => {
  const navigate = useNavigate()
  const auth = getAuth()
  const [uuid, setUuid] = useState<string>()
  const [profileSiswa, setProfileSiswa] = useState<CreateProfileSiswaType>()
  const [loading, setLoading] = useState<boolean>(true)
  const [listPeringkat, setListPeringkat] = useState<CreateProfileSiswaType[]>([])
  const [status1, setStatus1] = useState<boolean>(false)
  const [poinPretest, setPoinPretest] = useState<number>(0)
  const [status2, setStatus2] = useState<boolean>(false)
  const [poinPosttest, setPoinPosttest] = useState<number>(0)
  const [status3, setStatus3] = useState<boolean>(false)
  const [status4, setStatus4] = useState<boolean>(false)
  const [status5, setStatus5] = useState<boolean>(false)
  const [isOpenPretest, setIsOpenPretest] = useState<boolean>(false)
  const [isOpenPosttest, setIsOpenPosttest] = useState<boolean>(false)
  const [isOpenMedia, setIsOpenMedia] = useState<boolean>(false)

  useEffect(() => {
    handleGetIsOpen()
    onAuthStateChanged(auth, e => {
      if (e?.uid) {
        setUuid(e.uid)
        handleGetProfile(e.uid)
        handleGetStatusEvaluasi(e.uid)
      }
    })
  }, [uuid])

  const handleGetProfile = async (uid: string | undefined) => {
    setLoading(true)
    try {
      if (uid) {
        const resGetPertanyaan = await getProfileSiswa(uid)
        const output = Object.entries(resGetPertanyaan)
        if (output[0][1].type.toLowerCase() === "siswa") {
          output.map(e => {
            // @ts-ignore
            setProfileSiswa(e[1])
          });
          setLoading(false)
        } else {
          handleGetAllProfile()
        }
      }

    } catch (error) {
      console.error(error);
      setLoading(false)
    }
  }

  const handleGetIsOpen = async () => {
    try {
      const isOpen = await getAllIsOpen()
      setIsOpenPretest(isOpen.pretest)
      setIsOpenPosttest(isOpen.posttest)
      setIsOpenMedia(isOpen.penilaianMedia)
    } catch (err) {
      console.error(err);
    }
  }

  const handleGetStatusEvaluasi = async (uid: string) => {
    if (uid) {
      for (let i = 0; i < 5; i++) {
        if (i === 0) {
          const res = await getEvaluasiByUUID("pretest", uid)
          if (res !== null) {
            setStatus1(true)
            const ha = Object.entries(res);
            setPoinPretest(ha[0][1].poin)
          }
        } else if (i === 1) {
          const res = await getEvaluasiByUUID("posttest", uid)
          if (res !== null) {
            setStatus2(true)
            const ha = Object.entries(res);
            setPoinPosttest(ha[0][1].poin)
          }
        } else if (i === 2) {
          const res = await getEvaluasiByUUID("preLogic", uid)
          if (res !== null) {
            setStatus3(true)
          }
        } else if (i === 3) {
          const res = await getEvaluasiByUUID("postLogic", uid)
          if (res !== null) {
            setStatus4(true)
          }
        } else if (i === 4) {
          const res = await getEvaluasiByUUID("penilaianMedia", uid)
          if (res !== null) {
            setStatus5(true)
          }
        }
      }
    }
  }

  const handleGetAllProfile = async () => {
    setLoading(true)
    try {
      const res = await getAllSiswa()
      if (res) {
        const la = Object.entries(res)
        la.map((e, i) => {
          const ha = Object.entries(e[1])
          const body: CreateProfileSiswaType = {
            name: ha[0][1].name,
            nomor_absen: ha[0][1].nomor_absen,
            type: ha[0][1].type,
            kelompok: ha[0][1].kelompok,
            email: ha[0][1].email,
            imageProfile: ha[0][1].imageProfile
          }
          setListMateri(body)
        })
        setLoading(false)
      }

    } catch (error) {
      console.error(error);
      setLoading(false)
    }
  }

  const setListMateri = (list: CreateProfileSiswaType) => {
    const found = listPeringkat.find((obj) => {
      return obj.name === list.name
    })
    if (!found) {
      listPeringkat.push(list)
    }
  }

  const handleNavigate = async (navigateParams: string, page: string, ke: string) => {
    try {
      const resGetIsEvaluasi = await isEvaluasi()
      if (resGetIsEvaluasi.isEvaluasi) {
        navigate(navigateParams, { state: { page: page, ke: ke } })
      } else {
        const swalSuccess = Swal.mixin({
          customClass: {
            confirmButton: 'btn btn-danger',
          },
          buttonsStyling: false
        })
        swalSuccess.fire({
          title: `Mohon maaf Evaluasi belum dibuka!`,
          icon: 'error',
          confirmButtonText: 'Dismiss',
        })
      }
    } catch (error) {
      console.error(error);
    }
  }

  const warningAlert = () => {
    const swalSuccess = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
      },
      buttonsStyling: false,
    })
    swalSuccess
      .fire({
        icon: 'success',
        confirmButtonText: 'Dismiss',
        html: `<h3 style="text-align:center; font-weight:bold; color:gray;'">Evaluasi telah selesai 🤗</h3>`,
        reverseButtons: true,
      })
  }

  const handleBukaTutup = async (type?: string) => {
    let title: string = ''

    if (type === 'pretest') {
      title = `${isOpenPretest ? 'Tutup' : 'Buka'} Evaluasi Pre-test?`
    } else if (type === 'posttest') {
      title = `${isOpenPosttest ? 'Tutup' : 'Buka'} Evaluasi Post-test?`
    } else if (type === 'media') {
      title = `${isOpenPosttest ? 'Tutup' : 'Buka'} Penilaian Media`
    }

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-white'
      },
      buttonsStyling: false
    })
    const swalSuccess = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
      },
      buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
      title: `${title}`,
      icon: 'info',
      showCancelButton: true,
      cancelButtonText: 'Batalkan',
      confirmButtonText: 'Ya!',
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          let resUpdate: boolean = false
          if (type === 'pretest') {
            resUpdate = await updateIsOpenPretest(!isOpenPretest)
            setIsOpenPretest(resUpdate)
          } else if (type === 'posttest') {
            resUpdate = await updateIsOpenPosttest(!isOpenPosttest)
            setIsOpenPosttest(resUpdate)
          } else if (type === 'media') {
            resUpdate = await updateIsOpenMedia(!isOpenMedia)
            setIsOpenMedia(resUpdate)
          }

          let titleResult: string = ''

          if (type === 'pretest') {
            //@ts-ignore
            title = `Evaluasi Pre-test berhasil di${resUpdate.pretest ? 'buka' : 'tutup'}`
          } else if (type === 'posttest') {
            //@ts-ignore
            title = `Evaluasi Post-test berhasil di${resUpdate.posttest ? 'buka' : 'tutup'}`
          } else if (type === 'media') {
            //@ts-ignore
            title = `Penilaian media berhasil di${resUpdate.penilaianMedia ? 'buka' : 'tutup'}`
          }

          if (resUpdate) {
            swalSuccess.fire({
              title: `${title}`,
              icon: 'success',
              confirmButtonText: 'Dismiss',
            }).then(async (result) => {
              if (result.isConfirmed) {
                window.location.reload();
                resUpdate = false
              } else if (result.isDismissed) {
                window.location.reload();
                resUpdate = false
              }
            })
          }

        } catch (err) {
          console.error(err);
        }
      }
    })
  }

  return (
    <>
      {
        loading ? (
          <div className='d-flex'
            style={{ width: '100%', height: '100%', justifyContent: 'center', justifyItems: 'center' }}
          >
            <Lottie style={{ width: '55%', height: '55%' }} animationData={animLoading} />
          </div>
        ) : (
          <div className="d-flex row">
            {
              profileSiswa?.type.toLowerCase() === "siswa"
                ?
                <>
                  <div className=''>
                    <h1 className='mb-10 ms-20' style={{ fontSize: '30px' }}>Evaluasi Soal</h1>
                    <div className="d-flex row mt-10" style={{ justifyContent: 'center' }}>
                      <div className="card col-sm-4 p-0 rounded shadow-sm me-5" onClick={() => {
                        if (isOpenPretest) {
                          if (!status1) {
                            navigate('/evaluasi/soal', { state: { materiParent: "pretest" } })
                          } else {
                            navigate('/hasil/evaluasi/page', { state: { materiParent: "pretest" } })
                            localStorage.setItem('hasReloaded', 'false')
                          }
                        } else {
                          const swalSuccess = Swal.mixin({
                            customClass: {
                              confirmButton: 'btn btn-danger',
                            },
                            buttonsStyling: false
                          })
                          swalSuccess.fire({
                            title: `Mohon Maaf\nEvalusi Pre-test belum di buka oleh guru`,
                            icon: 'error',
                            confirmButtonText: 'Dismiss',
                          })
                        }
                      }} style={{ width: '25%', height: '200px', cursor: 'pointer' }}>
                        <div className="card-body p-0">
                          <div className='d-flex rounded-top ' style={{ backgroundColor: '#E1D808', height: '60%', justifyContent: 'center' }}>
                            <div className='me-5'>
                              <img style={{ width: "120px" }} src={toAbsoluteUrl('/media/illustrations/light/SVG/__telescope.svg')} alt='' />
                            </div>
                          </div>
                          <div className='p-5'>
                            <div>
                              <h3>Pre-Test</h3>
                              {
                                poinPretest ?
                                  <div className='d-flex flex-row' style={{ justifyContent: 'space-between' }}>
                                    <span className={`badge ${status1 ? "badge-light-success" : "badge-light-danger"}`}>{status1 ? "Selesai" : "Belum Mulai"}</span>
                                    <h3>Poin : <span className='badge-light-success'>{poinPretest}/20</span></h3>
                                  </div>
                                  :
                                  <span className={`badge ${status1 ? "badge-light-success" : "badge-light-danger"}`}>{status1 ? "Selesai" : "Belum Mulai"}</span>
                              }
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card col-sm-4 p-0 border rounded shadow-sm" onClick={() => {
                        if (isOpenPosttest) {
                          if (!status2) {
                            navigate('/evaluasi/soal', { state: { materiParent: "posttest" } })
                          } else {
                            navigate('/hasil/evaluasi/page', { state: { materiParent: "posttest" } })
                            localStorage.setItem('hasReloaded', 'false')
                          }
                        } else {
                          const swalSuccess = Swal.mixin({
                            customClass: {
                              confirmButton: 'btn btn-danger',
                            },
                            buttonsStyling: false
                          })
                          swalSuccess.fire({
                            title: `Mohon Maaf\nEvalusi Post-test belum di buka oleh guru`,
                            icon: 'error',
                            confirmButtonText: 'Dismiss',
                          })
                        }
                      }} style={{ width: '25%', height: '200px', cursor: 'pointer' }}>
                        <div className="card-body p-0">
                          <div className='d-flex rounded-top ' style={{ backgroundColor: '#0893E1', height: '60%', justifyContent: 'center' }}>
                            <div className='me-5'>
                              <img style={{ width: "120px" }} src={toAbsoluteUrl('/media/illustrations/light/SVG/__moneybox.svg')} alt='' />
                            </div>
                          </div>
                          <div className='p-5'>
                            <h3>Post-Test</h3>
                            {
                              poinPosttest ?
                                <div className='d-flex flex-row' style={{ justifyContent: 'space-between' }}>
                                  <span className={`badge ${status2 ? "badge-light-success" : "badge-light-danger"}`}>{status2 ? "Selesai" : "Belum Mulai"}</span>
                                  <h3>Poin : <span className='badge-light-success'>{poinPosttest}/20</span></h3>
                                </div>
                                :
                                <span className={`badge ${status2 ? "badge-light-success" : "badge-light-danger"}`}>{status2 ? "Selesai" : "Belum Mulai"}</span>
                            }
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex row mt-10" style={{ justifyContent: 'center' }}>
                      <div className="card col-sm-4 p-0 rounded shadow-sm ms-5" onClick={() => {
                        if (isOpenMedia) {
                          if (!status5) {
                            navigate('/evaluasi/soal', { state: { materiParent: "penilaianMedia" } })
                          } else {
                            navigate('/hasil/evaluasi/page', { state: { materiParent: "penilaianMedia" } })
                            localStorage.setItem('hasReloaded', 'false')
                          }
                        } else {
                          const swalSuccess = Swal.mixin({
                            customClass: {
                              confirmButton: 'btn btn-danger',
                            },
                            buttonsStyling: false
                          })
                          swalSuccess.fire({
                            title: `Mohon Maaf\nPenilaian Media belum di buka oleh guru`,
                            icon: 'error',
                            confirmButtonText: 'Dismiss',
                          })
                        }
                      }} style={{ width: '25%', height: '200px', cursor: 'pointer' }}>
                        <div className="card-body p-0">
                          <div className='d-flex rounded-top ' style={{ backgroundColor: '#08E138', height: '60%', justifyContent: 'center' }}>
                            <div className='me-5'>
                              <img style={{ width: "120px" }} src={toAbsoluteUrl('/media/illustrations/light/SVG/__goods.svg')} alt='' />
                            </div>
                          </div>
                          <div className='p-5'>
                            <h3>Penilaian Media</h3>
                            <span className={`badge ${status5 ? "badge-light-success" : "badge-light-danger"}`}>{status5 ? "Selesai" : "Belum Mulai"}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
                :
                <>
                  <div className=''>
                    <h1 className='mb-10' style={{ fontSize: '30px' }}>Evaluasi Soal</h1>
                    <div className="d-flex row mt-10" style={{ justifyContent: 'center' }}>
                      <div className="card col-sm-4 p-0 rounded shadow-sm me-5" style={{ width: '25%', height: '200px' }}>
                        <div className="card-body p-0">
                          <div className='d-flex rounded-top ' onClick={() => navigate("/hasil/evaluasi", { state: { ke: 1, type: "pretest" } })} style={{ backgroundColor: '#E1D808', height: '60%', justifyContent: 'center', cursor: 'pointer' }}>
                            <div className='me-5'>
                              <img style={{ width: "120px" }} src={toAbsoluteUrl('/media/illustrations/light/SVG/__telescope.svg')} alt='' />
                            </div>
                          </div>
                          <div className='d-flex p-5 justify-content-between align-items-center' style={{ width: '100%' }}>
                            <div>
                              <h3>Pre-Test</h3>
                              <span className='badge badge-light-info'>Lihat Nilai Siswa -{'>'}</span>
                            </div>
                            <div>
                              {
                                profileSiswa?.type.toLowerCase() !== "siswa" ?
                                  <div className=''>
                                    <button
                                      className={`btn ${isOpenPretest ? 'btn-danger' : 'btn-primary'} fw-bold`}
                                      style={{ cursor: 'pointer' }}
                                      onClick={() => {
                                        handleBukaTutup('pretest')
                                      }}
                                    >
                                      {isOpenPretest ? 'Tutup Pre-test' : 'Buka Pre-test'}
                                    </button>
                                  </div>
                                  :
                                  <></>
                              }
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card col-sm-4 p-0 border rounded shadow-sm" style={{ width: '25%', height: '200px' }}>
                        <div className="card-body p-0">
                          <div className='d-flex rounded-top ' onClick={() => navigate("/hasil/evaluasi", { state: { ke: 1, type: "posttest" } })} style={{ backgroundColor: '#0893E1', height: '60%', justifyContent: 'center', cursor: 'pointer' }}>
                            <div className='me-5'>
                              <img style={{ width: "120px" }} src={toAbsoluteUrl('/media/illustrations/light/SVG/__moneybox.svg')} alt='' />
                            </div>
                          </div>
                          <div className='d-flex p-5 justify-content-between align-items-center' style={{ width: '100%' }}>
                            <div >
                              <h3>Post-Test</h3>
                              <span className='badge badge-light-info'>Lihat Nilai Siswa -{'>'}</span>
                            </div>
                            <div>
                              {
                                profileSiswa?.type.toLowerCase() !== "siswa" ?
                                  <div className=''>
                                    <button
                                      className={`btn ${isOpenPosttest ? 'btn-danger' : 'btn-primary'} fw-bold`}
                                      style={{ cursor: 'pointer' }}
                                      onClick={() => {
                                        handleBukaTutup('posttest')
                                      }}
                                    >
                                      {isOpenPosttest ? 'Tutup Post-test' : 'Buka Post-test'}
                                    </button>
                                  </div>
                                  :
                                  <></>
                              }
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex row mt-10" style={{ justifyContent: 'center' }}>
                      <div className="card col-sm-4 p-0 rounded shadow-sm ms-5" style={{ width: '25%', height: '200px' }}>
                        <div className="card-body p-0">
                          <div className='d-flex rounded-top ' onClick={() => navigate("/hasil/evaluasi", { state: { ke: 1, type: "penilaianMedia" } })} style={{ backgroundColor: '#08E138', height: '60%', justifyContent: 'center', cursor: 'pointer' }}>
                            <div className='me-5'>
                              <img style={{ width: "120px" }} src={toAbsoluteUrl('/media/illustrations/light/SVG/__goods.svg')} alt='' />
                            </div>
                          </div>
                          <div className='d-flex p-5 justify-content-between align-items-center' style={{ width: '100%' }}>
                            <div>
                              <h3>Penilaian Media</h3>
                              <span className='badge badge-light-info'>Lihat Nilai Siswa -{'>'}</span>
                            </div>
                            <div>
                              {
                                profileSiswa?.type.toLowerCase() !== "siswa" ?
                                  <div className=''>
                                    <button
                                      className={`btn ${isOpenMedia ? 'btn-danger' : 'btn-primary'} fw-bold`}
                                      style={{ cursor: 'pointer' }}
                                      onClick={() => {
                                        handleBukaTutup('media')
                                      }}
                                    >
                                      {isOpenMedia ? 'Tutup Media' : 'Buka Media'}
                                    </button>
                                  </div>
                                  :
                                  <></>
                              }
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
            }
          </div >
        )
      }
    </>

  )
}

export default Evaluasi