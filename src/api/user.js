import Request from "axios";


/**
 * 查询用户列表
 * @param {*} data  查询参数
 * @returns 
 */
export function userList(data) {
    return Request.post("/api/user/list", data)
}

/**
 * 添加用户
 * @param {*} data 
 * @returns 
 */
export function save(data) {
    return Request.post("/api/user/save", data)
}
/**
 * 编辑用户
 * @param {*} data 
 * @returns 
 */
 export function updateById(data) {
    return Request.post("/api/user/updateById", data)
}


/**
 * 查询当前用户详情
 * @param {*} data 
 * @returns 
 */
 export function getById(data) {
    return Request.post("/api/user/getById", data)
}

/**
 * 删除当前用户
 * @param {*} data 
 * @returns 
 */
 export function delUser(data) {
    return Request.post("/api/user/del", data)
}