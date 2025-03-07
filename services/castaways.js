const Castaway = require("../models/castaway");

exports.getById = async (req, res, next) => {
    const id = req.params.id;

    try {
        let castaway = await Castaway.findById(id);

        if (castaway) {
            return res.status(200).json(castaway);
        }

    } catch (error) {
        return res.status(501).json(error);
    }
}

exports.add = async (req, res, next) => {
   
    const temp = ({
        catwayNumber: req.body.catwayNumber,
        catwayType: req.body.catwayType,
        catwayState: req.body.catwayState
    });

    try {
            let castaway = await Castaway.create(temp);
            return res.status(200).json(castaway);
    } catch (error) {
        return res.status(501).json(error);
    }
}

exports.update = async (req, res, next) => {
    const id = req.params.id;
    const temp = ({
        catwayNumber: req.body.catwayNumber,
        catwayType: req.body.catwayType,
        catwayState: req.body.catwayState
    });

    try {
        let castaway = await Castaway.findOne({_id : id});

        if (castaway) {
            Object.keys(temp).forEach((key) => {
                if (!!temp[key]) {
                    castaway[key] = temp[key];
                }
            });
        }

        await castaway.save();
        return res.status(200).json(castaway);
    } catch (error) {
        return res.status(501).json(error);
    }
}

exports.delete = async (req, res, next) => {
    const id = req.params.id;

    try {
        await Castaway.deleteOne({_id : id});


        return res.status(204).json("delete_ok");
    } catch (error) {
        return res.status(501).json(error);
    }
}