import Banner from "../models/banner.js";

export const createBanner = async (req, res) => {
    try {
        const { serialNo, bannerName, bannerDescription, bannerImage, validFrom, validTo, status } = req.body;
        if(!serialNo || !bannerName || !bannerDescription || !bannerImage || !validFrom || !validTo || !status) {
            return res.status(400).json({ success: false, message: 'All fields are required!' });
        }
        await Banner.create({serialNo, bannerName, bannerDescription, bannerImage, validFrom, validTo, status})
        res.status(201).json({
            message: 'Banner created successfully'
        });
    } catch (error) {
        res.status(500).json({ error: 'Error saving the banner', details: error.message });
    }
};

export const getAllBanners = async (req, res) => {
    try {
        const banners = await Banner.find();
        res.json(banners);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const getBannerById = async (req, res) => {
    try {
        const bannerId = req.params.id;
        const banner = await Banner.findById(bannerId);
        if (!banner) {
            return res.status(404).json({ message: 'Banner id not found' });
        }
        res.json(banner);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateBanner = async (req, res) => {
    try {
        const { serialNo,bannerName, bannerDescription, bannerImage, validFrom, validTo, status } = req.body;
        const bannerId = req.params.id; 

        const existingbanner = await Banner.findById(bannerId);
        if (!existingBanner) {
            return res.status(404).json({ message: 'Banner not found' });
        }

        const updateData = {
            serialNo, bannerName, bannerDescription, bannerImage, validFrom, validTo, status
        };

        const updatedBanner = await Banner.findByIdAndUpdate(
            bannerId,
            updateData,
            { new: true } 
        );

        res.json({
            message: 'banner updated successfully',
            banner: updatedBanner
        });
    } catch (error) {
        res.status(500).json({ error: 'Error updating the branch', details: error.message });
    }
};

export const deleteBanner = async (req, res) => {
    try {
        const bannerId = req.params.id; 
        const deletedBanner = await Banner.findByIdAndDelete(bannerId); 
        if (!deletedBanner) {
            return res.status(404).json({ message: 'Banner not found' });
        }
        res.json({ message: 'Banner deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};