const modal = document.getElementById("avatar-modal");
const btn = document.getElementById("select-avatar");
const span = document.getElementsByClassName("close")[0];
const profileAvatar = document.getElementById("profile-avatar");

// Carrega o avatar armazenado, se existir
window.onload = function() {
    const savedAvatar = localStorage.getItem("selectedAvatar");
    if (savedAvatar) {
        profileAvatar.src = savedAvatar;
    }
};

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

function selectAvatar(avatar) {
    console.log("Avatar selecionado:", avatar);
    profileAvatar.src = avatar; // Atualiza a imagem do perfil
    localStorage.setItem("selectedAvatar", avatar); // Salva o avatar no localStorage
    modal.style.display = "none"; // Fecha a modal
}






