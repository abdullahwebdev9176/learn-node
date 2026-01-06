const HomeSlider = require('../models/Home-slider-model');


exports.index = async (req, res) => {
    const sliders = await HomeSlider.find({}).lean();
    res.render('home-slider/index', { sliders });
};

exports.createPage = (req, res) => {
    res.render('home-slider/create');
};

exports.store = async (req, res) => {
    try {

        const data = {
            title: req.body.title,
            link: req.body.link,
            image: req.file ? req.file.path : null
        };

        const slider = await HomeSlider.create(data);

        res.redirect('/admin/home-slider');

    } catch (err) {
        console.error('Store Error:', err);
        res.status(500).send('Internal Server Error');
    }
};




exports.editPage = async (req, res) => {
    const slider = await HomeSlider.findById(req.params.id).lean();
    res.render('home-slider/edit', { slider });
};


exports.update = async (req, res) => {

    const data = {
        title: req.body.title,
        link: req.body.link,
        image: req.file ? req.file.path : null
    };

    await HomeSlider.findByIdAndUpdate(req.params.id, data);
    res.redirect('/admin/home-slider');
};

exports.delete = async (req, res) => {
    await HomeSlider.findByIdAndDelete(req.params.id);
    res.redirect('/admin/home-slider');
};
