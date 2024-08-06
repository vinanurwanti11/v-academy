import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { CreateProfileSiswaType, HasilEvaluasiSiswaType, ProfileSiswaType } from '../../../interface/profile.siswa.interface'
import { getAllSiswa, getProfileSiswa } from '../../../api/Request/profile.siswa.api'
import { toAbsoluteUrl } from '../../../../_molekul/helpers'
import { getEvaluasiByTypeEvaluasi } from '../../../api/Request/evaluasi.siswa.api'
import animLoading from '../../../../_molekul/assets/loading/animLoading.json'
import Lottie from 'lottie-react'

const HasilSiswa = () => {
  const navigate = useNavigate()
  const auth = getAuth()
  const [uuid, setUuid] = useState<string>()
  // @ts-ignore
  const location = useLocation<data>()
  const [loading, setLoading] = useState<boolean>(false)
  const [listHasilEvaluasi, setListHasilEvaluasi] = useState<HasilEvaluasiSiswaType[]>([])
  const [type, setType] = useState<string>("")

  useEffect(() => {
    //@ts-ignore
    // setKe(location.state.ke)
    //@ts-ignore
    setType(location.state.type)
    onAuthStateChanged(auth, e => {
      setUuid(e?.uid)
      // handleGetProfile(e?.uid)
    })
  }, [uuid])

  useEffect(() => {
    const handleGetStatusEvaluasi = async () => {
      if (type) {
        setLoading(true)
        const res = await getEvaluasiByTypeEvaluasi(type)
        if (res !== null) {
          const hasilEvaluasiObject = Object.entries(res);
          for (let i = 0; i < hasilEvaluasiObject.length; i++) {
            const profileSiswa = await getProfileSiswa(hasilEvaluasiObject[i][0])
            if (profileSiswa) {
              const profileSiswaObject = Object.entries(profileSiswa);
              const bodyForListEvaluasi: HasilEvaluasiSiswaType = {
                name: profileSiswaObject[0][1].name,
                nomor_absen: profileSiswaObject[0][1].nomor_absen,
                email: profileSiswaObject[0][1].email,
                imageProfile: profileSiswaObject[0][1].imageProfile,
                type: profileSiswaObject[0][1].type,
                kelompok: profileSiswaObject[0][1].kelompok,
                poin: Object.entries(hasilEvaluasiObject[i][1])[0][1].poin,
                uuid: hasilEvaluasiObject[i][0]
              }
              listHasilEvaluasi.push(bodyForListEvaluasi)
            }
          }
        }
        setLoading(false)
      }
    }
    handleGetStatusEvaluasi()
  }, [type])

  return (
    <>
      {
        loading && listHasilEvaluasi ? (
          <div className='d-flex'
            style={{ width: '100%', height: '100%', justifyContent: 'center', justifyItems: 'center' }}
          >
            <Lottie style={{ width: '55%', height: '55%' }} animationData={animLoading} />
          </div>
        ) :
          <>
            <div className='hover-overlay mb-10 mt-5' style={{ cursor: 'pointer' }} onClick={() => navigate(-1)}>
              <img
                alt='Logo'
                src={toAbsoluteUrl('/media/icons/duotune/general/ic_prev_black.svg')}
                className='logo-default h-25px mb-2'
              />
              <span className='text-gray-900 text-hover-primary' style={{ fontSize: '16px', fontWeight: 'bold' }}>Kembali</span>
            </div>

            <div className='card-body'>
              <div className={`card card-xxl-stretch mb-5 mb-xl-8 shadow-sm p-8`}>
                <div className='table-responsive'>
                  <table className='table table-row-dashed table-row-gray-300 align-middle gs-0'>

                    <thead>
                      <tr className='fw-bold text-muted'>
                        <th className='min-w-100px'>Nama</th>
                        <th className='min-w-100px'>Nomor Absen</th>
                        <th className='p-0 min-w-50px'>{`${type === 'pretest' || type === 'posttest' ? "Poin" : "Status"}`}</th>
                      </tr>
                    </thead>

                    <tbody>
                      {
                        listHasilEvaluasi && listHasilEvaluasi.map((e, i) => {
                          return (
                            <tr key={i}>
                              {
                                e.type.toLowerCase() !== "guru" && (
                                  <>
                                    <td key={i}>
                                      <div className='d-flex align-items-center'
                                        onClick={() => {
                                          navigate('/hasil/evaluasi/page', { state: { materiParent: type, uid: e.uuid } })
                                          localStorage.setItem('hasReloaded', 'false')
                                        }}
                                        style={{ cursor: 'pointer' }}
                                      >
                                        <div className='symbol symbol-45px me-5'>
                                          <img src={e.imageProfile} alt='profile' />
                                        </div>
                                        <div className='d-flex justify-content-start flex-column'>
                                          <span className='text-dark fw-bold fs-4 text-hover-primary'>
                                            {e.name}
                                          </span>
                                          {/* <span className='text-muted fw-semibold text-muted d-block fs-5'>
                                            {e.email}
                                          </span> */}
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <span className='text-dark fw-bold d-block fs-4'>
                                        {e.nomor_absen}
                                      </span>
                                    </td>
                                    <td>
                                      <span className='text-dark fw-bold d-block fs-4'>
                                        <span className={`${type === 'pretest' || type === '' ? e.poin : 'badge badge-light-success'}`}>{`${type === 'pretest' || type === 'posttest' ? e.poin : "Selesai"}`}</span>
                                      </span>
                                    </td>
                                  </>
                                )
                              }
                            </tr>
                          )
                        })
                      }

                    </tbody>

                  </table>

                </div>
              </div>
            </div>
          </>
      }
    </>
  )
}

export default HasilSiswa