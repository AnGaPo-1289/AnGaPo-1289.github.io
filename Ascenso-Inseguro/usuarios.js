const usuarios = [
  { usuario: "angel", password: "C9548673" },
   { usuario: "Ninya", password: "A10047513" },
  { usuario: "chaires", password: "ABC123" }
];

// Función para validar usuario
function validarUsuario(user, pass) {
  return usuarios.find(u => u.usuario === user && u.password === pass);
}
