import User from '../models/user.model.js';

export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;

        let user = await User.findById(loggedInUserId);

        if (!user) {
            return res.status(400).json({
                error: 'User does not exist',
            });
        }

        const users = user.contacts;

        res.status(200).json(users);
    } catch (error) {
        console.log('Error in getUsersForSidebar: ', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const getRequests = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;

        let user = await User.findById(loggedInUserId);

        if (!user) {
            return res.status(400).json({
                error: 'User does not exist',
            });
        }

        res.status(200).json(user.requests);
    } catch (error) {
        console.log('Error in getRequests: ', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const sendContactRequest = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const { username } = req.params;

        let sender = await User.findById(loggedInUserId);
        let receiver = await User.findOne({ username });

        if (!sender) {
            return res.status(400).json({
                error: 'User does not exist',
            });
        }

        if (!receiver) {
            return res.status(400).json({
                error: 'User does not exist',
            });
        }

        const requestId = receiver._id;

        if (loggedInUserId === requestId) {
            return res.status(400).json({
                error: 'Cannot send a request to yourself!',
            });
        }

        if (
            receiver.contacts.includes(loggedInUserId) ||
            sender.contacts.includes(requestId)
        ) {
            return res.status(400).json({
                error: 'User is already in your contacts',
            });
        }

        if (receiver.requests.includes(loggedInUserId)) {
            return res.status(400).json({
                error: 'Request already sent',
            });
        }

        if (sender.requests.includes(requestId)) {
            return res.status(400).json({
                error: 'Pending request from that user',
            });
        }

        receiver.requests.push(loggedInUserId);
        await receiver.save();
        res.status(201).json(loggedInUserId);
    } catch (error) {
        console.log('Error in sendContactRequest: ', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const acceptRequest = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const { id: requestId } = req.params;

        let user = await User.findById(loggedInUserId);
        let sender = await User.findById(requestId);

        if (!user) {
            return res.status(400).json({
                error: 'User does not exist',
            });
        }

        if (!sender) {
            return res.status(400).json({
                error: 'User does not exist',
            });
        }

        if (!user.requests.includes(requestId)) {
            return res.status(400).json({
                error: 'Request does not exist',
            });
        }

        if (
            sender.contacts.includes(loggedInUserId) ||
            user.contacts.includes(requestId)
        ) {
            return res.status(400).json({
                error: 'User is already in your contacts',
            });
        }

        await user.requests.pull(requestId);

        user.contacts.push(requestId);
        sender.contacts.push(loggedInUserId);
        await Promise.all([user.save(), sender.save()]);
        res.status(201).json(user.contacts);
    } catch (error) {
        console.log('Error in acceptRequest: ', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const rejectRequest = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const { id: requestId } = req.params;

        let user = await User.findById(loggedInUserId);
        let sender = await User.findById(requestId);

        if (!user) {
            return res.status(400).json({
                error: 'User does not exist',
            });
        }

        if (!sender) {
            return res.status(400).json({
                error: 'User does not exist',
            });
        }

        if (!user.requests.includes(requestId)) {
            return res.status(400).json({
                error: 'Request does not exist',
            });
        }

        await user.requests.pull(requestId);
        await user.save();
        res.status(201).json(user.contacts);
    } catch (error) {
        console.log('Error in rejectRequest: ', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};
