// ======================
// PUERTO
// ======================
process.env.PORT = process.env.PORT || 3000

// ======================
// ENTORNO
// ======================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

// ======================
// Base de DATOS
// ======================
process.env.URLDB = (process.env.NODE_ENV === 'dev') ? 'mongodb://localhost/cafe' : 'mongodb://cafe-user:abc1234@ds149742.mlab.com:49742/cafe'
// process.env.URLDB = 'mongodb://cafe-user:abc1234@ds149742.mlab.com:49742/cafe'
