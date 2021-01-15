import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/project/list',
    method: 'get',
    params: query
  })
}

export function fetchProject(id) {
  return request({
    url: '/project/detail',
    method: 'get',
    params: { id }
  })
}

export function updateProject(data) {
  return request({
    url: '/project/update',
    method: 'post',
    data
  })
}
