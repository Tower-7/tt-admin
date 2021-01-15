import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/banner/list',
    method: 'get',
    params: query
  })
}

export function fetchBanner(id) {
  return request({
    url: '/banner/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createBanner(data) {
  return request({
    url: '/banner/update',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/article/update',
    method: 'post',
    data
  })
}
