import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/case/list',
    method: 'get',
    params: query
  })
}

export function fetchCase(id) {
  return request({
    url: '/case/detail',
    method: 'get',
    params: { id }
  })
}

export function updateCase(data) {
  return request({
    url: '/case/update',
    method: 'post',
    data
  })
}
