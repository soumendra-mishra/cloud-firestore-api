'use strict';

const { Firestore } = require("@google-cloud/firestore");
const firestore = new Firestore();

async function getFireStoreDocument(docPath) {
    const document = firestore.doc(docPath);
    let doc = await document.get();
    return doc;
}

exports.index = async function (req, res) {
    const collection = req.params.collection;
    const database = req.params.database;
    const db = req.params.db;
    const docPath = collection + "/" + database + "/dbname/" + db;

    try {
        const doc = await getFireStoreDocument(docPath);
        const docData = JSON.stringify(doc.data(), null, 4);
        res.status(200).send(docData);
    }
    catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
};