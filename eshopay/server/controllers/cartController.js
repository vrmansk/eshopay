const findAll = async (req, res) => {
  try {
    const result = await req.context.models.carts.findAll();
    return res.send(result);
  } catch (error) {
    return res.status(404).send("no data found");
  }
};

const findOne = async (req, res) => {
  try {
    const result = await req.context.models.carts.findOne({
      where: { cart_id: req.params.id },
    });
    return res.send(result);
  } catch (error) {
    return res.status(404).send("no data found");
  }
};

const create = async (req, res) => {
  try {
    const result = await req.context.models.category.create({
      cart_createdon: new Date(),
      cart_status: req.body.cart_status,
      cart_user_id: req.body.cart_user_id,
    });
    return res.send(result);
  } catch (error) {
    return res.status(404).send("no data input");
  }
};

const update = async (req, res) => {
  try {
    const result = await req.context.models.carts.update(
      {
        cart_createdon: new Date(),
        cart_status: req.body.cart_status,
        cart_user_id: req.body.cart_user_id,
      },
      {
        returning: true,
        where: { cart_id: req.params.id },
      }
    );
    return res.send(result);
  } catch (error) {
    return res.status(404).send("no data update");
  }
};

const deleteRow = async (req, res) => {
  try {
    const result = await req.context.models.carts.destroy({
      where: { cart_id: req.params.id },
    });
    return res.send("delete" + result + "rows");
  } catch (error) {
    return res.status(404).send("no data found");
  }
};

export default {
  findAll,
  findOne,
  create,
  update,
  deleteRow,
};
