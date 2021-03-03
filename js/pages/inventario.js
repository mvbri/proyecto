

const passwordChange = () => {
    const inputPassword1 = document.getElementById('password_change');
    const inputPassword1 = document.getElementById('password_change_confirm');

    if(inputPassword1 !== inputPassword1.value) {
        alert("las contraseñas no son iguales");
    }
}