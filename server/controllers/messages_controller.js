let messages = []
let id = 0;

module.exports = {
  
  read: (req, res) => {
    res.send(messages)
  },

  create: (req, res) => {
    let { text, time } = req.body
    messages.push({ id, text, time })
    id++
    res.send(messages)
  },

  update: (req, res) => {
    let { id } = req.params
    let message = req.body
    let index = messages.findIndex(message => +message.id === +id)
    messages.splice(index, 1, message)
    res.send(messages)
  },

  delete: (req, res) => {
    let { id } = req.params
    let index = messages.findIndex(message => +message.id === +id)
    messages.splice(index, 1)
    res.send(messages)
  }
}
