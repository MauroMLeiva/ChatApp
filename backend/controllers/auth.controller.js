import bcrypt from 'bcryptjs';

import User from '../models/user.model.js';
import generateTokenAndSetCookie from '../helpers/generateToken.js';

export const signup = async (req, res) => {
    try {
        const { firstName, lastName, username, password, confirmPassword } =
            req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: 'Passwords do not match' });
        }

        // Check if user already exists with that username
        const user = await User.findOne({ username });

        if (user) {
            return res.status(400).json({
                error: 'Username already exists. Please choose a different username',
            });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Assign default profile picture (initials)
        const profilePic = `https://avatar.iran.liara.run/username?username=${firstName}+${lastName}`;

        // Create user
        const newUser = new User({
            firstName,
            lastName,
            username,
            password: hashedPassword,
            profilePic,
        });

        if (newUser) {
            // Generate JWT Token
            generateTokenAndSetCookie(newUser._id, res);

            // Save user to DB
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                username: newUser.username,
                profilePic: newUser.profilePic,
            });
        } else {
            res.status(400).json({ error: 'Invalid user data' });
        }
    } catch (error) {
        console.log('Error in signup controller', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find user in DB and check password
        const user = await User.findOne({ username });
        const isPasswordCorrect = await bcrypt.compare(
            password,
            user?.password || ''
        );

        if (!user || !isPasswordCorrect) {
            return res
                .status(400)
                .json({ error: 'Invalid username or password' });
        }

        //Generate JWT and set in cookie
        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            profilePic: user.profilePic,
        });
    } catch (error) {
        console.log('Error in login controller', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const logout = (req, res) => {
    try {
        res.cookie('jwt', '', { maxAge: 0 });
        res.status(200).json({ message: 'Logged out succesfully' });
    } catch (error) {
        console.log('Error in logout controller', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
