$(document).ready(function(){
    //clave
    $("#togglePassword").on("click", function(){
        const passwordField = $("#password");
        const icon = $(this).find("i");
        if(passwordField.attr("type" )==="password"){
            passwordField.attr("type","text");
            icon.removeClass("fa-eye").addClass("fa-eye-slash");
        }
        else{
            passwordField.attr("type", "password");
            icon.removeClass("fa-eye-slash").addClass("fa-eye");
        }
    })

    $("#email").on("input", function(){
        const email = $(this).val().trim();

        if(email && !validarEmail(email)){
            mostrarError("Credenciales invalidas")
        }
        else{
            limpiarError("email");
        }
    });

    //validacion de clave
    $("#password").on("input", function(){
        const password = $(this).val();
        const length = password.length();

        //hint con contador
        if(password){
            $("#passwordHint-small").html(`<i class="fas fa-info-circle"></i>
            Caracteres: ${length}/20 ${(length>=6 && length<20)?"ok":"X"}`
            );

            if(length < 6){
                $("#passwordHint-small").css("color", "#dc3545");
                mostrarError("password", "Minimo 6 caracteres");
            }
            else if(length > 20){
                $("#passwordHint-small").css("color", "#dc3545");
                mostrarError("password", "maximo 20 caracteres");
            }
            else{
                $("#passwordHint-small").css("color", "#28a745");
                limpiaError("password");
            }
        }
        else{
            $("#passwordHint-small").html(`<i class="fas fa-info-circle"></i> Debe tener entre 6 y 20 caracteres`).css("color", "#6c757d")
            limpiaError("password")
        }
    })
})