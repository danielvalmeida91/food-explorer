class ItemsController {
  create(request, response) {
    const { name, description } = request.body

    response.json({ name, description })
  }
}

module.exports = ItemsController
