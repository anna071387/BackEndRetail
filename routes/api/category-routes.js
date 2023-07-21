const router = require('express').Router();
const { Category, Product, ProductTag } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }

  // be sure to include its associated Products

});
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include:  [{ model: Product }]
    });
  
  // be sure to include its associated Products

if (!categoryData) {
  res.status(404).json({ message: 'No category found with this id!' });
  return;
}
res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});



// ---------------------------------------------------------------------------


router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    // is_something: true
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
  });
  

// ---------------------------------------------------------------------------

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  .then((response) => {
res.json(response)
// return Category.findByPk(req.params.id, {
//   include:  [{ model: Product }]
})
  .catch((err) => {
  res.json(err)
  });
});
 
    // find the category
    // update the field of the category _name




// ---------------------------------------------------------------------------

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  router.delete('/:id', async (req, res) => {
    try {
      const categoryDataData = await Category.destroy({
        where: {
          id: req.params.id
        }
      });
  
      if (!categoryData) {
        res.status(404).json({ message: 'No location found with this id!' });
        return;
      }
  
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
});

module.exports = router;
