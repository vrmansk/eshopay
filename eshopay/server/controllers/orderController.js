const findAll = async (req, res) => {
  try {
    const result = await req.context.models.orders.findAll();
    return res.send(result);
  } catch (error) {
    return res.status(404).send("no data found");
  }
};

const findOne = async (req, res) => {
  try {
    const result = await req.context.models.orders.findOne({
      where: { order_name: req.params.name },
    });
    return res.send(result);
  } catch (error) {
    return res.status(404).send("no data found");
  }
};

const create = async (req, res) => {
  try {
    const result = await req.context.models.orders.create({
      order_name: req.body.order_name,
      order_createdon: new Date(),
      order_total_qty: req.body.order_total_qty,
      order_subtotal: req.body.order_subtotal,
      order_discount: req.body.order_discount,
      order_tax: req.body.order_tax,
      order_total_due: req.body.order_total_due,
      order_address: req.body.order_address,
      order_phone: req.body.order_phone,
      order_city: req.body.order_city,
      order_status: req.body.order_status,
      order_user_id: req.body.order_user_id,
    });
    return res.send(result);
  } catch (error) {
    return res.status(404).send("no data input");
  }
};

const update = async (req, res) => {
  try {
    const result = await req.context.models.orders.update(
      {
        order_name: req.body.order_name,
        order_createdon: new Date(),
        order_total_qty: req.body.order_total_qty,
        order_subtotal: req.body.order_subtotal,
        order_discount: req.body.order_discount,
        order_tax: req.body.order_tax,
        order_total_due: req.body.order_total_due,
        order_address: req.body.order_address,
        order_phone: req.body.order_phone,
        order_city: req.body.order_city,
        order_status: req.body.order_status,
        order_user_id: req.body.order_user_id,
      },
      {
        returning: true,
        where: { order_name: req.params.name },
      }
    );
    return res.send(result);
  } catch (error) {
    return res.status(404).send("no data update");
  }
};

const deleteRow = async (req, res) => {
  try {
    const result = await req.context.models.orders.destroy({
      where: { order_name: req.params.name },
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
