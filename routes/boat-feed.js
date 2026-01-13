const express = require('express');
const router = express.Router();
const axios = require('axios');
const xml2js = require('xml2js');
const Boat = require('../models/Boat-model');

router.get('/boats-feed', async (req, res) => {
    try {
        console.log("Fetching XML feed...");

        // 1️⃣ Get XML from URL
        const response = await axios.get(
            'https://callersiq.com/cali_marine_huntington_beach_xml_feed'
        );

        const xmlData = response.data;

        // 2️⃣ Convert XML to JSON using async parser
        const parser = new xml2js.Parser({ explicitArray: false });
        const result = await parser.parseStringPromise(xmlData);

        // 3️⃣ Access boats list safely
        const boats = result?.inventory?.item || [];
        console.log(`Total boats from feed: ${boats.length}`);

        let saved = 0;
        let updated = 0;

        // 4️⃣ Loop through boats
        for (let boat of boats) {
            const feedId = boat.id || boat.StockNumber || boat.stocknumber;

            console.log(boat);

                if (!feedId) {
                    console.log("Skipping boat with missing feedId:", boat);
                    continue; // skip invalid entries
                }

                const allImages = Object.values(boat.inventory_images || {});
                const firstImage = allImages[0] || "";
                const boatTitle = `${boat.year || ""} ${boat.make || ""} ${boat.model || ""}`.trim();

            const boatData = {
                feedId,
                boatTitle: boatTitle,
                condition: boat.condition || "",
                make: boat.make || "",
                model: boat.model || "",
                year: boat.year || "",
                length: boat.length || "",
                description: boat.description || "",
                price: boat.price || "",
                msrp: boat.msrp || "",
                class: boat.class || "",
                location: boat.location || "",
                enginehours: boat.enginehours || "",
                hull_Id: boat.hullid || "",
                fuel_type: boat.fuel_type || "",
                engineModel: boat.enginemodel || "",
                beam: boat.beam || "",
                productImage: firstImage,
                boat_gallery: allImages
            };

            // 5️⃣ Upsert: update if exists, insert if not
            const result = await Boat.updateOne(
                { feedId },
                boatData,
                { upsert: true }
            );

            if (result.upsertedCount > 0) saved++;
            if (result.modifiedCount > 0) updated++;
        }

        // 6️⃣ Send JSON response
        res.json({
            totalFromFeed: boats.length,
            saved,
            updated
        });

        console.log(`Feed processing completed. Saved: ${saved}, Updated: ${updated}`);

    } catch (error) {
        console.error("Feed Error:", error.message);
        res.status(500).send("Failed to fetch or process feed");
    }
});

module.exports = router;
