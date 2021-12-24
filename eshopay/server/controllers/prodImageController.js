const findAll = async (req, res) => {
  try {
    const result = await req.context.models.product_images.findAll();
    return res.send(result);
  } catch (error) {
    return res.status(404).send("no data found");
  }
};

const findOne = async (req, res) => {
  try {
    const result = await req.context.models.product_images.findOne({
      where: { prim_id: req.params.id },
    });
    return res.send(result);
  } catch (error) {
    return res.status(404).send("no data found");
  }
};

const createFull = async (req, res) => {
  const { files, fields } = req.fileAttrb;
  const reg = req.prod;
  try {
    const nama = files[0].file.newFilename;
    const filetype = nama.split(".");
    const result = await req.context.models.product_images.create({
      prim_filename: nama,
      prim_filesize: parseInt(fields[8].value),
      prim_filetype: filetype[1],
      prim_url: fields[3].value,
      prim_primary: Boolean(Number(fields[9].value)),
      prim_prod_id: reg,
    });
    return res.send(result);
  } catch (error) {
    return res.status(404).send("no data input");
  }
};

export default {
  findAll,
  findOne,
  createFull,
};
