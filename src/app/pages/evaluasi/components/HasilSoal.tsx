import React, { useEffect, useState } from 'react'
import { usePagination } from '../../materi/context/materiProvider'
import { DataMateri, soalPretest } from '../../../interface/evaluasi/pretest.interface'
import { useLocation } from 'react-router-dom'
import { soalPosttest } from '../../../interface/evaluasi/posttest.interface'
import { soalLogic } from '../../../interface/evaluasi/logical.interface'
import { penilaianMedia } from '../../../interface/evaluasi/media.interface'
import { HasilSoalType } from '../../../interface/materi/materi.interface'
import { getEvaluasiByUUID } from '../../../api/Request/evaluasi.siswa.api'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Lottie from 'lottie-react'
import animLoading from '../../../../_molekul/assets/loading/animLoading.json'
import { getProfileSiswa } from '../../../api/Request/profile.siswa.api'
import { CreateProfileSiswaType } from '../../../interface/profile.siswa.interface'

const HasilSoal = () => {
  const [materi, setMateri] = useState<DataMateri[]>(soalPretest)
  const page = usePagination()
  const [materiParent, setMateriParent] = useState<string>("")
  // @ts-ignore
  const location = useLocation<data>()
  const [hasilSoal, setHasilSoal] = useState<HasilSoalType[]>([])
  const [finalHasilSoal, setFinalHasilSoal] = useState<HasilSoalType[]>([])
  const [uuid, setUuid] = useState<string | undefined>("")
  const auth = getAuth()
  const [loading, setLoading] = useState<boolean>(false)
  const [profile, setProfile] = useState<CreateProfileSiswaType>()

  useEffect(() => {
    //@ts-ignore
    onAuthStateChanged(auth, e => {
      //@ts-ignore
      if (e?.uid || location.state.uid) {
        setLoading(true)
        setUuid(e?.uid)
        //@ts-ignore
        handleGetDetailMateri(location.state.uid ? location.state.uid : e.uid)
        //@ts-ignore
        handleGetProfile(location.state.uid ? location.state.uid : e.uid)
      }
    })
  }, [uuid])

  useEffect(() => {
    // @ts-ignore
    setMateriParent(location.state.materiParent)
    if (materiParent) {
      if (materiParent === "pretest") {
        setMateri(soalPretest)
      } else if (materiParent === "posttest") {
        setMateri(soalPosttest)
      } else if (materiParent === "preLogic") {
        setMateri(soalLogic)
      } else if (materiParent === "postLogic") {
        setMateri(soalLogic)
      } else if (materiParent === "penilaianMedia") {
        setMateri(penilaianMedia)
      }
    }
  }, [materiParent, materi])

  useEffect(() => {
    const hasReloaded = localStorage.getItem('hasReloaded')
    if (!loading && hasReloaded === "false") {
      localStorage.setItem('hasReloaded', 'true')
      window.location.reload()
    }
  }, [loading])

  const handleGetDetailMateri = async (uid: string) => {
    try {
      if (uid) {
        const res = await getEvaluasiByUUID(materiParent, uid)
        const ha = Object.entries(res);
        setFinalHasilSoal(ha[0][1].hasilSoal)
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
    }
  }

  const cekStatus = (nama: string): boolean => {
    if (finalHasilSoal.length !== 0) {
      for (let i = 0; i < finalHasilSoal.length; i++) {
        if (finalHasilSoal[i].textJawaban === nama) {
          return true;
        }
      }
    }
    if (nama && hasilSoal) {
      for (let i = 0; i < hasilSoal.length; i++) {
        if (hasilSoal[i].textJawaban === nama) {
          return true;
        }
      }
    }
    return false;
  };

  const handleRadioChange = (index: number, value: HTMLInputElement["value"]) => {
    if (index >= 0 && value) {
      const body: HasilSoalType = {
        name: materi[0].materi.isiMateri[page.currentPage - 1].judulMateri,
        jawaban: index,
        hasil: materi[0].materi.isiMateri[page.currentPage - 1].kunjawSoal === index,
        textJawaban: value
      }
      handlePushAndDeleteMood(body)
    }
  };

  const handlePushAndDeleteMood = (key: HasilSoalType) => {
    if (key) {
      const found = hasilSoal.find((obj) => {
        return obj.name === key.name
      })

      if (!found) {
        hasilSoal.push(key)
      } else {
        for (let i = 0; i < hasilSoal.length; i++) {
          if (hasilSoal[i].name === key.name) {
            hasilSoal.splice(i, 1, key)
          }
        }
      }
    }
  }

  const handleGetProfile = async (uid: string | undefined) => {
    setLoading(true)
    if (uid) {
      const getIdPoin = await getProfileSiswa(uid)
      const la = Object.entries(getIdPoin)
      setProfile(la[0][1])
    }
  }

  return (
    <div className='row p-0'>
      {
        loading ? (
          <div className='d-flex'
            style={{ width: '100%', height: '100%', justifyContent: 'center', justifyItems: 'center' }}
          >
            <Lottie style={{ width: '55%', height: '55%' }} animationData={animLoading} />
          </div>
        ) :
          <>
            <div style={{ justifyContent: "center" }} className='d-flex row'>
              <div style={{ maxWidth: "80%" }} id="materi" className={`${materiParent === "preLogic" || materiParent === "postLogic" || materiParent === "penilaianMedia" ? "col-xl-10 card-header" : "col-xl-10 card-header"}`}>
                <>
                  {
                    <div>
                      {
                        finalHasilSoal && finalHasilSoal.length !== 0 ?
                          <>
                            {
                              finalHasilSoal.map((e, i) => {
                                return (
                                  e.name === materi[0].materi.isiMateri[i].judulMateri ?
                                    <div key={i} className="form-check mb-5">
                                      <div className='d-flex mb-10 flex-row'>
                                        <span style={{ fontSize: "20px", textAlign: "left", marginRight: "10px" }}>
                                          {i + 1}.
                                        </span>
                                        <div dangerouslySetInnerHTML={{ __html: materi[0].materi.isiMateri[i].soal ? materi[0].materi.isiMateri[i].soal! : "" }} />
                                      </div>
                                      {
                                        materi[0].materi.isiMateri[i].pilihanSoal?.map((_soal, j) => {
                                          return (
                                            <div key={j} className="form-check mb-5">
                                              <input
                                                className="form-check-input"
                                                type="radio"
                                                name={`flexRadioDefault${i}`}
                                                id={`flexRadioDefault${i}-${j}`}
                                                value={_soal}
                                                checked={cekStatus(_soal)}
                                                disabled={finalHasilSoal.length !== 0 ? true : false}
                                                onChange={(e) => handleRadioChange(i, e.target.value)}
                                              />
                                              <div className='mb-10'>
                                                <div dangerouslySetInnerHTML={{ __html: _soal ? _soal : "" }} />
                                              </div>
                                            </div>
                                          )
                                        })
                                      }
                                      {
                                        materiParent === "preLogic" || materiParent === "postLogic" || materiParent === "penilaianMedia" ?
                                          null
                                          :
                                          <div className='mt-10'>
                                            {
                                              e.hasil ?
                                                <span className='fs-1 fw-bold'>
                                                  {`${profile?.type === 'guru' ? "Jawaban Benar !" : "Keren! Jawaban Kamu Benar 😍"}`}
                                                </span>
                                                :
                                                <span className='fs-1 fw-bold'>
                                                  {`${profile?.type === 'guru' ? "Jawaban Salah !" : "Yah, Jawaban Kamu Salah Nih 😢"}`}
                                                </span>
                                            }
                                          </div>
                                      }
                                      <hr className='mt-10 mb-10' />
                                    </div>
                                    :
                                    null
                                )
                              })
                            }
                          </>
                          :
                          null
                      }
                    </div>

                  }
                </>
              </div>
            </div>
          </>
      }
    </div>
  )
}

export default HasilSoal
