import request from '@/utils/request'

export function fetchCompany() {
  return request({
    url: '/company/intro',
    method: 'get'
  })
}
export function updateCompanyInfo(data) {
  return request({
    url: '/company/update',
    method: 'post',
    data
  })
}
