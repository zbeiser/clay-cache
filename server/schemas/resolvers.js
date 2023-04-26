const { User, Pot, Glaze, Clay } = require("../models");

//bringing in the signToken from the the function in auth
const { signToken } = require("../utils/auth");

const resolvers = {
	Query: {
		user: async (parent, { _id }, context) => {
			const user = await User.findById(_id);
			return user;
		},
		allUsers: async (parent, args, context) => {
			const users = await User.find({});
			return users;
		},
	},
	Mutation: {
		addUser: async (parent, { username, password }) => {
			console.log("addUser", username, password);
			const user = await User.create({
				username,
				password,
			});
			const token = signToken(user);
			return { token, user };
		},

		login: async (parent, { username, password }) => {
			const user = await User.findOne({ username });

			if (!user) {
				throw new GraphQLError("Incorrect credentials", {
					extensions: {
						code: "UNAUTHENTICATED",
					},
				});
			}

			const correctPw = await user.isCorrectPassword(password);

			if (!correctPw) {
				throw new GraphQLError("Incorrect credentials", {
					extensions: {
						code: "UNAUTHENTICATED",
					},
				});
			}

			const token = signToken(user);
			console.log("the token and user are ", token, user);
			return { token, user };
		},
	},
};

module.exports = resolvers;
