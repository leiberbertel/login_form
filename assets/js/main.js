/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPassword = (inputPass, inputIcon) =>{
    const input = document.getElementById(inputPass),
        iconEye = document.getElementById(inputIcon)

    iconEye.addEventListener('click', () =>{
        if(input.type === 'password'){
            // Cambia a texto
            input.type = 'text'
            // Add icon
            iconEye.classList.add('ri-eye-line')
            // Remove icon
            iconEye.classList.remove('ri-eye-off-line')
        }else{
            // Change to password
            input.type = 'password'
            // Remove icon
            iconEye.classList.remove('ri-eye-line')
            //Add icon
            iconEye.classList.add('ri-eye-off-line')
        }
    })
}

showHiddenPassword('input-pass', 'input-icon')