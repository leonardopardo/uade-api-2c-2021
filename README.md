# UADE - Aplicaciones Intercativas
TRABAJO PRACTICO OBLIGATORIO


__APLICACION WEB CONTROLES PEDIATRICOS__
A continuación, se detallan los requerimientos mínimos que deben cumplir la aplicación web que permitirá gestionar controles pediátricos que deben desarrollarse para aprobar la cursada de la materia Aplicaciones Interactivas – Segundo Cuatrimestre 2021.

## REQUERIMIENTOS GENERALES

- Cada grupo estará integrado por dos alumnos como máximo.
- Cada grupo diseña y desarrolla una aplicación web.
- El target de las aplicaciones es padres de niños que requieren registrar controles pediátricos en formato digital.
- La aplicación debe ser responsive.
- El 40% de la nota se obtiene por el cumplimiento de las funcionalidades y la utilización de buenas prácticas que permiten la reutilización y optimizan la performance del sistema.
- El 40% de la nota se obtiene de la usabilidad y experiencia de usuario de la aplicación desarrollada.
- El 20% restante se obtiene de la documentación correspondiente.
- La aplicación deberá desarrollarse utilizando los siguientes lenguajes y librerías obligatorias: HTML/CSS, React, JavaScript y NodeJS
- La base de datos ha utilizar es opción del grupo pudiendo escogerse entre SQL (MySql, SqlServer, Postgress) y NO SQL (MongoDB)

## __REQUERIMIENTOS ESPECIFICOS__

__SITIO INSTITUCIONAL__  

La aplicación debe incluir un sitio institucional en donde se promocione las funcionalidades del sistema y se publiquen artículos informativos.
Debe incluir como mínimo:
- Descripción de la aplicación: Explicación de las funcionalidades disponibles para los usuarios
- Registro de nuevos usuarios
- Ingreso a la aplicación
- Artículos de información general
    - Calendario de vacunación
    - Información sobre controles médicos
    - Percentiles y parámetros generales de control

__Links donde obtener información:__

- [https://www.stamboulian.com.ar/pacientes/calendario-nacional-de-vacunacion/](https://www.stamboulian.com.ar/pacientes/calendario-nacional-de-vacunacion/)
- [https://www.clinicapueyrredon.com/control-pediatrico-del-nino-sano/](https://www.clinicapueyrredon.com/control-pediatrico-del-nino-sano/)
- [https://www.mayoclinic.org/es-es/healthy-lifestyle/infant-and-toddler-health/in-depth/healthy-baby/art-20044767](https://www.mayoclinic.org/es-es/healthy-lifestyle/infant-and-toddler-health/in-depth/healthy-baby/art-20044767)
- [http://www.materna.com.ar/](http://www.materna.com.ar/)

### __REGISTRO NUEVOS USUARIOS__
Los usuarios podrán registrarse para utilizar la aplicación, para ello deberán completar un formulario con la siguiente información: nombre y apellido, DNI, mail, número de teléfono.
No se permitirá registrar usuarios con el mismo DNI.

### __INGRESO USUARIOS__
Los usuarios podrán ingresar a la aplicación con su mail y contraseña. Tendrán la posibilidad de solicitar una nueva en caso de olvidarla mediante la opción OLVIDE CONTRASEÑA. Se recomienda utilizar algún criterio de validación para el reseteo de la misma.

### __PERFIL USUARIOS REGISTRADOS__
Los usuarios registrados podrán gestionar los controles de sus niños desde su perfil. El perfil debe registrar la siguiente información como mínimo: nombre y apellido, DNI, mail, teléfono celular, información de los niños a controlar (nombre, fecha de nacimiento, grupo sanguíneo, alergias, enfermedades crónicas (celiaquía, intolerancia lactosa, diabetes, etc.))

### __REGISTRO DE CONTROL PEDIATRICO__
Los usuarios podrán registrar un nuevo control pediátrico a cada niño de su perfil. Un control pediátrico registra para un niño: fecha, peso, altura, diámetro cabeza (se mide hasta el año), observaciones, medicamentos recetados (medicamento, dosis, periodo), estudios médicos a realizar y sus resultados.

### __REGISTRO DE VACUNAS__
Los usuarios podrán registrar cada una de las vacunas aplicadas a los niños. Para ello el sistema debe contar con una replica del calendario de vacunación y permitir al usuario completar el mismo ingresando en la vacuna correspondiente la fecha y lugar de aplicación.

### __CONSULTA DE PERCENTILES__
Los usuarios podrán comparar los controles de sus hijos con los percentiles de Curva de Crecimiento ofrecidos por la OMS.
Para ello el usuario podrá visualizar todos los controles del niño en una tabla (Edad, peso, talla o altura, circunferencia cefálica (CC)) y el grafico correspondiente.
[http://www.materna.com.ar/tabla-de-percentiles](http://www.materna.com.ar/tabla-de-percentiles)

___
__Materia:__ Aplicaciones Interactivas  
__Curso:__ 378888  
__Clase:__ 5738 

__Equipo Docente__  
Ginabreda, Santiago Jorge  
Malio, Tomas Horacio  
Sarasa, Maria Paula  

__Integrantes:__  
Anderson, Manuel  
Pardo, Leonardo
