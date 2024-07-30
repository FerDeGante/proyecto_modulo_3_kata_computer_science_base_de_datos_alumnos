// Datos de ejemplo
const alumnos = [
    { nombre: 'Junho', apellido: 'De Gante', edad: 30, grupo: 'A', calificaciones: { 'Intro a la web': 8, 'JS': 8, 'Computer Science': 7, 'JS avanzado': 10 } },
    { nombre: 'Yeon', apellido: 'Pacheco', edad: 29, grupo: 'A', calificaciones: { 'Intro a la web': 10, 'JS': 10, 'Computer Science': 10, 'JS avanzado': 10 } },
    { nombre: 'Yue', apellido: 'Sánchez', edad: 28, grupo: 'B', calificaciones: { 'Intro a la web': 8, 'JS': 8, 'Computer Science': 7, 'JS avanzado': 10 } },
    { nombre: 'Shuri', apellido: 'Sotelo', edad: 27, grupo: 'B', calificaciones: { 'Intro a la web': 8, 'JS': 8, 'Computer Science': 7, 'JS avanzado': 10 } }
];

// Datos de grupos
const grupos = {
    'A': ['Junho', 'Yeon'],
    'B': ['Yue', 'Shuri']
};

// Manejar el inicio de sesión
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = parseInt(document.getElementById('edad').value);

    const alumno = alumnos.find(a => a.nombre === nombre && a.apellido === apellido && a.edad === edad);

    if (alumno) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('dashboard-container').style.display = 'block';
        document.getElementById('nombre-alumno').textContent = nombre;
    } else {
        alert('No se encontró al alumno. Verifica los datos.');
    }
});

// Inscripción en materias
document.getElementById('inscribir-materia').addEventListener('click', function() {
    const nombre = document.getElementById('nombre-alumno').textContent;
    const materia = document.getElementById('materia-select').value;
    const alumno = alumnos.find(a => a.nombre === nombre);

    if (alumno && alumno.calificaciones[materia] !== undefined) {
        alert(`Te has inscrito en ${materia}`);
        console.log(`Materia: ${materia}`);
        console.log(`Calificación: ${alumno.calificaciones[materia]}`);
        console.log(`Grupo: ${alumno.grupo}`);
        console.log(`Compañeros de grupo: ${grupos[alumno.grupo].filter(a => a !== nombre).join(', ')}`);
    } else {
        alert('Materia no encontrada o error al inscribir.');
    }
});

// Búsqueda de alumno
document.getElementById('search-student').addEventListener('click', function() {
    const searchName = document.getElementById('search-name').value;
    const searchApellidos = document.getElementById('search-apellidos').value;

    const alumno = alumnos.find(a => a.nombre === searchName && a.apellido === searchApellidos);

    if (alumno) {
        console.log(`Nombre: ${alumno.nombre}`);
        console.log(`Apellidos: ${alumno.apellido}`);
        console.log(`Edad: ${alumno.edad}`);
        console.log(`Grupo: ${alumno.grupo}`);
        console.log('Materias y Calificaciones:');
        Object.entries(alumno.calificaciones).forEach(([materia, calificacion]) => {
            console.log(`${materia}: ${calificacion}`);
        });
    } else {
        alert('Alumno no encontrado.');
    }
});
