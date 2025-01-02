export interface RoleItemVO {
  /**
   * 角色描述
   */
  description: string;
  /**
   * 角色id
   */
  id: number;
  /**
   * 角色名字
   */
  name: string;
  /**
   * 状态启动
   */
  state: number;
}

/**角色详情 */
export interface RoleDetailVO {
  /**
    * 角色描述
    */
  description: string;
  /**
   * 角色id
   */
  id: number;
  /**
   * 角色名字
   */
  name: string;
  /**
   * 角色关联的权限集合
   */
  permIds: number[];
  /**
   * 角色状态
   */
  state: number;
}

export interface UpdateRoleParams {
  id: number | string;
  name: string;
  description: string;
}


export interface GivePermissionParams {
  /**
   * 角色id
   */
  id: number;
  /**
   * 权限点数组
   */
  permIds: number[];
}
