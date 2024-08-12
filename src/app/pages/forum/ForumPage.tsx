import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getProfileSiswa } from '../../api/Request/profile.siswa.api'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { CreateProfileSiswaType } from '../../interface/profile.siswa.interface'
import Lottie from 'lottie-react'
import animLoading from '../../../_molekul/assets/loading/animLoading.json'
import { getIsOpen, updateIsOpenDiskusi } from '../../api/Request/isopen.api'
import Swal from 'sweetalert2'

const Forum = () => {
  const navigate = useNavigate()
  const auth = getAuth()
  const [uuid, setUuid] = useState<string>()
  const [profileSiswa, setProfileSiswa] = useState<CreateProfileSiswaType>()
  const [loading, setLoading] = useState<boolean>(true)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    onAuthStateChanged(auth, e => {
      setUuid(e?.uid)
      handleGetProfile(e?.uid)
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
            }
          </>
        )
      }
    </>

  )
}

export default Forum