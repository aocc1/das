# sudo docker run -v "${pwd}"/app:/nodeapp --name node-docker -d -p 8000:8000 vicentevicedo/das

FROM node:12.18.1
 
WORKDIR /app
 
COPY app/package.json package.json
COPY app/package-lock.json package-lock.json
 
RUN npm install
RUN npm install -g nodemon
#RUN mkdir /nodeapp
#COPY . .#esto para cuando haya que crear la imagen con el código dentro
#CMD [ "npm", "install" ]
CMD [ "nodemon", "server.js" ]
