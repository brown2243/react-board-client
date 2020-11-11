import Axios from "axios";

const API_URL='http://localhost:8090/users'

class ApiService{
    fetchUsers(){ //사용자 전체 리스트
        return Axios.get(API_URL)
    }
    fetchUserByID(id){ // 특정 사용자 정보조회
        return Axios.get(API_URL+'/'+id)
    }
    addUser(user){ // POST 사용자 정보 Back-end에 전달
        return Axios.post(API_URL, user)
    }
    editUser(user){ // PUT 사용자 수정 정보 Back-end에 전달
        return Axios.put(API_URL+'/'+user.id, user)
    }
    deleteUser(id){  // DELETE 사용자 아이디 전달
        return Axios.delete(API_URL+'/'+id)
    }
}
export default new ApiService()