const findAll = async (req, res) => {
  try {
    const result = await req.context.models.products.findAll();
    return res.send(result);
  } catch (error) {
    return res.status(404).send("no data found");
  }
};

const findOne = async (req, res) => {
  try {
    const result = await req.context.models.products.findOne({
      where: { prim_id: req.params.id },
    });
    return res.send(result);
  } catch (error) {
    return res.status(404).send("no data found");
  }
};

const create = async (req, res, next) => {
  const {
    files: { file },
    fields,
  } = req.fileAttrb;
  try {
    const result = await req.context.models.products.create({
      prod_name: fields[0].value,
      prod_price: fields[1].value,
      prod_desc: fields[2].value,
      prod_url_image: fields[3].value,
      prod_rating: fields[4].value,
      prod_view_count: fields[5].value,
      prod_user_id: parseInt(fields[6].value),
      prod_cate_id: parseInt(fields[7].value),
    });
    req.prod = result.dataValues.prod_id;
    next();

    //return res.send(result);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const deleteRow = async (req, res) => {
  try {
    const result = await req.context.models.category.destroy({
      where: { cate_id: req.params.id },
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
  deleteRow,
};
