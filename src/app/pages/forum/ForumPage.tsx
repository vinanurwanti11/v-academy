import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllSiswa, getProfileSiswa, updateKelompokByUD } from '../../api/Request/profile.siswa.api'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { CreateProfileSiswaType } from '../../interface/profile.siswa.interface'
import Lottie from 'lottie-react'
import animLoading from '../../../_molekul/assets/loading/animLoading.json'
import { getIsOpen, updateIsOpenDiskusi } from '../../api/Request/isopen.api'
import Swal from 'sweetalert2'
import { CreatePeringkatType } from '../../interface/peringkat.interface'
import { getAllPeringkatSiswa } from '../../api/Request/peringkat.siswa.api'

const Forum = () => {
  const navigate = useNavigate()
  const auth = getAuth()
  const [uuid, setUuid] = useState<string>()
  const [profileSiswa, setProfileSiswa] = useState<CreateProfileSiswaType>()
  const [loading, setLoading] = useState<boolean>(true)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [listSiswa, setListSiswa] = useState<any[]>([])
  const [newKelompok, setNewKelompok] = useState<string>('')
  const [uidUbahKelompok, setUidUbahKelompok] = useState<string>('')
  const [idUbahKelompok, setIdUbahKelompok] = useState<string>('')
  const [namaSiswa, setNamaSiswa] = useState<string>('')

  useEffect(() => {
    onAuthStateChanged(auth, e => {
      setUuid(e?.uid)
      handleGetProfile(e?.uid)
      handleGetListProfile(e?.uid)
    })
    handleGetIsOpen()
  }, [uuid])

  const handleGetProfile = async (uid: string | undefined) => {
    setLoading(true)
    try {
      if (uid) {
        const resGetPertanyaan = await getProfileSiswa(uid)
        const output = Object.entries(resGetPertanyaan)
        output.map(e => {
          // @ts-ignore
          setProfileSiswa(e[1])
        });

        setLoading(false)
      }

    } catch (error) {
      console.error(error);
      setLoading(false)
    }
  }

  const handleGetIsOpen = async () => {
    try {
      const isOpen = await getIsOpen("diskusi")
      setIsOpen(isOpen)
    } catch (err) {
      console.error(err);
    }
  }

  const handleGetListProfile = async (uid: string | undefined) => {
    if (uid) {
      const res = await getAllSiswa();
      const ha = Object.entries(res);

      const sortedData = ha
        .map((e, i) => {
          const ha = Object.entries(e[1]);
          const uid = Object.entries(e)
          const body: any = {
            id: ha[0][0],
            uid: uid[0][1],
            name: ha[0][1].name,
            nomor_absen: ha[0][1].nomor_absen,
            email: ha[0][1].email,
            imageProfile: ha[0][1].imageProfile,
            type: ha[0][1].type,
            kelompok: ha[0][1].kelompok,
          };
          return body;
        })
        .sort((a, b) => parseInt(a.kelompok) - parseInt(b.kelompok));

      setListSiswa(sortedData);
    }
  }

  const handleNavigate = (type: string, page?: string) => {
    if (profileSiswa?.type.toLowerCase() === "siswa") {
      if (isOpen) {
        if (type === 'kelompok' && profileSiswa?.type.toLowerCase() === "siswa") {
          navigate('/group', { state: { page: profileSiswa.kelompok } })
          window.location.reload();
        } else {
          navigate('/group', { state: { page: "ajarkoding" } })
          window.location.reload();
        }
      } else {
        const swalSuccess = Swal.mixin({
          customClass: {
            confirmButton: 'btn btn-danger',
          },
          buttonsStyling: false
        })
        swalSuccess.fire({
          title: `Mohon Maaf\nRoom diskusi belum di buka oleh guru`,
          icon: 'error',
          confirmButtonText: 'Dismiss',
        })
      }
    } else {
      if (type === 'kelompok') {
        navigate('/group', { state: { page: page } })
        window.location.reload();
      } else {
        navigate('/group', { state: { page: "ajarkoding" } })
        window.location.reload();
      }
    }
  }

  const handleBukaTutupDiskusi = async () => {
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
      title: `${isOpen ? 'Tutup' : 'Buka'} Room Diskusi?`,
      icon: 'info',
      showCancelButton: true,
      cancelButtonText: 'Batalkan',
      confirmButtonText: 'Ya!',
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const resUpdate = await updateIsOpenDiskusi(!isOpen)
          console.log(resUpdate);
          setIsOpen(resUpdate)
          if (resUpdate) {
            swalSuccess.fire({
              title: `Room diskusi berhasil di${isOpen ? 'tutup' : 'buka'}`,
              icon: 'success',
              confirmButtonText: 'Dismiss',
            }).then(async (result) => {
              if (result.isConfirmed) {
                window.location.reload();
              } else if (result.isDismissed) {
                window.location.reload();
              }
            })
          }
        } catch (err) {
          console.error(err);
        }
      }
    })
  }


  const handleUbahKelompok = async (uuid: string, id: string, kelompok: string) => {
    const swalSuccess = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
      },
      buttonsStyling: false
    })
    try {
      const res = await updateKelompokByUD(uuid, id, kelompok)
      if (res) {
        setNewKelompok('')
        setUidUbahKelompok('')
        setIdUbahKelompok('')
        swalSuccess.fire({
          title: `Kelompok siswa berhasil diubah`,
          icon: 'success',
          confirmButtonText: 'Dismiss',
        }).then(async (result) => {
          if (result.isConfirmed) {
            window.location.reload();
          } else if (result.isDismissed) {
            window.location.reload();
          }
        })
      }
    } catch (err) {
      console.error(err);
    }
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
          <>
            <div className='d-flex justify-content-between align-items-center' style={{ width: '100%' }}>
              <div className=''>
                <h1 className='mb-10 ms-20' style={{ fontSize: '30px' }}>Forum</h1>
              </div>
              {
                profileSiswa?.type.toLowerCase() !== "siswa" ?
                  <div className=''>
                    <button
                      className={`btn ${isOpen ? 'btn-danger' : 'btn-primary'} fw-bold`}
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        handleBukaTutupDiskusi()
                      }}
                    >
                      {isOpen ? 'Tutup Diskusi' : 'Buka Diskusi'}
                    </button>
                  </div>
                  :
                  <></>
              }

            </div>


            <div className="d-flex row mb-10">
              <div className="d-flex row" style={{ justifyContent: 'left', marginLeft: '9%' }}>
                <div className="card col-sm-4 p-0 rounded shadow-sm"
                  onClick={() => {
                    handleNavigate('utama')
                  }}
                  style={{ width: '25%', height: '180px', cursor: 'pointer' }}>
                  <div className="card-body p-0">
                    <div className='rounded-top ' style={{ backgroundColor: 'black', height: '50%' }}>

                    </div>
                    <div className='p-5'>
                      <h3>Room Utama 🏆</h3>
                    </div>
                  </div>
                </div>

                {
                  profileSiswa?.type.toLowerCase() === "siswa" ?
                    <div className="card col-sm-4 p-0 ms-10 rounded shadow-sm"
                      onClick={() => {
                        handleNavigate('kelompok')
                      }}
                      style={{ width: '25%', height: '180px', cursor: 'pointer' }}>
                      <div className="card-body p-0">
                        <div className='rounded-top ' style={{ backgroundColor: '#0893E1', height: '50%' }}>

                        </div>
                        <div className='p-5'>
                          <h3>Diskusi Kelompok 🙌</h3>
                        </div>
                      </div>
                    </div>
                    :
                    <></>
                }


              </div>
            </div>
            {
              profileSiswa?.type.toLowerCase() === "siswa" ?
                <></>
                :

                <>
                  <div className="d-flex row">
                    <div className="d-flex row" style={{ justifyContent: 'center' }}>
                      <div className="card col-sm-4 p-0 rounded shadow-sm"
                        onClick={() => {
                          handleNavigate('kelompok', '1')
                        }}
                        style={{ width: '25%', height: '180px', cursor: 'pointer' }}>
                        <div className="card-body p-0">
                          <div className='rounded-top ' style={{ backgroundColor: '#E108B1', height: '50%' }}>

                          </div>
                          <div className='p-5'>
                            <h3>Kelompok 1</h3>
                          </div>
                        </div>
                      </div>
                      <div className="card col-sm-4 p-0 rounded shadow-sm ms-10 me-10"
                        onClick={() => {
                          handleNavigate('kelompok', '2')
                        }}
                        style={{ width: '25%', height: '180px', cursor: 'pointer' }}>
                        <div className="card-body p-0">
                          <div className='rounded-top ' style={{ backgroundColor: '#08E138', height: '50%' }}>

                          </div>
                          <div className='p-5'>
                            <h3>Kelompok 2</h3>
                          </div>
                        </div>
                      </div>
                      <div className="card col-sm-4 p-0 border rounded shadow-sm"
                        onClick={() => {
                          handleNavigate('kelompok', '3')
                        }}
                        style={{ width: '25%', height: '180px', cursor: 'pointer' }}>
                        <div className="card-body p-0">
                          <div className='rounded-top ' style={{ backgroundColor: '#0893E1', height: '50%' }}>

                          </div>
                          <div className='p-5'>
                            <h3>Kelompok 3</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex row mt-10" style={{ justifyContent: 'center' }}>
                      <div className="card col-sm-4 p-0 rounded shadow-sm"
                        onClick={() => {
                          handleNavigate('kelompok', '4')
                        }}
                        style={{ width: '25%', height: '180px', cursor: 'pointer' }}>
                        <div className="card-body p-0">
                          <div className='rounded-top ' style={{ backgroundColor: '#E1D808', height: '50%' }}>

                          </div>
                          <div className='p-5'>
                            <h3>Kelompok 4</h3>
                          </div>
                        </div>
                      </div>

                      <div className="card col-sm-4 p-0 rounded shadow-sm ms-10 me-10"
                        onClick={() => {
                          handleNavigate('kelompok', '5')
                        }}
                        style={{ width: '25%', height: '180px', cursor: 'pointer' }}>
                        <div className="card-body p-0">
                          <div className='rounded-top ' style={{ backgroundColor: '#E10856', height: '50%' }}>

                          </div>
                          <div className='p-5'>
                            <h3>Kelompok 5</h3>
                          </div>
                        </div>
                      </div>

                      {/* <div className="card col-sm-4 p-0 rounded shadow-sm"
                      onClick={() => {
                        handleNavigate('kelompok', '6')
                      }}
                      style={{ width: '25%', height: '180px', cursor: 'pointer' }}>
                      <div className="card-body p-0">
                        <div className='rounded-top ' style={{ backgroundColor: '#A16876', height: '50%' }}>

                        </div>
                        <div className='p-5'>
                          <h3>Kelompok 6</h3>
                        </div>
                      </div>
                    </div> */}
                    </div>
                  </div>

                  <div className={`card card-xxl-stretch mb-xl-8 shadow-sm mt-20`}>
                    {/* begin::Header */}
                    <div className='card-header border-0 pt-5'>
                      <h3 className='card-title align-items-start flex-column'>
                        <span className='card-label fw-bold fs-3 mb-1'>List Siswa</span>
                      </h3>
                    </div>
                    {/* end::Header */}
                    {/* begin::Body */}
                    <div className='card-body py-3'>
                      {/* begin::Table container */}
                      <div className='table-responsive'>
                        {/* begin::Table */}
                        <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
                          {/* begin::Table head */}
                          <thead>
                            <tr className='fw-bold text-dark'>
                              {/* <th className='min-w-30px'>No</th> */}
                              <th className='min-w-150px'>Nama</th>
                              <th className='min-w-150px'>Email</th>
                              <th className='min-w-140px'>Nomor Absen</th>
                              <th className='min-w-120px'>Kelompok</th>
                              <th className='min-w-120px'>Action</th>
                              {/* <th className='min-w-120px'>Poin</th> */}
                            </tr>
                          </thead>
                          {/* end::Table head */}
                          {/* begin::Table body */}
                          <tbody>
                            {
                              listSiswa && listSiswa.map((e, i) => {
                                return (
                                  <>
                                    {
                                      e.type === "guru" ?
                                        <></>
                                        :
                                        <tr key={i}>
                                          {/* <td>
                                            <span className='text-dark fw-bold d-block fs-4'>
                                              {i}
                                            </span>
                                          </td> */}
                                          <td>
                                            <div className='d-flex align-items-center'>
                                              <div className='symbol symbol-45px me-5'>
                                                <img src={e.imageProfile} alt='' />
                                              </div>
                                              <div className='d-flex justify-content-start flex-column'>
                                                <span className='text-dark fw-bold fs-4'>
                                                  {e.name}
                                                </span>
                                                {/* <span className='text-muted fw-semibold text-muted d-block fs-5'>
                                                  {e.email}
                                                </span> */}
                                              </div>
                                            </div>
                                          </td>
                                          <td>
                                            <span className='text-muted fw-bold d-block fs-4'>
                                              {e.email}
                                            </span>
                                          </td>
                                          <td>
                                            <span className='text-dark fw-bold d-block fs-4'>
                                              {e.nomor_absen}
                                            </span>
                                          </td>
                                          <td>
                                            <span className='text-dark fw-bold d-block fs-4'>
                                              {e.kelompok}
                                            </span>
                                          </td>
                                          <td>
                                            <button
                                              className={`btn ${isOpen ? 'btn-danger' : 'btn-primary'} fw-bold`}
                                              style={{ cursor: 'pointer' }}
                                              type={`button`}
                                              data-bs-toggle='modal'
                                              data-bs-target='#kt_modal_ubah_kelompok'
                                              onClick={() => {
                                                setUidUbahKelompok(e.uid)
                                                setIdUbahKelompok(e.id)
                                                setNamaSiswa(e.name)
                                              }}
                                            >
                                              Ubah Kelompok
                                            </button>
                                            <div
                                              className='modal fade modal-lg'
                                              tabIndex={-1}
                                              id='kt_modal_ubah_kelompok'
                                            >
                                              <div className='modal-dialog modal-dialog-centered'>
                                                <div className='modal-content'>
                                                  <div className='p-8'>
                                                    <span className='fs-2 fw-bold text-gray-700'>
                                                      Ubah Kelompok {namaSiswa}
                                                    </span>{' '}
                                                  </div>
                                                  <div className='ps-8 pe-8'>
                                                    <input
                                                      className='form-control'
                                                      placeholder='Masukkan Nomor Kelompok siswa'
                                                      type={'number'}
                                                      onChange={(e) => setNewKelompok(e.target.value)}
                                                    />
                                                  </div>
                                                  <div
                                                    className='d-flex mt-10 modal-footer'
                                                    style={{ justifyContent: 'flex-end', width: '100%' }}
                                                  >
                                                    <div>
                                                      <button
                                                        type='button'
                                                        data-bs-dismiss='modal'
                                                        className='btn btn-outline btn-outline-primary btn-active-light-primary w-200px me-4'
                                                      >
                                                        Batalkan
                                                      </button>
                                                    </div>
                                                    <div>
                                                      <button
                                                        className='btn btn-primary w-200px'
                                                        data-bs-dismiss='modal'
                                                        style={{ cursor: 'pointer' }}
                                                        onClick={() => {
                                                          if (newKelompok !== '') {
                                                            handleUbahKelompok(uidUbahKelompok, idUbahKelompok, newKelompok)
                                                          }
                                                        }}
                                                        disabled={newKelompok ? false : true}
                                                      >
                                                        Ubah
                                                      </button>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </td>
                                        </tr>
                                    }
                                  </>
                                )
                              })
                            }

                          </tbody>
                          {/* end::Table body */}
                        </table>
                        {/* end::Table */}
                      </div>
                      {/* end::Table container */}
                    </div>
                    {/* begin::Body */}
                  </div>
                </>
            }
          </>
        )
      }
    </>

  )
}

export default Forum