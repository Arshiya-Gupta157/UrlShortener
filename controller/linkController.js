const Link = require("../model/linkSchema");
const shortid = require('shortid');

async function handleGetId(req, res) {
    const {id} = req.params;
    if (!id) return res.status(400).send("Give Short ID!!");

    const link = await Link.findOne({shortId: id})
    if (!link) return res.status(400).send("error");

    // link.visitHistory.push(new Date());
    // await link.save();

    await Link.updateOne(
        {shortId: id},
        { $push: { visitHistory: new Date() } }
    );

    return res.status(200).redirect(link.ori_link)
}

async function createShortLink(req, res) {
    const { url } = req.body;
    if (!url) return res.status(400).send("Send Url!!");

    const short_link = shortid.generate();
    const link = new Link({
        "shortId": short_link,
        "ori_link": url,
        "visitHistory":[],
        "createdBy" : req.user._id
    })

    // Or
    // await Link.create({
    //     shortId: short_link,
    //     ori_link: url,
    //     visitHistory: []
    // });

    await link.save();
    return res.render('home', {"im": short_link});
    // return res.status(200).json({ "short_link": short_link });
}

async function analytics(req, res) {
    const {id} = req.params;
    const link = await Link.findOne({ shortId: id });
    if (!link) return res.status(400).send("error");
    return res.status(200).json({ "visited": link.visitHistory, "click": link.visitHistory.length });
}

module.exports = {
    handleGetId,
    createShortLink,
    analytics
}