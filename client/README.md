git clone <repo>

cd client
npm i
pm2 start node_modules/react-scripts/scripts/start.js --name "CLIENT"

cd ../server
npm i
pm2 start ./ecosystem.config.js

# check status

pm2 status
