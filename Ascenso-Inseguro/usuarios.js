// Lista de usuarios
const usuarios = [
  { usuario: "angel", password: "C9548673" },
  { usuario: "Ninya", password: "A10047513" },
  { usuario: "Claux077", password: "A10044529" },
  { usuario: "zenirmrte5221", password: "D3248452" },
  { usuario: "odorupiero9716", password: "D0565211" },
  { usuario: "AriadnaMartinez-g517d", password: "A10101226" },
  { usuario: "Martin_cortes", password: "D1159565" },
  { usuario: "edelangel", password: "Aege2025" },
  { usuario: "chaires", password: "ABC123" }
];

// Función para validar usuario
function validarUsuario(user, pass) {

  const usuarioEncontrado = usuarios.find(u =>
    u.usuario === user && u.password === pass
  );

  return usuarioEncontrado ? true : false;

}
