import request from '@/utils/request'

export function fetchRecommend() {
  return request({
    url: '/recommend/detail',
    method: 'get'
  })
}
export function updateRecommend(data) {
  return request({
    url: '/recommend/update',
    method: 'post',
    data
  })
}
