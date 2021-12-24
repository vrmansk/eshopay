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
      lite_prod_id: req.body.lite_prod_id,
      lite_cart_id: req.body.lite_cart_user_id,
      lite_qty: req.body.lite_qty,
      lite_price: req.body.lite_price,
      lite_total_price: lite_qty * lite_price,
      lite_status: req.body.lite_status,
      lite_order_name: req.body.lite_order_name,
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
        lite_prod_id: req.body.lite_prod_id,
        lite_cart_id: req.body.lite_cart_user_id,
        lite_qty: req.body.lite_qty,
        lite_price: req.body.lite_price,
        lite_total_price: lite_qty * lite_price,
        lite_status: req.body.lite_status,
        lite_order_name: req.body.lite_order_name,
      },
      {
        returning: true,
        where: { lite_prod_id: req.params.id },
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
      where: { lite_prod_id: req.params.id },
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
