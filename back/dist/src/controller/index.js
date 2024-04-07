"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchAllPhrase = exports.updatePhrase = exports.dropTheme = exports.dropPhrase = exports.getAllThemes = exports.getAllPhrase = exports.addTheme = exports.addPhrase = void 0;
const models_1 = require("../db/models/models");
const sequelize_1 = require("sequelize");
const addPhrase = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { by, phrase } = req.body;
    if (!by && !phrase)
        res.status(400).json({
            error: "not found",
        });
    try {
        console.log(phrase);
        yield models_1.Phrase.create({
            by,
            phrase,
        });
        res.status(200).json({
            state: "ok",
        });
    }
    catch (error) {
        res.status(500).send("internal server error");
    }
});
exports.addPhrase = addPhrase;
const addTheme = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, url } = req.body;
    if (!name && !url)
        res.status(400).json({
            error: "not found",
        });
    try {
        yield models_1.Theme.create();
        res.status(200).json({
            state: "ok",
        });
    }
    catch (error) {
        res.status(500).send("internal server error");
    }
});
exports.addTheme = addTheme;
const getAllPhrase = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const phrase = yield models_1.Phrase.findAll();
        res.status(200).json(phrase);
    }
    catch (error) {
        res.status(500).send("internal server error");
    }
});
exports.getAllPhrase = getAllPhrase;
const getAllThemes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const theme = yield models_1.Theme.findAll();
        res.status(200).json(theme);
    }
    catch (error) {
        res.status(500).send("internal server error");
    }
});
exports.getAllThemes = getAllThemes;
const dropPhrase = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.query.id;
        if (!id) {
            return res.status(400).json({ error: "ID is required" });
        }
        const deletedCount = yield models_1.Phrase.destroy({ where: { id } });
        if (deletedCount === 0) {
            return res.status(404).json({ error: "Phrase not found" });
        }
        res.status(200).json({ message: "Phrase deleted successfully" });
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
});
exports.dropPhrase = dropPhrase;
const dropTheme = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.query.id;
        if (!id) {
            return res.status(400).json({ error: "ID is required" });
        }
        const deletedCount = yield models_1.Theme.destroy({ where: { id } });
        if (deletedCount === 0) {
            return res.status(404).json({ error: "Phrase not found" });
        }
        res.status(200).json({ message: "Phrase deleted successfully" });
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
});
exports.dropTheme = dropTheme;
const updatePhrase = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { by, phrase, id } = req.body;
    if (!by && !phrase && !id)
        res.status(400).json({
            error: "not found",
        });
    try {
        console.log(phrase);
        yield models_1.Phrase.update({
            by,
            phrase,
        }, {
            where: {
                id,
            },
        });
        res.status(200).json({
            state: "ok",
        });
    }
    catch (error) {
        res.status(500).send("internal server error");
    }
});
exports.updatePhrase = updatePhrase;
const searchAllPhrase = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const term = req.query.term;
        if (!term) {
            return res.status(400).json({ error: "Search term is required" });
        }
        const phrases = yield models_1.Phrase.findAll({
            where: {
                phrase: {
                    [sequelize_1.Op.like]: `%${term}%`,
                },
            },
        });
        res.status(200).json(phrases);
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
});
exports.searchAllPhrase = searchAllPhrase;
