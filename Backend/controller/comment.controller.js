
const Comment = require("../model/Comment")
module.exports = {
    GetCommentByFeedId: async (req, res, next) => {
		try{
			const comment = await Comment.find({FeedId: req.params.id})
		
			res.status(200).json(comment)
			
			
		}catch (error) {
			res.status(500).json({msg: error.message})
		}
	},
};
