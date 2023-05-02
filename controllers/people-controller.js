
///////////////////////////////
// CONTROLLERS
////////////////////////////////

// PEOPLE INDEX ACTION
async function index(req,res,next) {
	try {
    // get all people
    res.json(await People.find({}));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
};

// PEOPLE CREATE ACTION
async function create(req,res,next) {
  try {
    // create new person
    res.json(await People.create(req.body));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
};

// PEOPLE SHOW ACTION
async function detail(req,res,next) {
    try {
        // send one person
        res.json(await People.findById(req.params.id));
      } catch (error) {
        //send error
        res.status(400).json(error);
      }
};


// PEOPLE DESTROY ACTION
async function destroy(req,res,next) {
  try {
    // delete people by ID
    res.json(await People.findByIdAndRemove(req.params.id));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
};


// PEOPLE UPDATE ACTION
async function update(req,res,next) {
  try {
    // update people by ID, provide the form data, and return the updated document.
    res.json(
      await People.findByIdAndUpdate(req.params.id, req.body, {new:true})
    );
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
};


// EXPORT controller actions
module.exports = {
	index,
	create,
	getOne: detail,
	delete: destroy,
	update
}
