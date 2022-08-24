import Request from "axios";


/**
 * 添加角色信息
 * @param {*} params 
 * @returns 
 */
export function roleList(params){
    return Request.post("/api/role/list",params)
}

/**
 * 添加角色信息
 * @param {*} params 
 * @returns 
 */
 export function saverole(params){
    return Request.post("/api/role/save",params)
}

/**
 * 编辑角色信息
 * @param {*} params 
 * @returns 
 */
 export function updateRole(params){
    return Request.post("/api/role/update",params)
}

/**
 * 查询角色详情
 * @param {*} params 
 * @returns 
 */
 export function getRoleById(params){
    return Request.post("/api/role/getById",params)
}

/**
 * 删除角色信息
 * @param {*} params 
 * @returns 
 */
 export function removeRoleById(params){
    return Request.post("/api/role/removeById",params)
}
