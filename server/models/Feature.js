const { Schema, model } = mongoose;

const featureSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    dist: {
        type: Number,
        required: false,
    },
    rate: {
        type: Number,
        required: false,
    },
    wikidata: {
        type: String,
    }
});

const Feature = model("Feature", featureSchema);

module.exports = Feature;
