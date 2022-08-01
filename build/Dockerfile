FROM node:18-alpine3.15
RUN mkdir EstudiantesSD
WORKDIR /EstudiantesSD
RUN npm init -y
RUN npm i express cors morgan mysql mysql2 promise-mysql promise-mysql2
RUN mkdir /src
WORKDIR /EstudiantesSD/src
RUN mkdir controllers
RUN mkdir routes
COPY /controllers /EstudiantesSD/src/controllers
COPY /routes /EstudiantesSD/src/routes
COPY /database.js .
COPY /index.js .
COPY /keys.js .
WORKDIR /EstudiantesSD
#COPY /package.json .
#WORKDIR /EstudiantesSD/src
#RUN npm install
EXPOSE 3000
CMD node index.js