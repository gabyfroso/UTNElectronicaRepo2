
export const validacionCampos = () => {
    const admin = sessionStorage.getItem('admins');
    if(admin.user === "admin" && admin.password === "admin"){
        return true
    }else{
        return false
    }
};

