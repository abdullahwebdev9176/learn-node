const HomeSlider = require('../models/Home-slider-model');


exports.index = async (req, res) => {
    const sliders = await HomeSlider.find();
    res.render('home-slider/index', { sliders });
};

exports.createPage = (req, res) => {
    res.render('home-slider/create');
};

exports.store = async (req, res) => {
    try {
        console.log('Req body:', req.body);
        console.log('Req file:', JSON.stringify(req.file, null, 2));

        const data = {
            title: req.body.title,
            link: req.body.link,
            image: req.file ? req.file.path : null
        };

        const slider = await HomeSlider.create(data);
        console.log('Created Slider:', slider);

        res.send('Slider Created'); // for testing
    } catch (err) {
        console.error('Store Error:', err);
        res.status(500).send('Internal Server Error');
    }
};




exports.editPage = async (req, res) => {
    const slider = await HomeSlider.findById(req.params.id);
    res.render('home-slider/edit', { slider });
};


exports.update = async (req, res) => {
    await HomeSlider.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/admin/home-slider');
};

exports.delete = async (req, res) => {
    await HomeSlider.findByIdAndDelete(req.params.id);
    res.redirect('/admin/home-slider');
};
