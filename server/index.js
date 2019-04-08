const express = require('express');
const messages_controller = require('./controllers/messages_controller')

const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'))

app.get('/api/messages', messages_controller.read);
app.post('/api/messages', messages_controller.create)
app.put('/api/messages/:id', messages_controller.update)
app.delete('/api/messages/:id', messages_controller.delete)


const port = 3001;
app.listen(port, () => {
  console.log(`It's over Anakin! I have the ${port} port`)
});