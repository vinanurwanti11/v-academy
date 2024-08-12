import BaseApi, { authKey } from '../BaseApi';

export const getIsOpen = async (path: string): Promise<any> => {
  const { data } = await BaseApi().request<any>({
    url: `isOpen/${path}.json?auth=${authKey}`,
    method: 'GET',
  })

  return data
}

export const getAllIsOpen = async (): Promise<any> => {
  const { data } = await BaseApi().request<any>({
    url: `isOpen.json?auth=${authKey}`,
    method: 'GET',
  })

  return data
}

export const updateIsOpenDiskusi = async (diskusi: boolean): Promise<any> => {
  const { data } = await BaseApi().request<any>({
    url: `isOpen.json?auth=${authKey}`,
    method: 'PATCH',
    data: { diskusi }
  })

  return data
}

export const updateIsOpenPretest = async (pretest: boolean): Promise<any> => {
  const { data } = await BaseApi().request<any>({
    url: `isOpen.json?auth=${authKey}`,
    method: 'PATCH',
    data: { pretest }
  })

  return data
}

export const updateIsOpenPosttest = async (posttest: boolean): Promise<any> => {
  const { data } = await BaseApi().request<any>({
    url: `isOpen.json?auth=${authKey}`,
    method: 'PATCH',
    data: { posttest }
  })

  return data
}

export const updateIsOpenMedia = async (penilaianMedia: boolean): Promise<any> => {
  const { data } = await BaseApi().request<any>({
    url: `isOpen.json?auth=${authKey}`,
    method: 'PATCH',
    data: { penilaianMedia }
  })

  return data
}