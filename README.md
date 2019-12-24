npm i -g pm2<br/>
git clone <repo> <br/>

cd client<br/>
npm i<br/>
pm2 start node_modules/react-scripts/scripts/start.js --name "CLIENT"<br/>

cd ../server<br/>
npm i<br/>
pm2 start ./ecosystem.config.js<br/>

# check status

pm2 status
