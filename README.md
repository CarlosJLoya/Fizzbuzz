# Compras
Este Sitio Web se llevan acabo las Requisiciones y Compras desarrollado en VB.net con framework 4.5


## COMO CONTRIBUIR

SIEMPRE APEGARSE A ESTE GUÍA DE CONTRIBUCIÓN

1. Descargar las ultimas versiones de las librerias y compilarlas

* [LibreriaBDAbitat](http://debianmq.abitat.com.mx/herramientas/LibreriaBDAbitat)
* [LibreriaGeneral](http://debianmq.abitat.com.mx/Librerias/libreriageneral)
* Microsoft.ReportViewer.Common.dll
* Microsoft.ReportViewer.DataVisualization.dll
* Microsoft.ReportViewer.ProcessingObjectModel.dll
* Microsoft.ReportViewer.WebForms.dll
* Microsoft.ReportViewer.WinForms.dll


2. Descargar la rama MASTER y crear una nueva rama
3. Realizar los cambios y probarlos
4. Modificar el archivo [README.md]indicando en la seccion de cambios la versión y la descripción completa de los cambios realizados, y en caso de nueva funcionalidad indicar el solicitante
5. Crear una nueva entrada en el archivo [CHANGELOG] indicando el numero de versión/subversión y la descripcion de los cambios realizados, asi como el solicitande de la nueva funcionalidad
6. Crear una etiqueta con la nueva versión y una descripcion breve de los cambios.
7. Subir la nueva rama al repositorio inlcluyento la siguiente nomenclaura
8. Realizar una peticion para el Merge
    
    (feature/fix/hotfix)/nombreRama


	## CHANGELOG
#### v3.0.2 - 22/07/2019
Feat Programacion de Estimaciones
#### v3.0.1 - 05/06/2019
Fix Catalogo Obra Grid js
#### v3.0.0 - 31/05/2019
Repositorio Inicial agregando README y CHANGELOG


## ETIQUETAS

Para crear etiquetas anotadas, mediante el VisualStudio, haga click en el menu GIT/Git bash y escriba el codigo siguiente

```
$ git tag -a vX.XX.XX -m "descripcion_corta"
$ git tag
v0.1
v1.3
v1.4
```   

Donde v.X.XX.XX es el número de versión/subversión (correspondiente al agregado en el archivo [CHANGELOG]
y descripcion_corta es una breve descripción de los cambios que ayuden a identificar la versión
    
## CONSIDERACIONES

        
**Librerias**

Para que el proyecto funcione, hay incluir referencias de las siguientes librerias:

* AjaxControlToolkit
* LibreriaBDAbitat
* AjaxMin
* General
