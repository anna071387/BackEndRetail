const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
// includes its associated Products
  router.get('/', (req, res) => {
  Tag.findAll({
    attributes: ["id", "tag_name"],
    include: [{ model: Product,
    attributes: ["id", "product_name", "price", "stock", "category_id"],
   },
  ],
  }) .then((data) => {
    res.json(data);
  })
  .catch((error) => 
  res.status(400).json(error));
  });

  // -----------------------------------------------------------------

router.get('/:id', (req, res) => {
Tag.findOne({
  where: {
    id: req.params.id,
  },
  attributes:["id", "tag_name"],
  include:[ {
    model: Product, 
    attributes: ["id", "product_name", "price", "stock", "category_id"],
  },
],
}) .then ((data) => {
  res.json(data);
}) .catch((error) => {
  res.status(400).json(error);
});
});
 
// ------------------------------------------------------------------

router.post('/', (req, res) => {
Tag.create({
  tag_name: req.body.tag_name
}).then((data) => {
  res.json(data);
}).catch((error) => {
  res.status(400).json(error);
});
});

// ------------------------------------------------------------------

router.put('/:id', (req, res) => {
Tag.update(req.body, {
  where: {
    id:req.params.id,
  },
}).then((data) => {
  res.json(data);
}).catch((error) => {
  res.status(400).json(error);
});
});

// ------------------------------------------------------------------

router.delete('/:id', (req, res) => {
Tag.destroy({
  where: {
    id: req.params.id,
  },
}).then((data) => {
  res.json(data);
}).catch((error) => {
  res.status(400).json(error);
});
});

module.exports = router;
