const Feed = require("../model/Feed");
module.exports = {
  GetFeed: async (req, res, next) => {
    try {
      res.status(200).json(await Feed.find());
    } catch (error) {
      res.status(500).json(error);
    }
  },
  Search: async (req, res, next) => {
    try {
      const { keyword } = req.params;
      let data = await Feed.find();
      let find = data.filter((p) => p.Title.includes(keyword));
      res.status(200).json(find);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  GetFeedById: async (req, res, next) => {
    try {
      const { id } = req.params;
      res.status(200).json(
        await Feed.findById(id).catch((err) => {
          if (err) res.status(400).json("Bad Request");
        })
      );
    } catch (error) {
      res.status(500).json(error);
    }
  },
  AddFeed: async (req, res, next) => {
    try {
      const { Headline, description, DateTime, type} = req.body;
      const data = {
        Headline: Headline,
        description: description,
        imageUrl: req.file.originalname,
        DateTime: DateTime,
        type: type,
        status: 'ปกติ',
      };
      let feed = new Feed(data);
      await feed.save(async (err, data) => {
        if (err) res.status(400).json("Bad Request");
        res.status(200).json(data);
      });
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
  UpdateFeed: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { Title, Headline, description, DateTime, type} = req.body;
      const data = {
        Title: Title,
        Headline: Headline,
        description: description,
        imageUrl: req.file.originalname,
        DateTime: DateTime,
        type: type,
        status: "อัพเดท",
      };

      let update = await Feed.findByIdAndUpdate(id, data, { new: true });

      res.status(200).json(update);
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
  DeleteFeed: async (req, res, next) => {
    try {
      const { id } = req.params;
	  await Feed.findByIdAndDelete(id);
	  res.status(200).json(await Feed.find());
    } catch (error) {
      res.status(500).json(error.message);
    }
  },

};
