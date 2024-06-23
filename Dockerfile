#Usa la imagen oficial de Node.js version 14
FROM node:14              
# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app        
# Copia el archivo app.js al directorio de trabajo
COPY app.js .               
# Comando para ejecutar la aplicacion
CMD ["node", "app.js"]     
