const Feed = require("../model/Feed");
module.exports = {
  GetFeed: async (req, res, next) => {
    try {
      return res.status(200).json(await Feed.find());
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  Search: async (req, res, next) => {
    try {
      const { keyword } = req.params;
      let data = await Feed.find();
      let find = data.filter((p) => p.Headline.includes(keyword));
      
      return res.status(200).json(find);
    } catch (error) {
      return  res.status(500).json(error);
    }
  },
  Category: async (req, res, next) => {
    try {
      const { keyword } = req.params;
      let data = await Feed.find();
      if(keyword === 'Category'){
        return res.status(200).json(data);
      }
      let find = data.filter((p) => p.type === keyword);
      
      return res.status(200).json(find);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  GetFeedById: async (req, res, next) => {
    try {
      const { id } = req.params;
      return res.status(200).json(
        await Feed.findById(id).catch((err) => {
          if (err) res.status(400).json("Bad Request");
        })
      );
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  AddFeed: async (req, res, next) => {
    try {
      const { Headline, description, DateTime, type,Content} = req.body;
      const data = {
        Headline: Headline,
        content: Content,
        description: description,
        imageUrl: req.file.originalname,
        DateTime: req.body.DateTime,
        type: type,
        status: 'ใหม่',
      };
      let feed = new Feed(data);
      await feed.save(async (err, data) => {
        if (err) return res.status(400).json("Bad Request");
        return  res.status(200).json(data);
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
  UpdateFeed: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { Headline, description,type,Content} = req.body;
      const data = {
        Headline: Headline,
        content: Content,
        description: description,
        imageUrl: req.file.originalname,
        DateTime: req.body.DateTime,
        type: type,
        status: 'ใหม่',
      };
      let update = await Feed.findByIdAndUpdate(id, data, { new: true });
      return res.status(200).json(update);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
  DeleteFeed: async (req, res, next) => {
    try {
      const { id } = req.params;
	  await Feed.findByIdAndDelete(id);
    return res.status(200).json(await Feed.find());
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },

};
