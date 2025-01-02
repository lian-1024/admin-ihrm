import type { GivePermissionParams, PagingQueryParams, PagingResponse, RoleDetailVO, RoleItemVO, UpdateRoleParams } from '@/types/api';
import { request } from '@/utils/request/instance';

class RoleService {
  static getRoleList(params: PagingQueryParams) {
    return request.get<PagingResponse<RoleItemVO>>('/sys/role', { params });
  }

  // 更新角色
  static updateRole(params: UpdateRoleParams) {
    return request.put<null>(`/sys/role/${params.id}`, params);
  }

  static getRoleDetail(id: number) {
    return request.get<RoleDetailVO>(`/sys/role/${id}`)
  }

  static givePermission(params: GivePermissionParams) {
    return request.put(`/sys/role/assignPrem`, params);
  }
}

export default RoleService
