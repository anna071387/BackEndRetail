const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
     //  includes its associated Product
      include: [{ model: Product ,
      attributes: ["id", "product_name", "price", "stock", "category_id"],
      }
    ]
  })
.then ((data) => {
  res.json(data);
})
.catch((error) => {
  console.log(error);
  res.status(500).json(error);
});
}); 

router.get('/:id', (req, res) => {
  // find one category by id 
Category.findOne({
  where: {id:req.params.id,
  },
  attributes: ["id", "category_name"],
  include: [
    {model: Product,
    attributes: ["id", "product_name","price", "stock", "category_id"],
  },
  ],
})
   .then((data) => {
    res.json(data);
   })
   .catch((error) => {
    res.status(400).json(err);
   });
    });

// ---------------------------------------------------------------------------

router.post('/', (req, res) => {
Category.create({category_name: req.body.category_name})
.then((data) => {
  res.json(data);
}) .catch((error) => {
  console.log(error);
  res.status(400).json(error);
});
});

// ---------------------------------------------------------------------------

router.put('/:id', async (req, res) => {
  // update a category by id
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  .then((data) => {
res.json(data);
})
  .catch((error) => {
  res.status(400).json(error)
  });
});

// ---------------------------------------------------------------------------

router.delete('/:id', (req, res) => {
 Category.destroy({
        where: {
          id: req.params.id,
        },
      }) .then((data) => {
          res.json(data);
    }) .catch ((error) => {
      res.status(400).json(error);
  });
});

module.exports = router;
